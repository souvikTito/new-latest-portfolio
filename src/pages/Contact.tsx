
import { useRef, useState } from "react";
import { Send, MapPin, Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setIsSubmitting(false);
      formRef.current?.reset();
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "San Francisco, CA",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(123) 456-7890",
      href: "tel:+11234567890",
    },
  ];
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/",
      color: "bg-[#0077B5]/10 text-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/",
      color: "bg-[#333]/10 text-[#333] dark:bg-[#eee]/10 dark:text-[#eee]",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/",
      color: "bg-[#1DA1F2]/10 text-[#1DA1F2]",
    },
  ];

  return (
    <Layout>
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-xl p-6 md:p-8 animate-fade-in">
              <h2 className="heading-md mb-6">Send Me a Message</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass rounded-xl p-6 md:p-8 animate-fade-in delay-100">
                <h2 className="heading-md mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{info.label}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass rounded-xl p-6 md:p-8 animate-fade-in delay-200">
                <h2 className="heading-md mb-6">Connect With Me</h2>
                
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg hover:bg-background/50 transition-colors"
                    >
                      <div className={`p-3 rounded-full mr-4 ${link.color}`}>
                        {link.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{link.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Connect on {link.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="glass rounded-xl p-6 md:p-8 animate-fade-in delay-300">
                <h2 className="heading-md mb-6">Schedule a Meeting</h2>
                <p className="mb-4">
                  Prefer to talk in real-time? Schedule a video call or coffee chat.
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://calendly.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a time slot
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
