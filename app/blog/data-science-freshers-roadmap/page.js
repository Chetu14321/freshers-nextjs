import Link from "next/link";

export const metadata = {
  title: "Data Science Skills Roadmap: Step-by-Step Guide for Freshers 2026 | FreshersJobs",
  description:
    "Complete data science learning roadmap for freshers. Skills needed, tools, projects, timeline, and how to land your first data science job.",
};

export default function DataScienceRoadmap() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Navigation */}
      <nav style={{
        padding: "20px 40px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Link href="/" style={{ textDecoration: "none", fontWeight: "700", fontSize: "18px", color: "#111" }}>
          FreshersJobs
        </Link>
        <Link href="/blog" style={{ textDecoration: "none", color: "#0070f3", fontSize: "14px", fontWeight: "600" }}>
          ← Back to Blogs
        </Link>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{
            display: "inline-block",
            background: "#dbeafe",
            color: "#1e40af",
            padding: "6px 16px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "16px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}>
            Career Roadmap
          </div>

          <h1 style={{
            fontSize: "44px",
            fontWeight: "700",
            color: "#111",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}>
            Data Science Skills Roadmap: Step-by-Step Guide for Freshers 2026
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}>
            Everything a fresher needs to know to break into data science. Skills, tools, learning path, projects, 
            timeline, and strategies to land your first data science job.
          </p>

          <div style={{
            display: "flex",
            gap: "20px",
            color: "#666",
            fontSize: "14px",
          }}>
            <span>📅 Updated: February 2026</span>
            <span>⏱ 20 min read</span>
            <span>✍️ Chethan M P</span>
          </div>
        </div>

        {/* Intro Box */}
        <div style={{
          background: "#f8fafc",
          padding: "24px",
          borderRadius: "12px",
          borderLeft: "4px solid #0070f3",
          marginBottom: "40px",
          lineHeight: "1.7",
          color: "#333",
        }}>
          Data Science is one of the highest-paid entry-level roles in tech. A fresher data scientist can earn between 
          5 to 10 lakhs per year in India, with significant growth potential. But here is the catch: most freshers do 
          not know where to start. They are overwhelmed by the amount of tools and concepts. They do not know what to 
          learn first. And they do not know how to transition from learning to actually getting hired. This guide fixes 
          that by giving you a clear, sequential roadmap.
        </div>

        {/* Section 1 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          What Does a Data Scientist Actually Do?
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Before you start learning, understand what you are actually working toward. A data scientist does not sit 
          around creating beautiful dashboards. That is business intelligence. A data scientist solves business problems 
          using data and machine learning.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          For example, an e-commerce company might ask: "Why are customers abandoning their shopping carts?" A data 
          scientist would analyze user behavior data, identify patterns, build a predictive model, and recommend solutions. 
          A bank might ask: "Which customers are likely to default on loans?" A data scientist would build a credit risk 
          model. A streaming platform might ask: "Which movies should we recommend to each user?" A data scientist would 
          build a recommendation algorithm.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          The actual day-to-day work is about 70% data wrangling and exploration, 20% model building, and 10% communicating 
          results. Most time is spent understanding data and preparing it for analysis, not building fancy models. This is 
          important to know because many freshers focus on machine learning algorithms and ignore data cleaning, which is 
          backwards.
        </p>

        {/* Section 2 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          How Long to Become Job-Ready?
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          If you already know Python and basic statistics, you can become job-ready in 16-20 weeks. If you are starting 
          from zero in everything, plan for 24-28 weeks (6 months). The difference depends on your starting point and how 
          much time you can commit daily.
        </p>

        <div style={{
          background: "#f0fdf4",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid #bbf7d0",
          marginBottom: "20px",
        }}>
          <strong style={{ color: "#15803d", fontSize: "16px" }}>Realistic Timeline (assuming 2 hours daily):</strong>
          <ul style={{ marginTop: "12px", color: "#333", fontSize: "15px", lineHeight: "1.8" }}>
            <li><strong>Weeks 1-4:</strong> Python fundamentals (if needed) and SQL basics</li>
            <li><strong>Weeks 5-8:</strong> Statistics, probability, data visualization (Matplotlib, Seaborn)</li>
            <li><strong>Weeks 9-12:</strong> Pandas, exploratory data analysis, feature engineering</li>
            <li><strong>Weeks 13-16:</strong> Machine learning algorithms, Scikit-learn, model evaluation</li>
            <li><strong>Weeks 17-20:</strong> Portfolio projects, interview prep, job applications</li>
            <li><strong>Weeks 21-24:</strong> Deep learning (if interested), cloud tools, specialized topics</li>
          </ul>
        </div>

        {/* Section 3 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          The Complete Data Science Learning Path
        </h2>

        {/* Level 1 */}
        <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e5e7eb" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#111", marginBottom: "15px" }}>
            Level 1: Foundations (Weeks 1-8)
          </h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>Python & SQL</h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              You need Python for data manipulation and analysis. You need SQL to extract data from databases. Most data 
              scientists spend more time writing SQL queries than training models. Learn these first before anything else.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px" }}>
              Learn: Python basics, Pandas, SQL (SELECT, WHERE, JOIN, aggregations)
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>Statistics & Probability</h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              You do not need to be a math expert, but you need to understand distributions, hypothesis testing, and 
              correlation. These concepts guide your data exploration and help you interpret results correctly. Poor 
              statistical understanding leads to wrong conclusions.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px" }}>
              Learn: Descriptive statistics, distributions, hypothesis testing, correlation, p-values
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>Data Visualization</h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              A key part of data science is communicating findings. If you cannot visualize data clearly, decision-makers 
              will not understand your insights. Learn to create charts, plots, and interactive visualizations.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px" }}>
              Learn: Matplotlib, Seaborn, basic Tableau or Power BI
            </div>
          </div>
        </div>

        {/* Level 2 */}
        <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e5e7eb" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#111", marginBottom: "15px" }}>
            Level 2: Data Wrangling & Analysis (Weeks 9-12)
          </h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>Exploratory Data Analysis (EDA)</h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Before you build any model, you must understand your data. EDA is the process of exploring data to find 
              patterns, outliers, and relationships. This is where most time is spent in real data science work. Master EDA 
              thoroughly.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px" }}>
              Learn: Handling missing values, outlier detection, data cleaning, feature exploration
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>Feature Engineering</h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Features are the input variables for your models. Good features make models work better. Feature engineering 
              is the art of creating useful features from raw data. This is one of the most valuable skills in data science.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px" }}>
              Learn: Creating new features, scaling, encoding categorical variables, feature selection
            </div>
          </div>
        </div>

        {/* Level 3 */}
        <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e5e7eb" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#111", marginBottom: "15px" }}>
            Level 3: Machine Learning Fundamentals (Weeks 13-16)
          </h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>Supervised Learning</h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Start with regression (predicting continuous numbers) and classification (predicting categories). These are 
              the most common problems. Understand Linear Regression, Logistic Regression, Decision Trees, and Random Forests 
              deeply before moving to fancy algorithms.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px" }}>
              Learn: Linear regression, logistic regression, decision trees, random forests, gradient boosting
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>Model Evaluation</h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Building a model is easy. Evaluating it correctly is hard. You need to understand overfitting, underfitting, 
              train-test split, cross-validation, and proper metrics. Bad evaluation leads to models that look good but fail 
              in production.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px" }}>
              Learn: Train-test split, cross-validation, precision-recall, F1 score, ROC-AUC, overfitting
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>Unsupervised Learning</h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Sometimes you have data without labels. Clustering helps you find natural groups in data. Dimension reduction 
              helps you understand high-dimensional data. These are useful but less critical than supervised learning for 
              freshers.
            </p>
            <div style={{ background: "#f9fafb", padding: "12px", borderRadius: "6px", fontSize: "14px" }}>
              Learn: K-means, hierarchical clustering, dimensionality reduction (PCA)
            </div>
          </div>
        </div>

        {/* Level 4 */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#111", marginBottom: "15px" }}>
            Level 4: Portfolio & Real-World Skills (Weeks 17-24)
          </h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>End-to-End Projects</h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
              Build 3-4 complete projects from data collection through deployment. These projects should solve real problems 
              and be portfolio-worthy. This is what gets you hired, not certificates.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>Git & Deployment</h4>
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
              Know how to version control your code with Git and host on GitHub. Know how to save and load models. Know 
              how to put models into production (Docker, APIs). These practical skills matter in real jobs.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Essential Tools Every Data Scientist Uses
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          You do not need to learn every tool. Start with the core stack. Add specialized tools based on your role later.
        </p>

        <div style={{ display: "grid", gap: "15px" }}>
          {[
            { name: "Jupyter Notebook", desc: "Interactive environment for coding and documentation. Where most DS work happens." },
            { name: "Pandas", desc: "Python library for data manipulation. You will use this constantly. Essential." },
            { name: "NumPy", desc: "Foundation for numerical computing in Python. Powers Pandas and Scikit-learn." },
            { name: "Matplotlib & Seaborn", desc: "Libraries for creating visualizations. Critical for communicating findings." },
            { name: "Scikit-learn", desc: "Machine learning library with all standard algorithms. Industry standard." },
            { name: "SQL", desc: "Query language for databases. Most data comes from databases. Essential." },
            { name: "Git & GitHub", desc: "Version control and portfolio hosting. Every professional DS uses this." },
          ].map((tool, i) => (
            <div key={i} style={{
              border: "1px solid #e5e7eb",
              padding: "15px",
              borderRadius: "8px",
              background: "#f9fafb",
            }}>
              <strong style={{ color: "#111", fontSize: "15px" }}>{tool.name}</strong>
              <p style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>{tool.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: "#fef3c7",
          border: "1px solid #fcd34d",
          padding: "16px",
          borderRadius: "8px",
          marginTop: "20px",
          fontSize: "14px",
          color: "#333",
        }}>
          <strong>Advanced (Learn Later):</strong> TensorFlow, PyTorch (deep learning), Apache Spark (big data), 
          cloud platforms (AWS, GCP, Azure)
        </div>

        {/* Section 5 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Real Projects to Build for Your Portfolio
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Build these projects in order. Each teaches different concepts. Put all on GitHub with clear documentation.
        </p>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Project 1: Iris Classification (Weeks 13-14)
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
            The classic beginner project. Use the Iris dataset, explore it, build a classification model, evaluate it. 
            This teaches the full machine learning workflow in a simple setting. Most importantly, understand every step.
          </p>
          <div style={{ background: "#f0fdf4", padding: "10px", borderRadius: "6px", fontSize: "14px" }}>
            <strong>Skills:</strong> EDA, feature scaling, model selection, cross-validation, evaluation metrics
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Project 2: House Price Prediction (Weeks 15-16)
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
            Predict house prices from features like location, size, age. This is a regression problem. Handle missing data, 
            create new features, compare multiple models, and evaluate. Teaches feature engineering deeply.
          </p>
          <div style={{ background: "#f0fdf4", padding: "10px", borderRadius: "6px", fontSize: "14px" }}>
            <strong>Skills:</strong> Data cleaning, feature engineering, regression models, hyperparameter tuning
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Project 3: Customer Churn Prediction (Weeks 17-18)
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
            Predict which customers are likely to leave a service. This is a real business problem. Build models, create a 
            simple dashboard, and write insights. Teaches business impact thinking.
          </p>
          <div style={{ background: "#f0fdf4", padding: "10px", borderRadius: "6px", fontSize: "14px" }}>
            <strong>Skills:</strong> Class imbalance, business metrics, model interpretation, visualization
          </div>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Project 4: Exploratory Analysis + Insights (Weeks 19-20)
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "10px" }}>
            Choose a dataset you care about. Do thorough EDA. Create 10+ visualizations. Write a detailed report with 
            insights and recommendations. Focus on communication and storytelling. This is portfolio gold.
          </p>
          <div style={{ background: "#f0fdf4", padding: "10px", borderRadius: "6px", fontSize: "14px" }}>
            <strong>Skills:</strong> Data storytelling, visualization, statistical testing, business recommendations
          </div>
        </div>

        {/* Section 6 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          How to Learn Data Science Effectively
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          The way you learn matters as much as what you learn. Here is how to learn data science efficiently.
        </p>

        <div style={{
          background: "#e0f2fe",
          border: "1px solid #7dd3fc",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>Learn by Doing:</strong> Watch videos, but immediately apply what you learn on a dataset. Do not just 
            watch. Your brain does not learn coding from passive watching.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>Understand Concepts, Not Just Code:</strong> When you learn a new algorithm, understand why it works, 
            not just how to use it. Read papers, think about trade-offs.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>Build Projects Early:</strong> Do not wait until you know everything. Start building projects after 
            learning basics. Projects teach faster than tutorials.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            <strong>Teach Others:</strong> Write blog posts or explain concepts to friends. Teaching forces you to understand 
            deeply. You cannot teach something you do not truly understand.
          </p>
        </div>

        {/* Section 7 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          From Learning to Getting Hired
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Learning is half the battle. Getting hired is the other half. Here is the strategy.
        </p>

        <div style={{ marginBottom: "20px", background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Build a Strong Portfolio
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Your GitHub portfolio matters more than your resume. Upload your projects with clear documentation. Write 
            README files that explain what you did, how you did it, and what you learned. Recruiters look at your code.
          </p>
        </div>

        <div style={{ marginBottom: "20px", background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Get Good at SQL
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Most data science interviews have a SQL component. You will be asked to write queries. Practice on HackerRank 
            or LeetCode. This is table-stakes for any data job.
          </p>
        </div>

        <div style={{ marginBottom: "20px", background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Prepare for Take-Home Assignments
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Many companies give take-home data science problems. You get a dataset and questions. You have 2-3 days. 
            Practice this format. Your solution shows how you think and work.
          </p>
        </div>

        <div style={{ marginBottom: "20px", background: "#f0f9ff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "10px" }}>
            Network and Engage with the Community
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Join data science communities. Write about your learning on LinkedIn or Medium. Participate in Kaggle 
            competitions. Many jobs come through connections, not direct applications.
          </p>
        </div>

        {/* Section 8 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Common Mistakes Freshers Make
        </h2>

        <div style={{
          background: "#fef3c7",
          border: "1px solid #fcd34d",
          padding: "20px",
          borderRadius: "8px",
        }}>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>Mistake 1: Jumping to Deep Learning Too Early</strong><br/>
            Deep learning is advanced. Master basic ML first. 90% of real data science work uses traditional ML algorithms, 
            not neural networks.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>Mistake 2: Not Learning Statistics</strong><br/>
            Many freshers skip statistics and jump straight to algorithms. Your statistical understanding will make or break 
            your analysis quality. Do not skip it.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>Mistake 3: Spending More Time on Models Than Data</strong><br/>
            Data cleaning and exploration should be 70% of your effort. Model building is just 20%. Most freshers do this 
            backwards and build bad models on dirty data.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333", marginBottom: "12px" }}>
            <strong>Mistake 4: Using Fancy Algorithms on Small Datasets</strong><br/>
            Simple models on clean data beat complex models on dirty data. Do not use gradient boosting if you can solve the 
            problem with linear regression. Occam's razor applies here.
          </p>

          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            <strong>Mistake 5: Not Focusing on Communication</strong><br/>
            Most of data science is explaining findings to non-technical people. If you cannot communicate, your insights 
            do not matter. Practice visualization and storytelling.
          </p>
        </div>

        {/* Section 9 */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          FAQ About Data Science
        </h2>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Is data science hard to learn?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            It is challenging but not impossible. You need persistence, not special talent. The hardest part is not the 
            math or coding — it is getting comfortable with ambiguity and learning to ask the right questions.
          </p>
        </div>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Do I need a math background?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            You need to understand basic statistics and linear algebra. You do not need to be a mathematician. Most 
            libraries handle the complex math. Understanding concepts matters more than deriving formulas.
          </p>
        </div>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            How much do junior data scientists earn?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            In India, freshers earn 5-10 lakhs per year depending on the company and city. Within 2-3 years, this can grow 
            to 15-25 lakhs. In the US, starting salary is 80k-120k USD.
          </p>
        </div>

        <div style={{ marginBottom: "20px", borderBottom: "1px solid #e5e7eb", paddingBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Can I get a data science job as a fresher?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            Yes. Companies actively hire freshers for data analyst and junior data scientist roles. You need a portfolio 
            with 3-4 solid projects and good fundamental knowledge.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            Is a data science degree required?
          </h3>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#333" }}>
            No. A degree helps but is not required. If you have a portfolio with real projects and can solve problems in 
            interviews, companies will hire you. Self-taught data scientists are common.
          </p>
        </div>

        {/* Conclusion */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111", marginTop: "40px", marginBottom: "20px" }}>
          Your Data Science Journey Starts Now
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "20px" }}>
          Data science is a rewarding career path. Good data scientists are rare and in high demand. But the path is clear. 
          Follow this roadmap exactly. Learn foundations first. Build projects next. Apply to jobs last.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", marginBottom: "40px" }}>
          The next 6 months will be challenging. But if you stick with it, you will have a portfolio, strong fundamentals, 
          and the ability to land a good job. That is the promise of this roadmap. Now go execute it.
        </p>

        {/* Author */}
        <div style={{
          background: "#f3f4f6",
          padding: "24px",
          borderRadius: "12px",
          marginTop: "40px",
        }}>
          <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#111", marginBottom: "8px" }}>
            About the Author
          </h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
            Chethan M P is a data science career mentor and tech writer. He has helped freshers transition into data science 
            roles at companies like Amazon, Google, and startups through structured learning and mentoring.
          </p>
        </div>

        {/* Back Link */}
        <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #e5e7eb", textAlign: "center" }}>
          <Link href="/blog" style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#0070f3",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600",
            fontSize: "15px",
          }}>
            ← Back to Blog
          </Link>
        </div>

      </div>
    </div>
  );
}