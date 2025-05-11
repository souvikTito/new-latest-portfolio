import { Briefcase, Calendar, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Developer & AI Engineer",
      company: "I&T Technology Services",
      location: "Bengaluru, India",
      period: "June 2023 - May 2024",
      description: "Led AI/ML integration for cloud-native applications and API solutions, with a focus on NLP and autonomous agents.",
      responsibilities: [
        "Developed AI-powered API Hub with NLP search (spaCy, BERT) and GPT-3.5 auto-documentation",
        "Built autonomous customer support agents using LangChain, reducing tier-1 queries by 40%",
        "Designed PyTorch LSTM models for predictive maintenance (F1-score: 0.92) deployed on Azure IoT Edge",
        "Orchestrated microservices with Docker/Kubernetes and implemented JWT-based auth using Spring Security",
        "Mentored junior developers in AI/ML best practices and Agile methodologies",
      ],
      technologies: ["Python", "PyTorch", "NLP", "LLMs", "LangChain", "Azure ML", "Docker", "Kubernetes", "Java", "Spring Boot"],
      logo: "https://placehold.co/200x200?text=I&T",
    },
    {
      id: 2,
      role: "Software Developer (AI/ML Focus)",
      company: "V2Soft Pvt. Ltd.",
      location: "Bengaluru, India",
      period: "Feb 2021 - May 2023",
      description: "Pioneered AI/ML prototypes and data engineering solutions for enterprise applications.",
      responsibilities: [
        "Researched time-series forecasting models (ARIMA, LSTM) for IoT sensor data analytics",
        "Developed Python automation scripts (BeautifulSoup, Selenium) for data extraction pipelines",
        "Built real-time Kafka streams for ML feature stores and event-driven architectures",
        "Implemented RESTful APIs with Spring Boot and React.js for dashboard visualizations",
      ],
      technologies: ["Python", "Java", "Apache Kafka", "Spring Boot", "React", "AWS", "MySQL", "MongoDB"],
      logo: "https://placehold.co/200x200?text=V2",
    },
    {
      id: 3,
      role: "AI Research Intern",
      company: "Tech Research Lab",
      location: "Remote",
      period: "May 2019 - Aug 2019",
      description: "Contributed to open-source AI projects and NLP research initiatives.",
      responsibilities: [
        "Fine-tuned BERT models for sentiment analysis on customer reviews (accuracy: 89%)",
        "Created data visualization tools for model performance metrics using Matplotlib/D3.js",
        "Published research on transformer architectures for low-resource languages",
      ],
      technologies: ["Python", "PyTorch", "Transformers", "NLP", "Hugging Face", "Git"],
      logo: "https://placehold.co/200x200?text=TRL",
    },
  ];

  return (
    <Layout>
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-4">Work Experience</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in software engineering and AI/ML development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={cn(
                  "glass rounded-xl p-6 md:p-8 animate-fade-in",
                  { "delay-100": index === 1, "delay-200": index === 2 }
                )}
              >
                <div className="md:flex gap-6">
                  <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                    <div className="w-24 h-24 rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <div className="text-primary text-lg">{exp.company}</div>
                      </div>
                      <div className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:gap-4">
                        <div className="flex items-center gap-1 mb-2 sm:mb-0">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-lg mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-muted-foreground">{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;