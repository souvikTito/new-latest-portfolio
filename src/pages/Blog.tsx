
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const allTags = ["All", "Java", "React", "Cloud", "DevOps", "Architecture", "Microservices", "LLM", "SLM", "MLOps", "Agents", "AI", "RAG", "Vector Databases", "AI Safety", "Security", "Deployment", "Edge Computing", "Inference", "Optimization", "Frontend", "Backend"];

  const blogPosts = [


    {
      id: 1,
      title: "Building Multi-Agent Systems with LangChain and CrewAI",
      excerpt: "A comprehensive guide to designing collaborative AI agent systems that specialize in different tasks.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "March 15, 2025",
      tags: ["LLM", "Agents", "AI"],
      author: "Souvik",
      slug: "building-multi-agent-systems",
      image: "https://images.unsplash.com/photo-1677442135136-760c813029fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      title: "RAG Systems: Beyond Basic Retrieval for LLMs",
      excerpt: "Advanced techniques for improving retrieval augmented generation systems with semantic chunking and hybrid search.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "February 22, 2025",
      tags: ["RAG", "LLM", "Vector Databases"],
      author: "Souvik",
      slug: "advanced-rag-systems",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
    {
      id: 3,
      title: "Fine-tuning Small Language Models for Production",
      excerpt: "Strategies for efficiently fine-tuning smaller, more cost-effective LLMs for specific business domains.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "January 10, 2025",
      tags: ["LLM", "SLM", "MLOps"],
      author: "Souvik",
      slug: "fine-tuning-small-language-models",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
    {
      id: 4,
      title: "Building AI-powered React Applications",
      excerpt: "Integrating modern AI capabilities into React applications for enhanced user experiences.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "December 5, 2024",
      tags: ["React", "AI", "Frontend"],
      author: "Souvik",
      slug: "ai-powered-react-applications",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
    {
      id: 5,
      title: "Efficient LLM Inference on Edge Devices",
      excerpt: "Optimizing large language models to run efficiently on resource-constrained edge devices.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "November 18, 2024",
      tags: ["LLM", "Edge Computing", "Inference", "Optimization"],
      author: "Souvik",
      slug: "llm-inference-edge-devices",
      image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 6,
      title: "Secure LLM Deployments: Protecting Against Prompt Injection",
      excerpt: "Essential security measures for protecting your LLM applications from prompt injection and other attacks.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "October 30, 2024",
      tags: ["LLM", "Security", "AI Safety", "Deployment"],
      author: "Souvik",
      slug: "secure-llm-deployments",
      image: "https://images.unsplash.com/photo-1618044619888-009e412ff12a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    },
    {
      id: 7,
      title: "Vector Databases: Choosing the Right Solution for Your RAG System",
      excerpt: "A comparison of popular vector databases for building efficient and scalable retrieval augmented generation systems.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "October 5, 2024",
      tags: ["RAG", "Vector Databases", "AI", "Database"],
      author: "Souvik",
      slug: "vector-databases-rag-systems",
      image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },


    {
      id: 8,
      title: "Optimizing Microservices Communication Patterns",
      excerpt: "Learn the best practices for efficient inter-service communication in distributed systems.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "March 15, 2025",
      tags: ["Microservices", "Architecture", "Cloud"],
      author: "Souvik",
      slug: "optimizing-microservices-communication",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
    {
      id: 9,
      title: "CI/CD Pipelines for Modern Web Applications",
      excerpt: "A comprehensive guide to setting up continuous integration and deployment workflows.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "February 22, 2025",
      tags: ["DevOps", "CI/CD", "Cloud"],
      author: "Souvik",
      slug: "ci-cd-pipelines-web-applications",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
    {
      id: 10,
      title: "State Management Patterns in React Applications",
      excerpt: "Comparing different state management solutions for modern React applications.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "January 10, 2025",
      tags: ["React", "JavaScript", "Frontend"],
      author: "Souvik",
      slug: "state-management-patterns-react",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },
    {
      id: 11,
      title: "Effective Error Handling in Java Microservices",
      excerpt: "Best practices for handling errors and exceptions in Java-based microservices.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "December 5, 2024",
      tags: ["Java", "Microservices", "Backend"],
      author: "Souvik",
      slug: "error-handling-java-microservices",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    },

  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = activeTag === "All" || post.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <Layout>
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-4">Developer Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on software development and technology.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Search and filters sidebar */}
            <div className="md:w-1/4">
              <div className="glass rounded-xl p-6 sticky top-24">
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <Button
                        key={tag}
                        variant={activeTag === tag ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveTag(tag)}
                        className="rounded-full"
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog posts grid */}
            <div className="md:w-3/4">
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post, index) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className={cn(
                        "glass rounded-xl overflow-hidden block card-hover animate-fade-in",
                        { "delay-100": index === 1, "delay-200": index === 2, "delay-300": index === 3 }
                      )}
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-48 md:h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{post.date}</span>
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h2>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-primary font-medium">
                            Read more <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="glass rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
