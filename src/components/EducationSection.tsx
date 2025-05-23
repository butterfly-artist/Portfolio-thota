
import { useState, useEffect } from "react";
import { Book, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
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

    const section = document.getElementById("education");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const educations = [
    {
      degree: "Diploma in Computer Science",
      institution: "TRR College of Technology (Polytechnic), Hyderabad",
      period: "2022 - 2025",
      description: "Specialized in Computer Science Basics to Advanced and Artificial Intelligence. Participated in research projects focused on Python and Web development.",
      achievements: [
        "GPA: 9.0/10.0",
        "Made a significant contribution to IoT-based projects",
        "Participated in various coding competitions, events and hackathons",
      ]
    },
    {
      degree: "Netaji School, Hyderabad",
      institution: "Intermediate in Mathematics, Physics, and Chemistry",
      period: "2021 - 2022",
      description: "Secondary education with a focus on Mathematics and Science. Developed strong analytical and problem-solving skills.",
      achievements: [
        "GPA: 9.5/10.0",
        "Participated in various science fairs and exhibitions",
        "Led team that won first place in school Arts and Crafts competition",
      ]
    }
  ];

  const certifications = [
    {
      name: "Prompt Engineering Workshop",
      issuer: "Knowvation Learning Pvt Ltd",
      date: "2025",
      credentialId: "XXXXXXXX"
    },
    {
     name: "Hackathon 2025",
      issuer: "JNTUH University College of Engineering SULTHANPUR",
      date: "2025",
      credentialId: "XXXXXXX"
    },
    {
      name: "Python (90 Hrs)",
      issuer: "ID Tech solutions pvt ltd",
      date: "2024",
      credentialId: "IDF/KT/BAN/PYT/2024/1025"
    },
    {
      name: "Data Base programming with SQL",
      issuer: "ORACLE Academy",
      date: "2024",
      credentialId: "XXXXXXX"
    }
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className={`section-title ${isVisible ? 'active' : ''} reveal`}>
          Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className={`${isVisible ? 'active' : ''} reveal`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Book className="mr-2 h-6 w-6" /> Academic Education
            </h3>
            
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription className="text-lg">{edu.institution}</CardDescription>
                    <Badge variant="outline" className="w-fit">
                      <Calendar className="h-3 w-3 mr-1" /> {edu.period}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{edu.description}</p>
                    <h4 className="font-semibold mb-2">Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className={`${isVisible ? 'active' : ''} reveal`} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Book className="mr-2 h-6 w-6" /> Certifications
            </h3>
            
            <Card>
              <CardHeader>
                <CardTitle>Professional Certifications</CardTitle>
                <CardDescription>Industry recognized credentials and certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <div className="flex justify-between mt-2">
                        <Badge variant="secondary">Issued {cert.date}</Badge>
                        <span className="text-sm text-muted-foreground">ID: {cert.credentialId}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Book className="mr-2 h-6 w-6" /> Continuing Education
              </h3>
              <Card>
                <CardHeader>
                  <CardTitle>Online Courses</CardTitle>
                  <CardDescription>Ongoing learning and skills development</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Advanced React Patterns</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Node JS </span>
                        <p className="text-sm text-muted-foreground"></p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Advanced Backend development</span>
                        <p className="text-sm text-muted-foreground"></p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
