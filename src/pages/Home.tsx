import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-background pt-10">
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Badge variant="outline">
                UFG Multiplatform Development
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl text-foreground">
                Modern Web Development with React & Tailwind
              </h1>
              <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                This activity is part of the <strong className="text-foreground">Introduction to HTML and CSS </strong> 
                course at Francisco Gavidia University (UFG). Learn to build modern web applications 
                using React, Tailwind CSS, and modern development practices.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button asChild className="w-full sm:w-auto">
                  <a href="/gallery">Explore Gallery</a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href="/profile">
                    View Profile
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                alt="Modern web development workspace with code and design"
                className="max-h-96 w-full rounded-md object-cover"
              />
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-lg p-4 text-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary text-sm font-bold">P</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">Profile</h3>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary text-sm font-bold">R</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">Recipe</h3>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center space-y-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary text-sm font-bold">G</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">Gallery</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;