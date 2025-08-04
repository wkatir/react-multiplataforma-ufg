import { useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Image, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router";

export default function NavBar() {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Profile", url: "/profile", icon: User },
    { name: "Recipe", url: "/recipe", icon: ChefHat },
    { name: "Gallery", url: "/gallery", icon: Image },
  ];

  const [activeTab, setActiveTab] = useState(() => {
    const currentPath = location.pathname;
    const currentItem = navItems.find(item => item.url === currentPath);
    return currentItem ? currentItem.name : navItems[0].name;
  });

  return (
    <div
      className={"fixed top-0 left-1/2 -translate-x-1/2 z-50 mb-6 pt-4 sm:pt-6 px-4 sm:px-0"}
    >
      <div className="flex items-center gap-2 sm:gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg max-w-[calc(100vw-2rem)] sm:max-w-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-6 py-2 rounded-full transition-colors flex-shrink-0",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden sm:inline">{item.name}</span>
              <span className="sm:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-8 sm:w-12 h-4 sm:h-6 bg-primary/20 rounded-full blur-md -top-1 sm:-top-2 -left-1 sm:-left-2" />
                    <div className="absolute w-6 sm:w-8 h-4 sm:h-6 bg-primary/20 rounded-full blur-md -top-0.5 sm:-top-1" />
                    <div className="absolute w-3 sm:w-4 h-3 sm:h-4 bg-primary/20 rounded-full blur-xs top-0 left-1 sm:left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
        
        {/* Mode Toggle */}
        <div className="ml-1 sm:ml-2 flex-shrink-0">
          <ModeToggle />
        </div>
        
        {/* Clerk Authentication */}
        <div className="ml-1 sm:ml-2 flex-shrink-0">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full">
                <span className="hidden sm:inline">Sign In</span>
                <span className="sm:hidden">Sign</span>
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}