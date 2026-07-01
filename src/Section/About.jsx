import { Code2, Cpu, Globe, Rocket } from "lucide-react";
import Particles from "../Components/Particles";

const highlights = [
  {
    icon: Code2,
    title: "React Development",
    description:
      "Building interactive, reusable, and scalable user interfaces with React and modern JavaScript.",
  },
  {
    icon: Cpu,
    title: "Problem Solving",
    description:
      "Writing efficient, maintainable code with a focus on performance and best development practices.",
  },
  {
    icon: Globe,
    title: "Responsive Websites",
    description:
      "Creating mobile-friendly, responsive web applications that work seamlessly across all devices.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "Passionate about exploring new technologies and improving skills to build better digital experiences.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden ">
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
      <div className="container nx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                {" "}
                About Me
              </span>
            </div>
            <h2 className="text-secondary-foreground text-4xl md:text-5xl  font-bold leading-tight animate-fade-in animation-delay-100">
              Code with purpose,
              <span className="font-serif italic font-normal text-white">
                {" "}
                design with passion.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Full Stack Developer with a strong passion for crafting
                modern web applications that are fast, scalable, and
                user-centric. Currently working as a Software Development
                Intern, I enjoy transforming ideas into digital experiences
                through thoughtful design and clean, maintainable code.
              </p>

              <p>
                I specialize in React, JavaScript, Node.js, MongoDB, MySQL, and
                Tailwind CSS, with a focus on building responsive interfaces and
                robust backend systems. I believe great software is created by
                balancing performance, functionality, and exceptional user
                experience.
              </p>

              <p>
                Every project is an opportunity to learn, innovate, and grow.
                I'm committed to continuously improving my skills, embracing new
                technologies, and contributing to impactful products while
                working toward becoming a highly skilled Full Stack Engineer.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I strive to create reliable, high-performance web applications
                with a strong focus on usability and maintainability.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
