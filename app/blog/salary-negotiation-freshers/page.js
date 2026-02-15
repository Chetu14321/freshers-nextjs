import Link from "next/link";

export const metadata = {
  title: "How to Negotiate Your First Salary as a Fresher (2026) | FreshersJobs",
  description:
    "Simple and confident strategies to negotiate a better first salary offer as a fresher in India — without risking the job.",
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

export default function SalaryNegotiationFreshers() {
  return (
    <div style={{ background: c.paper, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <article style={{ maxWidth: "760px", margin: "0 auto" }}>

        <nav style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.76rem", color: c.muted, marginBottom: "1.8rem" }}>
          <Link href="/" style={{ color: c.teal, textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: c.teal, textDecoration: "none" }}>Blogs</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          How to Negotiate Your First Salary
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
          How to Negotiate Your First Salary as a Fresher
        </h1>

        <div style={{
          fontFamily: "system-ui, sans-serif", fontSize: "0.8rem", color: c.muted,
          display: "flex", gap: "1.4rem", flexWrap: "wrap",
          marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: `1px solid ${c.border}`,
        }}>
          <span>📅 June 5, 2025</span>
          <span>⏱ 8 min read</span>
          <span>✍️ FreshersJobs Editorial Team</span>
        </div>

        <div style={{
          background: c.amberPale, borderLeft: `4px solid ${c.amber}`,
          borderRadius: "0 8px 8px 0", padding: "1.2rem 1.5rem", marginBottom: "2rem",
          fontStyle: "italic", fontFamily: "Georgia, serif", fontSize: "1.05rem",
          color: "#3a2e1a", lineHeight: 1.75,
        }}>
          Most freshers accept the first salary offer they receive without a single question —
          out of fear, inexperience, or the belief that negotiation is only for experienced
          professionals. This is one of the most expensive mistakes a fresher can make. A
          small, respectful negotiation at the time of your first offer can mean 20,000 to
          50,000 rupees more per year — money that compounds into every raise and bonus you
          will ever receive. This guide shows you exactly how to negotiate confidently, professionally,
          and successfully.
        </div>

        <h2 style={h2Style}>Why Freshers Rarely Negotiate — And Why That Is a Mistake</h2>
        <p style={prose}>
          The fear that negotiating will cause a company to withdraw your offer is the single
          biggest reason freshers leave money on the table. This fear is largely unfounded.
          Companies that extend an offer have already invested significant time and resources
          in evaluating you — they are not going to rescind an offer because you politely
          asked for a slightly higher salary. In fact, most HR professionals expect some
          degree of negotiation and build a buffer into initial offers precisely because of it.
        </p>
        <p style={prose}>
          The second reason freshers avoid negotiating is that they do not know what they are
          worth. Without market research, any number feels arbitrary and hard to justify.
          But with even thirty minutes of research using platforms like Glassdoor, AmbitionBox,
          and LinkedIn Salary Insights, you can establish a clear, defensible market range for
          your target role — which is all you need to negotiate from a position of knowledge
          rather than hope.
        </p>

        <Callout icon="💰" title="What Salary Negotiation Actually Costs You If You Skip It">
          Consider this: if a company offers you 4 LPA and you negotiate up to 4.5 LPA,
          that 50,000 rupee difference seems small today. But your next raise is typically
          calculated as a percentage of your current salary. Two years of 15 percent raises
          on 4.5 LPA versus 4 LPA means a difference of over 30,000 rupees per year by
          your third year — from a single five-minute conversation. The compounding effect
          of your starting salary follows you for years.
        </Callout>

        <h2 style={h2Style}>Before You Negotiate — Do Your Research</h2>
        <p style={prose}>
          Walking into a salary negotiation without research is like walking into an exam
          without studying. You need to know the market rate for your specific role, in
          your specific city, at a company of roughly the same size as the one making you
          an offer. This range becomes your anchor for the conversation.
        </p>

        <StepCard number="01" title="Research Market Rates on Three Platforms">
          Use AmbitionBox, Glassdoor, and LinkedIn Salary Insights to look up fresher
          salaries for your specific role — not just the generic category. Search for
          Python Developer Fresher Bangalore or Content Writer Fresher Mumbai rather
          than just developer or writer. Look at the median salary and the range. Note
          whether the data is for your city specifically, since there are significant
          salary differences between metros and smaller cities in India.
        </StepCard>

        <StepCard number="02" title="Talk to Seniors Who Have Recently Joined">
          The most reliable salary data often comes not from online platforms but from
          seniors who joined similar companies in the last six to twelve months. Reach out
          to two or three people in your network who recently started similar roles and ask
          them directly what the fresher package range looks like at their company or
          similar ones. Most people are willing to share this information when asked
          respectfully and directly.
        </StepCard>

        <StepCard number="03" title="Know Your Walk-Away Number">
          Before any negotiation conversation, decide on two numbers: your target salary,
          which is the figure you will ask for, and your minimum acceptable salary, below
          which you will decline or ask for other benefits instead. Having both numbers
          clear in your mind before the conversation prevents you from making impulsive
          decisions under pressure in the moment.
        </StepCard>

        <TipBox>
          Never give a specific salary number first if you can avoid it. When an interviewer
          asks what salary you are expecting early in the process, it is acceptable to say:
          I would like to understand the full role and responsibilities before discussing
          compensation — could you share the budgeted range for this position? This response
          is professional, non-confrontational, and often gets the company to reveal their
          range first, which gives you a significant information advantage.
        </TipBox>

        <h2 style={h2Style}>How to Have the Negotiation Conversation</h2>
        <p style={prose}>
          Salary negotiation does not need to be a tense confrontation. The most effective
          approach is calm, appreciative, and specific. You are not demanding more money —
          you are having a professional conversation about fair compensation based on market
          data. That framing makes the conversation much easier for both parties.
        </p>

        <h3 style={h3Style}>When to Raise the Topic</h3>
        <p style={prose}>
          The right time to negotiate is after you have received a formal offer — not during
          the interview process and not before they have expressed clear interest in hiring
          you. Once HR calls or emails with an offer, that is your signal that they want you.
          At that point, your leverage is at its highest. Express genuine enthusiasm for the
          offer first, then raise the salary question.
        </p>

        <h3 style={h3Style}>What to Actually Say</h3>
        <p style={prose}>
          A simple, effective negotiation script for freshers looks like this: Thank you so
          much for the offer — I am genuinely excited about the opportunity to join your team.
          Based on my research into the market rate for this role in this city, and considering
          the skills I bring, I was hoping we could discuss a salary closer to X amount. Is
          there any flexibility there? This script expresses enthusiasm, references research
          rather than personal need, names a specific number, and asks a direct but open question.
          It is professional, brief, and leaves room for a productive conversation.
        </p>

        <h3 style={h3Style}>How to Handle a No</h3>
        <p style={prose}>
          If the company says the salary is fixed and there is no flexibility, do not end
          the conversation there. Ask whether other components of the package can be adjusted —
          a joining bonus, an earlier performance review at three or six months instead of
          twelve, additional leave days, a remote or hybrid work option, or faster progression
          to the next salary band. Companies that cannot move on base salary can often offer
          something else of value. Understanding this gives you more options and keeps the
          negotiation productive.
        </p>

        <StepCard number="04" title="Always Negotiate in a Single Conversation If Possible">
          Avoid going back and forth multiple times across several days. If you have done
          your research and know your target number, raise it confidently in one conversation.
          Prolonged back-and-forth negotiations can create unnecessary tension and leave the
          HR team with a less positive impression of you before you have even started. Make
          your case clearly, listen to their response, and reach a decision in the same
          conversation where possible.
        </StepCard>

        <StepCard number="05" title="Get the Final Offer in Writing Before Accepting">
          Whatever the final agreed salary is, wait for the updated written offer letter
          before giving your formal acceptance. Verbal agreements about salary, bonuses, or
          benefits that are not reflected in the offer letter can be difficult to enforce
          later. A professional company will have no objection to providing you with an
          updated letter — and if they do, that tells you something important about how they
          operate.
        </StepCard>

        <Callout icon="🤝" title="When to Accept Without Negotiating">
          There are situations where negotiating is not the right move. If a company has
          a fixed, standardised package for all freshers in a batch — which is common at
          large service companies like TCS, Infosys, and Wipro — negotiating an individual
          exception is usually not possible and not worth attempting. If you have multiple
          offers and this is your preferred one at a salary you are genuinely happy with,
          there is no obligation to negotiate simply because you can. Negotiate when the
          offer is below your researched market rate or your genuine expectations. Accept
          with confidence when it is fair.
        </Callout>

        <h2 style={h2Style}>What to Do If the Final Salary Is Still Not What You Want</h2>
        <p style={prose}>
          If after negotiation the offer is still below what you consider fair and the
          company cannot move further, you have a straightforward decision: accept and
          plan to renegotiate at your six-month or one-year review, or decline and continue
          your job search. Neither choice is wrong — it depends entirely on your financial
          situation, how much you value the specific opportunity, and whether you have other
          options in the pipeline.
        </p>
        <p style={prose}>
          If you do accept at a lower salary, document the skills you plan to develop and
          the targets you plan to hit in your first six months. Use that documentation when
          you ask for an early performance review. Freshers who join at a lower salary but
          perform exceptionally and advocate clearly for themselves at their first review
          often close the gap faster than those who negotiate harder upfront but then drift
          without a clear plan.
        </p>

        <TipBox>
          Your first salary matters, but your first year of performance matters more. The
          freshers who grow their income fastest are not always the ones who negotiated the
          best starting package — they are the ones who built skills rapidly, delivered
          results visibly, and asked for recognition early and directly. Salary negotiation
          is one conversation. Your career is thousands of them. Win both.
        </TipBox>

        <div style={{
          background: c.ink, borderRadius: "10px",
          padding: "2rem", textAlign: "center", margin: "2.5rem 0",
        }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: c.amberLt, marginBottom: "0.6rem" }}>
            Find Fresher Jobs With Competitive Salaries
          </div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#a89f8f", marginBottom: "1.2rem" }}>
            Hundreds of entry-level roles updated daily across India.
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
            {["Salary Negotiation", "Career Tips", "Freshers 2026", "First Job", "Job Search India", "HR Tips"].map(tag => (
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