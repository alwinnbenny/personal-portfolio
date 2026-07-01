import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";
import Particles from "../Components/Particles";

const projects = [
  {
    title: "College Alumni Management System",
    description:
      "A full-stack MERN application designed to streamline alumni engagement through role-based authentication, job postings, events, forums, and centralized alumni management.",
    image: "/alumni.png",
    tags: ["React", "Node.js", "Express.js", "MySQL"],
    link: "#",
    github: "https://github.com/alwinnbenny/Alumni-project",
  },
  {
    title: "Fruit Quality Detection",
    description:
      "An AI-powered fruit quality detection system that classifies fresh and rotten fruits using deep learning, helping automate quality inspection with real-time predictions.",
    image: "/Fruit-Detection.png",
    tags: ["Python", "YOLOv8", "OpenCV", "React"],
    link: "#",
    github: "https://github.com/alwinnbenny/fruit-detection",
  },
  {
    title: "Expense Tracker",
    description:
      "A modern, full-stack expense management and analytics web application with suspicious activity detection, daily spending limits, and rich visual analytics powered by Recharts.",
    image: "/Expense-Tracker.png",
    tags: ["React", "Django", "MySQL", "Recharts"],
    link: "#",
    github: "https://github.com/alwinnbenny/Expense-Tracker",
  },
  {
    title: "Movie Hub",
    description:
      "A sleek movie search and discovery web application that lets users explore trending films, search by title, and browse detailed movie info using the TMDB API.",
    image: "/Movie-Hub.png",
    tags: ["React", "Vite", "Javascript"],
    link: "#",
    github: "https://github.com/alwinnbenny/Movie-Hub",
  },
  // {
  //   title: "Breast Cancer Detection",
  //   description:
  //     "A deep learning application that uses a Convolutional Neural Network (CNN) to classify medical images as benign or malignant, supporting early breast cancer diagnosis with high accuracy.",
  //   image: null,
  //   tags: ["Python", "TensorFlow", "CNN", "OpenCV"],
  //   link: "#",
  //   github: "https://github.com/alwinnbenny/breast-cancer-detection",
  // },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
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
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider animate-fade-in">
            FEATURED WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Innovative solutions{" "}
            <span className="font-serif italic font-normal text-white">
              built with code and creativity.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 font-serif">
            From full-stack web applications to AI-powered solutions, each
            project reflects my passion for building impactful software.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden animate-fade-in group"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-surface to-primary/5 flex items-center justify-center">
                    <span className="text-primary/40 text-sm font-medium">
                      Image coming soon
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 hover:text-primary">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium border border-transparent
                       hover:border-primary/50 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FaGithub className="w-4 h-4" /> GitHub
                  </a>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/repos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
