import { useState } from "react";
import profile from "./assets/ranjitha.jpg";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "CampusHire",
      subtitle: "Placement Management Platform",
      description:
        "A full-stack placement platform that helps students discover opportunities, track applications, manage profiles, and prepare for their careers.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      featured: true,
      live: "https://campushire-frontend-4da2.onrender.com",
      github: "https://github.com/Ranjitha-Sangam/CampusHire",
    },
    {
      title: "Nestifyy",
      subtitle: "Accommodation Platform",
      description:
        "A full-stack accommodation platform with authentication, reviews, image uploads, and interactive maps.",
      tech: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
      live: "https://nestifyy-b4c3.onrender.com/listings",
      github: "https://github.com/Ranjitha-Sangam/nestifyy",
    },
    {
      title: "Weather App",
      subtitle: "React Weather Application",
      description:
        "A responsive weather application that provides real-time weather information using the OpenWeather API.",
      tech: ["React.js", "API", "CSS", "Render"],
      live: "https://weather-app-react-vdh8.onrender.com",
      github: "https://github.com/Ranjitha-Sangam/weather-app-react",
    },
  ];

  const skills = [
    {
      title: "Frontend",
      icon: "◈",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      icon: "⌘",
      skills: ["Node.js", "Express.js", "REST APIs", "Mongoose"],
    },
    {
      title: "Database",
      icon: "◉",
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Programming",
      icon: "</>",
      skills: ["Java", "C", "DSA"],
    },
    {
      title: "Tools",
      icon: "⚙",
      skills: ["Git", "GitHub", "Docker", "VS Code"],
    },
  ];

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-40 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[40%] w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold tracking-tight"
          >
            Ranjitha
            <span className="text-purple-500">.</span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* <a
            href="#contact"
            className="hidden md:block px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-purple-500 hover:text-white transition duration-300"
          >
            Let's Talk
          </a> */}

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-300"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 px-6 py-5">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-28 px-6"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                Open to Software Development Opportunities
              </div>

              <p className="text-purple-400 tracking-[5px] uppercase text-sm mb-5">
                Hello, I'm
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
                Ranjitha
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
                  Sangam S S
                </span>
              </h1>

              <h2 className="mt-6 text-xl md:text-2xl text-gray-300 font-medium">
                MCA Graduate <span className="text-purple-500">•</span> Software
                Developer <span className="text-purple-500">•</span> DSA
                Enthusiast
              </h2>

              <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-8">
                I build modern, responsive web applications and enjoy solving
                problems with clean and practical code. Currently focused on
                full-stack development and strengthening my DSA skills.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <a
                  href="#projects"
                  className="px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/20 transition duration-300 font-semibold"
                >
                  View My Work →
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="px-7 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition duration-300 font-semibold"
                >
                  Download Resume
                </a>
              </div>

              <div className="flex gap-6 mt-8 text-sm text-gray-500">
                <a
                  href="https://github.com/Ranjitha-Sangam"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/ranjitha-sangam/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Right profile */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-[70px]" />

                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-purple-400 via-fuchsia-500 to-purple-800">
                  <div className="w-full h-full rounded-full bg-[#080808] p-2">
                    <img
                      src={profile}
                      alt="Ranjitha"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-10 px-5 py-3 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-xl">
                  <p className="text-xs text-gray-500">Currently building</p>
                  <p className="text-sm font-semibold text-purple-300">
                    Full Stack Projects
                  </p>
                </div>

                <div className="absolute -top-5 -right-8 px-5 py-3 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl">
                  <p className="text-sm font-bold">MCA</p>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle small="GET TO KNOW ME" title="About" highlight="Me" />

          <div className="grid lg:grid-cols-5 gap-8 mt-16">
            <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  👩‍💻
                </div>
                <h3 className="text-2xl font-bold">Who I Am</h3>
              </div>

              <p className="text-gray-400 leading-8 text-lg">
                I'm an MCA Graduate, passionate about full-stack development and problem
                solving. I enjoy turning ideas into functional, responsive web
                applications using technologies like React.js, Node.js,
                Express.js and MongoDB.
              </p>

              <p className="text-gray-400 leading-8 text-lg mt-5">
                I am continuously learning, building projects and improving my
                DSA skills with Java. My goal is to grow as a software developer
                and contribute to meaningful products.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-9">
                <Stat number="3+" label="Projects" />
                <Stat number="MERN" label="Stack" />
                <Stat number="Java" label="DSA" />
              </div>
            </div>

            <div className="lg:col-span-2 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/5 p-8 md:p-10">
              <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-8">
                Education
              </p>

              <div className="space-y-8">
                <Education
                  degree="MCA"
                  college="Sir MVIT Bengaluru"
                  score="8.96 CGPA"
                />

                <div className="w-full h-px bg-white/10" />

                <Education
                  degree="BCA"
                  college="Yuvarajas College Mysore"
                  score="9.03 CGPA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative py-28 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            small="WHAT I WORK WITH"
            title="Technical"
            highlight="Skills"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {skills.map((category) => (
              <div
                key={category.title}
                className="group rounded-3xl border border-white/10 bg-black/40 p-7 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-gray-300 group-hover:border-purple-500/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            small="WHAT I'VE BUILT"
            title="Featured"
            highlight="Projects"
          />

          <div className="grid md:grid-cols-2 gap-7 mt-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 
          bg-white/[0.03] p-8 
          hover:border-purple-500/50 
          hover:-translate-y-2 
          transition-all duration-500
          ${project.featured ? "md:col-span-2" : ""}`}
              >
                {/* Number */}
                <div className="absolute top-6 right-7 text-6xl font-black text-white/[0.03]">
                  0{index + 1}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-6">
                    ⭐ FEATURED PROJECT
                  </div>
                )}

                <p className="text-purple-400 text-sm font-medium mb-2">
                  {project.subtitle}
                </p>

                <h3 className="text-3xl md:text-4xl font-bold mb-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 max-w-3xl">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-7">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-lg bg-purple-500/10 
                border border-purple-500/15 text-purple-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl bg-purple-600 
              hover:bg-purple-500 transition font-semibold text-sm"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl border border-white/15 
              hover:bg-white/10 transition font-semibold text-sm"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-28 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-400 text-sm font-semibold tracking-[4px] uppercase">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-5">
            Let's build something
            <span className="text-purple-500"> great.</span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-8">
            I'm always open to discussing software development opportunities,
            projects and new ideas.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="https://github.com/Ranjitha-Sangam"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-xl border border-white/15 hover:bg-white/10 transition font-semibold"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ranjitha-sangam/"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-xl border border-white/15 hover:bg-white/10 transition font-semibold"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Ranjitha Sangam S S<span className="mx-2">•</span>
        Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

/* ---------- Small Components ---------- */

function SectionTitle({ small, title, highlight }) {
  return (
    <div className="text-center">
      <p className="text-purple-400 text-xs font-bold tracking-[4px] uppercase">
        {small}
      </p>

      <h2 className="text-4xl md:text-5xl font-black mt-4">
        {title} <span className="text-purple-500">{highlight}</span>
      </h2>

      <div className="w-16 h-1 bg-purple-500 rounded-full mx-auto mt-6" />
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-center">
      <p className="text-xl font-bold text-purple-400">{number}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function Education({ degree, college, score }) {
  return (
    <div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-xl font-bold">{degree}</h3>
          <p className="text-gray-500 mt-2">{college}</p>
        </div>

        <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 text-sm whitespace-nowrap">
          {score}
        </span>
      </div>
    </div>
  );
}
