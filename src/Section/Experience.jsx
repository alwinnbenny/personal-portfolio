import Particles from "../Components/Particles";

const experiences = [
  {
    period: "2026 — Present",
    role: "Software Developer Trainee",
    company: "Quals Technologies",
    description:
      "Working as a Software Developer Trainee, contributing to the development of scalable web applications and backend services. Collaborating with the development team to build responsive user interfaces, implement REST APIs, and develop efficient software solutions using modern web technologies.",
    technologies: ["React.js", "Node.js", "Python", "JavaScript"],
    current: true,
  },
  {
    period: "2025",
    role: "AI/ML Intern",
    company: "Intrnforte",
    description:
      "Completed a one-month AI/ML internship focused on machine learning and deep learning. Worked on data preprocessing, model training, model evaluation, and implementing AI solutions for real-world classification tasks.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    current: false,
  },
  {
    period: "2024",
    role: "Web Developer",
    company: "College of Engineering Poonjar",
    description:
      "Developed responsive full-stack web applications for academic projects using React.js, Node.js, Express.js, and MySQL while collaborating with faculty and team members throughout the development lifecycle.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JavaScript"],
    current: false,
  },
  {
    period: "2024",
    role: "Python Programming Trainee",
    company: "LinkedIn Learning",
    description:
      "Completed professional Python programming training covering programming fundamentals, object-oriented programming, data structures, algorithms, and problem-solving techniques.",
    technologies: ["Python", "OOP", "Data Structures", "Algorithms"],
    current: false,
  },
  {
    period: "2022 — 2026",
    role: "Bachelor of Technology (Computer Science & Engineering)",
    company: "College of Engineering Poonjar",
    description:
      "Graduated with a Bachelor's degree in Computer Science and Engineering. Built a strong foundation in software engineering, full-stack web development, databases, data structures & algorithms, and artificial intelligence through academic coursework and practical projects.",
    technologies: ["React.js", "Node.js", "Python", "SQL", "JavaScript"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          particleColors={["#20B2A6", "#2dd4bf", "#ffffff"]}
          particleCount={500}
          particleSpread={8}
          speed={0.06}
          particleBaseSize={70}
          alphaParticles={true}
          sizeRandomness={1}
          disableRotation={false}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="  max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground font-serif
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to web
            developer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping"/>}
                </div>
                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/70 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techId) => (
                        <span
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                          key={techId}
                        >
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
      </div>
    </section>
  );
};
