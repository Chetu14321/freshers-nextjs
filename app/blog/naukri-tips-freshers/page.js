import Link from "next/link";

export const metadata = {
  title: "How to Use Naukri.com Effectively as a Fresher (2026) | FreshersJobs",
  description:
    "A step-by-step guide to setting up your Naukri profile, uploading a strong resume, and getting recruiter attention as a fresher in India.",
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

export default function NaukriTipsFreshers() {
  return (
    <div style={{ background: c.paper, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <article style={{ maxWidth: "760px", margin: "0 auto" }}>

        <nav style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.76rem", color: c.muted, marginBottom: "1.8rem" }}>
          <Link href="/" style={{ color: c.teal, textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: c.teal, textDecoration: "none" }}>Blogs</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          How to Use Naukri.com as a Fresher
        </nav>

        <span style={{
          display: "inline-block", background: "#2e7d32", color: "#fff",
          fontFamily: "system-ui, sans-serif", fontSize: "0.68rem", fontWeight: 700,
          letterSpacing: "1.5px", textTransform: "uppercase",
          padding: "3px 12px", borderRadius: "2px", marginBottom: "1rem",
        }}>Job Search</span>

        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700, color: c.ink, lineHeight: 1.2, marginBottom: "1rem",
        }}>
          How to Use Naukri.com Effectively as a Fresher
        </h1>

        <div style={{
          fontFamily: "system-ui, sans-serif", fontSize: "0.8rem", color: c.muted,
          display: "flex", gap: "1.4rem", flexWrap: "wrap",
          marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: `1px solid ${c.border}`,
        }}>
          <span>📅 May 25, 2025</span>
          <span>⏱ 8 min read</span>
          <span>✍️ FreshersJobs Editorial Team</span>
        </div>

        <div style={{
          background: c.amberPale, borderLeft: `4px solid ${c.amber}`,
          borderRadius: "0 8px 8px 0", padding: "1.2rem 1.5rem", marginBottom: "2rem",
          fontStyle: "italic", fontFamily: "Georgia, serif", fontSize: "1.05rem",
          color: "#3a2e1a", lineHeight: 1.75,
        }}>
          Naukri.com is India's largest job platform with millions of active recruiters
          searching for candidates every day. Most freshers create a basic profile and then
          wonder why no one contacts them. The truth is that Naukri works very differently
          from simply uploading a resume and waiting. This guide walks you through every
          setting and strategy that turns a dormant Naukri profile into a recruiter magnet.
        </div>

        <h2 style={h2Style}>Why Most Fresher Naukri Profiles Get Ignored</h2>
        <p style={prose}>
          Naukri uses an internal ranking system called Resume Score that determines how
          prominently your profile appears in recruiter searches. A profile with missing
          fields, a poorly written headline, an outdated resume, or zero activity ranks
          lower in search results — which means recruiters simply never see it. Most freshers
          fill in the minimum required fields, upload a resume once, and never return. That
          profile becomes invisible within weeks.
        </p>
        <p style={prose}>
          The freshers who receive consistent recruiter calls on Naukri are not necessarily
          the most qualified. They are the ones whose profiles are complete, keyword-rich,
          regularly updated, and set up to actively respond to relevant job postings. This
          guide shows you exactly how to become one of those candidates.
        </p>

        <Callout icon="📊" title="How Naukri Ranks Fresher Profiles">
          Naukri's search algorithm weighs several factors when deciding which profiles to
          show recruiters: profile completeness percentage, resume upload date and how
          recently it was updated, keyword match between your profile and the recruiter's
          search, your job application activity, and how quickly you respond to recruiter
          messages. Understanding these factors is the foundation of using Naukri effectively.
        </Callout>

        <h2 style={h2Style}>Step-by-Step Profile Setup for Freshers</h2>

        <StepCard number="01" title="Write a Strong Profile Headline">
          Your Naukri headline is the first thing a recruiter sees in search results. Do not
          write Fresher Looking for Job or Recent Graduate. Instead, write a specific,
          keyword-driven headline that reflects your target role and skills. For example:
          Java Developer Fresher | Spring Boot | MySQL | 2025 Graduate or Content Writer
          Fresher | SEO | Blog Writing | English Communication. Include your primary skill,
          a secondary skill, and your fresher or batch year status. This combination
          maximises your visibility in relevant recruiter searches.
        </StepCard>

        <StepCard number="02" title="Fill Your Profile to 100 Percent Completion">
          Naukri shows you a profile completion percentage and actively prompts you to fill
          missing sections. Do not ignore this. Complete every section — education details,
          skills, projects, certifications, languages known, and your career objective. Each
          completed section improves your search ranking. The career objective field in
          particular is indexed by Naukri's search engine, so write two to three sentences
          that include your target role and key skills explicitly.
        </StepCard>

        <StepCard number="03" title="Upload a Fresh, ATS-Compatible Resume">
          Upload your resume in Word or PDF format and make sure it is up to date. Naukri
          indexes the text inside your uploaded resume as well as your profile fields, so a
          keyword-rich resume directly improves your search visibility. Re-upload your resume
          at least once every two weeks — Naukri's algorithm gives higher visibility to
          recently updated profiles, and this simple action alone can noticeably increase the
          recruiter views your profile receives.
        </StepCard>

        <StepCard number="04" title="Add the Right Skills — Use Naukri's Skill Tags">
          Naukri has a structured skills section where you can add tags from its existing
          database. Add every relevant technical skill, tool, and domain keyword that
          honestly applies to you. Recruiters filter candidates by these skill tags, so a
          profile missing key tags will not appear in those searches at all. Aim to add
          at least 10 to 15 relevant skills.
        </StepCard>

        <StepCard number="05" title="Set Your Job Preferences Accurately">
          In your profile settings, set your preferred job roles, preferred locations,
          expected salary, and notice period. Set notice period to Immediate for fresher
          roles — companies hiring freshers typically want quick joiners. For expected
          salary, research the standard range for your target role in your city and enter
          a realistic figure. An unrealistic salary expectation causes recruiters to skip
          your profile before they even read it.
        </StepCard>

        <TipBox>
          Enable the Resume Highlight feature on Naukri if you are on a free account — it
          costs nothing and makes your profile stand out visually in search results for a
          limited period. More importantly, log into Naukri and update at least one field
          every ten to fourteen days. Even editing a single word and saving it counts as
          an update and refreshes your profile's recency ranking in recruiter searches.
        </TipBox>

        <h2 style={h2Style}>How to Apply for Jobs on Naukri the Right Way</h2>
        <p style={prose}>
          Many freshers apply to every job they see on Naukri without reading descriptions
          carefully. This produces a low application quality signal on your account and
          leads to irrelevant recruiter calls for roles you are not suited for. A targeted
          approach — fewer, better applications — consistently produces better outcomes.
        </p>

        <h3 style={h3Style}>Set Up Smart Job Alerts</h3>
        <p style={prose}>
          Use Naukri's Job Alert feature to create alerts for your specific target roles,
          preferred locations, and experience level — zero to one year for fresher roles.
          When a new matching job is posted, Naukri emails you immediately. Applying within
          the first few hours of a job posting going live significantly increases your
          chances of being reviewed before the recruiter receives hundreds of applications.
        </p>

        <h3 style={h3Style}>Respond to Recruiter Messages Quickly</h3>
        <p style={prose}>
          When a recruiter messages you through Naukri, respond within the same day. Slow
          responses or no responses reduce your profile's responsiveness score, which hurts
          your ranking in future recruiter searches. Even if the role is not right for you,
          a polite, prompt response maintains your account's activity signal and keeps the
          relationship open for future opportunities.
        </p>

        <Callout icon="🎯" title="The Naukri Fresher Advantage">
          Naukri has a dedicated Freshers section under its job categories that many freshers
          overlook. This section lists roles specifically open to zero to one year experience
          candidates and is actively used by companies running large campus-style hiring drives.
          Filtering your job search to this section removes the frustration of applying to
          roles that quietly expect experienced hires despite their fresher label.
        </Callout>

        <h2 style={h2Style}>What to Do After Your Profile Is Live</h2>
        <p style={prose}>
          Setting up your profile is the beginning, not the end. Log into Naukri at least
          three times a week to apply for new listings, respond to recruiter messages, and
          refresh your profile. Track which types of roles generate the most recruiter
          interest and adjust your headline and skills accordingly. If you are receiving
          calls for roles that do not match your target, your headline or skills section
          likely contains terms that are attracting the wrong searches — review and refine them.
        </p>
        <p style={prose}>
          Combine your Naukri presence with LinkedIn and direct company applications. No
          single platform covers the full landscape of fresher hiring in India. Freshers who
          use Naukri, LinkedIn, and direct company portals simultaneously — each optimised
          correctly — consistently land interviews faster than those relying on just one source.
        </p>

        <TipBox>
          Never pay for Naukri's premium fresher packages unless you have exhausted every
          free optimisation option first. The free features — complete profile, skill tags,
          regular updates, job alerts, and prompt responses — are more than sufficient to
          generate recruiter visibility for most fresher profiles. Premium features help
          at the margins but are not a substitute for a well-built, actively maintained
          free profile.
        </TipBox>

        <div style={{
          background: c.ink, borderRadius: "10px",
          padding: "2rem", textAlign: "center", margin: "2.5rem 0",
        }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: c.amberLt, marginBottom: "0.6rem" }}>
            Browse Fresher Jobs Across India
          </div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#a89f8f", marginBottom: "1.2rem" }}>
            Hundreds of entry-level opportunities updated daily.
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
            {["Naukri Tips", "Job Search India", "Freshers 2026", "Career Tips", "Resume Tips", "First Job"].map(tag => (
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