import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from 'emailjs-com'; // Add this import

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const section = document.getElementById("contact");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      "service_2b3lfyi",
      "template_pb8g3ea",
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "5apQBcYYZYhI373gz"
    )
    .then((result) => {
      console.log("EmailJS success:", result.text);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
      setIsSubmitting(false);
    });
  };

  const contactDetails = [
    { icon: Mail, title: "Email", value: "thota.madhulika2007@gmail.com", href: "mailto:thota.madhulika2007@gmail.com" },
    { icon: MapPin, title: "Location", value: "Hyderabad, Telangana", href: "https://maps.google.com/?q=Hyderabad" }
  ];

  return (
    <section id="contact" className="section-padding bg-accent/30">
      <div className="container mx-auto">
        <h2 className={`section-title ${isVisible ? 'active' : ''} reveal`}>
          Contact Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className={`${isVisible ? 'active' : ''} reveal`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Fill out the form, and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <a 
                  key={index} 
                  href={detail.href}
                  target={detail.title === "Location" ? "_blank" : undefined}
                  rel={detail.title === "Location" ? "noopener noreferrer" : undefined}
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <detail.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{detail.title}</h4>
                    <p className="text-muted-foreground">{detail.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className={`${isVisible ? 'active' : ''} reveal`} style={{ animationDelay: '0.4s' }}>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}                  
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
