
import "./App.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "REST APIs",
  "JWT Authentication",
];

const projects = [
  {
    title: "QR Code Component",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A frontend practice project demonstrating clean HTML structure, CSS styling, and responsive component design.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/wendycollection9-ai/qr-code-project-2",
    number: "01",
    liveUrl: "https://wendycollection9-ai.github.io/qr-code-project-2/",
    icon: "⌘",
  },
  {
    title: "Digital Banking System",
    category: "BACKEND DEVELOPMENT",
    description:
      "A banking API featuring authentication, account management, transfers, transaction history, and simulated banking integration.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/wendycollection9-ai/digital-banking-system",
    number: "02",
    icon: "⌁",
  },
  {
    title: "Inventory Management System",
    category: "BACKEND DEVELOPMENT",
    description:
      "A backend development project using server-side JavaScript, database integration, and authentication-related tools.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github:
      "https://github.com/wendycollection9-ai/inventory-management-system-2",
    number: "03",
   
    icon: "▤",
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container navbar">
          <a className="brand" href="#home">
            Esther<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a className="nav-contact" href="#contact">
              Let's Talk ↗
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="container hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot"></span>
              Open to opportunities
            </div>

            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              Esther
              <br />
              Chinwendu <span>Oka.</span>
            </h1>

            <h2>Junior Full-Stack Developer</h2>

            <p className="hero-description">
              I build web experiences and backend applications, turning ideas
              into practical digital solutions. I'm passionate about learning,
              solving problems, and growing as a developer.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Projects ↗
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line"></span>
              Building. Learning. Growing.
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-decoration decoration-one"></div>
            <div className="visual-decoration decoration-two"></div>

            <div className="visual-card">
              <div className="visual-top">
                <div className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span className="visual-label">ESTHER.JS</span>
              </div>

              <div className="code-preview">
                <p><span className="code-purple">const</span> developer = {"{"}</p>
                <p className="code-indent">name: <span className="code-green">"Esther Oka"</span>,</p>
                <p className="code-indent">role: <span className="code-green">"Full-Stack Developer"</span>,</p>
                <p className="code-indent">skills: [</p>
                <p className="code-indent code-indent">
                  <span className="code-orange">"React", "Node.js"</span>
                </p>
                <p className="code-indent">],</p>
                <p className="code-indent">passion: <span className="code-green">"Building solutions"</span></p>
                <p>{"};"}</p>
                <p className="code-comment">// Always learning something new ✨</p>
              </div>

              <div className="visual-footer">
                <span>Portfolio / Home</span>
                <span className="visual-status">
                  <span className="availability-dot"></span>
                  Available
                </span>
              </div>
            </div>

            <div className="floating-badge badge-top">
              <span className="badge-symbol">{"</>"}</span>
              <span>
                <strong>Clean Code</strong>
                <small>Building with purpose</small>
              </span>
            </div>

            <div className="floating-badge badge-bottom">
              <span className="badge-symbol badge-yellow">✦</span>
              <span>
                <strong>Always Learning</strong>
                <small>Growing every day</small>
              </span>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">GET TO KNOW ME</p>
              <h2>A little about <span>me.</span></h2>
            </div>

            <div className="about-copy">
              <p>
                I'm a junior developer who has completed full-stack development
                training. I enjoy building frontend interfaces and developing
                backend APIs.
              </p>
              <p>
                I'm continuing to strengthen my skills through hands-on
                projects. I value curiosity, creativity, and continuous
                improvement, and I'm open to suitable junior roles,
                internships, and freelance opportunities.
              </p>
              <a className="text-link" href="#projects">
                Explore my work ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">WHAT I WORK WITH</p>
                <h2>My Technical Skills</h2>
              </div>
              <p className="section-subtitle">
                Technologies and tools I use to bring ideas to life.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {skill}
                  <span className="skill-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SOME OF MY WORK</p>
                <h2>Featured Projects</h2>
              </div>
              <p className="section-subtitle">
                A selection of projects that reflect my learning and
                development journey.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top">
                    <span className="project-number">{project.number} / 03</span>
                    <span className="project-icon">{project.icon}</span>
                  </div>

                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-status">
                  <span className="status-dot"></span>

                   {project.liveUrl && (
                     <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    View Live Website ↗
                     </a>
       )}

                    <a href={project.github} target="_blank" rel="noreferrer">
                      View Source Code on GitHub ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-card">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Have an opportunity <span>for me?</span></h2>
            <p className="contact-description">
              I'm open to junior developer roles, internships, collaborations,
              and freelance opportunities. I'd love to hear from you.
            </p>

            <a className="button button-primary" href="mailto:wendycollection9@gmail.com">
              Get in Touch ↗
            </a>

            
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            Esther<span>.</span>
          </a>
          <p>© {new Date().getFullYear()} Esther Chinwendu Oka. Built with React.</p>
          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
