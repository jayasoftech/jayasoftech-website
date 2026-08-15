import "./App.css";

function App() {
  return (
    <div className="app">

   {/* NAVBAR */}
    <header className="navbar">

      <div className="container nav-container">

        <div className="logo">
          Jaya<span>Soft</span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#quick-help">Quick Help</a>
          <a href="#pricing">Pricing</a>
          <a href="#project">Project</a>
          <a href="#technology">Technology</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>

      {/* MOBILE NAVIGATION */}
      <nav className="mobile-nav">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#quick-help">Quick Help</a>
        <a href="#pricing">Pricing</a>
        <a href="#project">Project</a>
        <a href="#technology">Technology</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>

      {/* HERO */}
      <section className="hero">

        <div className="container hero-content">

          <p className="eyebrow">
              WEB APPLICATION DEVELOPMENT & TECHNICAL TROUBLESHOOTING
          </p>

          <h1>
            <span className="hero-word">Build.</span>
            <span className="hero-word accent">Fix.</span>
            <span className="hero-word">Deploy.</span>
          </h1>

          <p className="hero-text">
            Need a business application built, an existing system fixed,
            or your application deployed properly? JayaSoft provides
            practical software development and technical troubleshooting
            using Spring Boot, React, PostgreSQL, and Docker.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="btn primary">
              Contact JayaSoft
            </a>

            <a href="#services" className="btn secondary">
              Our Services
            </a>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="section">

        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              WHAT JAYASOFT CAN DO
            </p>

            <h2>
              Practical software solutions
            </h2>

            <p>
              From fixing an existing application to building
              and deploying a new business system.
            </p>

          </div>


          <div className="services-grid">

            <Service
              number="01"
              title="Troubleshoot & Fix"
              text="Having problems with Spring Boot, React, PostgreSQL, Hibernate/JPA, REST APIs, or Docker? We diagnose the problem and help get your application working again."
            />

            <Service
              number="02"
              title="Dockerize & Deploy"
              text="Move your application from a development machine to a reliable Docker environment with Dockerfile, Docker Compose, PostgreSQL, networking, volumes, and configuration."
            />

            <Service
              number="03"
              title="Build Business Applications"
              text="Need a custom internal system? JayaSoft can build practical business applications for transactions, master data, workflows, reporting, and administration."
            />

          </div>

        </div>

      </section>

      {/* HOW WE WORK */}
      <section id="process" className="section">

        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              HOW WE WORK
            </p>

            <h2>
              From problem to practical solution
            </h2>

            <p>
              A straightforward approach to building, fixing,
              and deploying business applications.
            </p>

          </div>

          <div className="process-grid">

            <div className="process-card">
              <span>01</span>
              <h3>Understand</h3>
              <p>
                We discuss your business problem, requirements,
                or existing application.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Diagnose</h3>
              <p>
                We investigate the technical issue and identify
                the most practical solution.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Build / Fix</h3>
              <p>
                We implement the solution, test the application,
                and make sure the workflow works as expected.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>
              <h3>Deploy</h3>
              <p>
                We help prepare the application for deployment
                and actual business use.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* QUICK TECHNICAL HELP */}
      <section id="quick-help" className="section quick-help-section">

        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              NEED HELP NOW?
            </p>

            <h2>
              Stuck on a technical problem?
            </h2>

            <p>
              Send us your error, logs, or technical problem.
              JayaSoft can help diagnose the issue and determine
              the most practical solution.
            </p>

          </div>

          <div className="quick-help-card">
            <h3>
              Technical Problem Diagnosis
            </h3>

            <p>
              Send us your error message, log, screenshot, or describe
              the problem you are experiencing.
            </p>

           <ul className="quick-help-features">
              <li>Spring Boot / Java errors</li>
              <li>React.js problems</li>
              <li>PostgreSQL / SQL issues</li>
              <li>Hibernate / JPA errors</li>
              <li>REST API problems</li>
              <li>Docker deployment issues</li>
            </ul>

            <div className="quick-help-price">
              Starting from Rp150.000
            </div>

            <a
              href="https://wa.me/6281268018828?text=Hello%20JayaSoft,%20I%20need%20technical%20help.%0A%0AProblem:%20%0A%0ATechnology:%20%0A%0AError%20message:%20"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary pricing-button"
            >
              Get Technical Help
            </a>   

          </div>

        </div>

      </section>

      {/* SERVICES PRICING */}
      <section id="pricing" className="section services-section">
        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              OTHER SERVICES
            </p>

            <h2>
              Need more than a diagnosis?
            </h2>

            <p>
              Once the problem is identified, JayaSoft can also help
              fix the application or deploy it properly.
            </p>

          </div>

          <div className="pricing-grid">

            {/* BUG FIX */}

            <div className="pricing-card">

              <p className="pricing-number">
                01
              </p>

              <h3>
                Bug Fix & Troubleshooting
              </h3>

              <div className="pricing-price">
                Starting from Rp300.000
              </div>

              <p className="pricing-description">
                Practical troubleshooting and implementation
                for application errors and technical problems.
              </p>

              <ul className="pricing-features">
                <li>Java / Spring Boot</li>
                <li>React.js</li>
                <li>PostgreSQL / SQL</li>
                <li>Hibernate / JPA</li>
                <li>REST API problems</li>
              </ul>

              <a
                href="https://wa.me/628XXXXXXXXXX?text=Hello%20JayaSoft,%20I%20need%20Bug%20Fix%20%26%20Troubleshooting.%0A%0ATechnology:%20%0AProblem:%20%0AError%20message%2Flog:%20"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary pricing-button"
              >
                Contact via WhatsApp
              </a>

            </div>


            {/* DOCKER / DEPLOYMENT */}

            <div className="pricing-card">

              <p className="pricing-number">
                02
              </p>

              <h3>
                Docker & Deployment
              </h3>

              <div className="pricing-price">
                Starting from Rp500.000
              </div>

              <p className="pricing-description">
                Get your application properly configured,
                containerized, and deployed.
              </p>

              <ul className="pricing-features">
                <li>Docker configuration</li>
                <li>PostgreSQL deployment</li>
                <li>Application deployment</li>
                <li>Docker troubleshooting</li>
                <li>Deployment troubleshooting</li>
              </ul>

              <a
                href="https://wa.me/628XXXXXXXXXX?text=Hello%20JayaSoft,%20I%20need%20Docker%20%26%20Deployment%20assistance.%0A%0AApplication:%20%0ADeployment%20problem:%20%0ADocker%2FPostgreSQL%20details:%20"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary pricing-button"
              >
                Contact via WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECT */}
      <section id="project" className="section project-section">

        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              SELECTED PROJECT
            </p>

            <h2>
              Business Management System
            </h2>

            <p>
              A full-stack business management application designed to
              support operational transactions, financial workflows,
              master data, user authorization, audit tracking, and
              system administration.
            </p>

          </div>


          <div className="project-content">

            {/* LEFT SIDE */}
            <div>

              <h3>
                Full-stack application
              </h3>

              <p className="project-description">
                Designed and developed a business management system
                with role-based access, transaction workflows,
                financial processing, audit trails, and database
                administration.
              </p>


              <h3 className="project-subtitle">
                Key capabilities
              </h3>

              <ul className="project-features">

                <li>
                  Role-based authentication and authorization
                </li>

                <li>
                  Business transaction workflows
                </li>

                <li>
                  Master data management
                </li>

                <li>
                  Financial and payment workflows
                </li>

                <li>
                  Audit trail and version management
                </li>

                <li>
                  Database backup and restore
                </li>

                <li>
                  Dockerized deployment
                </li>

              </ul>


              <div className="technology-list">

                <span>Java</span>
                <span>Spring Boot</span>
                <span>React.js</span>
                <span>PostgreSQL</span>
                <span>Docker</span>
                <span>Hibernate / JPA</span>
                <span>Spring Security</span>
                <span>REST API</span>

              </div>

            </div>


            {/* RIGHT SIDE */}
            <div className="project-box">

              <div className="project-box-header">
                APPLICATION ARCHITECTURE
              </div>


              <div className="architecture">

                <div className="architecture-item">
                  React.js
                </div>

                <div className="arrow">
                  ↓
                </div>

                <div className="architecture-item">
                  Spring Boot REST API
                </div>

                <div className="arrow">
                  ↓
                </div>

                <div className="architecture-item">
                  PostgreSQL
                </div>

                <div className="architecture-deployment">

                  <div className="deployment-label">
                    CONTAINERIZED DEPLOYMENT
                  </div>

                  <div className="architecture-item docker">
                    Docker
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="section">

        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              TECHNOLOGY
            </p>

            <h2>
              Technologies we work with
            </h2>

            <p>
              Practical technologies for building, troubleshooting,
              and deploying modern business applications.
            </p>

          </div>


          <div className="tech-grid">

            <div>
              <strong>Java</strong>
              <span>Backend development</span>
            </div>

            <div>
              <strong>Spring Boot</strong>
              <span>REST APIs & business logic</span>
            </div>

            <div>
              <strong>React.js</strong>
              <span>Modern web interfaces</span>
            </div>

            <div>
              <strong>PostgreSQL</strong>
              <span>Database & SQL</span>
            </div>

            <div>
              <strong>Hibernate / JPA</strong>
              <span>ORM & persistence</span>
            </div>

            <div>
              <strong>Spring Security</strong>
              <span>Authentication & RBAC</span>
            </div>

            <div>
              <strong>Docker</strong>
              <span>Containerization & deployment</span>
            </div>

            <div>
              <strong>REST API</strong>
              <span>System integration</span>
            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <div className="container contact-content">

          <p className="eyebrow">
            START A CONVERSATION
          </p>

          <h2>
            Have a system that needs to be built or fixed?
          </h2>

          <p>
            Tell us what you are trying to build, what is not working,
            or what you need to deploy. We can start with a technical
            assessment and determine the most practical solution.
          </p>

          <div className="contact-actions">

            <a
              href="mailto:jayasoftdigital9@gmail.com"
              className="btn primary"
            >
              Email JayaSoft
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="container footer-content">

          <div>
            <strong>JayaSoft</strong>

            <p>
              Software Development & Technical Solutions
            </p>
          </div>

          <div>
            © 2026 JayaSoft
          </div>

        </div>

      </footer>

    </div>
  );
}


/* Reusable service component */
function Service({ number, title, text }) {

  return (
    <div className="service-card">

      <div className="service-number">
        {number}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}

export default App;