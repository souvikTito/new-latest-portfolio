
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Developer II",
      company: "Tech Innovations Inc",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description: "Leading backend development team for cloud-native applications. Implementing CI/CD pipelines and microservices architecture.",
      responsibilities: [
        "Designed and implemented RESTful APIs using Spring Boot serving over 50,000 daily active users",
        "Migrated monolithic architecture to microservices reducing deployment time by 75%",
        "Optimized database queries resulting in 40% performance improvement",
        "Mentored junior developers through code reviews and pair programming sessions",
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes", "MongoDB"],
      logo: "https://placehold.co/200x200?text=TI",
    },
    {
      id: 2,
      role: "Software Developer I",
      company: "Digital Solutions Ltd",
      location: "Boston, MA",
      period: "Mar 2020 - Dec 2021",
      description: "Developed and maintained scalable web applications using modern JavaScript frameworks and cloud services.",
      responsibilities: [
        "Built responsive user interfaces using React and Redux servicing 20,000+ users",
        "Developed Node.js backend services with Express and MongoDB",
        "Implemented authentication and authorization using JWT and OAuth2",
        "Collaborated with UI/UX designers to implement pixel-perfect interfaces",
      ],
      technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "AWS"],
      logo: "https://placehold.co/200x200?text=DS",
    },
    {
      id: 3,
      role: "Software Engineering Intern",
      company: "InnoTech Startups",
      location: "Remote",
      period: "May 2019 - Aug 2019",
      description: "Contributed to the development of a SaaS platform for marketing analytics.",
      responsibilities: [
        "Implemented new features for the analytics dashboard using React and D3.js",
        "Created data visualization components to display user engagement metrics",
        "Fixed bugs and improved UI performance by 25%",
        "Participated in Agile development process with daily stand-ups and sprint planning",
      ],
      technologies: ["JavaScript", "React", "D3.js", "CSS", "Git"],
      logo: "https://placehold.co/200x200?text=IS",
    },
  ];

  return (
    <Layout>
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-4">Work Experience</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the companies I've had the privilege to work with.
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
