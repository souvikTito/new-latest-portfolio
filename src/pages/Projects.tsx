
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

const Projects = () => {
  const categories = ["All", "Full Stack", "Backend", "Microservices", "Hackathon"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Microservices Platform",
      description: "A scalable microservices architecture for modern e-commerce applications with containerized services.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      tags: ["Java", "Spring Boot", "Docker", "Kubernetes", "MongoDB"],
      category: "Microservices",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for social media management with analytics and scheduling features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      category: "Full Stack",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "A real-time messaging platform with end-to-end encryption and offline capabilities.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
      category: "Full Stack",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "A centralized gateway for routing, authentication, and rate limiting for microservices architecture.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      tags: ["Java", "Spring Cloud Gateway", "Redis", "JWT", "Docker"],
      category: "Microservices",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 5,
      title: "AI-Powered Task Manager",
      description: "A task management application that uses AI to categorize, prioritize, and suggest task completion strategies.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      tags: ["Python", "Flask", "React", "TensorFlow", "PostgreSQL"],
      category: "Hackathon",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Event-Driven Payment Service",
      description: "A fault-tolerant payment processing service using event-driven architecture and eventual consistency.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      tags: ["Java", "Kafka", "Spring Boot", "MongoDB", "Docker"],
      category: "Backend",
      github: "#",
      demo: "#",
      featured: false,
    },
  ];
  
  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <Layout>
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-4">My Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of software projects that demonstrate my technical expertise and problem-solving abilities.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className={cn(
                  "glass rounded-xl overflow-hidden card-hover animate-fade-in",
                  project.featured && "md:col-span-2"
                )}
              >
                <div className="aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="gap-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
