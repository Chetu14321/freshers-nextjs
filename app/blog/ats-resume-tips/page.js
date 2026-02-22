import Link from "next/link";

export const metadata = {
  title: "ATS Resume Tips for Freshers 2026 | FreshersJobs",
  description:
    "Learn exactly how ATS software filters resumes, what mistakes freshers make, and how to write a resume that actually gets read by a human recruiter in 2026.",
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

function DosDonts() {
  const items = [
    { do: "Use a clean single-column layout",         dont: "Use tables or multi-column designs" },
    { do: "Save as .docx or plain PDF",               dont: "Submit .pages, .odt, or image-based PDFs" },
    { do: "Copy exact keywords from the job posting", dont: "Use synonyms — ATS won't recognise them" },
    { do: "Write full skill names (e.g. JavaScript)", dont: "Use only abbreviations (e.g. JS, K8s)" },
    { do: "Use standard headings: Work Experience",   dont: "Use creative headings like My Journey" },
    { do: "Keep to 1–2 pages",                        dont: "Pad with irrelevant hobbies or filler text" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1.8rem 0" }}>
      <div style={{ background: "#f0faf2", border: "1px solid #b8e0c6", borderRadius: "8px", padding: "1.2rem 1.4rem" }}>
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#2e7d32", marginBottom: "0.8rem" }}>
          ✅ Do This
        </div>
        {items.map((it, i) => (
          <div key={i} style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.85rem", color: "#1b4d22", marginBottom: "0.55rem", display: "flex", gap: "0.5rem" }}>
            <span style={{ flexShrink: 0 }}>→</span><span>{it.do}</span>
          </div>
        ))}
      </div>
      <div style={{ background: "#fdf2f2", border: "1px solid #f0c4c4", borderRadius: "8px", padding: "1.2rem 1.4rem" }}>
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#c62828", marginBottom: "0.8rem" }}>
          ❌ Avoid This
        </div>
        {items.map((it, i) => (
          <div key={i} style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.85rem", color: "#5a1a1a", marginBottom: "0.55rem", display: "flex", gap: "0.5rem" }}>
            <span style={{ flexShrink: 0 }}>✗</span><span>{it.dont}</span>
          </div>
        ))}
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

export default function AtsResumeTips() {
  return (
    <div style={{ background: c.paper, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <article style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <nav style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.76rem", color: c.muted, marginBottom: "1.8rem" }}>
          <Link href="/" style={{ color: c.teal, textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: c.teal, textDecoration: "none" }}>Blogs</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          ATS Resume Tips
        </nav>

        {/* Category tag */}
        <span style={{
          display: "inline-block",
          background: "#6b3fa0",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          padding: "3px 12px",
          borderRadius: "2px",
          marginBottom: "1rem",
        }}>Resume</span>

        {/* Title */}
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          color: c.ink,
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}>
          ATS Resume Tips for Freshers (2026 Guide)
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
          <span>⏱ 8 min read</span>
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
          You spent hours writing your resume. You applied to 30 companies.
          You heard nothing back. The problem very likely was not your
          qualifications — it was that your resume never reached a human
          recruiter. This guide explains why that happens and exactly how to fix it.
        </div>

        {/* Section 1 */}
        <h2 style={h2Style}>What Is an ATS and Why Should Freshers Care?</h2>
        <p style={prose}>
          An Applicant Tracking System (ATS) is software that companies use to collect,
          sort, and filter the hundreds of job applications they receive every week. When
          you click Apply on LinkedIn, Naukri, or a company careers page, your resume goes
          directly into this system. The ATS reads it, scores it against the job description,
          and only passes the top-scoring resumes on to an actual recruiter.
        </p>
        <p style={prose}>
          Here is the part that surprises most freshers: more than 70% of resumes are
          filtered out by ATS before any human ever opens them. That means even if you
          are qualified for a role, a formatting mistake or a missing keyword can end
          your application silently — with zero feedback sent to you.
        </p>
        <Callout icon="📊" title="Why This Matters More for Freshers">
          When you have limited work experience, your resume is the only signal an ATS
          has to evaluate you. Experienced candidates can sometimes compensate with
          referrals or portfolio links. As a fresher, optimising your resume for ATS
          is the single highest-impact thing you can do before applying anywhere.
        </Callout>

        {/* Section 2 */}
        <h2 style={h2Style}>How ATS Software Actually Reads Your Resume</h2>
        <p style={prose}>
          Most ATS platforms work by parsing your resume — extracting text from your file
          and converting it into structured data. The system then looks for matches between
          your resume content and the keywords in the job description. Skills, job titles,
          qualifications, and years of experience are all scored and weighted.
        </p>
        <p style={prose}>
          The problem is that ATS parsers are not intelligent readers — they follow rules.
          If your resume uses a two-column layout, some parsers will read both columns
          simultaneously, jumbling your text into nonsense. If you use a table to align
          dates, the parser may skip that section entirely. If you save as an image-based
          PDF, the ATS may see a completely blank document.
        </p>
        <TipBox>
          Always test your resume by copying and pasting its full text into a plain
          Notepad or Google Docs file. If the text comes out scrambled or missing sections,
          an ATS will have the same problem reading it.
        </TipBox>

        {/* Section 3 */}
        <h2 style={h2Style}>The 6 Most Common ATS Mistakes Freshers Make</h2>
        <p style={prose}>
          These are the six formatting and content mistakes that most consistently get
          fresher resumes rejected at the ATS stage:
        </p>
        <SectionCard number="01" title="Using a Fancy Template from Canva or Pinterest">
          Beautiful design does not help you pass ATS. Graphic-heavy templates use text
          boxes, shapes, and layers that parsing software cannot read. Stick to a clean,
          text-only Word document or a minimalist PDF.
        </SectionCard>
        <SectionCard number="02" title="Skipping Keywords from the Job Description">
          ATS systems are trained on the exact language of the job posting. If the job
          says React.js and your resume says ReactJS, some systems will not count it as
          a match. Mirror the exact phrasing wherever honest and accurate.
        </SectionCard>
        <SectionCard number="03" title="Using Creative Section Headings">
          Headings like My Story or Technical Toolkit may feel distinctive, but ATS
          software looks for standard labels: Work Experience, Education, Skills, Projects,
          Certifications. Non-standard headings cause parsers to skip content.
        </SectionCard>
        <SectionCard number="04" title="Putting Contact Details in the Header or Footer">
          Many ATS systems do not read document headers and footers. If your name, email,
          or phone number is in the header area, the system may not capture it — making
          it impossible for a recruiter to contact you.
        </SectionCard>
        <SectionCard number="05" title="Using Graphics, Icons, or Images">
          Profile photos, skill bar charts, and icons next to section titles are all
          invisible to ATS. They can also confuse parsers and cause surrounding text to
          be misread. Your resume should be purely text-based.
        </SectionCard>
        <SectionCard number="06" title="Submitting in the Wrong File Format">
          Unless the job posting specifically asks for a PDF, submit your resume as
          a .docx file. It is the most universally compatible format across all major
          ATS platforms.
        </SectionCard>

        {/* Section 4 */}
        <h2 style={h2Style}>How to Find the Right Keywords for Any Job</h2>
        <p style={prose}>
          Keyword optimisation is the most impactful ATS strategy you can apply, and
          it does not require any paid tools. Here is a simple three-step process
          that takes about 15 minutes per application:
        </p>
        <h3 style={h3Style}>Step 1 — Copy the job description into a word frequency tool</h3>
        <p style={prose}>
          Paste the job description into WordCounter.net or scan it yourself. Look for
          technical skills, tools, and qualifications that appear more than once —
          these are the terms the employer and their ATS cares most about.
        </p>
        <h3 style={h3Style}>Step 2 — Map those keywords to your actual experience</h3>
        <p style={prose}>
          Go through your resume and identify where you can honestly use the same language.
          If the job asks for data analysis using Python and you completed a college project
          involving Python, describe that project using those exact words.
        </p>
        <h3 style={h3Style}>Step 3 — Add a dedicated Skills section near the top</h3>
        <p style={prose}>
          A short, scannable Skills section immediately below your profile summary gives
          ATS software a concentrated block of keywords to parse. Include both technical
          skills and relevant soft skills that appear in the job description.
        </p>
        <TipBox>
          Do not stuff your resume with every keyword you can find. ATS systems are
          increasingly sophisticated and some penalise keyword stuffing. If your resume
          reaches a human recruiter, they will immediately spot artificially inflated
          keyword density — and it will cost you the interview.
        </TipBox>

        {/* Dos and Donts */}
        <h2 style={h2Style}>Quick Reference: ATS Dos and Don&apos;ts</h2>
        <p style={prose}>Use this checklist every time you prepare a resume for a new application:</p>
        <DosDonts />

        {/* Section 5 */}
        <h2 style={h2Style}>What a Good ATS-Friendly Fresher Resume Looks Like</h2>
        <p style={prose}>A well-structured fresher resume for ATS typically follows this order:</p>
        <p style={prose}><strong>Contact Information</strong> — Full name, phone number, professional email, city, LinkedIn URL. All in the main body, not in a header or footer.</p>
        <p style={prose}><strong>Professional Summary</strong> — Two to three sentences describing who you are, what you studied, and what kind of role you are targeting. Include one or two keywords from the job description naturally.</p>
        <p style={prose}><strong>Skills</strong> — A concise list of technical and relevant soft skills you have genuinely worked with.</p>
        <p style={prose}><strong>Education</strong> — Degree name, institution, graduation year, and CGPA if above 7.0.</p>
        <p style={prose}><strong>Projects</strong> — Two to four academic or personal projects with tools used, what you built, and any measurable outcome. Use action verbs and results wherever possible.</p>
        <p style={prose}><strong>Internships / Work Experience</strong> — Use bullet points starting with action verbs: Developed, Designed, Implemented, Reduced, Improved.</p>
        <p style={prose}><strong>Certifications</strong> — Google certifications, Coursera completions, NPTEL scores, or any other recognised credentials.</p>
        <Callout icon="✅" title="One Page or Two?">
          For most freshers, one page is the right length. If you genuinely have two or
          more internships, multiple certifications, and several substantial projects,
          a well-formatted two-page resume is acceptable. Never stretch content with
          larger fonts or extra spacing just to fill a second page.
        </Callout>

        {/* Section 6 */}
        <h2 style={h2Style}>Free Tools to Check Your Resume Before You Apply</h2>
        <p style={prose}><strong>Resume Worded</strong> — Scores your resume against ATS criteria and gives specific improvement suggestions. The free tier is enough for most freshers.</p>
        <p style={prose}><strong>Jobscan</strong> — Compares your resume directly against a specific job description and shows exactly which keywords are missing.</p>
        <p style={prose}><strong>Google Docs Resume Templates</strong> — Clean, ATS-compatible templates built into the platform. Free, simple, and proven to parse correctly.</p>

        {/* Conclusion */}
        <h2 style={h2Style}>The Bottom Line</h2>
        <p style={prose}>
          Getting past ATS is not about gaming the system — it is about presenting your
          genuine experience in a format that the software can read and that matches what
          the employer asked for. These are not tricks. They are simply good communication,
          applied to a digital context.
        </p>
        <p style={prose}>
          The good news is that most of your competition is not doing this. A large
          proportion of fresher resumes still use graphic-heavy Canva templates, vague
          skill descriptions, and creative section headings that confuse parsers. By
          applying the principles in this guide, you will immediately stand out — not
          because you have more experience, but because a recruiter can actually read
          what you have done.
        </p>
        <p style={prose}>
          Take 30 minutes today to audit your current resume against the checklist in
          this article. Small changes — a cleaned-up layout, a skills section, keywords
          mirrored from the job description — can meaningfully increase the number of
          interview calls you receive. Start there.
        </p>

        {/* Tags */}
        <div style={{ marginTop: "2.8rem", paddingTop: "1.5rem", borderTop: `1px solid ${c.border}` }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "1px", color: c.muted, marginBottom: "0.8rem" }}>
            Topics
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["ATS Resume", "Fresher Resume Tips", "Resume Writing 2026", "Job Search India", "Interview Prep", "Fresher Jobs"].map(tag => (
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
              FreshersJobs Editorial Team(chethan M P)
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

        {/* Back link */}
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