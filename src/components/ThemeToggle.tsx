
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    // Apply transition class for smooth color changes
    root.classList.add("color-theme-in-transition");
    
    // Store the theme preference
    localStorage.setItem("theme", theme);
    
    // Remove transition class after transition completes
    const timeout = setTimeout(() => {
      root.classList.remove("color-theme-in-transition");
    }, 400);
    
    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full transition-transform hover:scale-110 hover:bg-primary/20"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-transform duration-500 rotate-0" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-500 rotate-0" />
      )}
    </Button>
  );
};

export default ThemeToggle;
