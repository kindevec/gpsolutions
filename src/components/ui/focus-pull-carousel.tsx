import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

/*
 * Focus Pull Carousel — a horizontal image strip that racks focus like a
 * camera lens. The picture in the centre is sharp and full size; its
 * neighbours soften, shrink and fade by how far they sit from the middle, and
 * everything changes continuously as you scroll, swipe or drag.
 *
 * Built on native scroll snapping, so trackpads, touch momentum and the
 * keyboard all behave like the platform. Slides without an `image` get a
 * painted landscape, so it works with no assets at all.
 */

export type LandPalette = "dawn" | "alpine" | "dusk" | "mist"

export type Slide = {
  image?: string
  title?: string
  caption?: string
  alt?: string
  /** Palette and seed of the painted landscape used when `image` is empty. */
  palette?: LandPalette
  seed?: number
}

export type FocusPullCarouselProps = {
  slides?: Slide[]
  /** Any CSS length. Default 100svh. */
  height?: number | string
  /** Width of one picture, any CSS length. */
  cardWidth?: string
  /** CSS aspect-ratio of a picture. */
  aspect?: string
  /** Blur in px at one card away from the centre. 0 turns the focus pull off. */
  blur?: number
  /** ms per slide; 0 turns autoplay off. It waits while someone is interacting. */
  autoplay?: number
  /** Page colours: background and ink. Defaults follow the theme tokens. */
  background?: string
  ink?: string
  showCaption?: boolean
  showCount?: boolean
  showBar?: boolean
  onChange?: (index: number) => void
  className?: string
  style?: React.CSSProperties
  ariaLabel?: string
}

// #region logic
/** How out of focus a card is, from its offset to the centre in card widths. */
export function focusOf(d: number, blur: number) {
  return {
    scale: 1,
    blur: blur > 0 ? Math.min(Math.abs(d), 2) * blur : 0,
    opacity: 1,
    saturate: 1,
  }
}

/** Index of the centre nearest to c. */
export function nearestIndex(centers: number[], c: number): number {
  let best = 0
  for (let i = 1; i < centers.length; i++) if (Math.abs(centers[i] - c) < Math.abs(centers[best] - c)) best = i
  return best
}

export function wrap(i: number, n: number): number {
  return n ? ((i % n) + n) % n : 0
}

export function pad2(n: number): string {
  return n < 10 ? "0" + n : String(n)
}
// #endregion logic

/* ------------------------------------------------------- painted images */

const PALETTES = {
  dawn: { top: "#e7b7a5", bottom: "#f8e8d6", sun: "#fff4df", far: "#d2b2bb", near: "#3a2a3b", mist: "255,240,232" },
  alpine: { top: "#7ea5c8", bottom: "#e3ecf2", sun: "#ffffff", far: "#a9bfd0", near: "#1c3044", mist: "236,244,250" },
  dusk: { top: "#2a2450", bottom: "#ef8d60", sun: "#ffd9a6", far: "#93607c", near: "#18121f", mist: "255,196,160" },
  mist: { top: "#c4d0cb", bottom: "#eef1ec", sun: "#ffffff", far: "#aebcb5", near: "#2c3a33", mist: "246,248,245" },
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function hexRgb(h: string): [number, number, number] {
  const v = parseInt(h.replace("#", ""), 16)
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255]
}
function mixRgb(a: string, b: string, t: number): string {
  const A = hexRgb(a)
  const B = hexRgb(b)
  return "rgb(" + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",") + ")"
}

