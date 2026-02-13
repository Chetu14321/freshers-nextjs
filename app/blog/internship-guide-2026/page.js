import Link from "next/link";

export const metadata = {
  title: "Internship Guide 2026 for Freshers | FreshersJobs",
  description:
    "A complete guide to finding, applying for, and converting internships into full-time job offers — written for Indian freshers in 2026.",
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

export default function InternshipGuide() {
  return (
    <div style={{ background: c.paper, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <article style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <nav style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.76rem", color: c.muted, marginBottom: "1.8rem" }}>
          <Link href="/" style={{ color: c.teal, textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: c.teal, textDecoration: "none" }}>Blogs</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          Internship Guide 2026
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
        }}>Internships</span>

        {/* Title */}
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          color: c.ink,
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}>
          Internship Guide for Freshers 2026
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
          <span>📅 April 30, 2025</span>
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
          An internship is not just a line on your resume. Done right, it is
          the fastest path from student to employed professional — giving you
          real skills, industry contacts, and in many cases a direct job offer
          before you even graduate. This guide covers everything you need to
          know to find, land, and make the most of an internship in 2026.
        </div>

        {/* Section 1 */}
        <h2 style={h2Style}>Why Internships Matter More Than Ever in 2026</h2>
        <p style={prose}>
          The gap between what colleges teach and what employers need has never
          been wider. Academic projects give you theory; internships give you
          context. When a company hires a fresher, they are making a bet on
          someone with limited track record. An internship — even a short one —
          gives you a track record. It tells an employer that someone else
          already took that bet on you, and it paid off.
        </p>
        <p style={prose}>
          Beyond the resume value, internships teach you things that no
          classroom can: how to work in a team under deadlines, how to
          communicate with senior colleagues, how professional tools and
          workflows actually function, and what kind of work environment suits
          you. These lessons inform every career decision you will make for
          years to come.
        </p>

        <Callout icon="📈" title="Internships and Job Offers">
          Data from Indian placement portals consistently shows that freshers
          with at least one internship on their resume receive 2 to 3 times
          more interview callbacks than those without. Companies that offer
          internship programmes also convert 30 to 50 percent of their interns
          into full-time employees.
        </Callout>

        {/* Section 2 */}
        <h2 style={h2Style}>How to Find the Right Internship</h2>
        <p style={prose}>
          Not all internships are equal. A two-month internship where you
          genuinely contribute to a real product or service is worth ten times
          more on your resume than a three-month internship where you spent
          your time making tea and attending meetings. Before applying anywhere,
          be clear about what you want to gain — a specific technical skill,
          exposure to a particular industry, a reference from a credible
          professional, or ideally all three.
        </p>

        <h3 style={h3Style}>Where to Search for Internships</h3>
        <p style={prose}>
          Internshala is the most widely used internship platform in India and
          lists thousands of roles across technical and non-technical fields.
          LinkedIn is excellent for finding internships at startups and
          product companies. LetsIntern, HelloIntern, and company career pages
          are also reliable sources. For government and public sector
          internships, check the respective ministry or organisation websites
          directly.
        </p>

        <h3 style={h3Style}>How to Evaluate an Internship Before Applying</h3>
        <p style={prose}>
          Look for internships where the role description clearly states what
          you will be working on — not just vague phrases like assisting the
          team or supporting operations. Ask yourself: will I learn a
          specific, nameable skill from this? Will I have real output to show
          at the end? Is the company or the mentor someone who can give me a
          meaningful reference? If the answers are yes, apply.
        </p>

        <TipBox>
          Apply to internships at companies slightly above what you think you
          qualify for. Many internship selectors are looking for potential and
          attitude as much as current skill level. A well-written application
          showing genuine interest in the company can get you interviews at
          organisations you assume are out of reach.
        </TipBox>

        {/* Section 3 */}
        <h2 style={h2Style}>How to Apply When You Have No Experience</h2>
        <p style={prose}>
          The most common reason freshers do not apply for internships is the
          belief that they are not qualified enough yet. This is almost always
          wrong. Internship applications are fundamentally different from job
          applications — the expectation is that you are learning, not that
          you arrive fully formed. What selectors look for is enthusiasm,
          basic foundational skills, and clear communication.
        </p>

        <StepCard number="01" title="Write a Short, Specific Cover Note">
          Most applicants on platforms like Internshala skip the cover note
          entirely or write a generic one. A three to four sentence note that
          mentions the company by name, explains why you are specifically
          interested in that role, and references one relevant skill or project
          you have worked on will immediately put you ahead of the majority
          of applicants. Write a fresh note for every application — do not
          copy and paste.
        </StepCard>

        <StepCard number="02" title="Lead With Projects, Not Grades">
          For internship applications, your academic GPA matters less than
          what you have actually built or learned. If you have even one project
          — a small website, a Python script, a data analysis on a public
          dataset — describe it clearly in your resume and link to it on
          GitHub. Concrete evidence of self-motivated work is the most
          compelling thing a fresher can show.
        </StepCard>

        <StepCard number="03" title="Apply Early and Follow Up">
          Most internship postings on Internshala and LinkedIn receive the
          bulk of their applications within the first 48 hours. Apply the same
          day you find a listing. After applying, connect with the recruiter
          or hiring manager on LinkedIn with a polite message referencing
          your application. This combination of early timing and direct
          outreach significantly increases your visibility.
        </StepCard>

        <StepCard number="04" title="Prepare for the Internship Interview">
          Internship interviews are typically shorter and less technical than
          full-time job interviews, but they still require preparation. Expect
          questions about why you want to intern at that company, what you
          know about what the company does, and how you would approach a
          specific task relevant to the role. Research the company for 30
          minutes before every interview — almost no other fresher does this,
          and it shows immediately.
        </StepCard>

        {/* Section 4 */}
        <h2 style={h2Style}>How to Make the Most of Your Internship</h2>
        <p style={prose}>
          Landing the internship is only half the job. What you do during it
          determines whether it becomes a bullet point on your resume or the
          foundation of your career. The freshers who get full-time offers from
          internships are not always the most technically skilled — they are
          the ones who treat the internship like a job interview that lasts
          two months.
        </p>

        <h3 style={h3Style}>Show Up as a Professional, Not a Student</h3>
        <p style={prose}>
          Be on time, communicate proactively when you are stuck, ask
          thoughtful questions rather than guessing, and deliver what you say
          you will deliver. These behaviours sound basic but they are
          genuinely rare among interns. The bar for standing out is lower
          than you think.
        </p>

        <h3 style={h3Style}>Ask for Real Work</h3>
        <p style={prose}>
          At the start of your internship, tell your manager directly that you
          want to contribute meaningfully and are comfortable taking on
          challenging tasks. Most managers will respect this and assign you
          more interesting work. Interns who wait passively for tasks to be
          assigned typically end up with low-impact work and weak references.
        </p>

        <h3 style={h3Style}>Document Everything You Build</h3>
        <p style={prose}>
          Keep a running note of everything you work on during your internship
          — features you built, problems you solved, tools you learned, and
          any measurable outcomes like performance improvements or bugs fixed.
          This documentation becomes the content of your resume and the
          stories you tell in future interviews.
        </p>

        <Callout icon="🤝" title="Build Relationships, Not Just Skills">
          The colleagues and managers you meet during an internship become part
          of your professional network for years. A mentor from your first
          internship can refer you to roles, review your resume, and vouch
          for your character long after the internship ends. Treat every
          interaction as an investment in a long-term professional relationship.
        </Callout>

        {/* Section 5 */}
        <h2 style={h2Style}>How to Convert an Internship Into a Full-Time Offer</h2>
        <p style={prose}>
          Companies that run internship programmes are specifically looking to
          identify people they want to hire full time. The conversion process
          is not mysterious — it is simply a matter of demonstrating over the
          course of the internship that you are someone worth betting on.
        </p>
        <p style={prose}>
          Express your interest in a full-time role early and directly — ideally
          within the first two weeks. Tell your manager that you are hoping to
          join full time after the internship and ask what you would need to
          demonstrate to make that happen. This conversation signals
          commitment and gives you a clear target to work toward. Most managers
          appreciate the directness.
        </p>
        <p style={prose}>
          Even if a full-time offer does not materialise at the same company,
          a strong internship reference and documented project work from a
          recognisable organisation will accelerate your job search considerably.
          Many freshers land their first full-time role within weeks of
          completing a well-performed internship — not necessarily at the same
          company, but often through referrals from people they met there.
        </p>

        <TipBox>
          Always ask for a written recommendation or LinkedIn endorsement from
          your internship manager before your last day. This is much easier to
          request while the relationship is fresh and your work is top of mind.
          Waiting until months later makes it awkward for both parties.
        </TipBox>

        {/* Conclusion */}
        <h2 style={h2Style}>The Right Time to Start Is Now</h2>
        <p style={prose}>
          Whether you are in your second year of college or a recent graduate
          still searching for your first role, an internship is one of the
          highest-return investments you can make in your career right now.
          The skills, experience, and connections you gain in even a short,
          focused internship will compound into opportunities for years.
        </p>
        <p style={prose}>
          Open Internshala or LinkedIn right now and search for internships in
          your target area. Read three job descriptions carefully. Note the
          skills they ask for. Apply to the ones where you match at least
          60 percent of the requirements — and write a genuine cover note for
          each one. That single action, taken today, begins a chain of events
          that most freshers spend months wishing they had started sooner.
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
            Browse Internships for Freshers
          </div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#a89f8f", marginBottom: "1.2rem" }}>
            Hundreds of internship listings updated daily across India.
          </div>
          <Link href="/internships" style={{
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
            Explore Internships →
          </Link>
        </div>

        {/* Tags */}
        <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${c.border}` }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "1px", color: c.muted, marginBottom: "0.8rem" }}>
            Topics
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Internship Guide", "Freshers 2026", "Career Tips", "Internshala", "Job Search India", "First Job"].map(tag => (
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