import profile from "./assets/ranjitha.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "Nestifyy",
      description:
        "A full-stack accommodation platform with authentication, reviews, image uploads, and interactive maps.",
      tech: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
      live: "https://nestifyy-b4c3.onrender.com/listings",
      github: "https://github.com/Ranjitha-Sangam/nestifyy",
    },
    {
      title: "Weather App",
      description:
        "Responsive React weather application using OpenWeather API with real-time weather updates.",
      tech: ["React.js", "API", "CSS", "Render"],
      live: "https://weather-app-react-vdh8.onrender.com",
      github: "https://github.com/Ranjitha-Sangam/weather-app-react",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white transition-all duration-500 dark:bg-black dark:text-white bg-white text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 dark:bg-black/30 bg-white/70 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">
            Ranjitha<span className="text-purple-500">.</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-purple-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-500">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-500">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-40"
      >
        <div className="space-y-6">
          <img
            src={profile}
            alt="Ranjitha"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto object-cover border-4 border-purple-500 shadow-2xl hover:scale-105 transition duration-300"
          />
          <p className="text-purple-500 uppercase tracking-[6px] text-sm">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm <span className="text-purple-500">Ranjitha Sangam</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 font-medium">
            MCA Student | Software Developer | DSA Enthusiast
          </h2>

          <p className="max-w-2xl text-gray-400 mx-auto leading-relaxed">
            Passionate about building modern web applications using React,
            Node.js, Express.js and MongoDB. Focused on improving problem
            solving and full-stack development skills.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Ranjitha-Sangam"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ranjitha-sangam/"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-purple-500 hover:bg-purple-500 hover:text-white transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-purple-500">Me</span>
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              I’m an MCA student passionate about full-stack development and
              problem solving. I enjoy building responsive and scalable web
              applications using modern technologies like React.js, Node.js,
              Express.js, and MongoDB.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-3xl border border-gray-800 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Education
            </h3>

            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">MCA</h4>
                <p>Sir MVIT Bengaluru • 8.4 CGPA</p>
              </div>

              <div>
                <h4 className="font-semibold">BCA</h4>
                <p>Yuvarajas College Mysore • 9.03 CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Tech <span className="text-purple-500">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                Frontend
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                  "Bootstrap",
                  "Tailwind CSS",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                Backend And Database
              </h3>

              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express.js", "Mongoose", "REST APIs","MongoDB", "SQL"].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Programming */}
            <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                Programming
              </h3>

              <div className="flex flex-wrap gap-3">
                {["Java", "C", "DSA"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            {/* Tools */}
            <div className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                {["Git", "GitHub", "VS Code", "Turbo C++"].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-gray-800 rounded-3xl overflow-hidden hover:border-purple-500 transition duration-300 shadow-2xl"
            >
              <div className="h-52 bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl font-bold">
                {project.title}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="px-5 py-3 rounded-xl border border-purple-500 hover:bg-purple-500 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Contact <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Let's connect and build something amazing together.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:ranjithasangamss@gmail.com"
              className="px-6 py-4 rounded-2xl bg-black border border-gray-700 hover:border-purple-500 transition"
            >
              ranjithasangamss@gmail.com
            </a>

            <a
              href="https://github.com/Ranjitha-Sangam"
              target="_blank"
              className="px-6 py-4 rounded-2xl bg-black border border-gray-700 hover:border-purple-500 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Ranjitha Sangam S S • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
