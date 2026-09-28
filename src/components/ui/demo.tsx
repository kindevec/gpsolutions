import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselProgress,
  ScrollXCarouselWrap,
} from "@/components/ui/scroll-x-carousel";
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "@/components/ui/reveal-on-hover";
import { Badge } from "@/components/ui/badge";

const SLIDES = [
  {
    id: "slide-6",
    title: "UI UX design",
    description:
      "We build a car rental platform for the masses, with a focus on user experience and security, and data privacy.",
    services: ["branding", "design"],
    type: "Agency",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "slide-2",
    title: "Blockchain wallet",
    description:
      "We build a Blockchain wallet for the masses, with a focus on security and usability.",
    services: ["branding", "design", "development"],
    type: "blockchain",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "slide-3",
    title: "ecommerce store",
    description:
      "We build an ecommerce store for the masses, with a focus on performance and user experience.",
    services: ["branding", "design", "payment getaway", "development"],
    type: "ecommerce",
    imageUrl:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "slide-1",
    title: "SaaS platform",
    description:
      "We build a SaaS platform for the masses, with a focus on user experience and security, and data privacy.",
    services: ["branding", "design", "development"],
    type: "SaaS",
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "slide-4",
    title: "SEO Optimization",
    description:
      "We build a SaaS platform for the masses, with a focus on user experience and security, and data privacy.",
    services: ["branding", "design", "development"],
    type: "SaaS",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
];

export default function DemoOne() {
  return (
    <ScrollXCarousel className="h-[150vh]">
      <ScrollXCarouselContainer className="h-dvh place-content-center flex flex-col gap-8 py-12">
        <div className="pointer-events-none w-[12vw] h-[103%] absolute inset-[0_auto_0_0] z-10 bg-[linear-gradient(90deg,_#ffffff_35%,_transparent)]" />
        <div className="pointer-events-none bg-[linear-gradient(270deg,_#ffffff_35%,_transparent)] w-[15vw] h-[103%] absolute inset-[0_0_0_auto] z-10" />

        <ScrollXCarouselWrap className="flex-4/5 flex space-x-8 [&>*:first-child]:ml-8">
          {SLIDES.map((slide) => (
            <CardHoverReveal
              key={slide.id}
              className="min-w-[70vw] md:min-w-[38vw] shadow-xl border xl:min-w-[30vw] rounded-xl overflow-hidden"
            >
              <CardHoverRevealMain>
                <img
                  alt={slide.title}
                  src={slide.imageUrl}
                  className="size-full aspect-square object-cover"
                />
              </CardHoverRevealMain>
              <CardHoverRevealContent className="space-y-4 rounded-2xl bg-[rgba(0,0,0,.5)] backdrop-blur-3xl p-4">
                <div className="space-y-2">
                  <h3 className="text-sm text-white/80">Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="capitalize rounded-full bg-indigo-500">
                      {slide.type}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm text-white/80">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {slide.services.map((service) => (
                      <Badge
                        key={service}
                        className="capitalize rounded-full"
                        variant={"secondary"}
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mt-2">
                  <h3 className="text-white capitalize font-medium">
                    {slide.title}
                  </h3>
                  <p className="text-white/80 text-sm">{slide.description}</p>
                </div>
              </CardHoverRevealContent>
            </CardHoverReveal>
          ))}
        </ScrollXCarouselWrap>
        <ScrollXCarouselProgress
          className="bg-slate-200 mx-8 h-1 rounded-full overflow-hidden"
          progressStyle="size-full bg-indigo-500/70 rounded-full"
        />
      </ScrollXCarouselContainer>
    </ScrollXCarousel>
  );
}
