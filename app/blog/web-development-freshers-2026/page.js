import Link from "next/link";

export const metadata = {
  title: "Web Development for Freshers: Complete Learning Guide 2026 | FreshersJobs",
  description:
    "Master web development from zero to job-ready. Frontend, backend, full-stack roadmap. Tools, projects, timeline for freshers to land web dev jobs in 2026.",
};

export default function WebDevelopmentGuide() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Navigation */}
      <nav style={{
        padding: "20px 40px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Link href="/" style={{ textDecoration: "none", fontWeight: "700", fontSize: "18px", color: "#111" }}>
          FreshersJobs
        </Link>
        <Link href="/blog" style={{ textDecoration: "none", color: "#0070f3", fontSize: "14px", fontWeight: "600" }}>
          ← Back to Blogs
        </Link>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{
            display: "inline-block",
            background: "#fecaca",
            color: "#7c2d12",
            padding: "6px 16px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}>
            Technical Skills
          </div>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "700",
            color: "#111",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}>
            Web Development for Freshers: Complete Learning Guide 2026
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}>
            Learn web development from zero to job-ready. Frontend, backend, full-stack roadmap. Tools, projects, and 
            timeline to land your first web development job in 2026.
          </p>

          <div style={{
            display: "flex",
            gap: "20px",
            color: "#666",
            fontSize: "14px",
          }}>
            <span>📅 Updated: February 2026</span>
            <span>⏱ 22 min read</span>
            <span>✍️ Chethan M P</span>
          </div>
        </div>

        {/* Intro Box */}
        <div style={{
          background: "#f8fafc",
          padding: "24px",
          borderRadius: "12px",
          borderLeft: "4px solid #dc2626",
          marginBottom: "40px",
          lineHeight: "1.7",
          color: "#333",
        }}>
          Web development is one of the easiest tech skills to monetize. You can build websites and get paid within weeks 
          of learning. You can freelance. You can get hired at companies. You can build your own products. This flexibility 
          is why so many freshers choose web development. But most learn it wrong. They focus on frameworks and tools instead 
          of fundamentals. This guide teaches you to learn web development the right way.
        </div>

        {/* Section 1 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Frontend vs Backend vs Full-Stack: Which Should You Choose?
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Before you start learning, understand what each path involves. Different paths require different skills and have 
          different job markets.
        </p>

        <div style={{
          background: "#fef3c7",
          border: "1px solid #fcd34d",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "12px" }}>
            Frontend Development
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
            Build what users see and interact with. Learn HTML, CSS, JavaScript, and a framework (React, Vue, Angular). 
            Frontend developers make websites look good and work smoothly.
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            <strong>Salary:</strong> 4-8 lakhs as fresher | <strong>Job Market:</strong> Excellent and growing | 
            <strong>Learning Curve:</strong> 8-12 weeks
          </p>
        </div>

        <div style={{
          background: "#dbeafe",
          border: "1px solid #7dd3fc",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "12px" }}>
            Backend Development
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
            Build the server-side logic, databases, and APIs. Learn a backend language (Python, Node.js, Java), databases, 
            and API design. Backend developers make websites work.
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            <strong>Salary:</strong> 5-9 lakhs as fresher | <strong>Job Market:</strong> Very strong | 
            <strong>Learning Curve:</strong> 12-16 weeks
          </p>
        </div>

        <div style={{
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "12px" }}>
            Full-Stack Development
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
            Master both frontend and backend. Build complete applications from database to user interface. Most flexible but 
            requires learning more.
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            <strong>Salary:</strong> 6-10 lakhs as fresher | <strong>Job Market:</strong> Excellent | 
            <strong>Learning Curve:</strong> 16-20 weeks
          </p>
        </div>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px", marginTop: "20px" }}>
          <strong>Recommendation for freshers:</strong> Start with frontend or backend based on interest. Frontend is 
          easier to learn and gives quicker results (you can build something visible fast). Backend teaches deeper concepts. 
          Full-stack is best long-term but takes more time. Pick one and go deep. Do not try to learn everything at once.
        </p>

        {/* Section 2 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          The Complete Web Development Learning Path
        </h2>

        {/* Frontend */}
        <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e5e7eb" }}>
          <h3 style={{ fontSize: "26px", fontWeight: "600", color: "#dc2626", marginBottom: "15px" }}>
            FRONTEND DEVELOPMENT ROADMAP
          </h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
              Phase 1: Web Fundamentals (Weeks 1-4)
            </h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              You cannot build with frameworks if you do not understand fundamentals. HTML is structure. CSS is styling. 
              JavaScript is behavior. You need to be comfortable with all three before touching React.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px", marginBottom: "10px" }}>
              <strong>Learn:</strong> HTML semantic elements, CSS flexbox & grid, JavaScript basics (variables, functions, DOM)
            </div>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Build: Simple portfolio website, todo list app, weather app using APIs
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
              Phase 2: JavaScript Deep Dive (Weeks 5-7)
            </h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              JavaScript is the language of web development. You need to understand callbacks, promises, async/await, 
              closures, and scope. These concepts enable professional development.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px", marginBottom: "10px" }}>
              <strong>Learn:</strong> ES6+ features, async programming, event handling, API calls, debugging
            </div>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Build: Interactive applications, fetch data from APIs, implement filtering and sorting
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
              Phase 3: React Framework (Weeks 8-11)
            </h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              React is the most in-demand frontend framework. Learn components, state, hooks, and routing. React lets you 
              build interactive UIs efficiently.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px", marginBottom: "10px" }}>
              <strong>Learn:</strong> Components, JSX, hooks (useState, useEffect), routing, state management (Context API), forms
            </div>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Build: Multi-page React app, connect to APIs, implement authentication, deploy to Netlify
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
              Phase 4: Extras & Portfolio (Weeks 12)
            </h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Learn Git for version control. Understand responsive design. Build your portfolio. These skills are mandatory 
              for jobs.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px" }}>
              <strong>Learn:</strong> Git & GitHub, responsive design, performance optimization, basic testing
            </div>
          </div>
        </div>

        {/* Backend */}
        <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e5e7eb" }}>
          <h3 style={{ fontSize: "26px", fontWeight: "600", color: "#0070f3", marginBottom: "15px" }}>
            BACKEND DEVELOPMENT ROADMAP
          </h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
              Phase 1: Programming Fundamentals (Weeks 1-4)
            </h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Choose one language: Python (easiest), Node.js (JavaScript), or Java (most common in enterprises). Most 
              freshers should choose Python or Node.js. Learn programming fundamentals in your chosen language.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px", marginBottom: "10px" }}>
              <strong>Learn:</strong> Variables, data types, functions, OOP, error handling
            </div>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Build: Simple scripts, calculator, file manipulation, basic algorithms
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
              Phase 2: Databases & SQL (Weeks 5-7)
            </h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Databases store application data. Learn SQL to query databases. Learn relational design. Understand the 
              difference between SQL and NoSQL. This is where your application data lives.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px", marginBottom: "10px" }}>
              <strong>Learn:</strong> SQL (SELECT, INSERT, UPDATE, DELETE, JOINs), database design, MySQL or PostgreSQL
            </div>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Build: Design a database schema, write queries, understand normalization
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
              Phase 3: Web Frameworks (Weeks 8-11)
            </h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Use a framework to build web applications faster. For Python: Django or Flask. For Node.js: Express. 
              Frameworks handle routing, middleware, and common patterns.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px", marginBottom: "10px" }}>
              <strong>Learn:</strong> Framework basics, routing, middleware, authentication, API design (REST)
            </div>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Build: REST API with user authentication, database integration, error handling
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
              Phase 4: Advanced & Deployment (Weeks 12-16)
            </h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Learn how to deploy applications. Learn about security. Learn testing. Understand version control with Git. 
              These separate juniors from professionals.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px" }}>
              <strong>Learn:</strong> Deployment (Heroku, AWS), security basics, testing, Git workflow, debugging
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Essential Tools for Web Developers
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          You need these tools. No exceptions. Every professional web developer uses these.
        </p>

        <div style={{ display: "grid", gap: "15px" }}>
          {[
            { name: "Code Editor (VS Code)", desc: "Where you write code. Industry standard. Free and excellent." },
            { name: "Git & GitHub", desc: "Version control and portfolio. Essential for all developers." },
            { name: "Browser DevTools", desc: "Built into every browser. Debug HTML, CSS, JavaScript, network." },
            { name: "Terminal/Command Line", desc: "Run commands, manage files, use tools. Non-negotiable skill." },
            { name: "Package Manager", desc: "npm (Node.js) or pip (Python). Install libraries and dependencies." },
            { name: "Browser Extensions", desc: "React DevTools, Vue DevTools for debugging your applications." },
            { name: "Hosting & Deployment", desc: "GitHub Pages, Netlify, Heroku to put your projects online." },
          ].map((tool, i) => (
            <div key={i} style={{
              border: "1px solid #e5e7eb",
              padding: "15px",
              borderRadius: "8px",
              background: "#f9fafb",
            }}>
              <strong style={{ color: "#111", fontSize: "15px" }}>{tool.name}</strong>
              <p style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>{tool.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 4 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Projects That Will Get You Hired
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Build these projects for your portfolio. Put them on GitHub. These show real skills.
        </p>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Project 1: Personal Portfolio Website (Weeks 3-4)
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Build a website about yourself. Include projects, skills, contact info. Make it responsive. Deploy it. This is 
            your first real project and your calling card.
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Project 2: Todo List or Note App (Weeks 8-9)
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Build an app where users can create, edit, delete todos or notes. Add persistence with local storage or database. 
            Add user authentication. This teaches CRUD operations and user features.
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Project 3: E-Commerce or Social App MVP (Weeks 12-14)
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Build a larger application. Add multiple features. Implement user authentication. Use a real database. Deploy it. 
            This is a serious portfolio piece that shows you can build real applications.
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Project 4: Clone of Popular App (Weeks 15-16)
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Clone a feature of a popular app (Uber, Airbnb, Instagram). Does not need to be perfect. Shows you can learn by 
            doing and build complex features. Great for demonstrating skills.
          </p>
        </div>

        {/* Section 5 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          How to Learn Web Development Effectively
        </h2>

        <div style={{
          background: "#e0f2fe",
          border: "1px solid #7dd3fc",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>Code Along, Not Just Watch:</strong> When you watch tutorials, pause and type the code yourself. Do not 
            copy-paste. Your fingers need to learn the syntax.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>Understand, Not Memorize:</strong> Do not memorize documentation. Understand why code works. Read source 
            code. Ask why something is the way it is.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>Build Real Things:</strong> Do not do boring exercises. Build things you are excited about. Your 
            motivation will carry you through the hard parts.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            <strong>Read Other People's Code:</strong> Study open source projects. Read how other developers write code. You 
            learn professionalism from seeing professional code.
          </p>
        </div>

        {/* Section 6 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          From Learning to Your First Job
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Learning is half the battle. Getting hired is the other half. Here is how to close the gap.
        </p>

        <div style={{ marginBottom: "20px", background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            GitHub Portfolio
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Your GitHub is your resume. Upload all projects with proper documentation. Write README files explaining what 
            your project does and how to run it. Recruiters look here.
          </p>
        </div>

        <div style={{ marginBottom: "20px", background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Coding Interviews
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Many companies give coding interviews. Solve problems on LeetCode (easy and medium level). Understand algorithms. 
            Practice on platforms like HackerRank.
          </p>
        </div>

        <div style={{ marginBottom: "20px", background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Technical Discussions
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Be ready to discuss your code. Why did you choose React over Vue? How do you optimize your app? What is your 
            deployment strategy? These conversations matter.
          </p>
        </div>

        <div style={{ background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Networking
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Join web development communities. Write about your learning. Build in public. Many jobs come through 
            connections. Be visible in the community.
          </p>
        </div>

        {/* Section 7 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          FAQ About Web Development
        </h2>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Is web development hard?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Not at all. Web development is easier than most programming fields. You can build something visible in days. You 
            get immediate feedback. This makes learning fun and motivating.
          </p>
        </div>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Can I get a web dev job with no experience?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Yes. Companies hire freshers for web development constantly. You need a portfolio and fundamental knowledge. A 
            strong portfolio can outweigh lack of professional experience.
          </p>
        </div>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            How much do junior web developers earn?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            In India: 4-8 lakhs per year depending on company and city. In the US: 60k-100k USD. Within 2-3 years, this grows 
            significantly with experience.
          </p>
        </div>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Should I learn multiple frameworks?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Master one framework deeply. React is the safest choice. Once you are strong in one, learning others is easy 
            because concepts transfer.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Is bootcamp or self-taught better?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Both work. Bootcamps are faster and more structured. Self-taught is cheaper and more flexible. The output matters, 
            not the path. Focus on building projects and learning fundamentals either way.
          </p>
        </div>

        {/* Conclusion */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Your Path to Your First Web Dev Job
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Web development is your ticket into tech. The job market is strong. The pay is good. The growth potential is huge. 
          But you have to put in the work. Follow this guide exactly. Build projects. Get them on GitHub. Apply for jobs. Be 
          persistent. In 16-20 weeks, you can have your first web development job.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "40px" }}>
          The hardest part is starting. Right now, download VS Code and create your first HTML file. That is all it takes. 
          Everything else is just repetition and practice. You have got this.
        </p>

        {/* Author */}
        <div style={{
          background: "#f3f4f6",
          padding: "24px",
          borderRadius: "12px",
          marginTop: "40px",
        }}>
          <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            About the Author
          </h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
            Chethan M P is a full-stack developer turned career mentor. He has helped hundreds of freshers land their first 
            web development jobs through mentoring and hands-on guidance on building real projects.
          </p>
        </div>

        {/* Back Link */}
        <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #e5e7eb", textAlign: "center" }}>
          <Link href="/blog" style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#0070f3",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600",
            fontSize: "15px",
          }}>
            ← Back to Blog
          </Link>
        </div>

      </div>
    </div>
  );
}