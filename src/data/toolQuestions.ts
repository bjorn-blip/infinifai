import { Target, ShieldCheck, FileText, Users2, Compass, AlertTriangle, Search, Map, Zap, Activity, Rocket } from "lucide-react";

export const toolQuestions = [
    {
        phase: "DEFINE",
        id: "define",
        steps: [
            {
                id: "D",
                letter: "D",
                icon: Target,
                title: "Determine Objectives",
                question: "What is the primary business driver for implementing AI?",
                options: [
                    {
                        label: "Cost Reduction & Efficiency",
                        value: "efficiency",
                        score: { d: 5 },
                        recommendation: "Focus on automating repetitive tasks with RPA and basic scripting."
                    },
                    {
                        label: "Revenue Growth & New Markets",
                        value: "growth",
                        score: { d: 5 },
                        recommendation: "Explore AI for product innovation and personalized customer targeting."
                    },
                    {
                        label: "Customer Experience Improvement",
                        value: "cx",
                        score: { d: 5 },
                        recommendation: "Implement AI-driven chatbots and recommendation engines."
                    },
                    {
                        label: "Innovation & Competitive Advantage",
                        value: "innovation",
                        score: { d: 5 },
                        recommendation: "Invest in R&D and cutting-edge generative AI models."
                    }
                ]
            },
            {
                id: "E",
                letter: "E",
                icon: ShieldCheck,
                title: "Establish Success Criteria",
                question: "How will you measure the success of this initiative?",
                options: [
                    { label: "Quantitative ROI (e.g., hours saved, % growth)", value: "roi", score: { e: 5 }, recommendation: "Set up strict financial tracking and ROI dashboards." },
                    { label: "Qualitative Feedback (e.g., employee satisfaction)", value: "qualitative", score: { e: 4 }, recommendation: "Conduct regular surveys and feedback loops with staff." },
                    { label: "Technical Metrics (e.g., model accuracy)", value: "technical", score: { e: 3 }, recommendation: "Focus on MLLops and performance monitoring tools." },
                    { label: "We haven't defined KPIs yet", value: "none", score: { e: 1 }, recommendation: "Start by defining baseline metrics before scaling." }
                ]
            },
            {
                id: "F",
                letter: "F",
                icon: FileText,
                title: "Formulate Deliverables",
                question: "What is the tangible output you expect currently?",
                options: [
                    { label: "A fully autonomous AI agent", value: "agent", score: { f: 4 }, recommendation: "Develop a roadmap for agentic workflows." },
                    { label: "A decision support dashboard", value: "dashboard", score: { f: 5 }, recommendation: "Build BI dashboards integrated with predictive models." },
                    { label: "Process automation scripts", value: "automation", score: { f: 5 }, recommendation: "Identify high-volume, low-complexity tasks for automation." },
                    { label: "Strategic roadmap report", value: "strategy", score: { f: 5 }, recommendation: "Engage in strategy workshops to align AI with business goals." }
                ]
            },
            {
                id: "I",
                letter: "I",
                icon: Users2,
                title: "Identify Stakeholders",
                question: "Who is owning the AI budget and decision making?",
                options: [
                    { label: "C-Level / Board", value: "board", score: { i: 5 }, recommendation: "Focus on executive summaries and strategic impact." },
                    { label: "Department Head", value: "head", score: { i: 4 }, recommendation: "Ensure alignment with departmental KPIs." },
                    { label: "IT / Tech Team", value: "it", score: { i: 4 }, recommendation: "Ensure technical feasibility and infrastructure readiness." },
                    { label: "Distributed across teams", value: "distributed", score: { i: 2 }, recommendation: "Centralize governance to avoid fragmented efforts." }
                ]
            },
            {
                id: "N",
                letter: "N",
                icon: Compass,
                title: "Navigate Constraints",
                question: "What is your biggest constraint right now?",
                options: [
                    { label: "Budget / Funding", value: "budget", score: { n: 3 }, recommendation: "Start with low-cost, high-impact pilot projects." },
                    { label: "Data Availability / Quality", value: "data", score: { n: 1 }, recommendation: "Prioritize data cleaning and infrastructure projects." },
                    { label: "Internal Skills / Talent", value: "skills", score: { n: 2 }, recommendation: "Invest in training or partner with external experts." },
                    { label: "Legacy Systems", value: "legacy", score: { n: 2 }, recommendation: "Look for potential API wrappers or modernization strategies." }
                ]
            },
            {
                id: "E_risk",
                letter: "E",
                icon: AlertTriangle,
                title: "Evaluate Risks",
                question: "How would you rate your organization's risk tolerance for AI?",
                options: [
                    { label: "High - We innovate fast, break things", value: "high", score: { er: 5 }, recommendation: "Aggressively pursue experimental AI applications." },
                    { label: "Moderate - Fast follower", value: "moderate", score: { er: 4 }, recommendation: "Adopt proven technologies shortly after market validation." },
                    { label: "Low - Security & Compliance first", value: "low", score: { er: 3 }, recommendation: "Focus on private, secure AI deployments and governance." },
                    { label: "Very Low - Skeptical", value: "very_low", score: { er: 1 }, recommendation: "Start with non-critical, internal-facing pilot projects." }
                ]
            }
        ]
    },
    {
        phase: "FRAME",
        id: "frame",
        steps: [
            {
                id: "F_frame",
                letter: "F",
                icon: Search,
                title: "Feasibility Study",
                question: "Is there any idea on a potential solution yet?",
                options: [
                    { label: "Yes, Proof of Concept completed", value: "poc", score: { ff: 5 }, recommendation: "Move from PoC to MVP." },
                    { label: "Theoretical validation only", value: "theory", score: { ff: 3 }, recommendation: "Launch a rapid PoC to validate assumptions." },
                    { label: "No, starting from scratch", value: "scratch", score: { ff: 1 }, recommendation: "Conduct a feasibility study first." },
                    { label: "Looking for advice on this", value: "advice", score: { ff: 2 }, recommendation: "Seek expert consultation for validation." }
                ]
            },
            {
                id: "R",
                letter: "R",
                icon: Map,
                title: "Roadmap Creation",
                question: "What is your desired timeline for implementation?",
                options: [
                    { label: "Yesterday (ASAP)", value: "asap", score: { r: 2 }, recommendation: "Adopt ready-made solutions for speed." },
                    { label: "1-3 Months (Sprint)", value: "sprint", score: { r: 5 }, recommendation: "Plan for an agile sprint delivery." },
                    { label: "3-6 Months (Project)", value: "project", score: { r: 4 }, recommendation: "Structure as a formal project with milestones." },
                    { label: "6-12 Months (Transformation)", value: "transformation", score: { r: 3 }, recommendation: "Design a phased transformation program." }
                ]
            },
            {
                id: "A",
                letter: "A",
                icon: Zap,
                title: "AI Implementation",
                question: "Do you prefer a Build or Buy strategy?",
                options: [
                    { label: "Buy (Off-the-shelf SaaS)", value: "buy", score: { a: 4 }, recommendation: "Evaluate top market vendors." },
                    { label: "Build (Custom solution)", value: "build", score: { a: 4 }, recommendation: "Setup a dedicated development team." },
                    { label: "Hybrid (API integration)", value: "hybrid", score: { a: 5 }, recommendation: "Integrate powerful APIs into custom workflows." },
                    { label: "Low-code / No-code", value: "lowcode", score: { a: 3 }, recommendation: "Empower business users with low-code tools." }
                ]
            },
            {
                id: "M",
                letter: "M",
                icon: Activity,
                title: "Measurement",
                question: "Do you have existing data pipelines to measure performance?",
                options: [
                    { label: "Yes, modern data warehouse", value: "modern", score: { m: 5 }, recommendation: "Leverage existing data for real-time AI insights." },
                    { label: "Yes, but fragmented", value: "fragmented", score: { m: 3 }, recommendation: "Consolidate data sources for better model training." },
                    { label: "Manual reporting / Excel", value: "manual", score: { m: 2 }, recommendation: "Automate data collection pipelines." },
                    { label: "No data infrastructure", value: "none", score: { m: 1 }, recommendation: "Build basic data infrastructure immediately." }
                ]
            },
            {
                id: "E_scale",
                letter: "E",
                icon: Rocket,
                title: "Enhancement",
                question: "What is the long-term vision?",
                options: [
                    { label: "Scale to other departments", value: "scale", score: { es: 5 }, recommendation: "Create a Center of Excellence for scaling." },
                    { label: "Deepen capability in one area", value: "depth", score: { es: 4 }, recommendation: "Specialize and refine the model further." },
                    { label: "Maintain and optimize", value: "maintain", score: { es: 3 }, recommendation: "Focus on operational stability and cost optimization." },
                    { label: "Sell / Exit strategy", value: "exit", score: { es: 2 }, recommendation: "Maximize valuation through IP assets." }
                ]
            }
        ]
    }
];
