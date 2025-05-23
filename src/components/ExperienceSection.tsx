
import { useState, useEffect } from "react";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
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

    const section = document.getElementById("experience");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc",
      period: "Jan 2021 - Present",
      location: "San Francisco, CA (Remote)",
      description: "Lead the frontend development team in building complex web applications with React and TypeScript. Implemented state management solutions, optimized performance, and mentored junior developers.",
      achievements: [
        "Reduced page load time by 40% through code optimization and lazy loading strategies",
        "Implemented a component library that increased development speed by 25%",
        "Led the migration from Angular to React, improving maintainability and developer experience"
      ],
      technologies: ["React", "TypeScript", "Redux", "GraphQL", "Tailwind CSS"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "Mar 2018 - Dec 2020",
      location: "Boston, MA",
      description: "Developed full-stack applications using the MERN stack. Collaborated with UX designers to implement intuitive interfaces and worked on RESTful API development.",
      achievements: [
        "Built a customer portal that increased user engagement by 35%",
        "Implemented automated testing reducing bugs in production by 60%",
        "Collaborated on the design and implementation of a microservices architecture"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Jest"]
    },
    {
      title: "Web Developer",
      company: "Creative Agency",
      period: "Jun 2016 - Feb 2018",
      location: "New York, NY",
      description: "Created responsive websites and interactive web applications for various clients in retail, healthcare, and education sectors. Focused on delivering exceptional user experiences.",
      achievements: [
        "Developed 15+ client websites with responsive designs and cross-browser compatibility",
        "Improved site SEO resulting in 45% increase in organic traffic",
        "Implemented accessibility standards (WCAG 2.1) across all client projects"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-accent/30">
      <div className="container mx-auto">
        <h2 className={`section-title ${isVisible ? 'active' : ''} reveal`}>
          Experience
        </h2>
        
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-12 ${isVisible ? 'active' : ''} reveal`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10"></div>
                
                {/* Date badge for mobile */}
                <div className="md:hidden mb-4">
                  <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
                    {exp.period}
                  </Badge>
                </div>
                
                <div className={`w-full md:w-1/2 md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:pl-12 md:pr-0'}`}>
                  {/* Date badge for desktop - only visible on correct side */}
                  <div className={`hidden md:block mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium mt-1">
                            {exp.company}
                          </CardDescription>
                          <CardDescription className="text-sm mt-1">
                            {exp.location}
                          </CardDescription>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{exp.description}</p>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty div for layout on desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
