import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

const Gallery = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const items: GalleryItem[] = [
    {
      id: "item-1",
      title: "Mountain Landscape",
      summary: "Beautiful mountains at sunrise with spectacular views of wild nature.",
      url: "#",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
    {
      id: "item-2",
      title: "Modern Architecture",
      summary: "Contemporary buildings in the city representing modern architectural innovation.",
      url: "#",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      id: "item-3",
      title: "Tropical Flora",
      summary: "Lush tropical vegetation with vibrant colors and unique biodiversity.",
      url: "#",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    },
    {
      id: "item-4",
      title: "Animals in their Habitat",
      summary: "Wildlife in their natural environment, capturing unique moments of wildlife.",
      url: "#",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
    },
    {
      id: "item-5",
      title: "Natural Waterfall",
      summary: "Crystal clear water falling over rocks, creating an impressive natural spectacle.",
      url: "#",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
    {
      id: "item-6",
      title: "Historic Bridge",
      summary: "Classical architecture over the river, connecting the past with the present.",
      url: "#",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
  ];

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
            <div>
              <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-foreground">
                Image Gallery
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                A beautiful collection of images using modern carousel
              </p>
              <a
                href="#"
                className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg text-primary hover:text-primary/80 transition-colors"
              >
                View more images
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="disabled:pointer-events-auto"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollNext();
                }}
                disabled={!canScrollNext}
                className="disabled:pointer-events-auto"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
            className="relative w-full max-w-full md:left-[-1rem]"
          >
            <CarouselContent className="hide-scrollbar w-full max-w-full md:-mr-4 md:ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
              {items.map((item) => (
                <CarouselItem key={item.id} className="ml-8 md:max-w-[452px]">
                  <a
                    href={item.url}
                    className="group flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-3/2 flex overflow-clip rounded-xl">
                        <div className="flex-1">
                          <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl text-foreground">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                      {item.summary}
                    </div>
                    <div className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                      Read more{" "}
                      <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Gallery Info */}
        <div className="mt-12 text-center">
          <div className="bg-card/50 border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              About this Gallery
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This gallery demonstrates the use of a modern carousel to create a responsive 
              and flexible design. Images automatically adapt to different screen sizes, 
              maintaining an attractive and functional layout with intuitive navigation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;