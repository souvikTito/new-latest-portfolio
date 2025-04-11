
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

// This is a mock data function that would be replaced with actual data fetching
const getBlogPostBySlug = (slug: string) => {
  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Microservices Communication Patterns",
      excerpt: "Learn the best practices for efficient inter-service communication in distributed systems.",
      content: `
        <p>Microservices architecture has become a standard approach for building complex, scalable applications. However, one of the biggest challenges in implementing microservices is establishing efficient communication patterns between services.</p>
        
        <h2>Synchronous vs. Asynchronous Communication</h2>
        <p>When designing microservices, you generally have two communication options:</p>
        <ul>
          <li><strong>Synchronous (Request/Response):</strong> Services communicate directly, waiting for responses.</li>
          <li><strong>Asynchronous (Event-Based):</strong> Services publish events to a message broker, decoupling communication.</li>
        </ul>
        
        <p>While synchronous communication is simpler to implement, asynchronous patterns often provide better resilience and scalability in distributed systems.</p>
        
        <h2>Common Communication Patterns</h2>
        <ol>
          <li><strong>API Gateway Pattern</strong> - A centralized entry point for clients that routes requests to appropriate services.</li>
          <li><strong>Saga Pattern</strong> - Manages failures in distributed transactions through compensating transactions.</li>
          <li><strong>CQRS (Command Query Responsibility Segregation)</strong> - Separates read and write operations for better performance.</li>
          <li><strong>Event Sourcing</strong> - Stores the state of an entity as a sequence of state-changing events.</li>
        </ol>
        
        <h2>Best Practices for Microservices Communication</h2>
        <p>Based on my experience working with microservices at scale, here are some recommendations:</p>
        <ol>
          <li>Use asynchronous communication where possible to enhance resilience</li>
          <li>Implement circuit breakers to handle service failures gracefully</li>
          <li>Consider message formats carefully (JSON, Protocol Buffers, Avro)</li>
          <li>Define clear service contracts and API versioning strategies</li>
          <li>Monitor communication patterns and optimize based on actual usage</li>
        </ol>
        
        <p>The right communication pattern depends heavily on your specific use case, scalability requirements, and team structure. There is no one-size-fits-all solution.</p>
        
        <h2>Conclusion</h2>
        <p>Effective communication between microservices is crucial for building resilient distributed systems. By understanding the tradeoffs between different patterns, you can design architectures that maximize the benefits of microservices while minimizing their complexities.</p>
      `,
      date: "March 15, 2025",
      tags: ["Microservices", "Architecture", "Cloud"],
      author: "Souvik",
      slug: "optimizing-microservices-communication",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
    {
      id: 2,
      title: "CI/CD Pipelines for Modern Web Applications",
      excerpt: "A comprehensive guide to setting up continuous integration and deployment workflows.",
      content: `
        <p>Continuous Integration and Continuous Deployment (CI/CD) pipelines are essential for modern software development. They automate building, testing, and deploying applications, ensuring consistent and reliable releases.</p>
        
        <h2>Understanding CI/CD Basics</h2>
        <p>CI/CD consists of two main components:</p>
        <ul>
          <li><strong>Continuous Integration:</strong> Automatically building and testing code changes</li>
          <li><strong>Continuous Deployment:</strong> Automatically deploying changes to production</li>
        </ul>
        
        <p>The goal is to reduce the manual effort involved in software delivery and increase reliability.</p>
        
        <h2>Setting Up a Basic CI/CD Pipeline</h2>
        <p>Here's a simplified workflow for a modern web application:</p>
        <ol>
          <li><strong>Source Control:</strong> Store code in Git repositories</li>
          <li><strong>Build Stage:</strong> Compile code, install dependencies, and create artifacts</li>
          <li><strong>Test Stage:</strong> Run unit tests, integration tests, and code quality checks</li>
          <li><strong>Deploy Stage:</strong> Push to staging environments and then to production</li>
          <li><strong>Monitoring:</strong> Track application performance and errors</li>
        </ol>
        
        <h2>Tools and Platforms</h2>
        <p>Several tools can help implement CI/CD pipelines:</p>
        <ul>
          <li><strong>GitHub Actions:</strong> Integrated with GitHub repositories</li>
          <li><strong>Jenkins:</strong> Self-hosted automation server</li>
          <li><strong>CircleCI/Travis CI:</strong> Cloud-based CI services</li>
          <li><strong>AWS CodePipeline/Google Cloud Build:</strong> Cloud provider solutions</li>
        </ul>
        
        <h2>Best Practices for Effective CI/CD</h2>
        <ol>
          <li>Keep build and test stages fast (under 10 minutes ideally)</li>
          <li>Use parallel execution for faster pipelines</li>
          <li>Implement environment-specific configurations</li>
          <li>Include security scanning in your pipeline</li>
          <li>Use infrastructure as code to provision environments</li>
          <li>Implement feature flags for safer deployments</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Investing in robust CI/CD pipelines pays dividends in development speed, code quality, and deployment reliability. Start with simple pipelines and gradually add complexity as your team becomes more comfortable with the approach.</p>
      `,
      date: "February 22, 2025",
      tags: ["DevOps", "CI/CD", "Cloud"],
      author: "Souvik",
      slug: "ci-cd-pipelines-web-applications",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
  ];
  
  return blogPosts.find((post) => post.slug === slug);
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;
  
  if (!post) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="heading-lg mb-4">Post not found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="section">
        <div className="container-custom max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
          </Link>
          
          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Post Header */}
          <div className="mb-8">
            <h1 className="heading-xl mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="mr-2 h-4 w-4" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-primary">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Post Content */}
          <div className="glass rounded-xl p-6 md:p-8 mb-8 animate-fade-in">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          
          {/* Share Links */}
          <div className="glass rounded-xl p-6 text-center">
            <h3 className="font-semibold mb-4">Share this article</h3>
            <div className="flex justify-center space-x-4">
              <a 
                href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