// A layered-ridge landscape: sky, a low sun, five ridges fading into haze with
// mist between them, a tree line on the nearest, film grain. Painted once.
function paintLandscape(seed: number, palette: LandPalette, w = 1600, h = 1000): string {
  if (typeof document === "undefined") return ""
  const c = document.createElement("canvas")
  c.width = w
  c.height = h
  const g = c.getContext("2d")
  if (!g) return ""
  const P = PALETTES[palette] ?? PALETTES.dawn
  const r = mulberry32(seed * 104729 + 7)

  const sky = g.createLinearGradient(0, 0, 0, h * 0.72)
  sky.addColorStop(0, P.top)
  sky.addColorStop(1, P.bottom)
  g.fillStyle = sky
  g.fillRect(0, 0, w, h)
  const sx = w * (0.22 + r() * 0.56)
  const sy = h * (0.26 + r() * 0.16)
  const halo = g.createRadialGradient(sx, sy, 0, sx, sy, w * 0.45)
  halo.addColorStop(0, "rgba(" + hexRgb(P.sun).join(",") + ",.85)")
  halo.addColorStop(0.08, "rgba(" + hexRgb(P.sun).join(",") + ",.55)")
  halo.addColorStop(1, "rgba(" + hexRgb(P.sun).join(",") + ",0)")
  g.fillStyle = halo
  g.fillRect(0, 0, w, h)
  g.fillStyle = P.sun
  g.beginPath()
  g.arc(sx, sy, h * 0.045, 0, Math.PI * 2)
  g.fill()

  const layers = 5
  for (let L = 0; L < layers; L++) {
    const k = L / (layers - 1)
    const base = h * (0.42 + k * 0.4)
    const amp = h * (0.07 + k * 0.1)
    const ph = [r(), r(), r(), r()].map((v) => v * Math.PI * 2)
    const fr = [1.3 + r(), 3.1 + r() * 2, 7 + r() * 4, 17 + r() * 8]
    const ridge = (x: number) => {
      const u = x / w
      return (
        base -
        amp *
          (0.55 * Math.sin(u * fr[0] + ph[0]) +
            0.28 * Math.sin(u * fr[1] + ph[1]) +
            0.12 * Math.abs(Math.sin(u * fr[2] + ph[2])) +
            0.05 * Math.sin(u * fr[3] + ph[3]))
      )
    }
    const mist = g.createLinearGradient(0, base - amp * 1.4, 0, base + amp * 0.4)
    mist.addColorStop(0, "rgba(" + P.mist + ",0)")
    mist.addColorStop(1, "rgba(" + P.mist + "," + (0.55 - k * 0.35).toFixed(2) + ")")
    g.fillStyle = mist
    g.fillRect(0, base - amp * 1.4, w, amp * 1.8)
    const body = g.createLinearGradient(0, base - amp, 0, h)
    body.addColorStop(0, mixRgb(P.far, P.near, Math.pow(k, 1.3)))
    body.addColorStop(1, mixRgb(P.far, P.near, Math.min(1, Math.pow(k, 1.3) + 0.18)))
    g.fillStyle = body
    g.beginPath()
    g.moveTo(0, h)
    for (let x = 0; x <= w; x += 6) g.lineTo(x, ridge(x))
    g.lineTo(w, h)
    g.closePath()
    g.fill()
    if (L >= layers - 2) {
      g.fillStyle = mixRgb(P.far, P.near, Math.min(1, Math.pow(k, 1.3) + 0.08))
      for (let x = 0; x < w; x += 7 + r() * 9) {
        if (r() < 0.35) continue
        const y = ridge(x) + 2
        const th = h * (0.025 + r() * 0.035) * (0.6 + k)
        const tw = th * 0.32
        g.beginPath()
        g.moveTo(x, y - th)
        g.lineTo(x + tw, y)
        g.lineTo(x - tw, y)
        g.closePath()
        g.fill()
      }
    }
  }

  const vig = g.createRadialGradient(w / 2, h * 0.45, h * 0.3, w / 2, h / 2, w * 0.78)
  vig.addColorStop(0, "rgba(0,0,0,0)")
  vig.addColorStop(1, "rgba(0,0,0,.32)")
  g.fillStyle = vig
  g.fillRect(0, 0, w, h)
  const grain = g.getImageData(0, 0, w, h)
  const d = grain.data
  for (let i = 0; i < d.length; i += 4) {
    const v = (r() - 0.5) * 14
    d[i] += v
    d[i + 1] += v
    d[i + 2] += v
  }
  g.putImageData(grain, 0, 0)
  return c.toDataURL("image/jpeg", 0.88)
}

