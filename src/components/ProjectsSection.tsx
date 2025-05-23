
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects = [
    {
      title: "Smart safety helmet for coal miners with Real-Time Dashboard",
      description: "A comprehensive admin dashboard for IoT with real-time analytics, helmet management, and user insights.",
      image: "https://media.licdn.com/dms/image/v2/D4E22AQHk6YYANmC-yg/feedshare-shrink_2048_1536/B4EZacdXPIHkAo-/0/1746381666447?e=1750896000&v=beta&t=J2ZAudaQLjV1ynHwRwu19RYqnb_Fgf5QYORqDp5CmC8",
      technologies: ["C++", "Python", "Mongodb", "HTML/CSS", "Ardiuno IDE"],
      github: "https://github.com/butterfly-artist/IoT-smart-safety-helmet-.git"
    },
    {
      title: "Image Analysis",
      description: "A collaborative image analysis platform with features like real-time updates, and API integration tools.",
      image: "https://videos.openai.com/vg-assets/assets%2Fclient_upload%2Fmedia%2Fuser-fyoqgJ6MrOqgccd8JVoC3zqd%2Fmedia_01jvwvt7v9ed7rb8wasf9xfehc.png?st=2025-05-22T19%3A10%3A49Z&se=2025-05-28T20%3A10%3A49Z&sks=b&skt=2025-05-22T19%3A10%3A49Z&ske=2025-05-28T20%3A10%3A49Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=6vn%2F63MtATwfzmUM73EbmObO0%2Fwpd4NbxJM2UD9i1cA%3D&az=oaivgprodscus",
      technologies: ["Python", "Mongodb", "Streamlit", "Rest API"],
      github: "https://github.com/butterfly-artist/IMAGE-ANALYSIS.git"
    },
    {
      title: "Real Estate Web app in progress",
      description: "A property listing platform with advanced filtering, interactive maps andfeatures for real estate agencies.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Google Maps API"]
    },
    {
      title: "Basic Coffee Shop Website",
      description: "A simple coffee shop website built with HTML, CSS.",
      image: "https://videos.openai.com/vg-assets/assets%2Fclient_upload%2Fmedia%2Fuser-fyoqgJ6MrOqgccd8JVoC3zqd%2Fmedia_01jvww7znwe5m8rms6vv5ew1wh.png?st=2025-05-22T19%3A47%3A17Z&se=2025-05-28T20%3A47%3A17Z&sks=b&skt=2025-05-22T19%3A47%3A17Z&ske=2025-05-28T20%3A47%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=WeG3GALCPyesyx1JbwRYmD2x3TTMfPLyaw224hyeEqs%3D&az=oaivgprodscus",
      technologies: ["HTML", "CSS"],
      live: "https://butterfly-artist.github.io/Basic-coffee-shop-website-using-HTML-CSS/",
      github: "https://github.com/butterfly-artist/Basic-coffee-shop-website-using-HTML-CSS.git"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className={`section-title ${isVisible ? 'active' : ''} reveal`}>
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${isVisible ? 'active' : ''} reveal`} 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className="h-full overflow-hidden">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
