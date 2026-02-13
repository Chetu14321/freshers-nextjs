import Link from "next/link";

export const metadata = {
  title: "50 Most Common Fresher Interview Questions and Answers | FreshersJobs",
  description:
    "Prepare for your first job interview with the 50 most commonly asked fresher interview questions — with sample answers for HR, technical, aptitude, and situational rounds.",
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

function QACard({ number, question, answer, tag }) {
  const tagColors = {
    HR:          { bg: "#fef5e4", border: "#f5c97a", text: "#8a5a00" },
    Technical:   { bg: "#f0f7f9", border: "#b8dce6", text: "#1a5c6e" },
    Aptitude:    { bg: "#f0faf2", border: "#b8e0c6", text: "#1b4d22" },
    Situational: { bg: "#fdf2f8", border: "#e8b8d8", text: "#6a1040" },
  };
  const col = tagColors[tag] || tagColors.HR;
  return (
    <div style={{
      background: "#fff",
      border: `1px solid ${c.border}`,
      borderRadius: "10px",
      padding: "1.4rem",
      marginBottom: "1rem",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "0.8rem" }}>
        <div style={{
          width: "34px", height: "34px", flexShrink: 0,
          background: c.ink, color: c.amberLt,
          fontFamily: "Georgia, serif", fontSize: "0.85rem", fontWeight: 700,
          borderRadius: "6px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>Q{number}</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
            <span style={{
              background: col.bg, border: `1px solid ${col.border}`,
              color: col.text,
              fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", fontWeight: 700,
              letterSpacing: "0.8px", textTransform: "uppercase",
              padding: "2px 9px", borderRadius: "20px",
            }}>{tag}</span>
          </div>
          <div style={{
            fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700,
            color: c.ink, lineHeight: 1.35,
          }}>{question}</div>
        </div>
      </div>
      <div style={{
        background: c.cream,
        borderRadius: "6px",
        padding: "1rem 1.2rem",
        fontFamily: "system-ui, sans-serif",
        fontSize: "0.88rem",
        lineHeight: 1.7,
        color: c.bodyText,
      }}>
        <span style={{ fontWeight: 700, color: c.teal, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.8px", display: "block", marginBottom: "0.35rem" }}>
          Sample Answer
        </span>
        {answer}
      </div>
    </div>
  );
}

const hrQuestions = [
  {
    q: "Tell me about yourself.",
    a: "Start with your degree and college, mention your technical focus area, name one or two projects you have built, and close with what kind of role you are looking for. Keep it under 90 seconds. This is not a life story — it is a professional summary. Practice it out loud until it sounds natural, not memorised.",
  },
  {
    q: "Why do you want to work at our company?",
    a: "Research the company before every interview — their product, recent news, and what makes them different from competitors. Then say something specific: I have been following your product for the past year and I appreciate how you have approached the problem of X. Generic answers like your company is well known immediately signal that you did not prepare.",
  },
  {
    q: "What are your strengths?",
    a: "Pick two or three genuine strengths that are relevant to the role and back each one with a brief example. For example: I am a quick learner — when I started building my final-year project, I had never used React before. Within three weeks I had a working application deployed online. Avoid vague claims like I am a hard worker without any evidence.",
  },
  {
    q: "What are your weaknesses?",
    a: "Choose a real weakness that is not critical to the role, and always pair it with what you are actively doing to improve. For example: I used to find it difficult to ask for help when I was stuck, because I wanted to solve everything independently. I have been working on this by setting a 30-minute rule — if I cannot make progress in 30 minutes, I ask a teammate or look for a mentor. Interviewers are testing self-awareness, not perfection.",
  },
  {
    q: "Where do you see yourself in five years?",
    a: "Show ambition that is grounded in the role you are applying for. Something like: In five years I hope to have grown from a junior developer to a mid-level engineer with ownership of at least one significant product feature. I want to deepen my skills in backend systems and eventually move into a technical lead role. This tells the interviewer you are thinking long term and you see a future at the company.",
  },
  {
    q: "Why should we hire you over other candidates?",
    a: "This is your chance to connect your specific skills and attitude to what the role needs. Say something like: I have spent the last three months building projects in exactly the stack you use here. I do not need to be trained on the tools — I can contribute from week one. I am also someone who genuinely enjoys problem-solving, and I am not afraid to ask questions when something is unclear. Confidence without arrogance is the tone to strike.",
  },
  {
    q: "What do you know about our industry?",
    a: "Briefly summarise the industry landscape, name a recent trend or challenge, and connect it to why you are excited to work in this space. Spend 15 minutes researching the industry before every interview. Candidates who demonstrate industry awareness — even at a basic level — stand out significantly among freshers.",
  },
  {
    q: "Are you comfortable with relocation or travel?",
    a: "Answer honestly. If you are open to relocation, say so directly. If you have constraints, be transparent about them while framing it positively: I am currently based in Hyderabad and am open to relocating for the right opportunity once I have settled into the role. Do not say yes to everything just to get the offer — it creates problems later.",
  },
  {
    q: "What salary are you expecting?",
    a: "Research the market rate for freshers in your role and city before the interview. Then say something like: Based on my research and the skills I bring, I am expecting something in the range of X to Y. I am open to discussing this further based on what the role involves. Do not say I will accept anything — it signals that you have not done your research.",
  },
  {
    q: "Do you have any questions for us?",
    a: "Always say yes, and prepare at least two genuine questions in advance. Good examples: What does the first 90 days typically look like for someone in this role? What are the most common reasons freshers in this team grow quickly? Asking nothing signals low interest. Asking thoughtful questions signals that you have thought seriously about this opportunity.",
  },
];

const technicalQuestions = [
  {
    q: "What is the difference between a compiled language and an interpreted language?",
    a: "A compiled language like C or Java translates the entire source code into machine code before execution. An interpreted language like Python runs code line by line at runtime through an interpreter. Compiled languages are generally faster at runtime; interpreted languages are typically easier to debug and test quickly. Many modern languages use a hybrid approach.",
  },
  {
    q: "What is object-oriented programming? Explain its four pillars.",
    a: "Object-oriented programming is a paradigm that organises code around objects rather than functions. The four pillars are: Encapsulation — bundling data and methods together and hiding internal details; Inheritance — allowing a class to derive properties from a parent class; Polymorphism — allowing the same method to behave differently in different contexts; Abstraction — hiding complex implementation and exposing only what is necessary.",
  },
  {
    q: "What is the difference between an array and a linked list?",
    a: "An array stores elements in contiguous memory locations and allows fast access by index in O(1) time, but insertion and deletion are slow at O(n). A linked list stores elements as nodes with pointers to the next node. Insertion and deletion are fast at O(1) if you have the reference, but access by index is slow at O(n). Arrays work best when you need frequent reads; linked lists work best when you need frequent insertions and deletions.",
  },
  {
    q: "What is a primary key and a foreign key in a database?",
    a: "A primary key is a column or combination of columns that uniquely identifies each row in a table — no two rows can have the same primary key value, and it cannot be null. A foreign key is a column in one table that references the primary key of another table, creating a relationship between the two. Foreign keys enforce referential integrity — you cannot add a foreign key value that does not exist in the referenced table.",
  },
  {
    q: "What is the difference between GET and POST in HTTP?",
    a: "GET requests retrieve data from a server. Parameters are sent in the URL, which makes them visible, bookmarkable, and cacheable. GET is used for reading data and should have no side effects. POST requests send data to the server in the request body, making them suitable for creating or updating data. POST data is not visible in the URL and is not cached by default. The key distinction is that GET is idempotent — calling it multiple times has the same result — while POST is not.",
  },
  {
    q: "What is a REST API?",
    a: "REST stands for Representational State Transfer. A REST API is an interface that allows different applications to communicate over HTTP using standard methods like GET, POST, PUT, and DELETE. Each resource is identified by a URL, and the API is stateless — meaning each request contains all the information needed to process it, with no session stored on the server. REST APIs are widely used because they are simple, scalable, and compatible with any client that can make HTTP requests.",
  },
  {
    q: "What is the difference between == and === in JavaScript?",
    a: "The double equals operator performs loose equality comparison, meaning it converts both values to the same type before comparing. For example, 0 == false evaluates to true. The triple equals operator performs strict equality comparison — it checks both value and type without any conversion. So 0 === false evaluates to false. As a best practice, always use triple equals in JavaScript to avoid unexpected type coercion bugs.",
  },
  {
    q: "What is a stack and a queue? Give a real-world example of each.",
    a: "A stack is a Last In First Out (LIFO) data structure — the last item added is the first to be removed. A real-world example is a stack of plates: you add and remove from the top. Use cases include function call stacks and undo operations in applications. A queue is a First In First Out (FIFO) data structure — the first item added is the first removed. A real-world example is a ticket queue: people are served in the order they arrived. Use cases include task scheduling and print queues.",
  },
  {
    q: "What is the difference between synchronous and asynchronous programming?",
    a: "In synchronous programming, each operation must complete before the next one begins. The program waits. In asynchronous programming, an operation is started and the program continues executing other code while waiting for the result. When the result is ready, a callback, promise, or async/await handler processes it. Asynchronous programming is essential for tasks like network requests and file reading where waiting would block the entire application.",
  },
  {
    q: "What is version control and why is Git important?",
    a: "Version control is a system that tracks changes to files over time, allowing you to review history, revert to earlier states, and collaborate with others without overwriting each other&apos;s work. Git is the most widely used version control system. It is important because virtually every professional software team uses it. Knowing how to commit, branch, merge, and resolve conflicts in Git is considered a baseline skill for any technical role, not an advanced one.",
  },
  {
    q: "What is the time complexity of binary search?",
    a: "Binary search has a time complexity of O(log n). It works by repeatedly dividing the search interval in half. Given a sorted array of n elements, binary search eliminates half the remaining candidates at each step. So for 1000 elements, it takes at most 10 comparisons rather than 1000. The requirement is that the input array must already be sorted — which is why sorting algorithms and binary search are often discussed together.",
  },
  {
    q: "What is the difference between SQL and NoSQL databases?",
    a: "SQL databases are relational — data is stored in structured tables with rows and columns, and relationships between tables are defined using foreign keys. They use Structured Query Language for querying and are best suited for structured data with complex relationships. Examples include MySQL and PostgreSQL. NoSQL databases store data in flexible formats like documents, key-value pairs, or graphs. They are better suited for large volumes of unstructured or semi-structured data and horizontal scaling. Examples include MongoDB and Redis.",
  },
];

const aptitudeQuestions = [
  {
    q: "If a train travels 300 km in 5 hours, what is its average speed?",
    a: "Average speed = Total Distance divided by Total Time. So 300 km divided by 5 hours equals 60 km per hour. This type of question tests whether you can apply a formula quickly and correctly under pressure. Practice keeping your working visible and your answer clearly stated — interviewers want to see your thinking process, not just the final number.",
  },
  {
    q: "A product is sold at a 20% profit. If the cost price is Rs. 500, what is the selling price?",
    a: "Profit percentage is calculated on the cost price. 20% of Rs. 500 is Rs. 100. So the selling price is Rs. 500 plus Rs. 100, which equals Rs. 600. Percentage problems appear in almost every fresher aptitude test. Practice calculating percentages quickly without a calculator — the formula is always Percentage divided by 100, multiplied by the base value.",
  },
  {
    q: "If 6 workers can complete a task in 12 days, how many days will 9 workers take to complete the same task?",
    a: "This is an inverse proportion problem. Total work equals 6 workers multiplied by 12 days, which equals 72 worker-days. With 9 workers, the time required equals 72 divided by 9, which equals 8 days. The key insight is that more workers means less time — so as one quantity increases, the other decreases proportionally.",
  },
  {
    q: "What comes next in the series: 2, 6, 12, 20, 30, ?",
    a: "Look at the differences between consecutive terms: 4, 6, 8, 10. The differences are increasing by 2 each time. So the next difference is 12, and the next term is 30 plus 12, which equals 42. For series questions, always look at the differences first, then the ratios, then consider whether alternate terms follow a separate pattern. Most series questions follow one of these three rules.",
  },
  {
    q: "If the ratio of boys to girls in a class is 3:2 and there are 30 students total, how many girls are there?",
    a: "The total ratio parts are 3 plus 2, which equals 5. Each part equals 30 divided by 5, which equals 6 students. Girls represent 2 parts, so the number of girls is 2 multiplied by 6, which equals 12. Ratio problems are among the most common in fresher aptitude rounds. The method is always the same: find the value of one part, then multiply by the required number of parts.",
  },
  {
    q: "A boat travels 24 km upstream in 6 hours and 24 km downstream in 4 hours. What is the speed of the current?",
    a: "Upstream speed equals 24 divided by 6, which equals 4 km per hour. Downstream speed equals 24 divided by 4, which equals 6 km per hour. Speed of current equals downstream speed minus upstream speed, divided by 2: 6 minus 4 divided by 2 equals 1 km per hour. Speed of the boat in still water would be 6 plus 4 divided by 2, which equals 5 km per hour.",
  },
  {
    q: "Choose the odd one out: Python, Java, HTML, C++",
    a: "HTML is the odd one out. Python, Java, and C++ are all programming languages used to write application logic. HTML is a markup language used to structure web content — it is not a programming language in the traditional sense, as it cannot perform logic or calculations. This type of question tests your understanding of fundamental technical concepts, not just your ability to do arithmetic.",
  },
  {
    q: "If you have a 3-litre jug and a 5-litre jug, how do you measure exactly 4 litres of water?",
    a: "This is a logic puzzle. Step 1: Fill the 5-litre jug. Step 2: Pour from the 5-litre into the 3-litre until the 3-litre is full, leaving 2 litres in the 5-litre jug. Step 3: Empty the 3-litre jug. Step 4: Pour the 2 litres from the 5-litre jug into the 3-litre jug. Step 5: Fill the 5-litre jug again. Step 6: Pour from the 5-litre into the 3-litre until full — since the 3-litre already has 2 litres, it only needs 1 more litre. This leaves exactly 4 litres in the 5-litre jug.",
  },
];

const situationalQuestions = [
  {
    q: "Tell me about a time you solved a difficult problem.",
    a: "Use the STAR method: Situation, Task, Action, Result. Describe a specific challenge from a project or academic context, explain what made it difficult, walk through the specific steps you took to solve it, and state the outcome. Even a debugging session from a college project works here — what matters is that you demonstrate a logical, persistent approach to problems rather than giving up.",
  },
  {
    q: "Describe a situation where you had to work as part of a team.",
    a: "Pick a real example — a group project, a hackathon, or a college event. Describe what the team was trying to achieve, what your specific role was, how you communicated and coordinated with teammates, and what the outcome was. Interviewers are looking for evidence that you can collaborate, take ownership of your part, and handle disagreements constructively.",
  },
  {
    q: "What would you do if you disagreed with your manager&apos;s decision?",
    a: "The right answer shows maturity and professionalism. Say something like: I would first try to understand the reasoning behind the decision by asking questions respectfully. If I still had concerns, I would share my perspective clearly and with evidence — not just an opinion. If the manager still felt their approach was correct, I would trust their judgment and commit to executing the plan, because disagreement should inform decisions, not paralyse them.",
  },
  {
    q: "How do you handle tight deadlines?",
    a: "Describe a practical approach: I break the work into smaller tasks, prioritise the ones that are critical to the deliverable, estimate time for each, and communicate early if I think a deadline is at risk. I have found that the worst outcome is not telling anyone until the last minute. Early communication gives the team options; silence does not. Use a specific example from college if you have one.",
  },
  {
    q: "What would you do in your first 30 days at this company?",
    a: "Show that you understand the value of listening before acting. Something like: In the first 30 days I would focus on understanding the codebase and the team&apos;s way of working. I would take notes, ask questions without assuming I already know the answers, complete any small tasks assigned to me to the best of my ability, and build relationships with the people I will be working with most closely. I would resist the urge to suggest big changes before I understand the full context.",
  },
  {
    q: "How do you stay updated with new technologies?",
    a: "Name the specific resources you actually use: I follow a few newsletters like TLDR Tech and JavaScript Weekly, I spend about 30 minutes a day on YouTube tutorials or documentation when I am exploring something new, and I try to build at least one small project whenever I learn a new tool so that the knowledge sticks. Interviewers are checking whether you are genuinely curious and self-motivated, not whether you can name the right buzzwords.",
  },
  {
    q: "Tell me about a project you are most proud of.",
    a: "Pick your strongest project and prepare a clear three-part answer: what problem it solves, how you built it including the key technical decisions, and what you would improve if you were starting it again. The last part is particularly important — it shows self-awareness and a growth mindset. Walk the interviewer through it as if you are showing it to a friend, not reciting a memorised script.",
  },
  {
    q: "How do you manage your time when you have multiple things to do at once?",
    a: "Describe a real system you use rather than generic advice. For example: I write down everything I need to do at the start of each day, then mark which tasks are time-sensitive and which are important but flexible. I work on the hardest or most time-sensitive tasks first while my energy is high. For longer projects I break them into daily milestones so I can track progress. I also try to avoid context-switching too frequently because it reduces the quality of focused work.",
  },
  {
    q: "Are you comfortable learning new technologies quickly?",
    a: "Yes — but back it up with evidence rather than just saying yes. Say something like: Absolutely. During my final year project I had to learn both React and Firebase in about four weeks because the team decided to change our tech stack midway through. I used the official documentation as my primary source, built small test components to understand each feature, and asked specific questions in developer forums when I got stuck. We delivered the project on time.",
  },
  {
    q: "What motivates you at work?",
    a: "Be genuine. Common honest answers include: solving problems that have real users on the other end, seeing something you built actually work in a live environment, or continuously learning something new every week. Avoid answers that sound like you read them off a motivational poster. Interviewers are trying to understand whether you are intrinsically motivated or only externally motivated — the former is what every company wants in a long-term hire.",
  },
];

export default function FresherInterviewQuestions() {
  return (
    <div style={{ background: c.paper, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <article style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Breadcrumb */}
        <nav style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.76rem", color: c.muted, marginBottom: "1.8rem" }}>
          <Link href="/" style={{ color: c.teal, textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/blog" style={{ color: c.teal, textDecoration: "none" }}>Blogs</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          Fresher Interview Questions
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
        }}>Interview Prep</span>

        {/* Title */}
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700,
          color: c.ink,
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}>
          50 Most Common Fresher Interview Questions and How to Answer Them
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
          <span>📅 June 1, 2025</span>
          <span>⏱ 18 min read</span>
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
          Most fresher interviews follow a predictable pattern. The questions
          are not random — they come from a well-worn list that hiring managers
          across India use to evaluate candidates who have little or no work
          experience. This guide covers the 50 most commonly asked questions
          across all four rounds, with honest, practical sample answers you
          can adapt and make your own.
        </div>

        <p style={prose}>
          This article is organised into four sections matching the typical
          interview structure: HR questions that assess your personality and
          fit, technical questions that test your foundational knowledge,
          aptitude questions that measure logical thinking, and situational
          questions that reveal how you handle real workplace scenarios.
          Prepare all four sections — many companies combine them in a single
          interview round.
        </p>

        <Callout icon="📋" title="How to Use This Guide">
          Do not memorise these answers word for word. Read each sample answer,
          understand the structure and the reasoning behind it, then write your
          own version using your actual experience and projects. Interviewers
          can immediately tell the difference between a practised, genuine
          answer and a recited one.
        </Callout>

        {/* HR Section */}
        <h2 style={h2Style}>Part 1: HR Interview Questions</h2>
        <p style={prose}>
          HR questions are asked in almost every fresher interview, usually at
          the beginning or end of the process. They are not formalities — they
          carry real weight. An HR interviewer is assessing your communication
          skills, self-awareness, attitude, and whether you will be a good fit
          for the team. Poor answers here can eliminate candidates who
          performed well technically.
        </p>
        <TipBox>
          Before any interview, practice answering HR questions out loud — not
          in your head. The difference between thinking an answer and saying it
          smoothly is enormous. Record yourself on your phone and listen back.
          It feels uncomfortable, but it is the single fastest way to improve.
        </TipBox>
        {hrQuestions.map((item, i) => (
          <QACard key={i} number={i + 1} question={item.q} answer={item.a} tag="HR" />
        ))}

        {/* Technical Section */}
        <h2 style={h2Style}>Part 2: Technical Interview Questions</h2>
        <p style={prose}>
          Technical questions for freshers test your understanding of computer
          science fundamentals — not your ability to build complex systems.
          Interviewers know you are new. What they are evaluating is whether
          your conceptual foundation is solid enough to build on, and whether
          you can explain technical ideas clearly. A candidate who explains
          concepts in simple language demonstrates understanding far better
          than one who recites definitions without grasping them.
        </p>
        <TipBox>
          For technical rounds, always think out loud. Walk the interviewer
          through your reasoning even if you are not sure of the answer.
          Saying I am not certain, but my understanding is that... followed
          by a reasonable explanation is far better than silence or a wrong
          answer delivered with false confidence.
        </TipBox>
        {technicalQuestions.map((item, i) => (
          <QACard key={i} number={i + 11} question={item.q} answer={item.a} tag="Technical" />
        ))}

        {/* Aptitude Section */}
        <h2 style={h2Style}>Part 3: Aptitude and Logical Reasoning Questions</h2>
        <p style={prose}>
          Aptitude rounds are standard in campus placements and mass hiring
          processes at large IT companies like TCS, Infosys, and Wipro.
          They test your speed and accuracy with quantitative reasoning,
          logical thinking, and verbal ability. The questions are not designed
          to be difficult — they are designed to be done quickly. Practice
          matters more than intelligence here.
        </p>
        <TipBox>
          Spend 20 minutes a day for two weeks practicing aptitude questions
          on IndiaBix or PrepInsta before your placement season begins.
          Speed improves dramatically with repetition, and most aptitude
          rounds have a time limit that trips up unprepared candidates
          regardless of their actual ability.
        </TipBox>
        {aptitudeQuestions.map((item, i) => (
          <QACard key={i} number={i + 23} question={item.q} answer={item.a} tag="Aptitude" />
        ))}

        {/* Situational Section */}
        <h2 style={h2Style}>Part 4: Situational and Behavioural Questions</h2>
        <p style={prose}>
          Situational questions ask you to describe how you have handled or
          would handle specific scenarios. They are used to assess your
          problem-solving approach, emotional maturity, teamwork ability,
          and communication style. The best answers are always specific and
          honest — vague, theoretical responses are far less convincing than
          a real story, even a small one from a college project or part-time
          job.
        </p>
        <Callout icon="⭐" title="The STAR Method">
          Structure every situational answer using STAR: Situation — describe
          the context briefly; Task — explain what you needed to accomplish;
          Action — describe the specific steps you took; Result — state the
          outcome, including what you learned. Answers that follow this
          structure are easier to follow and more persuasive than unstructured
          ones.
        </Callout>
        {situationalQuestions.map((item, i) => (
          <QACard key={i} number={i + 31} question={item.q} answer={item.a} tag="Situational" />
        ))}

        {/* Final section */}
        <h2 style={h2Style}>5 Things to Do the Day Before Your Interview</h2>
        <p style={prose}>
          <strong>Research the company for 30 minutes.</strong> Know what the company builds,
          who their customers are, and at least one recent news item or product
          update. This pays off immediately when you are asked why you want to
          work there.
        </p>
        <p style={prose}>
          <strong>Review your own resume carefully.</strong> Every point on your resume is a
          potential interview question. If you listed a skill or project, be
          ready to speak about it in detail. Candidates who cannot explain
          things on their own resume damage their credibility instantly.
        </p>
        <p style={prose}>
          <strong>Prepare your two or three best project stories.</strong> Practice explaining
          each project in under two minutes — what problem it solves, what you
          built, what technology you used, and what you would do differently
          now.
        </p>
        <p style={prose}>
          <strong>Get your logistics sorted the night before.</strong> Know the exact location
          or video call link, test your internet and camera if it is online,
          and plan to be ready ten minutes early. Rushing creates anxiety that
          affects your performance.
        </p>
        <p style={prose}>
          <strong>Sleep.</strong> Preparation under fatigue is significantly less effective.
          A well-rested mind recalls information faster, speaks more clearly,
          and handles unexpected questions better than a tired one. The extra
          hour of last-minute preparation is rarely worth the cost.
        </p>

        {/* CTA */}
        <div style={{
          background: c.ink, borderRadius: "10px",
          padding: "2rem", textAlign: "center", margin: "2.5rem 0",
        }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: c.amberLt, marginBottom: "0.6rem" }}>
            Ready to Apply?
          </div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#a89f8f", marginBottom: "1.2rem" }}>
            Browse fresher job openings updated daily across India.
          </div>
          <Link href="/jobs" style={{
            display: "inline-block", background: c.amber, color: "#fff",
            fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", fontWeight: 700,
            padding: "11px 26px", borderRadius: "6px", textDecoration: "none",
          }}>
            Browse Fresher Jobs →
          </Link>
        </div>

        {/* Tags */}
        <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: `1px solid ${c.border}` }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "1px", color: c.muted, marginBottom: "0.8rem" }}>
            Topics
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Interview Questions", "HR Interview", "Technical Interview", "Fresher Jobs", "Placement Prep", "Aptitude Questions"].map(tag => (
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