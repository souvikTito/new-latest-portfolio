import { Download, FileText, Award, Briefcase, GraduationCap, User, Mail, Globe, Linkedin, MapPin, Phone, Star, Brain, Bot, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/Layout";

const Resume = () => {
  const resumeUrl = "#"; // Replace with actual resume PDF URL

  const personalInfo = {
    name: "Souvik",
    role: "Software Developer & AI/ML Engineer",
    location: "Bengaluru, India",
    email: "souvik_tito@outlook.com",
    phone: "(+91) 9932092539",
    github: "github.com/souvikTito",
    website: "indiantruck.in",
    linkedin: "linkedin.com/in/souvik"
  };

  const skills = {
    programming: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 }
    ],
    frontend: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Redux", level: 80 },
      { name: "Tailwind CSS", level: 95 }
    ],
    backend: [
      { name: "Spring Boot", level: 85 },
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "GraphQL", level: 75 }
    ],
    databases: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 80 },
      { name: "Vector Databases", level: 85 }
    ],
    ai_ml: [
      { name: "LangChain", level: 90 },
      { name: "Hugging Face", level: 85 },
      { name: "RAG Systems", level: 90 },
      { name: "Prompt Engineering", level: 95 },
      { name: "OpenAI API", level: 85 }
    ],
    cloud: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 }
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "GitHub Actions", level: 85 },
      { name: "Jira", level: 85 }
    ],
  };

  const experience = [
    {
      role: "Software Developer II",
      company: "Tech Innovations Inc",
      period: "Jan 2022 - Present",
      responsibilities: [
        "Led backend development team for cloud-native applications",
        "Implemented CI/CD pipelines and microservices architecture",
        "Designed and built RESTful APIs using Spring Boot",
        "Optimized database queries resulting in 40% performance improvement",
      ],
    },
    {
      role: "Software Developer I",
      company: "Digital Solutions Ltd",
      period: "Mar 2020 - Dec 2021",
      responsibilities: [
        "Developed responsive web applications using React and Redux",
        "Built Node.js backend services with Express and MongoDB",
        "Implemented authentication and authorization using JWT",
        "Collaborated with UI/UX designers for pixel-perfect implementation",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      details: "Specialized in Software Engineering. GPA: 3.8/4.0. Dean's List recipient.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      period: "2019 (Summer)",
      details: "Intensive 12-week program focused on modern web development technologies.",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "June 2023",
      description: "Validated expertise in developing and maintaining AWS-based applications using various AWS services.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&h=200",
      badgeColor: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "September 2022",
      description: "Demonstrated proficiency in Kubernetes cluster administration and application deployment.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=200",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      date: "March 2022",
      description: "Demonstrated knowledge of Scrum framework and its application in agile development environments.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&h=200",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "January 2023",
      description: "Mastery of deep learning techniques including neural networks, optimization algorithms, and practical applications.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=300&h=200",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "OpenAI",
      date: "December 2023",
      description: "Expertise in building, fine-tuning, and deploying large language models for various business applications.",
      image: "https://images.unsplash.com/photo-1677442135136-760c813029fb?auto=format&fit=crop&w=300&h=200",
      badgeColor: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "Vector Database Fundamentals",
      issuer: "Pinecone Academy",
      date: "April 2024",
      description: "Comprehensive understanding of vector databases, similarity search algorithms, and their applications in AI systems.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300&h=200",
      badgeColor: "bg-cyan-100 text-cyan-800"
    }
  ];

  return (
    <Layout>
      <section className="section">
        <div className="container-custom max-w-5xl">
          <div className="flex flex-wrap justify-between items-center mb-10">
            <h1 className="heading-xl mb-4 md:mb-0">
              Professional <span className="text-gradient">Resume</span>
            </h1>
            <Button asChild className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
              <a href={resumeUrl} download="Souvik_Resume.pdf">
                <Download className="h-4 w-4" /> Download PDF
              </a>
            </Button>
          </div>

          {/* Professional Header with Profile */}
          <div className="glass rounded-xl p-8 mb-10 animate-fade-in shadow-lg">
            <div className="md:flex items-start gap-10">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                  <div className="text-center">
                    <div className="text-7xl mb-4">👨‍💻</div>
                    <h2 className="text-xl font-bold">{personalInfo.name}</h2>
                    <p className="text-primary text-sm">{personalInfo.role}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${personalInfo.email}`} className="text-sm hover:text-primary transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-primary" />
                    <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                      {personalInfo.website}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-primary" />
                    <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                      {personalInfo.linkedin}
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-3 text-gradient">{personalInfo.name}</h2>
                  <h3 className="text-xl text-primary mb-4">{personalInfo.role}</h3>
                  <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg">
                    <p className="text-muted-foreground leading-relaxed">
                      Passionate software developer with 4+ years of experience building scalable applications
                      and distributed systems. Strong expertise in both frontend and backend technologies with
                      a focus on delivering high-quality, maintainable code. Adept at working in agile
                      environments and collaborating with cross-functional teams to achieve business objectives.
                      Specialized in AI/ML solutions and LLM implementations for enterprise applications.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">4+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI/ML Skills Section */}
          <div className="glass rounded-xl p-8 mb-10 animate-fade-in shadow-lg">
            <div className="flex items-center mb-8">
              <Brain className="h-6 w-6 mr-3 text-primary" />
              <h2 className="text-2xl font-bold">AI & ML Skills</h2>
            </div>

            <div className="space-y-4">
              {skills.ai_ml.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center">
                      {skill.name.includes("LLM") || skill.name.includes("Prompt") || skill.name.includes("OpenAI") ?
                        <Bot className="h-4 w-4 mr-1 text-primary" /> :
                        skill.name.includes("RAG") || skill.name.includes("Vector") ?
                          <Network className="h-4 w-4 mr-1 text-primary" /> :
                          <Brain className="h-4 w-4 mr-1 text-primary" />
                      }
                      {skill.name}
                    </span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Skills with Progress Bars */}
          <div className="glass rounded-xl p-8 mb-10 animate-fade-in shadow-lg">
            <div className="flex items-center mb-8">
              <Star className="h-6 w-6 mr-3 text-primary" />
              <h2 className="text-2xl font-bold">Professional Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {Object.entries(skills).filter(([key]) => key !== 'ai_ml').slice(0, 4).map(([category, items]) => (
                <div key={category} className="space-y-4">
                  <h3 className="font-semibold capitalize border-b pb-2">{category.replace('_', ' ')}</h3>
                  <div className="space-y-4">
                    {items.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="glass rounded-xl p-8 mb-10 animate-fade-in shadow-lg">
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 mr-3 text-primary" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30 pb-8 last:pb-0">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-3">
                      {job.period}
                    </span>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <div className="text-primary font-medium mb-3">{job.company}</div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="glass rounded-xl p-8 mb-10 animate-fade-in shadow-lg">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 mr-3 text-primary" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30 pb-8 last:pb-0">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-3">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <div className="text-primary font-medium mb-3">{edu.institution}</div>
                  </div>
                  <p className="text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section with Images */}
          <div className="glass rounded-xl p-8 animate-fade-in shadow-lg">
            <div className="flex items-center mb-8">
              <Award className="h-6 w-6 mr-3 text-primary" />
              <h2 className="text-2xl font-bold">Certifications & Licenses</h2>
            </div>

            <div className="space-y-10">
              {certifications.map((cert, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        className="w-full h-auto rounded-lg object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
                      />
                      <div className={`absolute top-3 right-3 ${cert.badgeColor} px-3 py-1 rounded-full text-xs font-medium`}>
                        {cert.date}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <div className="text-primary font-medium mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4" /> {cert.issuer}
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg mb-3">
                      <p className="text-muted-foreground">{cert.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="group">
                      View Certificate <FileText className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
