
import { useState, useEffect } from "react";
import { User, Mail, MapPin } from "lucide-react";

const AboutSection = () => {
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

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className={`section-title ${isVisible ? 'active' : ''} reveal`}>
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className={`col-span-1 md:col-span-2 ${isVisible ? 'active' : ''} reveal`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-lg mb-4">
              I'm Madhulika, a Computer Science student at TRR college of technology (polytechnic 2022-2025) in Telangana, 
              with a strong passion for coding, design, and innovation. I aspire to become a great 
              software developer & aspiring full stack developer, aiming to crack interviews at top
               tech companies.
            </p>
            <p className="text-lg mb-4">
              What makes me unique is my blend of technical expertise and artistic creativity. 
              While I specialize in building web applications using technologies combined with AI software.
              I'm also an artist by heart, bringing design thinking and 
               visual storytelling into everything I build.
            </p>
            <p className="text-lg">
              I'm a Explorer & Traveler, a curious learner, and someone who's always exploring
               new ideas and technologies. My goal is to create impactful, user-focused software and 
               continuously grow as a developer and problem-solver.
            </p>
            
            <div className="mt-8 bg-accent/5 p-4 rounded-lg border border-accent/20">
              <h4 className="text-xl font-medium mb-3">🌟 Highlights</h4>
              <ul className="space-y-2 list-inside list-disc text-foreground/90">
                <li>🎓 CSE student with strong foundation in web development.</li>
                <li>🛠 Worked on projects like Smart Safety Helmet, Image analysis, Quiz applications and Data Visualization Dashboard.</li>
                <li>💡 Interested in learning new things every time, types of developments, performance optimization, and real-time web apps.</li>
                <li>🚀 Passionate about cracking top tech interviews with confidence.</li>
                <li>🎨 Artistic, curious, and always ready to explore new things.</li>
              </ul>
            </div>
          </div>
          
          <div className={`${isVisible ? 'active' : ''} reveal`} style={{ animationDelay: '0.4s' }}>
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Name</p>
                    <p className="text-muted-foreground">Thota Madhulika</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">thota.madhulika2007@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Telangana, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Languages</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>English</span>
                      <span>Fluent</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-value" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Telugu</span>
                      <span>Native</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-value" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Hindi</span>
                      <span>Proficient</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-value" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
