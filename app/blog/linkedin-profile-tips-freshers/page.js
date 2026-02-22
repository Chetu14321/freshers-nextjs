import Link from "next/link";

export const metadata = {
  title: "How to Build a LinkedIn Profile That Gets You Noticed as a Fresher | FreshersJobs",
  description:
    "A complete guide to building a LinkedIn profile that attracts recruiters — covering photos, headlines, summaries, skills, and how to message hiring managers as a fresher.",
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

function SectionCard({ number, title, children }) {
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

function ExampleBox({ label, children }) {
  return (
    <div style={{
      background: "#fff",
      border: `1px solid ${c.border}`,
      borderRadius: "8px",
      padding: "1.1rem 1.3rem",
      margin: "1rem 0 1.6rem",
    }}>
      <div style={{
        fontFamily: "system-ui, sans-serif",
        fontSize: "0.68rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: c.amber,
        marginBottom: "0.5rem",
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: "Georgia, serif",
        fontSize: "0.95rem",
        lineHeight: 1.7,
        color: c.bodyText,
        fontStyle: "italic",
      }}>
        {children}
      </div>
    </div>
  );
}

export default function LinkedInProfileTips() {
  return (
    <div style={{ background: c.paper, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <article style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <nav style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.76rem", color: c.muted, marginBottom: "1.8rem" }}>
          <Link href="/" style={{ color: c.teal, textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: c.teal, textDecoration: "none" }}>Blogs</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          LinkedIn Profile Tips for Freshers
        </nav>

        {/* Category tag */}
        <span style={{
          display: "inline-block",
          background: "#0a66c2",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          padding: "3px 12px",
          borderRadius: "2px",
          marginBottom: "1rem",
        }}>LinkedIn</span>

        {/* Title */}
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          color: c.ink,
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}>
          How to Build a LinkedIn Profile That Gets You Noticed as a Fresher
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
          <span>📅 June 5, 2025</span>
          <span>⏱ 10 min read</span>
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
          Your LinkedIn profile is working while you sleep. Recruiters search
          for candidates on LinkedIn every single day — and a complete,
          well-written profile means you get found even when you are not
          actively applying anywhere. This guide walks through every section
          of your LinkedIn profile with specific, actionable advice written
          for freshers starting from scratch.
        </div>

        {/* Section 1 */}
        <h2 style={h2Style}>Why LinkedIn Matters More Than Job Portals for Freshers</h2>
        <p style={prose}>
          Most freshers in India rely exclusively on Naukri and Indeed to find
          jobs. These platforms work, but they put you in a passive position —
          you apply and wait. LinkedIn works differently. A strong LinkedIn
          profile makes you discoverable. Recruiters search LinkedIn using
          keywords, skills, and location filters every day to find candidates
          for roles that are never publicly advertised.
        </p>
        <p style={prose}>
          Industry research consistently shows that more than 75% of
          professionals get their jobs through networking and referrals rather
          than direct applications. LinkedIn is the infrastructure for that
          network. Freshers who invest time in building a strong presence on
          LinkedIn typically start receiving unsolicited recruiter messages
          within weeks — without applying to a single job posting.
        </p>

        <Callout icon="📊" title="LinkedIn by the Numbers">
          LinkedIn has over 100 million users in India as of 2025. Recruiters
          at both startups and large IT companies use LinkedIn as their primary
          sourcing tool for entry-level positions. A profile marked as Open
          to Work with a complete profile receives on average 40% more recruiter
          outreach than an incomplete profile without that setting.
        </Callout>

        {/* Section 2 */}
        <h2 style={h2Style}>The 8 Sections That Make or Break a Fresher Profile</h2>
        <p style={prose}>
          LinkedIn has many sections, but eight of them determine whether your
          profile performs well in recruiter searches and makes a strong
          impression when someone views it. Work through these in order —
          each one builds on the last.
        </p>

        <SectionCard number="01" title="Profile Photo">
          Your photo is the first thing anyone sees and it has a disproportionate
          impact on whether someone continues reading. You do not need a
          professional photographer. Use a phone in good natural light, wear
          something neat, smile naturally, and make sure your face fills at
          least 60% of the frame. Avoid group photos, casual selfies, or photos
          with distracting backgrounds. Profiles with a professional-looking
          photo get up to 14 times more views than those without one.
        </SectionCard>

        <SectionCard number="02" title="Background Banner">
          The banner behind your profile photo is a free advertising space that
          most freshers leave blank. Use a simple, clean banner that reinforces
          your professional identity. You can create one free in Canva using
          their LinkedIn banner templates. Include your name, your target role,
          and one or two key skills. This takes 10 minutes and immediately makes
          your profile look more intentional than 90% of fresher profiles.
        </SectionCard>

        <SectionCard number="03" title="Headline">
          Your headline is the line directly below your name. By default
          LinkedIn fills it with your latest education or job title. Change it
          to something that clearly communicates who you are and what you are
          looking for. The formula that works best for freshers is: Role You
          Want, Key Skill 1, Key Skill 2, Status. Keep it under 200 characters
          and make sure it contains the keywords recruiters are likely to
          search for.
        </SectionCard>

        <ExampleBox label="Headline Example">
          Aspiring Frontend Developer | React.js · JavaScript · Node.js | Open to Fresher Roles &amp; Internships
        </ExampleBox>

        <SectionCard number="04" title="About Section">
          The About section is your chance to tell your story in your own
          words — not in bullet points, but in a short, readable paragraph or
          two. Write in first person. Describe what you studied, what you are
          passionate about in your field, one or two projects you are proud
          of, and what kind of role or company you are looking for. End with
          a clear call to action: something like Feel free to connect or reach
          out if you are hiring for entry-level roles in web development.
          Keep the whole section under 300 words.
        </SectionCard>

        <ExampleBox label="About Section Example">
          I am a Computer Science graduate from VIT University with a strong
          interest in frontend development and building things people actually
          use. Over the past year I have built three personal projects using
          React and Node.js — including a job listings aggregator and a
          real-time collaborative notes app. I enjoy the process of taking a
          vague idea, breaking it down into components, and shipping something
          that works. I am currently looking for my first full-time role or
          internship in web development where I can contribute quickly and
          keep learning. If you are hiring or know someone who is, feel free
          to connect.
        </ExampleBox>

        <SectionCard number="05" title="Experience and Projects">
          If you have internship experience, add it here with bullet points
          describing what you worked on, what tools you used, and what the
          outcome was. If you have no formal work experience, add a Projects
          section instead — LinkedIn allows you to add projects directly to
          your profile. For each project, write two to three sentences
          explaining what it does, what technology you used to build it, and
          link to the live version or GitHub repository. Real projects with
          links are more convincing than job titles with vague descriptions.
        </SectionCard>

        <SectionCard number="06" title="Education">
          Add your degree, institution, graduation year, and CGPA if it is
          above 7.0. Also add any relevant coursework, academic projects, or
          awards under the education entry. Many freshers skip this — but
          specific details like a capstone project title or a relevant
          elective course help recruiters understand your background more
          precisely and give you more surface area for keyword matching.
        </SectionCard>

        <SectionCard number="07" title="Skills">
          Add at least 10 to 15 relevant skills to your profile. LinkedIn uses
          skills as a major search filter — recruiters often search by skill
          name to find candidates. Add both technical skills (specific
          languages, frameworks, tools) and professional skills (communication,
          problem-solving, project management). Ask three to five classmates
          or colleagues to endorse your top skills — profiles with endorsements
          rank higher in recruiter searches than those without.
        </SectionCard>

        <SectionCard number="08" title="Certifications and Licenses">
          Add every certification you have completed — Google Career
          Certificates, Coursera specialisations, NPTEL courses, HackerRank
          badges, AWS Cloud Practitioner, anything credible. Certifications
          signal self-motivation and fill the experience gap for freshers.
          Make sure to include the issuing organisation and the date so
          recruiters can verify them easily.
        </SectionCard>

        <TipBox>
          Turn on the Open to Work feature on your profile. You can choose
          to show it to recruiters only (so your current college or employer
          does not see it) or publicly. This single setting can double the
          number of recruiter messages you receive because LinkedIn specifically
          surfaces Open to Work profiles in recruiter search results.
        </TipBox>

        {/* Section 3 */}
        <h2 style={h2Style}>How to Build Your Network From Zero</h2>
        <p style={prose}>
          LinkedIn&apos;s algorithm shows your profile to more people as your
          network grows. A profile with fewer than 50 connections is treated
          as low-visibility. Building your initial network is easier than most
          freshers think — you already know more people than you realise.
        </p>

        <h3 style={h3Style}>Start With People You Already Know</h3>
        <p style={prose}>
          Connect with every classmate, lab partner, project teammate, and
          professor you know. Connect with seniors from your college who are
          already working. Connect with anyone you met at events, hackathons,
          or workshops. These existing relationships are the foundation of
          your network, and connecting with them on LinkedIn makes their
          connections visible to you as second-degree connections.
        </p>

        <h3 style={h3Style}>Connect With Professionals in Your Target Field</h3>
        <p style={prose}>
          Search for junior developers, data analysts, or QA engineers at
          companies you are interested in. Send connection requests with a
          short personalised note — not the default LinkedIn message. Something
          like: Hi, I am a recent CS graduate looking to enter frontend
          development. I came across your profile and would love to connect
          and learn from your experience. Keep it brief, genuine, and without
          any immediate ask.
        </p>

        <h3 style={h3Style}>Engage With Content Consistently</h3>
        <p style={prose}>
          Spend 10 minutes a day engaging with posts in your field. Comment
          thoughtfully on articles about technology trends, share something
          you built or learned, or post a brief update about a project you
          completed. Every piece of content you engage with is visible to
          your connections and expands your reach. Freshers who post even once
          a week consistently get more profile views and connection requests
          than those who are entirely passive.
        </p>

        <TipBox>
          Avoid sending connection requests to hundreds of strangers with no
          message. LinkedIn monitors connection acceptance rates and can
          restrict your ability to send requests if too many go unanswered.
          Fifty genuine connections with personalised notes are worth more
          than five hundred ignored requests.
        </TipBox>

        {/* Section 4 */}
        <h2 style={h2Style}>How to Message Recruiters Without Being Ignored</h2>
        <p style={prose}>
          Reaching out to recruiters directly on LinkedIn is one of the most
          effective things a fresher can do — and one of the most commonly
          done badly. Recruiters receive dozens of messages from candidates
          every day. Most are generic, immediately identifiable as copy-paste,
          and are deleted without a reply. A well-crafted message stands out
          precisely because of how rare it is.
        </p>

        <h3 style={h3Style}>Find the Right Person to Message</h3>
        <p style={prose}>
          Search for Talent Acquisition, Recruiter, or HR at the company you
          are targeting. At smaller companies, the hiring manager for your
          target team is often even more effective to approach than HR. A
          message to the frontend engineering lead at a startup you want to
          work at will often get a faster, more genuine response than a
          message to the general HR inbox.
        </p>

        <h3 style={h3Style}>What to Write</h3>
        <p style={prose}>
          Keep your message under 100 words. Mention the specific role or
          team you are interested in, one specific reason you are interested
          in that company (not generic flattery), one concrete thing about
          your background that is relevant, and a clear, low-friction ask.
          Never ask for a job in the first message — ask for a brief
          conversation or whether they are currently hiring for the role.
        </p>

        <ExampleBox label="Recruiter Message Example">
          Hi [Name], I came across your profile while researching [Company].
          I am a recent Computer Science graduate with hands-on experience in
          React and Node.js, and I have been following your product for a few
          months — particularly the recent update to your dashboard interface.
          I am actively looking for my first developer role and would love to
          know if you are currently hiring freshers for your engineering team.
          Happy to share my portfolio or resume if helpful. Thank you for your
          time.
        </ExampleBox>

        <Callout icon="📬" title="Follow Up Once, Not Repeatedly">
          If you do not receive a reply within one week, it is acceptable to
          send one polite follow-up message. After that, move on. Sending
          multiple follow-ups damages your reputation with that recruiter and
          at that company. The goal of outreach is to start a conversation,
          not to pressure someone into responding.
        </Callout>

        {/* Section 5 */}
        <h2 style={h2Style}>Common LinkedIn Mistakes Freshers Make</h2>

        <p style={prose}>
          <strong>Leaving the headline as your college name.</strong> This tells
          recruiters nothing about what you do or what you are looking for.
          Update it to a specific, keyword-rich headline the day you create
          your account.
        </p>
        <p style={prose}>
          <strong>Having no profile photo or a casual selfie.</strong> Profiles
          without photos are treated as inactive or spam-like by LinkedIn&apos;s
          algorithm. A simple, clean photo taken on a phone in good light is
          all you need.
        </p>
        <p style={prose}>
          <strong>Copying the resume into the About section.</strong> The About
          section should be written in first person, in a conversational tone,
          and tell your story — not just repeat your work history in bullet
          points. Recruiters who view your profile have already seen your
          resume. Give them something more.
        </p>
        <p style={prose}>
          <strong>Adding skills without context.</strong> A list of 50 skills
          with no endorsements and no evidence in your experience or projects
          section looks inflated. Add skills you can genuinely speak about,
          and make sure at least your top five skills are backed up by
          something visible in your profile.
        </p>
        <p style={prose}>
          <strong>Never posting or engaging.</strong> A static profile is a
          passive profile. LinkedIn rewards accounts that create and engage
          with content by showing them to more people. Even liking and
          commenting on posts by people in your industry keeps your profile
          active and visible.
        </p>

        {/* Conclusion */}
        <h2 style={h2Style}>Your LinkedIn Profile Is an Asset That Compounds</h2>
        <p style={prose}>
          Unlike a resume that you send and forget, your LinkedIn profile keeps
          working for you over time. Every connection you add, every skill
          endorsed, every post you share, every project you add — all of it
          incrementally increases your visibility and discoverability. Freshers
          who invest two hours now to complete their profile properly will
          continue to benefit from that investment for months and years.
        </p>
        <p style={prose}>
          Open your LinkedIn profile today and work through the eight sections
          in this guide one at a time. You do not need to complete everything
          in one sitting — even completing three sections today puts you ahead
          of the majority of freshers who have a half-filled profile and wonder
          why recruiters are not reaching out.
        </p>

        {/* CTA */}
        <div style={{
          background: c.ink, borderRadius: "10px",
          padding: "2rem", textAlign: "center", margin: "2.5rem 0",
        }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: c.amberLt, marginBottom: "0.6rem" }}>
            Browse Fresher Jobs Across India
          </div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#a89f8f", marginBottom: "1.2rem" }}>
            Apply to roles that match your skills — updated daily.
          </div>
          <Link href="/jobs" style={{
            display: "inline-block", background: c.amber, color: "#fff",
            fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", fontWeight: 700,
            padding: "11px 26px", borderRadius: "6px", textDecoration: "none",
          }}>
            Browse Jobs →
          </Link>
        </div>

        {/* Tags */}
        <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${c.border}` }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "1px", color: c.muted, marginBottom: "0.8rem" }}>
            Topics
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["LinkedIn Tips", "Fresher Jobs", "Job Search India", "Career Tips 2025", "Resume Advice", "Networking"].map(tag => (
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
              Our editorial team (Chethan M P)includes HR professionals, placement consultants,
              and career coaches with over 1years of combined experience helping
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