const DEFAULT_SLIDES: Slide[] = [
  { title: "First Light", caption: "Haze lifting off the eastern ridges.", palette: "dawn", seed: 3 },
  { title: "High Pass", caption: "Cold air, clear to the far range.", palette: "alpine", seed: 8 },
  { title: "Ember Hour", caption: "The last of the sun on the valley floor.", palette: "dusk", seed: 14 },
  { title: "Still Valley", caption: "Morning mist that never quite lifts.", palette: "mist", seed: 21 },
  { title: "Rose Ridge", caption: "Five ridges, one long exhale.", palette: "dawn", seed: 34 },
  { title: "Blue Hour", caption: "Pines going dark against the snow.", palette: "alpine", seed: 55 },
]

// Every slide as an image URL; slides without one are painted after mount.
function useSlideImages(slides: Slide[]): string[] {
  const key = slides.map((s) => s.image || (s.palette || "dawn") + ":" + (s.seed ?? 1)).join("|")
  const [painted, setPainted] = React.useState(() => slides.map(() => ""))
  React.useEffect(() => {
    setPainted(slides.map((s, i) => (s.image ? "" : paintLandscape(s.seed ?? i + 1, s.palette || "dawn"))))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return slides.map((s, i) => s.image || painted[i] || "")
}

const FP_CSS = [
  ".fp-root{--fp-gap:24px;--fp-w:calc((100vw - 2 * var(--fp-gap)) / 3);position:relative;width:100%;display:flex;flex-direction:column;justify-content:center;gap:clamp(18px,3.5vh,36px);overflow:hidden;background:var(--fp-bg);color:var(--fp-ink);outline:none}",
  ".fp-root:focus-visible{box-shadow:inset 0 0 0 2px var(--fp-ink)}",
  ".fp-track{display:flex;align-items:center;gap:var(--fp-gap,24px);overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;padding-inline:calc(50% - var(--fp-w) / 2);scrollbar-width:none;cursor:grab;touch-action:pan-x pan-y;width:100%}",
  ".fp-track::-webkit-scrollbar{display:none}",
  ".fp-track[data-drag='1']{scroll-snap-type:none;cursor:grabbing}",
  ".fp-card{flex:0 0 var(--fp-w);width:var(--fp-w);min-width:var(--fp-w);max-width:var(--fp-w);aspect-ratio:var(--fp-aspect);max-height:calc(var(--fp-h) * .84);scroll-snap-align:center;position:relative;border:0;padding:0;margin:0;background:transparent;cursor:inherit;will-change:transform,filter;transform-origin:center;border-radius:var(--fp-radius);overflow:hidden}",
  ".fp-card img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;display:block;border-radius:inherit;pointer-events:none}",
  ".fp-meta{display:flex;justify-content:space-between;align-items:end;gap:16px;padding-inline:clamp(20px,4vw,56px)}",
  ".fp-cap{min-height:2.6em;overflow:hidden;padding-bottom:.2em}",
  ".fp-cap>*{display:block;animation:fp-in .7s cubic-bezier(.2,.8,.2,1) both}",
  ".fp-title{font:500 clamp(20px,2.6vw,30px)/1.1 ui-serif,Georgia,'Times New Roman',serif;letter-spacing:-.01em}",
  ".fp-sub{margin-top:6px;font:400 13px/1.4 ui-sans-serif,system-ui,sans-serif;color:var(--fp-muted)}",
  ".fp-count{font:500 12px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.14em;text-align:center;color:var(--fp-muted)}",
  ".fp-count b{color:var(--fp-ink);font-weight:500}",
  ".fp-nav{display:flex;justify-content:flex-end;gap:6px}",
  ".fp-btn{appearance:none;border:1px solid var(--fp-line);background:transparent;color:inherit;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;cursor:pointer;transition:background .2s ease,color .2s ease}",
  ".fp-btn:hover{background:var(--fp-ink);color:var(--fp-bg)}",
  ".fp-btn:focus-visible{outline:2px solid var(--fp-ink);outline-offset:2px}",
  ".fp-bar{height:1px;margin-inline:clamp(20px,4vw,56px);background:var(--fp-line);position:relative}",
  ".fp-bar>i{position:absolute;inset:0 auto 0 0;width:100%;background:var(--fp-ink);transform-origin:left;transform:scaleX(var(--fp-p,0))}",
  ".fp-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}",
  "@keyframes fp-in{from{transform:translateY(100%);opacity:0}to{transform:none;opacity:1}}",
  "@media (min-width:640px){.fp-card{aspect-ratio:4/3;max-height:calc(var(--fp-h) * .84)}}",
  "@media (max-width:639px){.fp-root{--fp-gap:16px;--fp-w:100%}.fp-card{aspect-ratio:16/10;max-height:300px}.fp-meta{justify-content:center!important;text-align:center!important;padding-inline:16px!important}.fp-cap{width:100%!important;text-align:center!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important}.fp-title{text-align:center!important;width:100%!important;display:block!important}.fp-sub{text-align:center!important;width:100%!important;display:block!important}.fp-count{display:none}}",
  "@media (prefers-reduced-motion:reduce){.fp-cap>*{animation:none}.fp-track{scroll-behavior:auto}}",
].join("\n")

export default function FocusPullCarousel({
  slides = DEFAULT_SLIDES,
  height = "auto",
  cardWidth,
  aspect = "16 / 10",
  blur = 0,
  autoplay = 5000,
  background = "var(--color-background, #f4f1ea)",
  ink = "var(--color-foreground, #161513)",
  showCaption = true,
  showCount = true,
  showBar = true,
  onChange,
  className,
  style,
  ariaLabel = "Image carousel",
}: FocusPullCarouselProps) {
  const n = slides.length
  const srcs = useSlideImages(slides)
  const allSlides = React.useMemo(() => (n > 1 ? [...slides, ...slides, ...slides] : slides), [slides, n])
  const allSrcs = React.useMemo(() => (n > 1 ? [...srcs, ...srcs, ...srcs] : srcs), [srcs, n])
  const [active, setActive] = React.useState(0)
  const rootRef = React.useRef(null as HTMLDivElement | null)
  const trackRef = React.useRef(null as HTMLDivElement | null)
  const barRef = React.useRef(null as HTMLDivElement | null)
  const activeRef = React.useRef(n > 1 ? n : 0)
  const lastTouch = React.useRef(0)
  const blurRef = React.useRef(blur)
  blurRef.current = blur
  const [dragging, setDragging] = React.useState(false)
  const justDragged = React.useRef(false)

  // Rack focus on every scroll frame.
  const paint = React.useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const cards = Array.from(track.children) as HTMLElement[]
    if (!cards.length) return
    const mid = track.scrollLeft + track.clientWidth / 2
    const centers = cards.map((c) => c.offsetLeft + c.offsetWidth / 2)
    const w = cards[0].offsetWidth || 1
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    cards.forEach((c, i) => {
      const f = focusOf((centers[i] - mid) / w, reduce ? 0 : blurRef.current)
      c.style.transform = "scale(" + f.scale.toFixed(4) + ")"
      c.style.filter = f.blur > 0.05 ? "blur(" + f.blur.toFixed(2) + "px)" : "none"
      c.style.opacity = "1"
    })
    const near = nearestIndex(centers, mid)
    activeRef.current = near
    const realIdx = n > 0 ? near % n : 0
    setActive((prev) => (prev !== realIdx ? realIdx : prev))
  }, [n])

  // Normalization: seamlessly shift the viewport by 1 cycle when settling in cloned groups
  const normalize = React.useCallback(() => {
    const track = trackRef.current
    if (!track || n < 2) return
    const cards = Array.from(track.children) as HTMLElement[]
    if (cards.length < 3 * n) return

    const cycleWidth = cards[n].offsetLeft - cards[0].offsetLeft
    if (cycleWidth <= 0) return

    const current = activeRef.current
    if (current >= 2 * n) {
      track.style.scrollSnapType = "none"
      track.scrollLeft -= cycleWidth
      void track.offsetWidth
      track.style.scrollSnapType = "x mandatory"
      activeRef.current = current - n
      paint()
    } else if (current < n) {
      track.style.scrollSnapType = "none"
      track.scrollLeft += cycleWidth
      void track.offsetWidth
      track.style.scrollSnapType = "x mandatory"
      activeRef.current = current + n
      paint()
    }
  }, [n, paint])

  const updateDimensions = React.useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const isDesktop = window.innerWidth >= 640
    const gap = isDesktop ? 24 : 16
    track.style.setProperty("--fp-gap", gap + "px")

    if (isDesktop) {
      const trackWidth = track.clientWidth
      if (trackWidth > 0) {
        const cardW = Math.floor((trackWidth - 2 * gap) / 3)
        track.style.setProperty("--fp-w", cardW + "px")
      }
    } else {
      track.style.setProperty("--fp-w", "100%")
    }
  }, [])

  // Initial centering to the middle set of cards
  React.useEffect(() => {
    const track = trackRef.current
    if (!track || n < 2) return
    const setup = () => {
      updateDimensions()
      const cards = Array.from(track.children) as HTMLElement[]
      if (cards.length >= 3 * n && cards[n]) {
        const midTarget = cards[n].offsetLeft + cards[n].offsetWidth / 2 - track.clientWidth / 2
        track.scrollLeft = midTarget
        activeRef.current = n
        paint()
      }
    }
    setup()
    const tid = setTimeout(setup, 60)
    return () => clearTimeout(tid)
  }, [n, paint, updateDimensions])

  React.useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    let scrollTimer: ReturnType<typeof setTimeout>
    const onScroll = () => {
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0
          paint()
        })
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        normalize()
      }, 140)
    }
    const onScrollEnd = () => {
      clearTimeout(scrollTimer)
      normalize()
    }
    const onResize = () => {
      updateDimensions()
      onScroll()
    }
    track.addEventListener("scroll", onScroll, { passive: true })
    track.addEventListener("scrollend", onScrollEnd)
    window.addEventListener("resize", onResize)
    const ro = new ResizeObserver(onResize)
    ro.observe(track)
    updateDimensions()
    paint()
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(scrollTimer)
      track.removeEventListener("scroll", onScroll)
      track.removeEventListener("scrollend", onScrollEnd)
      window.removeEventListener("resize", onResize)
      ro.disconnect()
    }
  }, [paint, normalize, n, updateDimensions])

  React.useEffect(() => {
    onChange?.(active)
  }, [active, onChange])

  const scrollToIndex = React.useCallback((i: number, smooth = true) => {
    const track = trackRef.current
    const card = track?.children[i] as HTMLElement | undefined
    if (!track || !card) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    track.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2,
      behavior: smooth && !reduce ? "smooth" : "auto",
    })
  }, [])

  const step = React.useCallback((dir: number) => {
    lastTouch.current = performance.now()
    const track = trackRef.current
    if (!track || n < 2) return
    const next = activeRef.current + dir
    scrollToIndex(next, true)
  }, [n, scrollToIndex])

  // Autoplay: waits for a quiet moment, continuously advances forward
  React.useEffect(() => {
    if (!autoplay || n < 2) return
    const root = rootRef.current
    let seen = true
    const io = new IntersectionObserver(([e]) => (seen = e.isIntersecting))
    if (root) io.observe(root)
    const t = window.setInterval(() => {
      if (!seen || document.hidden || performance.now() - lastTouch.current < autoplay) return
      step(1)
    }, autoplay)
    return () => {
      window.clearInterval(t)
      io.disconnect()
    }
  }, [autoplay, n, step])

  // Mouse drag; touch and trackpads scroll natively.
  const drag = React.useRef(null as null | { x: number; left: number; moved: boolean })
  const onDown = (e: React.PointerEvent) => {
    lastTouch.current = performance.now()
    if (e.pointerType !== "mouse" || e.button !== 0) return
    drag.current = { x: e.clientX, left: trackRef.current!.scrollLeft, moved: false }
  }
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d) return
    const dx = e.clientX - d.x
    if (!d.moved && Math.abs(dx) > 4) {
      d.moved = true
      setDragging(true)
      trackRef.current!.setPointerCapture(e.pointerId)
    }
    if (d.moved) trackRef.current!.scrollLeft = d.left - dx
  }
  const onUp = () => {
    const d = drag.current
    drag.current = null
    lastTouch.current = performance.now()
    if (d?.moved) {
      justDragged.current = true
      window.setTimeout(() => (justDragged.current = false), 0)
      setDragging(false)
      scrollToIndex(activeRef.current)
    }
  }
  const onClickCard = (i: number) => (e: React.MouseEvent) => {
    if (justDragged.current) return e.preventDefault()
    lastTouch.current = performance.now()
    scrollToIndex(i)
  }
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1)
    else if (e.key === "ArrowLeft") step(-1)
    else return
    e.preventDefault()
  }

  const s = slides[active] || {}

  return (
    <div
      ref={rootRef}
      className={["fp-root", className].filter(Boolean).join(" ")}
      style={{
        ...(height && height !== "auto" ? { height } : {}),
        ...(typeof height === "number" ? { ["--fp-h" as string]: height + "px" } : height !== "auto" ? { ["--fp-h" as string]: height } : {}),
        ...(cardWidth ? { ["--fp-w" as string]: cardWidth } : {}),
        ["--fp-aspect" as string]: aspect,
        ["--fp-bg" as string]: background,
        ["--fp-ink" as string]: ink,
        ["--fp-muted" as string]: "color-mix(in srgb, var(--fp-ink) 55%, transparent)",
        ["--fp-line" as string]: "color-mix(in srgb, var(--fp-ink) 18%, transparent)",
        ["--fp-radius" as string]: "10px",
        ...style,
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKey}
    >
      <style>{FP_CSS}</style>
      {/* Contenedor del Track con Flechas Laterales idénticas a los otros carruseles del sitio */}
      <div className="relative w-full group/fp">
        {/* Flecha Izquierda */}
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Deslizar anterior"
          className="absolute left-2 xs:left-3 sm:left-6 md:left-10 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#102547] hover:text-[#0284C7] border border-slate-200 shadow-[0_4px_20px_rgba(2,132,199,0.35)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer select-none"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.8]" />
        </button>

        {/* Track de tarjetas */}
        <div
          ref={trackRef}
          className="fp-track"
          data-drag={dragging ? "1" : "0"}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onWheel={() => (lastTouch.current = performance.now())}
        >
          {allSlides.map((sl, i) => (
            <button
              key={i}
              type="button"
              className="fp-card"
              tabIndex={-1}
              aria-label={"Show " + (sl.title || "slide " + ((i % n) + 1))}
              aria-current={i % n === active ? "true" : undefined}
              onClick={onClickCard(i)}
            >
              {allSrcs[i] ? <img src={allSrcs[i]} alt={sl.alt || sl.title || ""} draggable={false} /> : null}
            </button>
          ))}
        </div>

        {/* Flecha Derecha */}
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Deslizar siguiente"
          className="absolute right-2 xs:right-3 sm:right-6 md:right-10 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#102547] hover:text-[#0284C7] border border-slate-200 shadow-[0_4px_20px_rgba(2,132,199,0.35)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer select-none"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.8]" />
        </button>
      </div>

      <div className="fp-meta">
        <div className="fp-cap" key={active} aria-hidden="true" style={{ minHeight: showCaption ? undefined : "auto" }}>
          {s.title ? <span className="fp-title">{s.title}</span> : null}
          {showCaption && s.caption ? <span className="fp-sub">{s.caption}</span> : null}
        </div>
        {showCount && (
          <div className="fp-count" aria-hidden="true">
            <b>{pad2(active + 1)}</b> / {pad2(n)}
          </div>
        )}
      </div>
      {showBar && (
        <div ref={barRef} className="fp-bar" aria-hidden="true">
          <i />
        </div>
      )}
      <div className="fp-sr" aria-live="polite">
        {"Slide " + (active + 1) + " of " + n + (s.title ? ": " + s.title : "")}
      </div>
    </div>
  )
}
