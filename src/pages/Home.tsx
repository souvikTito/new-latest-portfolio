
import { Link } from "react-router-dom";
import { ArrowDownCircle, ArrowRight, Code, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

const Home = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="h-10 w-10" />,
      description: "Crafting responsive, performant web interfaces"
    },
    {
      name: "Backend Systems",
      icon: <Server className="h-10 w-10" />,
      description: "Designing scalable microservices architectures"
    },
    {
      name: "Database Design",
      icon: <Database className="h-10 w-10" />,
      description: "Optimizing data models and query performance"
    }
  ];

  const featuredProject = {
    title: "E-Commerce Microservices Platform",
    description: "A scalable microservices architecture for modern e-commerce applications with containerized services.",
    tags: ["Java", "Spring Boot", "Docker", "Kubernetes", "MongoDB"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  };

  const blogPosts = [
    {
      title: "Optimizing Microservices Communication Patterns",
      excerpt: "Learn the best practices for efficient inter-service communication in distributed systems.",
      date: "March 15, 2025",
      slug: "optimizing-microservices-communication",
    },
    {
      title: "CI/CD Pipelines for Modern Web Applications",
      excerpt: "A comprehensive guide to setting up continuous integration and deployment workflows.",
      date: "February 22, 2025",
      slug: "ci-cd-pipelines-web-applications",
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Enhanced Glassmorphism */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center bg-gradient-to-br from-background via-background/80 to-background/60">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
          <div className="space-y-6 animate-fade-in">
            <h1 className="heading-xl">
              Hi, I'm <span className="text-gradient">Souvik</span>
            </h1>
            <h2 className="text-2xl font-medium text-muted-foreground">
              Software Developer & AI/ML Engineer
            </h2>
            <p className="text-lg max-w-md leading-relaxed">
              Crafting scalable systems & immersive web experiences.
              Specializing in distributed systems, cloud architecture, and modern web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="glass-morphism">
                <Link to="/projects">Explore Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 lg:p-8 animate-scale-in">
            <div className="aspect-square bg-gradient-to-tr from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="font-mono text-sm bg-foreground/10 w-fit mx-auto px-3 py-1 rounded-full">
                  Software Developer & AI/ML Engineer
                </div>
                <div className="text-4xl font-bold">&#123; Souvik &#125;</div>
                <div className="flex justify-center space-x-2">
                  {["React", "Java", "Cloud", "DevOps"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#skills"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors group"
          aria-label="Scroll to skills section"
        >
          <ArrowDownCircle className="h-10 w-10 animate-bounce group-hover:text-primary" />
        </a>
      </section>

      {/* Skills Section with Enhanced Cards */}
      <section id="skills" className="section bg-gradient-to-br from-muted/10 to-muted/30">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12 text-gradient">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={cn(
                  "glass rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in",
                  { "delay-100": index === 1, "delay-200": index === 2 }
                )}
              >
                <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="section">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="heading-lg text-gradient">Featured Project</h2>
            <Button asChild variant="ghost">
              <Link to="/projects" className="flex items-center gap-2">
                All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="glass rounded-xl overflow-hidden card-hover">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="heading-md mb-3">{featuredProject.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button>View Project</Button>
                  <Button variant="outline">Source Code</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section bg-gradient-to-br from-muted/10 to-muted/30">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="heading-lg text-gradient">Latest Articles</h2>
            <Button asChild variant="ghost">
              <Link to="/blog" className="flex items-center gap-2">
                All Articles <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={cn(
                  "glass rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group",
                  { "animate-fade-in": index === 0, "animate-fade-in delay-100": index === 1 }
                )}
              >
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-primary font-medium">
                  Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

