
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative pt-16 bg-gradient-to-r from-background to-muted"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
            <h2 className="text-lg md:text-xl font-medium text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold mt-2 mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Thota Madhulika
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Computer Science Student & Aspiring Full Stack Developer
            </h2>
            <p className="text-lg max-w-md mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              I build creative and accessible web experiences with an artistic touch.
            </p>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button 
                className="px-6 bg-primary text-primary-foreground hover:bg-primary/90" 
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="px-6 border-primary/20 hover:bg-primary/10"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="rounded-full w-60 h-60 md:w-80 md:h-80 bg-muted border-4 border-primary/20 overflow-hidden flex items-center justify-center">
              <img 
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jvwn1b4wfktb1q9xc3vfhf6v%2F1747939795_img_0.webp?st=2025-05-22T18%3A17%3A06Z&se=2025-05-28T19%3A17%3A06Z&sks=b&skt=2025-05-22T18%3A17%3A06Z&ske=2025-05-28T19%3A17%3A06Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=viEkLxgCAoy4QKQoDWFRz1wr%2Fmikx8JR24HL%2FOfL7jE%3D&az=oaivgprodscus" 
                alt="Profile" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-primary/10"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
