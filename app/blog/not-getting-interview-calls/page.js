import Link from "next/link";

export const metadata = {
  title: "What to Do If You Are Not Getting Interview Calls (2026) | FreshersJobs",
  description:
    "Practical steps to diagnose and fix your resume, job applications, and job search strategy when you are a fresher getting no callbacks.",
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

export default function NotGettingInterviewCalls() {
  return (
    <div style={{ background: c.paper, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <article style={{ maxWidth: "760px", margin: "0 auto" }}>

        <nav style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.76rem", color: c.muted, marginBottom: "1.8rem" }}>
          <Link href="/" style={{ color: c.teal, textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: c.teal, textDecoration: "none" }}>Blogs</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          Not Getting Interview Calls
        </nav>

        <span style={{
          display: "inline-block", background: "#2e7d32", color: "#fff",
          fontFamily: "system-ui, sans-serif", fontSize: "0.68rem", fontWeight: 700,
          letterSpacing: "1.5px", textTransform: "uppercase",
          padding: "3px 12px", borderRadius: "2px", marginBottom: "1rem",
        }}>Career Tips</span>

        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700, color: c.ink, lineHeight: 1.2, marginBottom: "1rem",
        }}>
          What to Do If You Are Not Getting Interview Calls
        </h1>

        <div style={{
          fontFamily: "system-ui, sans-serif", fontSize: "0.8rem", color: c.muted,
          display: "flex", gap: "1.4rem", flexWrap: "wrap",
          marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: `1px solid ${c.border}`,
        }}>
          <span>📅 May 28, 2025</span>
          <span>⏱ 9 min read</span>
          <span>✍️ FreshersJobs Editorial Team</span>
        </div>

        <div style={{
          background: c.amberPale, borderLeft: `4px solid ${c.amber}`,
          borderRadius: "0 8px 8px 0", padding: "1.2rem 1.5rem", marginBottom: "2rem",
          fontStyle: "italic", fontFamily: "Georgia, serif", fontSize: "1.05rem",
          color: "#3a2e1a", lineHeight: 1.75,
        }}>
          Applying for jobs and hearing nothing back is one of the most demoralising
          experiences a fresher can face. But silence from recruiters is not random —
          it almost always has a specific, fixable cause. This guide helps you diagnose
          exactly what is going wrong in your job search and gives you a clear action
          plan to start getting callbacks within the next two to three weeks.
        </div>

        <h2 style={h2Style}>First — Understand What Silence Actually Means</h2>
        <p style={prose}>
          When you apply to ten jobs and hear nothing, it is easy to assume the job market
          is terrible or that you simply are not good enough. Both conclusions are usually
          wrong. In most cases, silence means one of three things: your resume is being
          filtered out before a human sees it, your resume is being seen but not generating
          enough interest to justify a call, or you are applying to roles that are a poor
          match for your current profile. Each of these has a different fix, and identifying
          which applies to your situation is the first step.
        </p>

        <Callout icon="🔍" title="The Silence Diagnostic">
          Ask yourself these three questions honestly. One: Is my resume passing ATS
          screening — does it have relevant keywords, clean formatting, and no tables or
          graphics? Two: Does my resume show real evidence of skills through projects or
          internships, or does it only list skills without proof? Three: Am I applying
          for roles where I meet at least 60 percent of the listed requirements? If the
          answer to any of these is no, you have found your primary issue.
        </Callout>

        <h2 style={h2Style}>Fix 1 — Audit Your Resume Honestly</h2>
        <p style={prose}>
          Most freshers who are not getting callbacks have a resume problem, not a skills
          problem. The resume is the only thing standing between you and a recruiter's
          phone call — and if it is not doing its job, nothing else in your job search
          will work. Before changing anything else, fix your resume first.
        </p>

        <StepCard number="01" title="Run Your Resume Through an ATS Checker">
          Paste your resume text into a free tool like Resume Worded or Jobscan and run
          it against two or three job descriptions for roles you are targeting. Look at
          your keyword match score. If it is below 60 percent, your resume is missing the
          exact terms recruiters are searching for. Add the missing keywords wherever they
          genuinely apply to your skills and experience.
        </StepCard>

        <StepCard number="02" title="Replace Vague Descriptions With Specific Evidence">
          Go through every bullet point on your resume and ask: does this prove I can do
          something, or does it just describe what I did in the vaguest possible way?
          Phrases like assisted the team, participated in development, or helped with
          tasks say nothing useful. Replace them with specific actions and outcomes —
          built a REST API using Node.js that reduced data loading time by 40 percent,
          or wrote and published 12 SEO articles that collectively ranked on page one
          for target keywords.
        </StepCard>

        <StepCard number="03" title="Check Your Contact Information">
          This sounds obvious but it happens often — freshers apply with an outdated phone
          number, a broken email address, or a LinkedIn URL that leads to a blank profile.
          Confirm that every piece of contact information on your resume is correct, active,
          and professional. Have one other person check it too.
        </StepCard>

        <h2 style={h2Style}>Fix 2 — Evaluate How You Are Applying</h2>
        <p style={prose}>
          The number of applications you send matters far less than the quality and
          targeting of each one. Freshers who send 50 identical applications to 50
          different companies typically get worse results than freshers who send 15
          carefully tailored applications. Quality targeting consistently outperforms
          volume spraying.
        </p>

        <h3 style={h3Style}>Apply Earlier</h3>
        <p style={prose}>
          Most job postings receive the bulk of their applications within the first 48
          hours. If you are applying to listings that have been live for a week or more,
          you are often competing against hundreds of candidates who got there before you
          and may have already been shortlisted. Set up job alerts on Naukri, LinkedIn,
          and Internshala and apply on the same day a relevant listing appears.
        </p>

        <h3 style={h3Style}>Match the Role More Carefully</h3>
        <p style={prose}>
          Read each job description carefully before applying. Identify the two or three
          skills or qualities the company emphasises most. Then look at your resume and
          cover note — do they clearly demonstrate those specific things? If not, adjust
          your resume or cover note before applying. A resume that speaks directly to what
          a company is asking for will always outperform a generic one.
        </p>

        <h3 style={h3Style}>Write a Cover Note for Every Application</h3>
        <p style={prose}>
          On platforms like Internshala and LinkedIn, adding a short, specific cover note
          to your application sets you apart from the majority of applicants who skip it
          entirely. Three to four sentences that mention the company by name, explain your
          genuine interest in the role, and reference one relevant skill or project you
          have worked on is enough. It takes five minutes and meaningfully increases your
          callback rate.
        </p>

        <TipBox>
          After applying to any role, find the hiring manager or recruiter on LinkedIn and
          send a short, polite message letting them know you have applied and expressing
          genuine interest. Something like: Hello, I recently applied for the junior
          developer role at your company and wanted to express my genuine interest. I have
          built two relevant projects using React and Node.js and would love to discuss
          how I can contribute to your team. This direct outreach, combined with an
          application, dramatically increases your visibility.
        </TipBox>

        <h2 style={h2Style}>Fix 3 — Build More Evidence of Your Skills</h2>
        <p style={prose}>
          If your resume and application approach are already solid but callbacks are still
          not coming, the issue may be that your profile simply does not yet have enough
          evidence to justify the investment of an interview. This is honest and fixable.
          The solution is to spend two to four weeks building something new — a project,
          a certification, a freelance piece of work — that you can add to your resume
          before your next round of applications.
        </p>
        <p style={prose}>
          Even one new, well-described project can shift the quality signal of your entire
          resume. A data analyst fresher who adds a Kaggle project with published findings
          stands out differently than one whose only evidence of data skills is a coursework
          assignment. A developer fresher with a live deployed application is a fundamentally
          different candidate than one with only GitHub repositories that have not been
          touched in months.
        </p>

        <Callout icon="📅" title="A Two-Week Reset Plan">
          If you have been applying for more than three weeks with no callbacks, stop
          applying for two weeks and use that time to: rewrite your resume from scratch
          using the structure in this guide, build or update one project and deploy it
          live, update your Naukri and LinkedIn profiles completely, and identify twenty
          specific companies in your target area to apply to directly through their career
          pages. Then resume applying with this improved foundation. This reset approach
          consistently produces better results than continuing to send the same resume to
          more companies.
        </Callout>

        <h2 style={h2Style}>Fix 4 — Expand Where You Are Applying</h2>
        <p style={prose}>
          Many freshers limit their job search to two or three platforms and a handful of
          well-known company names. This narrow focus misses a large portion of the
          actual hiring market. Smaller companies, regional firms, and startups that do
          not advertise heavily on the major platforms are often the easiest entry points
          for freshers — and they frequently offer faster growth, more responsibility,
          and stronger references than large companies that run standardised fresher programmes.
        </p>
        <p style={prose}>
          Apply directly through company career pages, search for local companies in your
          city on LinkedIn and Google, attend virtual hiring events and fresher job fairs,
          and ask your professors, seniors, and family network if they are aware of any
          relevant openings. Word-of-mouth and referral channels still account for a large
          share of fresher hiring in India, especially at small and medium-sized companies.
        </p>

        <TipBox>
          Keep a simple spreadsheet tracking every company you have applied to, the date
          of application, the platform used, and any follow-up actions taken. This tracking
          prevents you from applying to the same company twice, helps you identify which
          platforms and role types are generating the most activity, and gives you a clear
          picture of your search intensity. Most freshers who feel like they have applied
          everywhere have actually applied to fewer than thirty companies — far less than
          an effective search typically requires.
        </TipBox>

        <div style={{
          background: c.ink, borderRadius: "10px",
          padding: "2rem", textAlign: "center", margin: "2.5rem 0",
        }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: c.amberLt, marginBottom: "0.6rem" }}>
            Browse Fresher Jobs Across India
          </div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#a89f8f", marginBottom: "1.2rem" }}>
            Fresh listings updated daily — start applying smarter today.
          </div>
          <Link href="/jobs" style={{
            display: "inline-block", background: c.amber, color: "#fff",
            fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", fontWeight: 700,
            padding: "11px 26px", borderRadius: "6px", textDecoration: "none",
          }}>
            Explore Jobs →
          </Link>
        </div>

        <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${c.border}` }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "1px", color: c.muted, marginBottom: "0.8rem" }}>Topics</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Job Search India", "Career Tips", "Freshers 2026", "Resume Tips", "Interview Tips", "First Job"].map(tag => (
              <Link key={tag} href="/blog" style={{
                background: c.cream, border: `1px solid ${c.border}`,
                color: c.teal, fontFamily: "system-ui, sans-serif",
                fontSize: "0.78rem", padding: "5px 14px",
                borderRadius: "20px", textDecoration: "none",
              }}>{tag}</Link>
            ))}
          </div>
        </div>

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
            <div style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: c.ink }}>FreshersJobs Editorial Team</div>
            <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", color: c.muted, marginBottom: "0.4rem" }}>Career Guidance · freshersjobs.shop</div>
            <p style={{ ...prose, fontSize: "0.84rem", marginBottom: 0 }}>
              Our editorial team includes HR professionals, placement consultants, and career coaches
              with over 20 years of combined experience helping fresh graduates navigate the Indian job market.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link href="/blog" style={{
            display: "inline-block", fontFamily: "system-ui, sans-serif",
            fontSize: "0.85rem", fontWeight: 700, color: c.amber, textDecoration: "none",
            border: `2px solid ${c.amber}`, padding: "10px 24px", borderRadius: "6px",
          }}>
            ← Back to All Blogs
          </Link>
        </div>

      </article>
    </div>
  );
}