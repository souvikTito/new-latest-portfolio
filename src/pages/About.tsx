
import { Briefcase, GraduationCap, Award, Heart } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const timeline = [
    {
      icon: <Briefcase />,
      date: "Jun 2023 - Present",
      title: "Software Developer II (AI/ML Focus)",
      company: "I&T Technology Services",
      description: "Led AI integration for API Hub, deploying NLP models (BERT, GPT-3.5) and autonomous agents. Designed PyTorch-based recommendation systems and cloud-native microservices on Azure/AWS.",
    },
    {
      icon: <Briefcase />,
      date: "Feb 2021 - May 2023",
      title: "Software Developer (Full-Stack)",
      company: "V2Soft Pvt. Ltd.",
      description: "Built scalable Java/Python microservices with Spring Boot and Kafka. Developed real-time data pipelines for ML feature stores and automated workflows with Python scripts.",
    },
    {
      icon: <GraduationCap />,
      date: "2016 - 2020",
      title: "Bachelor of Engineering (ECE)",
      company: "West Bengal University of Technology",
      description: "Specialized in Java programming, circuit design, and data structures. Coursework in Python for AI/ML applications.",
    },
    {
      icon: <Award />,  // Assuming you have an award icon
      date: "2024",
      title: "Certifications",
      company: "Self-Learning",
      description: "Deep Learning Specialization (Coursera), Generative AI with LLMs (AWS), and Hugging Face NLP Course.",
    },
  ];

  const techStack = {
    languages: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Redux", "GraphQL"],
    backend: ["Spring Boot", "Node.js", "Express", "NestJS", "RESTful APIs"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    ai: ["OpenAI GPT Models", "Hugging Face Transformers", "Langchain", "Claude AI", "Anthropic Models"],
    machinelearning: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    llm: ["Large Language Models", "Prompt Engineering", "Model Fine-tuning", "RAG Implementations"],
    aitools: ["Perplexity AI", "Ollama", "LM Studio", "Mistral AI"],
    cloud: ["AWS", "Azure", "Google Cloud"],
    devops: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    tools: ["Git", "GitHub Actions", "Jira", "Postman", "VS Code"],
  };

  const funFacts = [
    "Contributes to 3+ open source projects weekly",
    "Reads 20+ dev blogs per week",
    "Solved 500+ coding challenges",
    "Mentored 12 junior developers",
  ];

  return (
    <Layout>
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey, experiences, and the technologies I work with.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="glass rounded-2xl p-8 h-full animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">👨‍💻</div>
                  <h2 className="text-2xl font-bold">Souvik</h2>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in delay-100">
              <h2 className="heading-lg">My Story</h2>
              <p>
                I'm a Software Developer II with over 4 years of experience building scalable web applications and distributed systems. My passion lies in creating efficient, maintainable code and solving complex problems.
              </p>
              <p>
                Starting as a self-taught programmer, I quickly grew my skills through continuous learning and practical applications. Today, I specialize in full-stack development with a focus on cloud architecture and microservices.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or mentoring aspiring developers.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="heading-lg text-center mb-12">Experience & Education</h2>
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-border"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className={`sm:w-1/2 ${index % 2 === 0 ? "ml-auto pl-12 sm:pl-20" : "mr-auto pr-12 sm:pr-20"}`}>
                      <div className="glass rounded-xl p-6 animate-fade-in">
                        <div className="text-sm text-muted-foreground mb-1">{item.date}</div>
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <div className="text-primary mb-3">{item.company}</div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="heading-lg text-center mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category} className="glass rounded-xl p-6 animate-fade-in">
                  <h3 className="text-xl font-bold capitalize mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="heading-lg text-center mb-12 flex items-center justify-center gap-2">
              Fun Facts <Heart className="h-6 w-6 text-red-500 animate-pulse" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-6 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{["🚀", "📚", "💡", "👨‍🏫"][index]}</div>
                  <p>{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
