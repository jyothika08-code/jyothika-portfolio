function App() {
  return (
    <div
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      {/* HERO SECTION */}
      <section style={{ marginTop: "80px" }}>
        <h1
          style={{
            fontSize: "4.5rem",
            color: "#8b5cf6",
            marginBottom: "25px",
          }}
        >
          Jyothika Seelam
        </h1>

        <h2
          style={{
            color: "#d1d5db",
            marginBottom: "40px",
            fontSize: "2rem",
          }}
        >
          Full Stack Developer | AI Enthusiast
        </h2>

        <p
          style={{
            fontSize: "1.3rem",
            maxWidth: "850px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          B.Tech CSE Student at Lakireddy Bali Reddy College of Engineering.
          Passionate about building scalable web applications, AI-powered
          solutions and solving real-world problems through technology.
        </p>

        <p
          style={{
            color: "#8b5cf6",
            fontSize: "1.3rem",
            fontWeight: "600",
            marginTop: "30px",
          }}
        >
          Java • Python • C • C++ • React • HTML • CSS • JavaScript
        </p>

        <div style={{ marginTop: "40px" }}>
          <button
            style={{
              padding: "14px 28px",
              background: "#915EFF",
              color: "white",
              border: "none",
              borderRadius: "10px",
              marginRight: "15px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
          <a
  href="#projects"
  style={{ color: "white", textDecoration: "none" }}
>
  View Projects
</a>
          </button>

          <button
            style={{
              padding: "14px 28px",
              background: "transparent",
              color: "white",
              border: "2px solid #915EFF",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            <a
  href="#contact"
  style={{ color: "white", textDecoration: "none" }}
>
  Contact Me
</a>
          </button>
        </div>

        <div
          style={{
            marginTop: "30px",
            fontSize: "1.1rem",
          }}
        >
          <a
            href="https://github.com/jyothika08-code"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#8b5cf6",
              textDecoration: "none",
              marginRight: "15px",
            }}
          >
            GitHub
          </a>

          |

          <a
            href="https://www.linkedin.com/in/jyothika-r-7aa33038a"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#8b5cf6",
              textDecoration: "none",
              marginLeft: "15px",
            }}
          >
            LinkedIn
          </a>
          
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section style={{ marginTop: "120px" }}>
        <h2
          style={{
            color: "#8b5cf6",
            fontSize: "3rem",
            marginBottom: "40px",
          }}
        >
          Skills
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {[
            "Java",
            "Python",
            "C",
            "C++",
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "Git",
            "GitHub",
          ].map((skill) => (
            <div
              key={skill}
              style={{
                border: "1px solid #8b5cf6",
                padding: "15px 25px",
                borderRadius: "10px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

     {/* PROJECTS SECTION */}
<section id="projects" style={{ marginTop: "120px" }}>
  <h2
    style={{
      color: "#8b5cf6",
      fontSize: "3rem",
      marginBottom: "50px",
    }}
  >
    Projects
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "25px",
    }}
  >
    {[
      {
        title: "AI Hub",
        desc: "Language Translator and AI Chatbot platform.",
        github: "https://github.com/jyothika08-code",
      },
      {
        title: "Weather Dashboard",
        desc: "Real-time weather forecasting application using APIs.",
        github: "https://github.com/jyothika08-code",
      },
      {
        title: "Todo App",
        desc: "Task management application with CRUD operations.",
        github: "https://github.com/jyothika08-code",
      },
      {
        title: "E-Commerce Website",
        desc: "Responsive online shopping website with product listings.",
        github: "https://github.com/jyothika08-code",
      },
    ].map((project) => (
     <div
  key={project.title}
  style={{
    width: "300px",
    background: "#111827",
    padding: "25px",
    borderRadius: "15px",
    border: "1px solid #8b5cf6",
    transition: "0.3s ease",
    cursor: "pointer",
  }}
>
        <h3 style={{ color: "#8b5cf6" }}>{project.title}</h3>

        <p
          style={{
            marginTop: "15px",
            lineHeight: "1.6",
            minHeight: "80px",
          }}
        >
          {project.desc}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "10px 18px",
            border: "1px solid #8b5cf6",
            borderRadius: "8px",
            color: "#8b5cf6",
          }}
        >
          View Code
        </a>
      </div>
    ))}
  </div>
</section>
{/* EDUCATION SECTION */}
<section style={{ marginTop: "120px" }}>
  <h2
    style={{
      color: "#8b5cf6",
      fontSize: "3rem",
      marginBottom: "40px",
    }}
  >
    Education
  </h2>

  <div
    style={{
      maxWidth: "700px",
      margin: "auto",
      background: "#111827",
      padding: "30px",
      borderRadius: "15px",
      border: "1px solid #8b5cf6",
    }}
  >
    <h3 style={{ color: "#8b5cf6" }}>
      Lakireddy Bali Reddy College of Engineering
    </h3>

    <p style={{ marginTop: "15px" }}>
      Bachelor of Technology (B.Tech)
    </p>

    <p style={{ marginTop: "10px" }}>
      Computer Science & Engineering
    </p>

    <p style={{ marginTop: "10px" }}>
      2023 - 2027
    </p>
    
  </div>
</section>
<div style={{ marginTop: "25px" }}>
  <a
    href="/resume.pdf"
    download
    style={{
      background: "#8b5cf6",
      color: "white",
      padding: "12px 24px",
      borderRadius: "10px",
      display: "inline-block",
      textDecoration: "none",
    }}
  >
    Download Resume
  </a>
</div>

      {/* CONTACT SECTION */}
<section
  id="contact"
  style={{
    marginTop: "120px",
    paddingBottom: "100px",
  }}
>
  <h2
    style={{
      color: "#8b5cf6",
      fontSize: "3rem",
      marginBottom: "30px",
    }}
  >
    Contact
  </h2>

  <p style={{ fontSize: "1.2rem" }}>
    📧 jyothikaareddy08@gmail.com
  </p>

  <p style={{ marginTop: "15px" }}>
    Open to internships, collaborations and opportunities.
  </p>

  <div style={{ marginTop: "25px" }}>
    <a
      href="https://github.com/jyothika08-code"
      target="_blank"
      rel="noreferrer"
      style={{
        marginRight: "20px",
        color: "#8b5cf6",
      }}
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/jyothika-r-7aa33038a"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#8b5cf6",
      }}
    >
      LinkedIn
    </a>
    
  </div>
</section>
    </div>
  );
}

export default App;