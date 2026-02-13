import Link from "next/link";

export const metadata = {
  title: "How to Get Your First IT Job as a Fresher | FreshersJobs",
  description:
    "A complete step-by-step roadmap for freshers to land their first IT job — covering skills, resume, applications, interviews, and more.",
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

export default function FirstJobBlog() {
  return (
    <div style={{ background: c.paper, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <article style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <nav style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.76rem", color: c.muted, marginBottom: "1.8rem" }}>
          <Link href="/" style={{ color: c.teal, textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: c.teal, textDecoration: "none" }}>Blogs</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          How to Get Your First IT Job
        </nav>

        {/* Category tag */}
        <span style={{
          display: "inline-block",
          background: c.teal,
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          padding: "3px 12px",
          borderRadius: "2px",
          marginBottom: "1rem",
        }}>Job Search</span>

        {/* Title */}
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          color: c.ink,
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}>
          How to Get Your First IT Job as a Fresher
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
          <span>📅 May 28, 2025</span>
          <span>⏱ 7 min read</span>
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
          Breaking into the IT industry without prior experience can feel
          overwhelming. You see job postings that ask for 2 years of experience
          even for entry-level roles. You wonder how anyone ever gets their
          first job. This guide gives you a clear, honest, step-by-step path
          that actually works — based on what companies in India are hiring for
          right now.
        </div>

        {/* Section 1 */}
        <h2 style={h2Style}>Why Getting a First IT Job Feels Hard (And Why It Is Not)</h2>
        <p style={prose}>
          The IT job market in India is large and actively hiring freshers every
          single month. The disconnect is not a lack of jobs — it is a mismatch
          between what freshers present and what companies need to see before
          they take a chance on someone new. Companies hire freshers all the
          time, but they hire the ones who have taken initiative to be
          job-ready, not just degree-ready.
        </p>
        <p style={prose}>
          The good news is that job-readiness is entirely within your control.
          It does not require money, connections, or a degree from a top-tier
          college. It requires focused effort over a period of weeks — building
          the right skills, presenting them well, and applying in a way that
          gets your profile seen. This guide walks through each of those steps.
        </p>

        <Callout icon="📊" title="The Reality of Fresher IT Hiring in 2025">
          India&apos;s top IT companies collectively hired over 150,000 freshers
          in 2024. Mid-size product companies, startups, and service firms
          together add hundreds of thousands more. The market is not closed —
          it rewards preparation.
        </Callout>

        {/* Section 2 */}
        <h2 style={h2Style}>Step-by-Step Roadmap to Your First IT Job</h2>
        <p style={prose}>
          Follow these seven steps in order. Each one builds on the last.
          Rushing ahead to applications before completing the earlier steps
          is the most common mistake freshers make, and it leads to months
          of silence from recruiters.
        </p>

        <StepCard number="01" title="Choose a Clear Technical Direction">
          The IT field is broad. Web development, mobile development, data
          science, cloud computing, cybersecurity, QA testing, DevOps — trying
          to learn all of them at once leads to shallow knowledge in everything
          and deep knowledge in nothing. Pick one area that genuinely interests
          you, commit to it for at least six months, and go deep. Employers
          prefer a fresher with strong fundamentals in one area over someone
          with surface-level exposure to ten.
        </StepCard>

        <StepCard number="02" title="Build Job-Ready Technical Skills">
          Once you have chosen your direction, identify the specific skills
          companies are asking for in entry-level job postings in that area.
          For web development, this typically means HTML, CSS, JavaScript, one
          frontend framework like React, and a basic understanding of backend
          concepts. For data roles, this means Python, SQL, Excel, and basic
          statistics. Use free platforms like freeCodeCamp, The Odin Project,
          or Khan Academy to build these skills systematically over 60 to 90
          days of consistent daily practice.
        </StepCard>

        <StepCard number="03" title="Build 2 to 3 Real Projects">
          A portfolio of two or three genuine projects is worth more than any
          certification on your resume. Projects show employers that you can
          take a problem from idea to working solution — which is exactly what
          the job requires. Build things that are genuinely useful or
          interesting to you: a personal budget tracker, a job listings
          aggregator, a weather app with real API data, a simple e-commerce
          frontend. Push everything to GitHub with a clear README explaining
          what each project does and how to run it.
        </StepCard>

        <StepCard number="04" title="Create a Simple, ATS-Friendly Resume">
          Your resume does not need to be long or visually impressive. It needs
          to be clear, honest, and readable by both ATS software and human
          recruiters. Include a professional summary, your technical skills
          listed explicitly, your projects with bullet points explaining what
          you built and what tools you used, your education, and any
          certifications or internships. Keep it to one page. Avoid graphics,
          tables, or fancy templates that confuse ATS parsers.
        </StepCard>

        <StepCard number="05" title="Optimise Your LinkedIn Profile">
          Over 80% of recruiters in India use LinkedIn to source fresher
          candidates actively. A complete, well-written LinkedIn profile means
          you get found even when you are not applying anywhere. Use a
          professional photo, write a clear headline that states what you do
          and what you are looking for, and fill in every section with the
          same content as your resume. Connect with at least 50 people in your
          target industry and engage genuinely with content in your field.
        </StepCard>

        <StepCard number="06" title="Apply Strategically, Not in Bulk">
          Sending 100 generic applications rarely works better than sending 10
          tailored ones. For each role you apply to, customise your resume
          summary to reflect the language of the job description, add a short
          cover note explaining why you are interested in that specific company,
          and follow up on LinkedIn with the recruiter or hiring manager a few
          days later. Quality and relevance beat volume every time at the
          fresher level.
        </StepCard>

        <StepCard number="07" title="Prepare Specifically for Fresher Interviews">
          Most IT fresher interviews follow a predictable pattern: a coding or
          aptitude round, a technical interview covering fundamentals, and an
          HR round. Practice data structures and algorithms on platforms like
          LeetCode or HackerRank. Review the fundamentals of your chosen stack
          — interviewers at this level test concepts, not just syntax. Prepare
          clear answers to questions like Tell me about yourself, Describe a
          project you built, and Why do you want to work here.
        </StepCard>

        <TipBox>
          Apply to companies of all sizes — not just the big names. Startups
          and mid-size companies often give freshers more responsibility, faster
          learning opportunities, and quicker hiring timelines than large
          corporations. Your first job is about learning, not prestige.
        </TipBox>

        {/* Section 3 */}
        <h2 style={h2Style}>Skills That Actually Get Freshers Hired in IT</h2>
        <p style={prose}>
          Based on current job postings across India, these are the technical
          skills that appear most frequently in entry-level IT roles:
        </p>

        <h3 style={h3Style}>For Frontend / Full Stack Roles</h3>
        <p style={prose}>
          HTML and CSS fundamentals, JavaScript (ES6 and beyond), React or
          Angular, basic Node.js and REST API knowledge, Git and GitHub, and
          an understanding of responsive design. Companies are increasingly
          also asking about basic TypeScript knowledge for frontend roles.
        </p>

        <h3 style={h3Style}>For Data and Analytics Roles</h3>
        <p style={prose}>
          Python with pandas and NumPy, SQL for querying relational databases,
          Excel for data presentation, and at least one data visualisation
          tool like Power BI or Tableau. A working knowledge of statistics —
          mean, median, standard deviation, correlation — is also frequently
          tested in data fresher interviews.
        </p>

        <h3 style={h3Style}>For QA and Testing Roles</h3>
        <p style={prose}>
          Manual testing fundamentals, understanding of the software
          development lifecycle, basic Selenium or Cypress for automation,
          and familiarity with tools like JIRA and Postman. QA roles are
          often overlooked by freshers but offer excellent entry points into
          IT companies with clear paths to senior roles.
        </p>

        <Callout icon="💼" title="Non-Technical Skills Matter Too">
          Hiring managers consistently report that communication, problem-solving
          attitude, and willingness to learn matter as much as technical skills
          at the fresher level. A candidate who explains their thinking clearly
          and shows genuine curiosity often gets hired over a technically stronger
          candidate who cannot communicate well.
        </Callout>

        {/* Section 4 */}
        <h2 style={h2Style}>Where to Find Fresher IT Jobs in India</h2>
        <p style={prose}>
          The most reliable sources for fresher IT job listings in India are
          Naukri, LinkedIn Jobs, Instahyre, and company career pages directly.
          For startups, AngelList India (now Wellfound) lists many early-stage
          companies actively hiring freshers. Campus placement portals, college
          alumni networks, and faculty referrals are also underused but highly
          effective channels.
        </p>
        <p style={prose}>
          Set up job alerts on LinkedIn and Naukri with filters for your target
          role, location, and experience level. Check these alerts every
          morning and apply within 24 hours of a posting going live — early
          applicants consistently get higher callback rates than those who
          apply days later.
        </p>

        <TipBox>
          Do not wait until your resume is perfect to start applying. A good
          enough resume submitted today will always outperform a perfect resume
          submitted next month. Apply now, improve as you go, and use each
          interview as feedback.
        </TipBox>

        {/* Section 5 */}
        <h2 style={h2Style}>How Long Does It Actually Take?</h2>
        <p style={prose}>
          With consistent daily effort — two to three hours of focused work
          per day — most freshers who follow this roadmap land their first
          interview within 60 days and their first job offer within 90 to 120
          days. This assumes you are starting from a basic computer science
          foundation, which most engineering graduates have.
        </p>
        <p style={prose}>
          The freshers who take longer are usually those who spread themselves
          too thin across multiple technologies, apply randomly without
          tailoring their approach, or stop applying after a few rejections.
          Rejection is a normal part of the process at this stage — it is not
          feedback on your ability, it is simply a numbers game that rewards
          persistence.
        </p>

        {/* Conclusion */}
        <h2 style={h2Style}>Start Today, Not Next Week</h2>
        <p style={prose}>
          Every week you wait is a week of momentum lost. The freshers who get
          hired fastest are not necessarily the most talented — they are the
          ones who started building, applying, and iterating earlier than
          everyone else. The roadmap in this article gives you everything you
          need. The only thing left is to begin.
        </p>
        <p style={prose}>
          Pick your technical direction today. Spend 30 minutes browsing job
          postings to understand what skills are being asked for. Write down
          three projects you could realistically build in the next 30 days.
          Then start building the first one. That single action puts you ahead
          of the majority of freshers who are still waiting for the perfect
          moment to begin.
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
            Ready to Find Your First IT Job?
          </div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#a89f8f", marginBottom: "1.2rem" }}>
            Browse fresher-friendly IT openings updated daily across India.
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
            Browse IT Jobs →
          </Link>
        </div>

        {/* Tags */}
        <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${c.border}` }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "1px", color: c.muted, marginBottom: "0.8rem" }}>
            Topics
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["First IT Job", "Fresher Jobs India", "IT Career Tips", "Web Development", "Job Search 2025", "Fresher Resume"].map(tag => (
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