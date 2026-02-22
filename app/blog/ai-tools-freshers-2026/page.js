import Link from "next/link";

export const metadata = {
  title: "AI Tools & Skills Every Fresher Should Learn in 2026 | FreshersJobs",
  description:
    "Discover the most practical AI tools, skills, and learning resources freshers need in 2026. Real-world applications, no hype. A guide by Chethan M P for FreshersJobs.",
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

function ToolCard({ toolName, description, useCases, difficultyLevel, pricing }) {
  return (
    <div style={{
      background: "#fff",
      border: `1px solid ${c.border}`,
      borderRadius: "10px",
      padding: "1.4rem",
      marginBottom: "1.2rem",
    }}>
      <div style={{
        fontFamily: "Georgia, serif",
        fontSize: "1.05rem",
        fontWeight: 700,
        color: c.ink,
        marginBottom: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "0.8rem",
      }}>
        {toolName}
        <div style={{ display: "flex", gap: "0.6rem" }}>
          <span style={{
            background: difficultyLevel === "Beginner" ? "#c8e6c9" : difficultyLevel === "Intermediate" ? "#fff9c4" : "#ffccbc",
            color: difficultyLevel === "Beginner" ? "#2e7d32" : difficultyLevel === "Intermediate" ? "#f57f17" : "#d84315",
            fontFamily: "system-ui, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: "4px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}>
            {difficultyLevel}
          </span>
          {pricing && (
            <span style={{
              background: pricing.includes("Free") ? "#e8f5e9" : "#fff3e0",
              color: pricing.includes("Free") ? "#1b5e20" : "#e65100",
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: "4px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}>
              {pricing}
            </span>
          )}
        </div>
      </div>
      <p style={{ ...prose, fontSize: "0.95rem", marginBottom: "0.8rem", color: c.bodyText }}>
        {description}
      </p>
      <div style={{
        fontFamily: "system-ui, sans-serif",
        fontSize: "0.8rem",
        color: c.muted,
        marginBottom: "0.4rem",
        fontWeight: 600,
      }}>
        💼 Use cases:
      </div>
      <p style={{ ...prose, fontSize: "0.9rem", marginBottom: 0, color: c.bodyText }}>
        {useCases}
      </p>
    </div>
  );
}

function ComparisonTable({ tools }) {
  return (
    <div style={{
      overflowX: "auto",
      marginBottom: "2rem",
    }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "#fff",
        border: `1px solid ${c.border}`,
        borderRadius: "8px",
      }}>
        <thead>
          <tr style={{ background: c.cream, borderBottom: `2px solid ${c.border}` }}>
            <th style={{
              padding: "1rem",
              textAlign: "left",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: c.ink,
            }}>Tool</th>
            <th style={{
              padding: "1rem",
              textAlign: "left",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: c.ink,
            }}>Free Tier</th>
            <th style={{
              padding: "1rem",
              textAlign: "left",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: c.ink,
            }}>Paid Price</th>
            <th style={{
              padding: "1rem",
              textAlign: "left",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: c.ink,
            }}>Best For</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, i) => (
            <tr key={i} style={{
              borderBottom: `1px solid ${c.border}`,
              background: i % 2 === 0 ? "#fff" : c.amberPale,
            }}>
              <td style={{
                padding: "1rem",
                fontFamily: "Georgia, serif",
                fontWeight: 600,
                color: c.ink,
              }}>{tool.name}</td>
              <td style={{
                padding: "1rem",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.9rem",
                color: c.bodyText,
              }}>{tool.free}</td>
              <td style={{
                padding: "1rem",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.9rem",
                color: c.bodyText,
              }}>{tool.paid}</td>
              <td style={{
                padding: "1rem",
                fontFamily: "system-ui, sans-serif",
                fontSize: "0.9rem",
                color: c.bodyText,
              }}>{tool.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div style={{
      background: "#fff",
      border: `1px solid ${c.border}`,
      borderRadius: "8px",
      padding: "1.2rem 1.4rem",
      marginBottom: "0.8rem",
    }}>
      <details style={{ cursor: "pointer" }}>
        <summary style={{
          fontFamily: "Georgia, serif",
          fontSize: "1rem",
          fontWeight: 700,
          color: c.ink,
          outline: "none",
          userSelect: "none",
        }}>
          {question}
        </summary>
        <div style={{
          ...prose,
          fontSize: "0.95rem",
          marginTop: "0.8rem",
          marginBottom: 0,
          paddingTop: "0.8rem",
          borderTop: `1px solid ${c.border}`,
        }}>
          {answer}
        </div>
      </details>
    </div>
  );
}

export default function AIToolsFreshers() {
  return (
    <div style={{ background: c.paper, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <article style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <nav style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.76rem", color: c.muted, marginBottom: "1.8rem" }}>
          <Link href="/" style={{ color: c.teal, textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: c.teal, textDecoration: "none" }}>Blogs</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          AI Tools for Freshers
        </nav>

        {/* Category tag */}
        <span style={{
          display: "inline-block",
          background: "#0066cc",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          padding: "3px 12px",
          borderRadius: "2px",
          marginBottom: "1rem",
        }}>AI & Technology</span>

        {/* Title */}
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          color: c.ink,
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}>
          AI Tools & Skills Every Fresher Should Learn in 2026
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
          <span>📅 February 22, 2026</span>
          <span>⏱ 16 min read</span>
          <span>✍️ Chethan M P</span>
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
          AI has moved from buzzword to job requirement in less than two years.
          But here is the truth that nobody tells freshers: you do not need to become 
          an AI researcher or machine learning engineer to stay competitive. You need to 
          understand which tools solve real problems, how to actually use them, and how 
          to articulate that skill to employers in interviews. This guide cuts through 
          the noise and tells you exactly what matters in 2026.
        </div>

        {/* Section 1 */}
        <h2 style={h2Style}>Why Freshers Need to Learn AI in 2026</h2>
        <p style={prose}>
          The job market has fundamentally shifted in ways that many college students 
          and recent graduates do not fully understand yet. In January 2024, knowing AI 
          was still optional. You could get hired at a good company without it. By 2026, 
          it has become a baseline expectation across almost every field you can think of 
          — not just technology companies. Data analysts expect to use AI tools. Accountants 
          are expected to know how AI affects audit processes. HR professionals need to 
          understand how to use AI for recruitment and employee assessment. Content creators 
          are expected to work alongside generative AI. Even operations teams are now using 
          AI for forecasting and optimization.
        </p>
        <p style={prose}>
          For freshers, this shift is actually very good news when you think about it 
          strategically. You are not competing against people with 10 years of experience 
          in traditional tools and processes. You are competing against other freshers 
          who are equally new to AI. But here is the key difference: you are also competing 
          against freshers who learned these tools in their college projects, during 
          internships, and in their personal time on nights and weekends. The gap between 
          someone who has used ChatGPT seriously and someone who has not is now measurable 
          and real in interview rooms.
        </p>
        <Callout icon="🎯" title="The Real AI Skill Freshers Need">
          It is not about coding AI models from scratch or understanding the complex 
          mathematics behind transformers and neural networks. That is specialist work. 
          The real, immediately valuable skill is knowing which problem each tool solves, 
          experimenting with it hands-on for real tasks, and speaking intelligently about 
          what you learned and how you would apply it to company problems. That is what 
          separates candidates who get multiple interview calls from those who get silently 
          filtered out at the application stage.
        </Callout>

        {/* Section 2 */}
        <h2 style={h2Style}>The AI Tools You Should Actually Use and Learn</h2>
        <p style={prose}>
          There are literally hundreds of AI tools available today. Some are genuinely 
          useful. Most are solutions looking for problems that do not really exist. This 
          list focuses exclusively on the ones that have genuine staying power, work 
          across most fields and industries, are accessible for freshers, and are being 
          actively sought by employers. These tools show up directly in job descriptions.
        </p>

        <h3 style={h3Style}>Tier 1: The Foundation (Start Here)</h3>
        <p style={prose}>
          These tools have the broadest appeal across all fields and provide the steepest 
          learning curve benefit for freshers starting out.
        </p>

        <ToolCard
          toolName="ChatGPT or Claude"
          description="Large language models that can write, explain, debug code, answer questions, brainstorm ideas, and help you learn. Think of them as a smart colleague with infinite patience."
          useCases="Writing cover letters and emails, explaining technical concepts, debugging code, brainstorming project ideas, learning new frameworks, summarizing research papers, and preparing for interviews."
          difficultyLevel="Beginner"
          pricing="Free Tier"
        />

        <ToolCard
          toolName="Prompt Engineering (The Skill)"
          description="Not a tool itself, but a critical skill. Learning to write clear, specific prompts that get you genuinely useful answers from AI. Bad prompt equals useless output. Good prompt saves hours."
          useCases="Every interaction with ChatGPT, Claude, or similar AI tools. Mastering prompting multiplies the value of every AI tool you use going forward."
          difficultyLevel="Beginner"
          pricing="Free"
        />

        <ToolCard
          toolName="GitHub Copilot"
          description="AI that writes code as you type it. Understands context and suggests entire functions and algorithms based on comments and variable names. Like having a pair programmer with you constantly."
          useCases="Speeding up coding assignments, learning by seeing AI suggestions, writing boilerplate code faster, reducing syntax errors, exploring new programming patterns."
          difficultyLevel="Beginner"
          pricing="Free / $10/month"
        />

        <h3 style={h3Style}>Tier 2: Role-Specific Tools</h3>
        <p style={prose}>
          Pick one or two based on your field of interest. You do not need to master all 
          of these. Choose your path and go deep.
        </p>

        <ToolCard
          toolName="Midjourney or DALL-E (For Designers & Content)"
          description="AI image generation. You describe what you want, the tool creates it. Good enough for concepts, portfolio pieces, and understanding how AI interprets creative briefs."
          useCases="Creating portfolio pieces, generating UI mockups, designing social media graphics, understanding AI interpretation, experimenting with prompts."
          difficultyLevel="Beginner"
          pricing="Free Trial / $10-30/month"
        />

        <ToolCard
          toolName="Jupyter Notebooks + Python (For Data & Analytics)"
          description="Combined with Pandas, NumPy, and Scikit-learn, this is how data professionals work. Notebooks let you write, run, and visualize all in one place. Industry standard."
          useCases="Data cleaning, exploratory analysis, building ML models, documenting analysis, sharing work with teams, creating reproducible workflows."
          difficultyLevel="Intermediate"
          pricing="Free"
        />

        <ToolCard
          toolName="HubSpot or Marketo (For Marketing & Sales)"
          description="AI-powered marketing platforms for email campaigns, lead scoring, and customer segmentation. Free or student tiers available to experiment with."
          useCases="Running marketing campaigns, understanding lead scoring, automating email sequences, analyzing campaign performance, learning CRM systems."
          difficultyLevel="Intermediate"
          pricing="Free Tier / $45-1200+/month"
        />

        <h3 style={h3Style}>Tier 3: Advanced Tools</h3>
        <p style={prose}>
          Higher barriers to entry but serious ROI if your field uses them. Master Tier 1 
          and 2 first.
        </p>

        <ToolCard
          toolName="TensorFlow or PyTorch (For ML Engineers)"
          description="Frameworks for building neural networks and deep learning models. Harder to learn, but gold standard in machine learning and AI research."
          useCases="Building ML models from scratch, Kaggle competitions, research work, getting hired into ML roles, understanding how AI models work."
          difficultyLevel="Advanced"
          pricing="Free"
        />

        <ToolCard
          toolName="Figma + AI Features (For Designers)"
          description="Not purely AI, but increasingly adding AI-assisted features like auto-layout and design recommendations. Essential for product design roles."
          useCases="Creating design systems, collaborating with developers, building prototypes, learning responsive design, understanding AI in design."
          difficultyLevel="Intermediate"
          pricing="Free / $12-45/month per editor"
        />

        {/* Section 3: Free vs Paid Comparison */}
        <h2 style={h2Style}>Free vs Paid Tools: When to Upgrade</h2>
        <p style={prose}>
          As a fresher, you should start completely free. Free tiers are enough to learn 
          and build portfolio projects. But understanding when paid versions become valuable 
          helps you make smart decisions as your skills grow and you start working.
        </p>

        <ComparisonTable tools={[
          {
            name: "ChatGPT",
            free: "Limited messages, GPT-3.5 model",
            paid: "$20/month (GPT-4, faster, plugins)",
            bestFor: "Learning, free tier is enough for freshers"
          },
          {
            name: "GitHub Copilot",
            free: "Free for students, limited for others",
            paid: "$10/month (unlimited)",
            bestFor: "Professional developers, works in all IDEs"
          },
          {
            name: "Claude",
            free: "Limited messages per day",
            paid: "$20/month (Claude Pro, unlimited)",
            bestFor: "Learning, free tier sufficient for freshers"
          },
          {
            name: "Jupyter / Google Colab",
            free: "Free with limitations",
            paid: "Colab Pro ($10/month, faster compute)",
            bestFor: "Free tier is excellent for learning"
          },
          {
            name: "Midjourney",
            free: "Free trial (limited generations)",
            paid: "$10-96/month (based on usage)",
            bestFor: "Serious design projects, paid needed for production"
          },
          {
            name: "HubSpot",
            free: "Robust free CRM",
            paid: "$45-3200+/month (advanced features)",
            bestFor: "Free tier great for learning, upgrade for marketing"
          },
        ]} />

        <TipBox>
          Start with free tiers. Free is not limiting for learning. Once you land a job 
          or start getting serious freelance work, then invest in paid tools. Your company 
          often pays for professional tools anyway. Freshers do not need to spend money.
        </TipBox>

        {/* Section 4 */}
        <h2 style={h2Style}>Three Practical Projects to Build Your AI Portfolio</h2>
        <p style={prose}>
          Reading about AI is fine. Using AI is what matters. Here are three specific 
          projects that take 2-4 weeks each and produce real portfolio pieces.
        </p>

        <div style={{
          display: "grid",
          gap: "1.2rem",
          marginBottom: "2rem",
        }}>
          <div style={{
            background: "#fff",
            border: `1px solid ${c.border}`,
            borderRadius: "10px",
            padding: "1.4rem",
          }}>
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: c.ink,
              marginBottom: "0.6rem",
            }}>
              Project 1: Build a Chatbot Using OpenAI API (2-3 weeks)
            </div>
            <p style={{ ...prose, fontSize: "0.95rem", marginBottom: "0.8rem" }}>
              Create a chatbot using the OpenAI API (ChatGPT's API) for a specific topic you know. 
              Host it on Streamlit for free. This teaches you API integration, prompt design, 
              user interface basics, and deployment.
            </p>
            <div style={{
              background: c.amberPale,
              padding: "0.8rem 1rem",
              borderRadius: "6px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.9rem",
              color: "#5a3d0a",
            }}>
              <strong>Skills learned:</strong> API integration, prompt engineering, UI design, 
              deployment, error handling.
            </div>
          </div>

          <div style={{
            background: "#fff",
            border: `1px solid ${c.border}`,
            borderRadius: "10px",
            padding: "1.4rem",
          }}>
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: c.ink,
              marginBottom: "0.6rem",
            }}>
              Project 2: Analyze Dataset and Create Visualizations (3-4 weeks)
            </div>
            <p style={{ ...prose, fontSize: "0.95rem", marginBottom: "0.8rem" }}>
              Find a public dataset on Kaggle. Use Pandas in Jupyter to clean data, perform 
              exploratory analysis, create visualizations, and write a report. Document everything 
              on GitHub. This teaches the entire data science workflow.
            </p>
            <div style={{
              background: c.amberPale,
              padding: "0.8rem 1rem",
              borderRadius: "6px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.9rem",
              color: "#5a3d0a",
            }}>
              <strong>Skills learned:</strong> Data cleaning, exploratory analysis, Python libraries, 
              visualization, documentation, Git.
            </div>
          </div>

          <div style={{
            background: "#fff",
            border: `1px solid ${c.border}`,
            borderRadius: "10px",
            padding: "1.4rem",
          }}>
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: c.ink,
              marginBottom: "0.6rem",
            }}>
              Project 3: Generate Design Mockups for a Product (2-3 weeks)
            </div>
            <p style={{ ...prose, fontSize: "0.95rem", marginBottom: "0.8rem" }}>
              Use Midjourney or DALL-E to generate UI mockups for an imaginary app. Write detailed 
              prompts, iterate based on output, and compile into a professional portfolio piece 
              with design thinking documented.
            </p>
            <div style={{
              background: c.amberPale,
              padding: "0.8rem 1rem",
              borderRadius: "6px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.9rem",
              color: "#5a3d0a",
            }}>
              <strong>Skills learned:</strong> Prompt engineering, design thinking, iteration, 
              visual communication, portfolio building.
            </div>
          </div>
        </div>

        <TipBox>
          Small, finished projects beat ambitious unfinished ones every time. Each project 
          becomes a talking point in interviews. Document your thinking and decision-making.
        </TipBox>

        {/* Section 5 */}
        <h2 style={h2Style}>How to Talk About AI Skills in Interviews</h2>
        <p style={prose}>
          What kills fresher candidates: listing skills they do not have. Recruiters can 
          tell the difference between real experience and resume padding instantly. Instead, 
          be specific and show work.
        </p>

        <div style={{
          background: "#f0f7f9",
          border: "1px solid #b8dce6",
          borderRadius: "8px",
          padding: "1.2rem 1.5rem",
          margin: "1.8rem 0",
        }}>
          <div style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "0.85rem",
            color: "#1e4a56",
            marginBottom: "0.6rem",
            lineHeight: 1.6,
          }}>
            <strong>❌ Do not say:</strong> "I am expert in AI and machine learning with 
            advanced knowledge of neural networks."
          </div>
          <div style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "0.85rem",
            color: "#1e4a56",
            lineHeight: 1.6,
          }}>
            <strong>✅ Do say:</strong> "I built a recommendation system in Python using 
            Scikit-learn that predicts customer preferences with 82 percent accuracy. I 
            documented the project on GitHub including model evaluation and limitations. 
            Here is the link and I can walk you through my thinking."
          </div>
        </div>

        <p style={prose}>
          That second statement shows hands-on experience, understanding of real-world 
          constraints, and clear communication. That gets you the interview.
        </p>

        {/* Section 6 */}
        <h2 style={h2Style}>Free Learning Resources (No Paywall)</h2>
        <p style={prose}>
          You do not need expensive courses. Here are the best free resources:
        </p>

        <div style={{
          display: "grid",
          gap: "0.8rem",
          marginBottom: "2rem",
        }}>
          {[
            {
              name: "Kaggle Learn",
              desc: "Micro-courses on Python, SQL, data science, and machine learning. 15-30 minute courses with hands-on notebooks."
            },
            {
              name: "Google Colab",
              desc: "Free Jupyter environment in the cloud. No setup needed. Hundreds of free tutorials available."
            },
            {
              name: "Andrew Ng ML Course (Coursera)",
              desc: "Gold standard ML introduction. First weeks free. Highly technical and thorough."
            },
            {
              name: "YouTube: Fast AI & Jeremy Howard",
              desc: "Top-down approach to deep learning. Practical and less math-heavy than academic courses."
            },
            {
              name: "GitHub & Open Source",
              desc: "Find AI projects, read code, contribute to open-source. This is how professionals learn and build reputation."
            },
            {
              name: "OpenAI Prompt Engineering Guide",
              desc: "Official guide on writing better prompts. Short, free, and directly applicable."
            },
          ].map((resource, i) => (
            <div key={i} style={{
              background: "#fff",
              border: `1px solid ${c.border}`,
              borderRadius: "8px",
              padding: "1rem 1.2rem",
              display: "flex",
              gap: "0.8rem",
            }}>
              <div style={{
                flexShrink: 0,
                width: "24px",
                height: "24px",
                background: c.amber,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: c.paper,
                fontSize: "0.9rem",
              }}>
                {i + 1}
              </div>
              <div>
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: c.ink,
                  marginBottom: "0.3rem",
                }}>
                  {resource.name}
                </div>
                <div style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "0.85rem",
                  color: c.bodyText,
                  lineHeight: 1.6,
                }}>
                  {resource.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 7: Paid Courses (Optional) */}
        <h2 style={h2Style}>Premium Learning Resources (For Serious Learners)</h2>
        <p style={prose}>
          Once you have built something with free tools and want to go deeper, these paid 
          courses provide structure and certificates that can enhance your resume. But start 
          free first.
        </p>

        <div style={{
          display: "grid",
          gap: "0.8rem",
          marginBottom: "2rem",
        }}>
          {[
            {
              name: "Coursera Professional Certificates",
              price: "$39-49/month",
              desc: "Google Cloud, IBM, and Meta certificates in AI, ML, and data science. Employer-recognized credentials."
            },
            {
              name: "DataCamp",
              price: "$12.50/month (annual)",
              desc: "Interactive courses in data science, Python, and AI. Hands-on learning platform."
            },
            {
              name: "Udacity Nanodegrees",
              price: "$399-499/month",
              desc: "Deep programs in AI, ML, and data science. Includes mentorship and career services."
            },
            {
              name: "Fast AI Practical Deep Learning",
              price: "$30-100 donation-based",
              desc: "More structured than YouTube version. Top-down deep learning approach with assignments."
            },
          ].map((course, i) => (
            <div key={i} style={{
              background: "#fff",
              border: `1px solid ${c.border}`,
              borderRadius: "8px",
              padding: "1rem 1.2rem",
              display: "flex",
              gap: "0.8rem",
            }}>
              <div style={{
                flexShrink: 0,
                width: "24px",
                height: "24px",
                background: "#0066cc",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#fff",
                fontSize: "0.9rem",
              }}>
                {i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: c.ink,
                  marginBottom: "0.3rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  {course.name}
                  <span style={{
                    background: "#e3f2fd",
                    color: "#0066cc",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}>
                    {course.price}
                  </span>
                </div>
                <div style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "0.85rem",
                  color: c.bodyText,
                  lineHeight: 1.6,
                }}>
                  {course.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Callout icon="📚" title="Free First, Then Paid">
          Start with free resources. Build projects. Get comfortable. Only then invest in 
          paid courses if you want structured learning with certificates. Most employers 
          care about what you can do, not certificates.
        </Callout>

        {/* Section 8: FAQ */}
        <h2 style={h2Style}>Frequently Asked Questions</h2>
        <p style={prose}>
          These are the questions we hear most from freshers considering AI learning:
        </p>

        <div style={{ marginBottom: "2rem" }}>
          <FAQItem
            question="Do I need strong math skills to learn AI?"
            answer="Not for most practical work. Understanding basic probability and statistics helps, but you can use ML libraries effectively without deep math. If you pursue research later, mathematics becomes important. Start with hands-on coding first. Most AI work is data preparation and model evaluation, not mathematics."
          />
          <FAQItem
            question="Should I learn Python first or jump straight into AI?"
            answer="Learn Python basics first: variables, loops, functions, lists. If you do not know Python, spend 1-2 weeks learning it using free resources like freeCodeCamp. Then move to AI libraries. Learning both simultaneously is slow and frustrating. Get fundamentals first."
          />
          <FAQItem
            question="Will AI make coding jobs disappear?"
            answer="No. Evidence shows AI tools like GitHub Copilot make developers faster and allow them to focus on problem-solving. Developers who use AI will outcompete those who do not. The market is shifting, not shrinking."
          />
          <FAQItem
            question="What is the best AI tool to learn first?"
            answer="Start with ChatGPT or Claude (free). Learn prompting. Then pick based on your field: coders learn GitHub Copilot, data people learn Python with Pandas, designers learn DALL-E, marketers learn HubSpot. Do not try to learn everything at once."
          />
          <FAQItem
            question="How long to get job-ready with AI skills?"
            answer="With tech background: 4-8 weeks of consistent learning (5 hours/week) plus one portfolio project. From zero: 3-4 months. Key is consistent practice and real projects, not just tutorials."
          />
          <FAQItem
            question="Will employers accept self-taught AI skills?"
            answer="Yes, absolutely. A GitHub portfolio with 2-3 finished projects speaks louder than certificates. Demonstrated ability matters more than credentials. Show what you can do."
          />
          <FAQItem
            question="Is AI learning really free?"
            answer="Yes. ChatGPT free tier, Google Colab, Kaggle, YouTube, GitHub are all free. You might spend money on compute later (AWS, Google Cloud), but they offer free tiers. Start completely free."
          />
          <FAQItem
            question="Should I specialize or learn everything?"
            answer="Specialize. Choose one based on your interest or job goal. ML for data roles, computer vision for robotics, NLP for content, etc. Employers want depth and projects, not shallow knowledge."
          />
          <FAQItem
            question="I am not good at math. Can I still learn AI?"
            answer="Yes. You do not need advanced math for practical AI work. Start with projects, learn by doing, pick up math later if needed. Motivation and persistence matter more than initial aptitude."
          />
          <FAQItem
            question="What is the difference between machine learning and AI?"
            answer="AI is the broad field. Machine learning is a subset that teaches machines to learn from data. Think of AI as the umbrella, machine learning as one important tool under it."
          />
          <FAQItem
            question="Should I get an AI certification?"
            answer="Optional. Certifications from Google, Coursera, or AWS can help, but they are not required. Real projects on GitHub are more valuable to employers. Certification matters less than demonstrated skills."
          />
          <FAQItem
            question="How do I choose between different AI learning paths?"
            answer="Think about the job you want. Data analyst jobs need SQL and Python. ML engineer roles need TensorFlow and statistics. Product design needs design thinking and user research. Pick a path that aligns with your interests and target role."
          />
        </div>

        {/* Conclusion */}
        <h2 style={h2Style}>Your AI Learning Action Plan for 2026</h2>
        <p style={prose}>
          AI is not optional anymore. But learning it is not as hard as media hype suggests. 
          You do not need a PhD. You need to know which tools solve problems, use them 
          hands-on, and articulate what you learned.
        </p>
        <p style={prose}>
          Freshers who stand out in 2026 are not those who read the most blog posts. They 
          are those who spent weekends building projects, put them on GitHub, and can walk 
          recruiters through what they built and why. That is the competitive edge.
        </p>
        <p style={prose}>
          Start this week. Pick ChatGPT or Claude. Use it to learn something you are curious 
          about. Pick one project from the list and commit to finishing it in the next month. 
          Do not wait for the perfect moment. Start now. Freshers who begin AI learning now 
          will have an unfair advantage in six months. Be one of them.
        </p>

        {/* Tags */}
        <div style={{ marginTop: "2.8rem", paddingTop: "1.5rem", borderTop: `1px solid ${c.border}` }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "1px", color: c.muted, marginBottom: "0.8rem" }}>
            Topics
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["AI Learning", "Fresher Skills", "Machine Learning", "ChatGPT", "Career Growth", "Tech Skills 2026", "Python", "Data Science", "GitHub", "Portfolio", "Free Tools", "Paid Learning"].map(tag => (
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
          }}>CM</div>
          <div>
            <div style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: c.ink }}>
              Chethan M P
            </div>
            <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.78rem", color: c.muted, marginBottom: "0.4rem" }}>
              AI & Career Growth · freshersjobs.shop
            </div>
            <p style={{ ...prose, fontSize: "0.84rem", marginBottom: 0 }}>
              Chethan is a tech writer and career mentor helping freshers navigate the rapidly 
              changing tech job market. He writes about practical AI applications, career strategies, 
              and emerging technologies that matter to early-career professionals. His writing 
              emphasizes hands-on learning over theory and real skills over credentials.
            </p>
          </div>
        </div>

        {/* Credits */}
        <div style={{
          background: "#f5f5f5",
          border: `1px solid ${c.border}`,
          borderRadius: "10px",
          padding: "1.4rem 1.6rem",
          marginTop: "2.5rem",
          fontFamily: "system-ui, sans-serif",
          fontSize: "0.82rem",
          color: c.muted,
          lineHeight: 1.7,
        }}>
          <div style={{ fontWeight: 700, color: c.ink, marginBottom: "0.6rem" }}>
            About FreshersJobs
          </div>
          <p style={{ marginBottom: "0.8rem" }}>
            FreshersJobs is a comprehensive free resource for Indian graduates and recent 
            college freshers entering the competitive job market. We publish practical guides 
            on resume writing, interview preparation, career choices, emerging skills, and 
            technology trends for 2026 and beyond. Our content is designed for early-career 
            professionals navigating their first job search.
          </p>
          <p style={{ marginBottom: "0.8rem" }}>
            <strong>Website:</strong> freshersjobs.shop<br/>
            <strong>Focus:</strong> Practical, hands-on career guidance for freshers. No hype. No fluff. Real advice.<br/>
            <strong>Author:</strong> Chethan M P
          </p>
          <p style={{ marginBottom: "0.8rem" }}>
            <strong>About the Author:</strong> Chethan M P is a tech writer, career mentor, 
            and former recruiter with experience helping freshers transition from college to 
            professional roles in technology companies. He focuses on practical skills that 
            matter in real job interviews and real work.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Disclaimer:</strong> Opinions in this article are the author's own based 
            on industry trends as of February 2026. Recommendations are subject to change as 
            technology and job markets evolve. We update guides regularly based on feedback. 
            Tool pricing and availability may change. Verify current information before making 
            significant learning investments.
          </p>
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