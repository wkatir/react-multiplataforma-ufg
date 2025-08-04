import { Button } from "@/components/ui/button";
import { User, MapPin, Code, BookOpen, Gamepad2, Music, Mountain } from "lucide-react";

const Profile = () => {
  const achievements = [
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Learned", value: "20+" },
    { label: "Hours of Coding", value: "1000+" },
    { label: "Courses Completed", value: "25+" },
  ];

  const skills = [
    { name: "React", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "Tailwind CSS", icon: Code },
    { name: "Node.js", icon: Code },
    { name: "Python", icon: Code },
  ];

  const hobbies = [
    { name: "Programming", icon: Code, description: "Learning new web technologies" },
    { name: "Reading", icon: BookOpen, description: "Tech books and sci-fi novels" },
    { name: "Gaming", icon: Gamepad2, description: "Video games and design analysis" },
    { name: "Music", icon: Music, description: "Discovering new artists" },
    { name: "Hiking", icon: Mountain, description: "Exploring nature trails" },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
            <h1 className="text-5xl font-semibold text-foreground">About Me</h1>
            <p className="text-muted-foreground text-lg">
              Enthusiastic developer with a passion for web development and artificial intelligence. 
              I love creating innovative projects and solving problems with creative solutions.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
              alt="Professional developer workspace"
              className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
            />
            <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
              <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="mb-2 text-lg font-semibold text-foreground">Wilmer Salazar</p>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Salvador, El Salvador</span>
                </div>
                <Button variant="outline" className="mr-auto" asChild>
                  <a href="mailto:wilmerhenrysalazarmartinez@gmail.com">
                    Contact Me
                  </a>
                </Button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=600&fit=crop"
                alt="Coding and development"
                className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
              />
            </div>
          </div>

          <div className="py-32">
            <p className="text-center text-lg text-muted-foreground">Technologies I Work With</p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-2" key={skill.name + idx}>
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-4xl font-semibold text-foreground">My Achievements</h2>
              <p className="max-w-xl text-muted-foreground">
                Throughout my journey in web development, I've accomplished various milestones 
                and continue to grow my skills in modern technologies.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
              {achievements.map((item, idx) => (
                <div className="flex flex-col gap-4" key={item.label + idx}>
                  <p className="text-muted-foreground">{item.label}</p>
                  <span className="text-4xl font-semibold md:text-5xl text-foreground">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
          </div>

          <div className="mt-32">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">My Hobbies & Interests</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hobbies.map((hobby, idx) => {
                const Icon = hobby.icon;
                return (
                  <div key={hobby.name + idx} className="bg-card border border-border rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{hobby.name}</h3>
                    <p className="text-sm text-muted-foreground">{hobby.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card/50 border border-border rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">About My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about learning new technologies, creating innovative projects, 
                and solving problems with creative solutions. I enjoy collaborating with teams 
                and sharing knowledge with other developers. My goal is to contribute to the 
                development of modern and accessible web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;