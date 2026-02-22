import Link from "next/link";

export const metadata = {
  title: "GitHub Portfolio for Freshers: Build & Showcase Projects 2026 | FreshersJobs",
  description:
    "Complete guide to building an impressive GitHub portfolio as a fresher. Projects, documentation, best practices. How to get hired using GitHub.",
};

export default function GitHubPortfolioGuide() {
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
            background: "#fca5a5",
            color: "#7f1d1d",
            padding: "6px 16px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}>
            Portfolio Building
          </div>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "700",
            color: "#111",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}>
            GitHub Portfolio for Freshers: Build & Showcase Projects 2026
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}>
            Your GitHub portfolio is more important than your resume. Learn how to build an impressive GitHub profile, 
            document projects professionally, and use it to land your first tech job.
          </p>

          <div style={{
            display: "flex",
            gap: "20px",
            color: "#666",
            fontSize: "14px",
          }}>
            <span>📅 Updated: February 2026</span>
            <span>⏱ 19 min read</span>
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
          Your GitHub profile is your primary resume. Most tech companies look at GitHub before they look at your CV. 
          If your GitHub is empty, they do not care about your degree or certifications. If your GitHub shows real projects 
          and clean code, you are getting interviews. This guide tells you exactly how to build a GitHub portfolio that gets 
          you hired.
        </div>

        {/* Section 1 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Why GitHub Matters More Than Your Resume
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Here is the reality: a recruiter or hiring manager can see your code on GitHub. They cannot see your code in a 
          resume. GitHub proves you can actually code. Resume claims are just claims.
        </p>

        <div style={{
          background: "#f0fdf4",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #bbf7d0",
          marginBottom: "20px",
        }}>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>1. It Shows Real Ability</strong><br/>
            Your code does not lie. A recruiter can see if you understand git, if you write clean code, if you document 
            properly. They can see your growth over time as your code improves.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>2. It is Your Calling Card</strong><br/>
            Instead of explaining your skills, you show them. A project with 3 stars on GitHub is worth more than claiming 
            "expert programmer" on your resume. Action beats claims.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>3. It Differentiates You</strong><br/>
            Many freshers have degrees. Few have GitHub portfolios. Having 3-4 solid projects on GitHub puts you in the top 
            10% of applicants. You stand out immediately.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            <strong>4. It is Your Long-Term Asset</strong><br/>
            Unlike a resume that changes every few months, your GitHub builds over time. Good projects stay relevant for years. 
            Your GitHub is forever. Your reputation is built there.
          </p>
        </div>

        {/* Section 2 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Setting Up Your GitHub Profile Like a Professional
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Your profile is the first thing recruiters see. Make it count. This takes 30 minutes and is the easiest thing to 
          get right.
        </p>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Step 1: Profile Picture
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Use a clear professional photo. Not a meme. Not a group photo. You alone, professional looking. This humanizes 
            your profile. Most tech people underestimate this but it matters for first impressions.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Step 2: Bio
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
            Write a clear, short bio. Example: "Full-stack developer passionate about building web apps. Python, React, 
            PostgreSQL. Learning web3." Be specific about what you do. Generic bios hurt more than they help.
          </p>
          <div style={{ background: "#f9fafb", padding: "10px", borderRadius: "6px", fontSize: "14px", color: "#666" }}>
            <strong>❌ Bad:</strong> "Coding enthusiast" | <strong>✅ Good:</strong> "Backend developer. Python, Django, 
            PostgreSQL. Open to freelance work."
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Step 3: Location & Contact Info
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Add your city. Add your website if you have one. Add your LinkedIn. Make it easy for people to contact you. You 
            are building a personal brand, not hiding.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Step 4: README Profile
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
            Create a special repository named after your username. In it, create a README.md file. This appears on your 
            profile page. Use it to showcase your best projects and skills. This is optional but looks professional.
          </p>
          <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "13px", color: "#333" }}>
            What to include: Your skills, your best projects, your blog (if any), contact info, a call-to-action
          </div>
        </div>

        {/* Section 3 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          What Projects Should Be on Your GitHub
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Quality over quantity. 3-4 solid projects are better than 10 half-baked ones. Here is what makes a project 
          portfolio-worthy.
        </p>

        <div style={{
          background: "#fef3c7",
          border: "1px solid #fcd34d",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>1. It Solves a Real Problem</strong><br/>
            Build something you would actually use. Not a tutorial project, but your own idea. A todo list app, a budget 
            tracker, a portfolio website. Real problems get more attention.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>2. It is Completely Finished</strong><br/>
            Half-baked projects hurt you. If it is not done, do not push it. Finish projects before showing them. A finished 
            simple project beats an unfinished complex one.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>3. The Code is Clean</strong><br/>
            Your code will be read. Make it readable. Use good variable names, organize functions, add comments where needed. 
            Clean code shows professionalism.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            <strong>4. It is Properly Documented</strong><br/>
            A great README, clear instructions, and example usage. Recruiters should understand what your project does in 30 
            seconds.
          </p>
        </div>

        {/* Section 4 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          The Perfect README: Your Project's First Impression
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Your README is the first thing people see. A bad README kills your project. A great README makes people want to 
          explore your code.
        </p>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            1. Project Title & Description
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Start with a clear title and 2-3 sentence description. What does it do? Why did you build it? Make it compelling.
          </p>
          <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "13px", color: "#333", marginTop: "8px" }}>
            Example: "WeatherApp - A simple weather application that shows current weather and 5-day forecast for any city. 
            Built to learn React and API integration."
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            2. Screenshot or Demo
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Include a screenshot showing your project in action. Visual context is huge. People browse quickly. A good 
            screenshot gets them to read more.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            3. Features List
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Bullet point list of what your project can do. Be honest. Include key features. This helps people understand 
            scope.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            4. Technologies Used
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            List the tech stack clearly. This helps recruiters quickly understand if your skills match their needs.
          </p>
          <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "13px", color: "#333", marginTop: "8px" }}>
            <strong>Tech Stack:</strong> React, JavaScript, CSS, Firebase, Axios
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            5. Installation Instructions
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Step-by-step guide to get your project running locally. Be detailed. Someone should be able to clone and run 
            your project in 5 minutes.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            6. Usage Examples
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Show how to use your project. Screenshots or code snippets. Make it easy for someone to understand functionality.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            7. What You Learned
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            This is important. What did you learn building this? What challenges did you overcome? This shows growth mindset 
            and reflection.
          </p>
          <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "13px", color: "#333", marginTop: "8px" }}>
            <strong>Learnings:</strong> Async/await, error handling, API rate limiting, responsive design with CSS Grid
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            8. Contact & Links
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Link to live demo (if deployed). Link to your other projects. Make it easy for people to explore more of your work.
          </p>
        </div>

        {/* Section 5 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Portfolio Project Ideas for Freshers
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Not sure what to build? Here are ideas that are impressive but achievable for freshers.
        </p>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            1. Personal Portfolio Website
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Build your own portfolio website. Show your projects, skills, experience. Deploy it. This is a website about 
            your work and yourself. Very impressive to recruiters because you are your own client.
          </p>
          <div style={{ background: "#fff9e6", padding: "10px", borderRadius: "6px", fontSize: "13px", color: "#333", marginTop: "8px" }}>
            Tech: React/Vue, CSS, possibly backend for contact form
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            2. Todo / Note-Taking App
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Build an app where users can create, edit, delete notes or todos. Add local storage so data persists. Add user 
            authentication if ambitious. Very real-world problem.
          </p>
          <div style={{ background: "#fff9e6", padding: "10px", borderRadius: "6px", fontSize: "13px", color: "#333", marginTop: "8px" }}>
            Tech: React, Firebase, JavaScript
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            3. E-Commerce Store (MVP)
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Build a simple online store. Show products, add to cart, checkout. Does not need real payment. Shows you 
            understand full-stack development.
          </p>
          <div style={{ background: "#fff9e6", padding: "10px", borderRadius: "6px", fontSize: "13px", color: "#333", marginTop: "8px" }}>
            Tech: React/Vue, Node.js/Flask, MongoDB/PostgreSQL
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            4. Chat Application
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Build a real-time chat app. Users can message each other. Teach real-time communication concepts like websockets. 
            Very impressive.
          </p>
          <div style={{ background: "#fff9e6", padding: "10px", borderRadius: "6px", fontSize: "13px", color: "#333", marginTop: "8px" }}>
            Tech: React, Node.js, Socket.io, MongoDB
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            5. Data Visualization Dashboard
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Fetch data from an API and visualize it. Show charts, graphs, statistics. Teaches data processing and visualization.
          </p>
          <div style={{ background: "#fff9e6", padding: "10px", borderRadius: "6px", fontSize: "13px", color: "#333", marginTop: "8px" }}>
            Tech: React, D3.js/Chart.js, any API
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            6. Clone of Popular App
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Clone a feature of Instagram, Twitter, Airbnb, or Uber. You are not copying, you are learning by building. 
            Shows you can tackle complex features.
          </p>
          <div style={{ background: "#fff9e6", padding: "10px", borderRadius: "6px", fontSize: "13px", color: "#333", marginTop: "8px" }}>
            Tech: React/Vue, backend of choice, database
          </div>
        </div>

        {/* Section 6 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          GitHub Best Practices Every Fresher Should Know
        </h2>

        <div style={{
          background: "#e0f2fe",
          border: "1px solid #7dd3fc",
          padding: "20px",
          borderRadius: "8px",
        }}>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>1. Use Meaningful Commit Messages</strong><br/>
            Your commit history tells a story. "Fixed bug" is bad. "Fixed login validation error on empty password field" 
            is good. Recruiters read your git history.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>2. Create Branches for Features</strong><br/>
            Do not just push to main. Create feature branches, make pull requests, review your own code. Shows you understand 
            professional git workflow.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>3. Keep Repos Organized</strong><br/>
            Have a .gitignore file. Do not push node_modules or venv. Keep folder structure clean. One repo for one project.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>4. Add License</strong><br/>
            Add a LICENSE file. MIT is the most common for open source. Shows you understand IP and are serious about your work.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>5. Pin Your Best Projects</strong><br/>
            On your GitHub profile, pin 3-4 of your best projects. These show first when someone visits your profile. Make them 
            count.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            <strong>6. Keep Repos Updated</strong><br/>
            Old projects are okay, but update them periodically. Update dependencies. Fix security issues. Shows you maintain code.
          </p>
        </div>

        {/* Section 7 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Common GitHub Mistakes That Hurt Your Chances
        </h2>

        <div style={{
          background: "#fef3c7",
          border: "1px solid #fcd34d",
          padding: "20px",
          borderRadius: "8px",
        }}>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>❌ Mistake 1: Empty README</strong><br/>
            Do not push a project without a README. This is the quickest way to show a recruiter you do not care about your 
            project.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>❌ Mistake 2: Tutorial Projects Only</strong><br/>
            Having 10 todo apps from different tutorials does not help. Build 2-3 original projects instead. Uniqueness matters.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>❌ Mistake 3: Messy Commit History</strong><br/>
            Commit 50 times with message "fix". Recruiters see this and know you do not understand git. Take time to write good 
            commit messages.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>❌ Mistake 4: Pushing Dependencies to Repo</strong><br/>
            Do not push node_modules or venv. Use .gitignore. This bloats your repo and looks unprofessional.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            <strong>❌ Mistake 5: Never Deployed Anything</strong><br/>
            Having projects that only run locally is fine, but deploy at least one to show you understand deployment. Heroku, 
            Netlify, GitHub Pages are free.
          </p>
        </div>

        {/* Section 8 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          How Recruiters Actually Use GitHub to Evaluate You
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Understanding how you are being evaluated helps you optimize your portfolio.
        </p>

        <div style={{ marginBottom: "20px", background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            First 30 Seconds
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            They glance at your profile picture, bio, and pinned projects. If nothing catches their eye, they leave. Make sure 
            your profile looks professional and your best projects are pinned.
          </p>
        </div>

        <div style={{ marginBottom: "20px", background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Next 2 Minutes
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            They click on your best project. They read the README. They look for screenshot and usage examples. They want to 
            understand what you built without reading code.
          </p>
        </div>

        <div style={{ marginBottom: "20px", background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Next 5 Minutes
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            They skim your code. Are there any red flags? Is code organized? Is it readable? They check your commit history. Do 
            you understand git?
          </p>
        </div>

        <div style={{ background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Decision Point
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Based on the above, they decide: "This person can probably code" or "This person might be a junior but seems 
            serious" or "No thanks." Most candidates get rejected in the first 30 seconds. Good GitHub portfolios flip that.
          </p>
        </div>

        {/* Section 9 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Frequently Asked Questions About GitHub Portfolios
        </h2>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            How many projects should I have on GitHub?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            3-4 quality projects are better than 10 mediocre ones. Your goal is to have enough to show range and depth, not to 
            show quantity.
          </p>
        </div>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Should I make my repos private or public?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Public. Private repos do not help recruiters. You want your best work visible. If you are embarrassed by your code, 
            improve it before pushing. Do not hide it.
          </p>
        </div>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Can I delete old projects?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Yes. Delete projects you are embarrassed by or that do not represent your current skill level. Keep only projects 
            that make you look good.
          </p>
        </div>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Should I contribute to open source?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Yes, if you have time. Contributing to real projects shows you can work on existing codebases. But your own 
            projects matter more for freshers.
          </p>
        </div>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Is it okay to copy project ideas from others?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Yes. Many people build similar projects (todo apps, weather apps, etc.). What matters is your implementation, 
            your code quality, your documentation. Copy ideas but build differently.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Should I make my profile README fancy with animations?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Simple is better. A clean profile README with your skills, projects, and links is enough. Too much fancy stuff 
            looks unprofessional.
          </p>
        </div>

        {/* Conclusion */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Your GitHub is Your Golden Ticket
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          In 2026, a strong GitHub portfolio is your most valuable asset for getting hired. More valuable than a degree. More 
          valuable than certifications. More valuable than a resume. Recruiters want to see proof that you can code.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          You do not need to be perfect. You just need to be honest and show growth. 3-4 solid projects with clean code and 
          great documentation will get you interviews. Then it is up to you to impress in the technical interview.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "40px" }}>
          Start today. Pick a project idea. Build it. Document it. Deploy it. Push it to GitHub. You are building your 
          reputation. Five years from now, the projects you build today will still be on your GitHub. Make them count.
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
            Chethan M P is a software engineer and career mentor who has reviewed hundreds of GitHub portfolios. He helps 
            freshers build portfolios that actually land jobs. His approach focuses on quality over quantity and real skills 
            over credentials.
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