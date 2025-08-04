"use client";

import {
  AlignLeft,
  ChefHat,
  Clock,
  Users,
  ExternalLink,
  Lightbulb,
  ListChecks,
  RefreshCcw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Recipe = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="py-32">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="relative grid-cols-3 gap-20 lg:grid">
            <div className="lg:col-span-2">
              <div>
                <Badge variant="outline">Salvadoran Cuisine</Badge>
                <h1 className="mt-3 text-3xl font-extrabold text-foreground">
                  Salvadoran Pupusas
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">
                  A traditional dish from El Salvador, delicious and easy to prepare. 
                  Pupusas are thick corn tortillas filled with various ingredients 
                  such as cheese, beans, and pork rinds.
                </p>
                <img
                  src="https://cdn7.kiwilimon.com/recetaimagen/2806/640x426/25790.jpg.webp"
                  alt="Salvadoran pupusas on a plate"
                  className="my-8 aspect-video w-full rounded-md object-cover"
                />
              </div>

              <section
                id="section1"
                ref={(ref) => addSectionRef("section1", ref)}
                className="prose dark:prose-invert mb-8"
              >
                <h2>Recipe Information</h2>
                <div className="ml-3.5">
                  <div className="relative flex items-start pb-2">
                    <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                    <div className="absolute ml-[-14px] py-2">
                      <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                        <Clock className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className="pl-12">
                      <h3 className="mt-2 text-base font-semibold">
                        Preparation Time
                      </h3>
                      <p>
                        Total time: 45 minutes including preparation and cooking time. 
                        Perfect for a quick and delicious meal.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start pb-2">
                    <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                    <div className="absolute ml-[-14px] py-2">
                      <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                        <Users className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className="pl-12">
                      <h3 className="mt-2 text-base font-semibold">
                        Servings
                      </h3>
                      <p>
                        This recipe makes 4 servings, perfect for a family meal 
                        or small gathering.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start pb-2">
                    <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                    <div className="absolute ml-[-14px] py-2">
                      <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                        <ChefHat className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className="pl-12">
                      <h3 className="mt-2 text-base font-semibold">
                        Difficulty Level
                      </h3>
                      <p>
                        Easy - suitable for beginners. The recipe uses simple 
                        techniques and readily available ingredients.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="section2"
                ref={(ref) => addSectionRef("section2", ref)}
                className="prose dark:prose-invert mb-8"
              >
                <h2>Ingredients</h2>
                <p>
                  Gather these ingredients to create authentic Salvadoran pupusas. 
                  All ingredients are easily found in most grocery stores.
                </p>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Main Ingredients</th>
                        <th>Fillings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2 cups corn masa</td>
                        <td>1/2 cup shredded cheese</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>1 cup warm water</td>
                        <td>1/2 cup refried beans</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>Salt to taste</td>
                        <td>1/4 cup ground pork rinds</td>
                      </tr>
                      <tr className="even:bg-muted m-0 border-t p-0">
                        <td>Oil for frying</td>
                        <td>1/2 cup shredded cabbage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertTitle>Cooking Tip!</AlertTitle>
                  <AlertDescription>
                    Make sure your masa is fresh and at room temperature for the best results
                  </AlertDescription>
                </Alert>
              </section>

              <section
                id="section3"
                ref={(ref) => addSectionRef("section3", ref)}
                className="prose dark:prose-invert mb-8"
              >
                <h2>Preparation Steps</h2>
                <p>
                  Follow these steps carefully to create perfect pupusas. The key 
                  is to work with the masa while it's still warm and pliable.
                </p>
                <div className="ml-3.5">
                  <div className="relative flex items-start pb-2">
                    <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                    <div className="absolute ml-[-14px] py-2">
                      <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                        <RefreshCcw className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className="pl-12">
                      <h3 className="mt-2 text-base font-semibold">
                        Step 1: Prepare the Masa
                      </h3>
                      <p>
                        In a large bowl, mix the corn masa with warm water and salt. 
                        Knead until you get a smooth and manageable dough. Cover and 
                        let rest for 10 minutes.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start pb-2">
                    <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                    <div className="absolute ml-[-14px] py-2">
                      <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                        <ListChecks className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className="pl-12">
                      <h3 className="mt-2 text-base font-semibold">
                        Step 2: Form the Pupusas
                      </h3>
                      <p>
                        Take a portion of masa the size of a golf ball. Make a hole 
                        in the center and add your chosen filling (cheese, beans, pork rinds). 
                        Close the masa around the filling and gently flatten to form a disk 
                        about 4 inches in diameter.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start pb-2">
                    <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                    <div className="absolute ml-[-14px] py-2">
                      <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                        <ChefHat className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className="pl-12">
                      <h3 className="mt-2 text-base font-semibold">
                        Step 3: Cook and Serve
                      </h3>
                      <p>
                        Heat a griddle or skillet over medium heat. Place the pupusas 
                        and cook until golden brown on both sides, approximately 3-4 
                        minutes per side. Serve hot with curtido (pickled cabbage) 
                        and tomato sauce.
                      </p>
                    </div>
                  </div>
                </div>
                <blockquote>
                  &ldquo;The secret to perfect pupusas is patience and practice. 
                  Don't worry if your first few don't look perfect - they'll still taste amazing!&rdquo;
                </blockquote>
              </section>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                <p className="text-muted-foreground mb-2">
                  Want to learn more Salvadoran recipes?
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <span>View more recipes here</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="sticky top-8 hidden h-fit lg:block">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlignLeft className="h-4 w-4" />
                On this page
              </span>
              <nav className="mt-2 text-sm">
                <ul>
                  <li>
                    <a
                      href="#section1"
                      className={cn(
                        "block py-1 transition-colors duration-200",
                        activeSection === "section1"
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-primary",
                      )}
                    >
                      Recipe Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section2"
                      className={cn(
                        "block py-1 transition-colors duration-200",
                        activeSection === "section2"
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-primary",
                      )}
                    >
                      Ingredients
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section3"
                      className={cn(
                        "block py-1 transition-colors duration-200",
                        activeSection === "section3"
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-primary",
                      )}
                    >
                      Preparation Steps
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipe;