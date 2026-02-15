import Link from "next/link";

export const metadata = {
  title: "How to Write a Fresher Resume With No Experience (2026) | FreshersJobs",
  description:
    "A complete guide to building a powerful fresher resume from scratch using projects, skills, and education — even with zero work experience.",
};

const c = {
  ink:       "#1a1208",
  paper:     "#faf8f3",
  cream:     "#f2ede2",
  amber:     "#d4821a",
  amberLt:   "#f5c97a",
  amberPale: "#fef5e4",
  teal:      "#1a5c6e",
  muted:     "#6b6152",
  border:    "#e0d8c8",
  bodyText:  "#3e3325",
};

const prose = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "1.05rem",
  lineHeight: 1.85,
  color: c.bodyText,
  marginBottom: "1.2rem",
};

const h2Style = {
  fontFamily: "Georgia, serif",
  fontSize: "1.45rem",
  fontWeight: 700,
  color: c.ink,
  marginTop: "2.6rem",
  marginBottom: "0.9rem",
  paddingBottom: "0.45rem",
  borderBottom: `3px solid ${c.amber}`,
  display: "inline-block",
};

const h3Style = {
  fontFamily: "system-ui, sans-serif",
  fontSize: "0.9rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: c.teal,
  marginTop: "1.6rem",
  marginBottom: "0.5rem",
};

function Callout({ icon, title, children }) {
  return (
    <div style={{
      background: "#f0f7f9",
      border: "1px solid #b8dce6",
      borderLeft: `4px solid ${c.teal}`,
      borderRadius: "0 8px 8px 0",
      padding: "1.2rem 1.5rem",
      margin: "1.8rem 0",
    }}>
      <div style={{
        fontFamily: "system-ui, sans-serif",
        fontSize: "0.75rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: c.teal,
        marginBottom: "0.45rem",
      }}>
        {icon} {title}
      </div>
      <div style={{ ...prose, marginBottom: 0, fontSize: "0.93rem", color: "#1e4a56" }}>
        {children}
      </div>
    </div>
  );
}

function TipBox({ children }) {
  return (
    <div style={{
      background: c.amberPale,
      borderLeft: `4px solid ${c.amber}`,
      borderRadius: "0 8px 8px 0",
      padding: "1.1rem 1.4rem",
      margin: "1.6rem 0",
    }}>
      <div style={{ ...prose, marginBottom: 0, fontSize: "0.93rem", color: "#5a3d0a" }}>
        <strong style={{ color: c.amber }}>💡 Pro Tip: </strong>{children}
      </div>
    </div>
  );
}

function StepCard({ number, title, children }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "48px 1fr",
      gap: "1.1rem",
      background: "#fff",
      border: `1px solid ${c.border}`,
      borderRadius: "10px",
      padding: "1.4rem",
      marginBottom: "1rem",
    }}>
      <div style={{
        width: "44px", height: "44px",
        background: c.ink, color: c.amberLt,
        fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700,
        borderRadius: "6px",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>{number}</div>
      <div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, color: c.ink, marginBottom: "0.4rem" }}>{title}</div>
        <div style={{ ...prose, fontSize: "0.88rem", marginBottom: 0 }}>{children}</div>
      </div>
    </div>
  );
}

export default function FresherResumeNoExperience() {
  return (
    <div style={{ background: c.paper, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <article style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <nav style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.76rem", color: c.muted, marginBottom: "1.8rem" }}>
          <Link href="/" style={{ color: c.teal, textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: c.teal, textDecoration: "none" }}>Blogs</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          Fresher Resume With No Experience
        </nav>

        {/* Category tag */}
        <span style={{
          display: "inline-block",
          background: "#2e7d32",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          padding: "3px 12px",
          borderRadius: "2px",
          marginBottom: "1rem",
        }}>Resume Tips</span>

        {/* Title */}
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          color: c.ink,
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}>
          How to Write a Fresher Resume With No Experience
        </h1>

        {/* Meta */}
        <div style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "0.8rem",
          color: c.muted,
          display: "flex",
          gap: "1.4rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
          paddingBottom: "1.5rem",
          borderBottom: `1px solid ${c.border}`,
        }}>
          <span>📅 May 15, 2025</span>
          <span>⏱ 9 min read</span>
          <span>✍️ FreshersJobs Editorial Team</span>
        </div>

        {/* Intro */}
        <div style={{
          background: c.amberPale,
          borderLeft: `4px solid ${c.amber}`,
          borderRadius: "0 8px 8px 0",
          padding: "1.2rem 1.5rem",
          marginBottom: "2rem",
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
          fontSize: "1.05rem",
          color: "#3a2e1a",
          lineHeight: 1.75,
        }}>
          Not having work experience does not mean you have nothing to show. Every fresher
          has projects, coursework, skills, and activities that can be presented powerfully
          on a resume — if you know how to frame them. This guide shows you exactly how to
          build a compelling one-page resume from scratch in 2026, even if your experience
          section is completely empty.
        </div>

        {/* Section 1 */}
        <h2 style={h2Style}>Why Most Fresher Resumes Get Rejected Immediately</h2>
        <p style={prose}>
          The single biggest mistake freshers make is trying to copy a resume format designed
          for experienced professionals. When you have no work history, a traditional resume
          structure that leads with an empty Experience section immediately signals to a
          recruiter that there is nothing relevant here. The solution is not to fabricate
          experience — it is to use a structure that leads with what you actually have.
        </p>
        <p style={prose}>
          Recruiters at large Indian companies spend an average of six to ten seconds on a
          first resume scan. In those seconds, they are looking for one thing: evidence that
          you can do the job. For a fresher, that evidence comes from your skills, your
          projects, and the way you present your education — not from a blank work history.
          Structure your resume to put that evidence first.
        </p>

        <Callout icon="📋" title="What Recruiters Look for in a Fresher Resume">
          Hiring managers reviewing fresher resumes are not expecting a long work history.
          They are looking for three things: relevant technical or functional skills, at least
          one example of real work output such as a project or internship, and clear
          communication in how the resume is written. A fresher who demonstrates all three
          in a clean, one-page format will get shortlisted ahead of candidates with higher
          grades but weaker presentation.
        </Callout>

        {/* Section 2 */}
        <h2 style={h2Style}>The Right Resume Structure for Freshers</h2>
        <p style={prose}>
          The most effective fresher resume follows a specific order that leads with your
          strongest content. Unlike experienced candidates who lead with work history,
          freshers should structure their resume as follows: Contact Information, then a
          two-line Summary or Objective, then Skills, then Projects, then Education, and
          finally Certifications if any. This structure ensures that a recruiter sees your
          most relevant content — your skills and what you have built — before they reach
          your education section.
        </p>

        <h3 style={h3Style}>Contact Information — Keep It Clean</h3>
        <p style={prose}>
          Your name should be the largest text on the page. Below it, include your phone
          number, a professional email address, your LinkedIn profile URL, your GitHub link
          if relevant, and your city. Nothing else. No photograph, no date of birth, no
          marital status. Keep this section to four lines maximum. A professional email
          address means your name or initials — not a nickname or number combination you
          created in school.
        </p>

        <h3 style={h3Style}>The Summary — Two Lines That Frame Everything</h3>
        <p style={prose}>
          A two-sentence summary at the top of your resume tells a recruiter exactly who
          you are and what you are looking for. Write it in third person or first person —
          either works — but keep it specific. For example: Final year Computer Science
          student specialising in full-stack web development with hands-on experience in
          React and Node.js. Seeking an entry-level developer role where I can contribute
          to real product development from day one. This summary contains your field, your
          specific skills, and your goal — all in two lines.
        </p>

        <TipBox>
          Rewrite your summary slightly for every job application to match the specific role
          and company. If a company emphasises Python and data pipelines, your summary should
          mention Python and data work. This small change takes two minutes and noticeably
          increases your match rate. Recruiters read hundreds of identical summaries — a
          tailored one stands out immediately.
        </TipBox>

        {/* Section 3 */}
        <h2 style={h2Style}>How to Build Each Section With No Work Experience</h2>

        <StepCard number="01" title="Skills — List What You Actually Know">
          Organise your skills into clear categories rather than one long list. For a
          technical role, group them as Programming Languages, Frameworks and Libraries,
          Databases, Tools, and Platforms. For a non-technical role, group them as
          Software, Communication, and Domain Knowledge. Only list skills you can genuinely
          speak about in an interview — a recruiter who asks you about a skill you listed
          will notice immediately if you cannot back it up.
        </StepCard>

        <StepCard number="02" title="Projects — Your Most Important Section">
          Your projects section replaces work experience entirely for most fresher roles.
          List two to four projects with the following structure for each one: a one-line
          project title and type, the technologies or tools used, and two to three bullet
          points describing what you built, how you built it, and any measurable outcome.
          Even a college assignment project can be listed here if it demonstrates a relevant
          skill — describe what problem it solved, not just what technology it used.
        </StepCard>

        <StepCard number="03" title="Education — More Than Just Your Degree">
          Your education section should include your degree, university, graduation year,
          and CGPA if it is above 7.0. Below this, add a line for relevant coursework —
          list the specific subjects that align with the job you are applying for. If you
          completed any academic projects, mention them briefly here too. If you received
          any academic awards or scholarships, include them. These details turn a bare
          education section into evidence of ability.
        </StepCard>

        <StepCard number="04" title="Certifications — Add Only Recognised Ones">
          Free online certifications from Google, Microsoft, AWS, NASSCOM, or Coursera
          (through partner universities) are worth adding. Certifications from unknown
          platforms with no industry recognition are not — they fill space but add no
          credibility. List the certification name, the issuing organisation, and the year.
          If you have a verifiable credential link, add it.
        </StepCard>

        {/* Section 4 */}
        <h2 style={h2Style}>How to Write Project Bullet Points That Impress</h2>
        <p style={prose}>
          Most freshers describe their projects in passive, vague language — built a website
          using HTML and CSS, made a calculator in Python. These descriptions say nothing
          about your thinking or your contribution. A stronger approach uses action verbs
          and focuses on the problem you solved, the approach you took, and the result you
          achieved.
        </p>
        <p style={prose}>
          Instead of built a to-do list app using React, write: Developed a task management
          web application using React and local storage that allows users to organise, filter,
          and prioritise daily tasks — deployed live on Vercel. The second version communicates
          what the project does, the technology behind it, and the fact that it is real and
          live. That difference is significant to a recruiter reading fifty resumes in an
          afternoon.
        </p>

        <Callout icon="🔧" title="Three Projects Every Fresher Should Build">
          If you are starting from scratch and need portfolio projects fast, here are three
          that demonstrate strong fundamentals across common fresher roles: a personal
          portfolio website that showcases your other projects, a data analysis notebook
          using a public dataset from Kaggle with charts and clear findings, and a small
          automation script or tool that solves a real personal problem. Each of these can
          be built in one to two weekends and immediately strengthens your resume.
        </Callout>

        {/* Section 5 */}
        <h2 style={h2Style}>Formatting Rules That Make Your Resume Look Professional</h2>
        <p style={prose}>
          Format is the first thing a recruiter notices, even before reading a single word.
          A cluttered, inconsistent, or visually confusing resume creates an immediate
          negative impression. A clean, consistent, and well-spaced resume signals
          professionalism before your content is even read.
        </p>

        <h3 style={h3Style}>Font, Spacing, and Length</h3>
        <p style={prose}>
          Use a single clean font throughout — Calibri, Arial, or Georgia work well.
          Keep your body text between 10.5 and 11.5 points. Use consistent spacing
          between sections. Keep the entire resume to exactly one page — nothing signals
          a lack of editing judgment faster than a fresher resume that spills onto two
          pages. If you are struggling to fit everything, reduce your margins slightly
          and tighten your bullet points, not your content.
        </p>

        <h3 style={h3Style}>Colours and Design</h3>
        <p style={prose}>
          A subtle use of one accent colour — for your name, section headers, or dividing
          lines — is acceptable and can make your resume look more intentional. Avoid
          multiple colours, gradients, icons, or any design elements that distract from
          the content. The goal is clarity. If a recruiter has to work to find information
          on your resume, it is already failing its job.
        </p>

        <TipBox>
          Before sending any resume, convert it to a PDF and open it on your phone. This
          is often how busy recruiters first see applications. If anything looks misaligned,
          too small, or hard to read on a small screen, fix it. Also share it with one
          friend or family member and ask them to tell you what role they think you are
          applying for after 10 seconds of reading. If they cannot answer clearly, your
          resume needs more work.
        </TipBox>

        {/* Conclusion */}
        <h2 style={h2Style}>Your Resume Is a Living Document — Keep Improving It</h2>
        <p style={prose}>
          The best fresher resume is not the one you write once and send to every company.
          It is the one you update after every new project you complete, every certification
          you earn, and every feedback you receive from an interview. Treat your resume as
          a document that evolves alongside your skills — because as you learn and build
          more, you will always have better things to add.
        </p>
        <p style={prose}>
          Start with what you have right now. Write down every project you have worked on,
          every tool you have used, every course you have completed. Arrange them using the
          structure in this guide. Send it to five companies this week. Pay attention to
          which applications get callbacks and which do not — that feedback will tell you
          exactly what to strengthen next. Your first resume does not need to be perfect.
          It needs to be honest, clear, and ready to go.
        </p>

        {/* CTA */}
        <div style={{
          background: c.ink,
          borderRadius: "10px",
          padding: "2rem",
          textAlign: "center",
          margin: "2.5rem 0",
        }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: c.amberLt, marginBottom: "0.6rem" }}>
            Browse Fresher Jobs Across India
          </div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#a89f8f", marginBottom: "1.2rem" }}>
            Hundreds of entry-level job listings updated daily — no experience required.
          </div>
          <Link href="/jobs" style={{
            display: "inline-block",
            background: c.amber,
            color: "#fff",
            fontFamily: "system-ui, sans-serif",
            fontSize: "0.88rem",
            fontWeight: 700,
            padding: "11px 26px",
            borderRadius: "6px",
            textDecoration: "none",
          }}>
            Explore Jobs →
          </Link>
        </div>

        {/* Tags */}
        <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${c.border}` }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "1px", color: c.muted, marginBottom: "0.8rem" }}>
            Topics
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Resume Tips", "Freshers 2026", "Career Tips", "Job Search India", "First Job", "No Experience"].map(tag => (
              <Link key={tag} href="/blog" style={{
                background: c.cream, border: `1px solid ${c.border}`,
                color: c.teal, fontFamily: "system-ui, sans-serif",
                fontSize: "0.78rem", padding: "5px 14px",
                borderRadius: "20px", textDecoration: "none",
              }}>{tag}</Link>
            ))}
          </div>
        </div>

        {/* Author */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: "1.2rem",
          background: c.cream, border: `1px solid ${c.border}`,
          borderRadius: "10px", padding: "1.4rem 1.6rem", marginTop: "2.5rem",
        }}>
          <div style={{
            width: "54px", height: "54px", flexShrink: 0,
            background: c.ink, color: c.amberLt,
            fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700,
            borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          }}>FJ</div>
          <div>
            <div style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: c.ink }}>
              FreshersJobs Editorial Team
            </div>
            <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", color: c.muted, marginBottom: "0.4rem" }}>
              Career Guidance · freshersjobs.shop
            </div>
            <p style={{ ...prose, fontSize: "0.84rem", marginBottom: 0 }}>
              Our editorial team includes HR professionals, placement consultants,
              and career coaches with over 20 years of combined experience helping
              fresh graduates navigate the Indian job market.
            </p>
          </div>
        </div>

        {/* Back */}
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link href="/blog" style={{
            display: "inline-block",
            fontFamily: "system-ui, sans-serif", fontSize: "0.85rem", fontWeight: 700,
            color: c.amber, textDecoration: "none",
            border: `2px solid ${c.amber}`, padding: "10px 24px", borderRadius: "6px",
          }}>
            ← Back to All Blogs
          </Link>
        </div>

      </article>
    </div>
  );
}