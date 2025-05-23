import { useState, useEffect } from "react";
import { 
  Code, Database, Languages, Lightbulb, 
  LineChart, Palette, Server, Terminal, 
  MessageSquare, Users, Cpu, Network, Settings
} from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

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

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const isFlipped = (index: number) => flippedCards.includes(index);

  // Updated skills with icons and descriptions
  const technicalSkills = [
    { 
      name: "Python",
      icon: <Terminal className="skill-icon" />,
      description: "Built data analysis scripts and automation tools for academic projects"
    },
    { 
      name: "Java",
      icon: <Code className="skill-icon" />,
      description: "Developed core algorithms and data structures for classroom applications"
    },
    { 
      name: "HTML/CSS",
      icon: <Palette className="skill-icon" />,
      description: "Created responsive layouts and animated interfaces for web projects"
    },
    { 
      name: "JavaScript", 
      icon: <Code className="skill-icon" />,
      description: "Implemented interactive features and dynamic content on web applications"
    },
    { 
      name: "MySQL",
      icon: <Database className="skill-icon" />,
      description: "Designed database schemas and queries for data-driven applications"
    },
    { 
      name: "IoT",
      icon: <Cpu className="skill-icon" />,
      description: "Built Smart Safety Helmet with sensor integration and real-time monitoring"
    },
  ];

  const softSkills = [
    { 
      name: "Prompt Engineering",
      icon: <MessageSquare className="skill-icon" />,
      description: "Crafted effective AI prompts to generate high-quality outputs for various applications"
    },
    { 
      name: "Problem Solving", 
      icon: <Lightbulb className="skill-icon" />,
      description: "Applied analytical thinking to break down complex problems into manageable solutions"
    },
    { 
      name: "Communication", 
      icon: <Users className="skill-icon" />,
      description: "Effectively explained technical concepts to non-technical stakeholders"
    },
    { 
      name: "Creativity", 
      icon: <Palette className="skill-icon" />,
      description: "Combined artistic abilities with technical skills to create visually appealing solutions"
    },
    { 
      name: "Curiosity",
      icon: <Lightbulb className="skill-icon" />,
      description: "Always trying to know and learn new things — a key skill in tech where growth never stops."
    },
    { 
      name: "Adaptability",
      icon: <Lightbulb className="skill-icon" />,
      description: "Exploring new technologies and working on diverse projects like IoT dashboards."
    },
  ];

  const learningSkills = [
    { 
      name: "React",
      icon: <Code className="skill-icon" />,
      description: "Building component-based UI interfaces with React's modern framework"
    },
    { 
      name: "Node.js",
      icon: <Server className="skill-icon" />,
      description: "Creating server-side applications with JavaScript runtime environment"
    },
    { 
      name: "UI/UX Design",
      icon: <LineChart className="skill-icon" />,
      description: "Designing user-centered interfaces with focus on accessibility and usability"
    },
    { 
      name: "Backend Development", 
      icon: <Network className="skill-icon" />,
      description: "Learning server architecture, API development, and database integration"
    },
  ];

  const renderSkillCards = (
    skills: typeof technicalSkills,
    icon: React.ReactNode,
    title: string,
    animationDelay: string
  ) => (
    <div className={`${isVisible ? 'active' : ''} reveal`} style={{ animationDelay }}>
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full">
        <div className="flex items-center mb-6">
          <div className="bg-primary/10 p-3 rounded-lg mr-4">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const cardIndex =
              title === "Technical Skills"
                ? index
                : title === "Soft Skills"
                ? index + technicalSkills.length
                : index + technicalSkills.length + softSkills.length;

            return (
              <div
                key={index}
                className={`flip-card ${isFlipped(cardIndex) ? "flipped" : ""} cursor-pointer`}
                onClick={() => toggleFlip(cardIndex)}
              >
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <div className="flip-card-front">
                    {skill.icon}
                    <h4 className="font-medium text-lg text-center mb-4">{skill.name}</h4>
                    <div className="text-xs text-center mt-auto text-muted-foreground">Click to flip</div>
                  </div>
                  {/* Back of card */}
                  <div className="flip-card-back">
                    <p className="text-sm">{skill.description}</p>
                    <div className="text-xs text-center mt-4 text-primary-foreground/70">Click to flip back</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Skills</h2>
        <div className="flex flex-col gap-10">
          {renderSkillCards(
            technicalSkills,
            <Terminal className="h-6 w-6 text-primary" />,
            "Technical Skills",
            "0.1s"
          )}
          {renderSkillCards(
            softSkills,
            <Lightbulb className="h-6 w-6 text-primary" />,
            "Soft Skills",
            "0.2s"
          )}
          {renderSkillCards(
            learningSkills,
            <Settings className="h-6 w-6 text-primary" />,
            "Currently Learning",
            "0.3s"
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
