export type IntelEntry = {
  id: string;
  date: string;
  title: string;
  category: string;
  readTime: string;
};

export type IntelArticle = IntelEntry & {
  content: string[];
  codeSnippet?: { lang: string; code: string };
};

export const intelEntries: IntelEntry[] = [
  {
    id: "algorithmic-matchmaking-thesis",
    date: "2025.03.14",
    title: "On Algorithmic Matchmaking: A Systems Approach to Human Connection",
    category: "ORCHARD",
    readTime: "8 MIN",
  },
  {
    id: "prediction-markets-2025",
    date: "2025.02.28",
    title: "Prediction Markets in 2025: Infrastructure, Not Speculation",
    category: "CRYPTO",
    readTime: "12 MIN",
  },
  {
    id: "autonomous-agents-enterprise",
    date: "2025.02.11",
    title: "Deploying Autonomous Agents in Enterprise Environments",
    category: "AI AGENTS",
    readTime: "6 MIN",
  },
  {
    id: "rendering-pipeline-optimization",
    date: "2025.01.30",
    title: "Real-Time Rendering Pipeline Optimization for WebGPU",
    category: "3D GRAPHICS",
    readTime: "10 MIN",
  },
  {
    id: "venture-studio-model",
    date: "2025.01.15",
    title: "Why the Venture Studio Model Outperforms Traditional VC",
    category: "THESIS",
    readTime: "7 MIN",
  },
  {
    id: "saas-vertical-integration",
    date: "2024.12.22",
    title: "Vertical Integration in SaaS: Lessons from Building Internal Tools",
    category: "SAAS",
    readTime: "9 MIN",
  },
  {
    id: "orchard-beta-postmortem",
    date: "2024.12.01",
    title: "Orchard Beta Launch: A Technical Postmortem",
    category: "ORCHARD",
    readTime: "14 MIN",
  },
  {
    id: "cryptographic-identity",
    date: "2024.11.18",
    title: "Cryptographic Identity Verification for Decentralized Platforms",
    category: "CRYPTO",
    readTime: "11 MIN",
  },
];

export const intelArticles: Record<string, IntelArticle> = {
  "algorithmic-matchmaking-thesis": {
    date: "2025.03.14",
    title: "On Algorithmic Matchmaking: A Systems Approach to Human Connection",
    category: "ORCHARD",
    readTime: "8 MIN",
    id: "algorithmic-matchmaking-thesis",
    content: [
      "The premise of modern dating applications is fundamentally flawed. They optimize for engagement metrics — swipes, messages sent, time-in-app — rather than the outcome users actually want: meaningful connection.",
      "At Orchard, we inverted the objective function. Instead of maximizing surface-level interactions, we built a matching engine that optimizes for compatibility depth. The system evaluates behavioral signals, communication patterns, and value alignment across 47 discrete dimensions.",
      "The result is counterintuitive. Users spend less time in the app. They receive fewer matches. But the matches they do receive convert to real-world meetings at 4.2x the industry average.",
      "This is not a dating app. It is a compatibility compiler.",
      "Our approach borrows heavily from recommendation systems in adjacent domains — specifically, the collaborative filtering techniques used in content discovery and the embedding-based similarity measures pioneered in NLP. The key insight was treating user preferences not as static attributes but as evolving latent representations.",
    ],
    codeSnippet: {
      lang: "python",
      code: `# Compatibility scoring engine (simplified)
def compute_compatibility(user_a, user_b):
    behavioral_sim = cosine_similarity(
        user_a.behavior_embedding,
        user_b.behavior_embedding
    )
    value_alignment = weighted_jaccard(
        user_a.value_vector,
        user_b.value_vector,
        weights=EMPIRICAL_WEIGHTS
    )
    return 0.6 * behavioral_sim + 0.4 * value_alignment`,
    },
  },
  "prediction-markets-2025": {
    date: "2025.02.28",
    title: "Prediction Markets in 2025: Infrastructure, Not Speculation",
    category: "CRYPTO",
    readTime: "12 MIN",
    id: "prediction-markets-2025",
    content: [
      "The narrative around prediction markets has shifted. What began as a novelty — betting on elections and sports — has matured into critical infrastructure for decision-making under uncertainty.",
      "We are building the settlement layer for prediction markets. Not the consumer interface. Not the liquidity pools. The verification and resolution infrastructure that every market needs but nobody wants to build.",
      "The technical challenge is oracle design. How do you resolve a market on 'Will GPT-5 pass the bar exam?' when the definition of 'pass' is contested? Our approach uses a multi-stage arbitration protocol with economic incentives for honest reporting.",
      "The market for truth has never been more valuable.",
    ],
  },
  "autonomous-agents-enterprise": {
    date: "2025.02.11",
    title: "Deploying Autonomous Agents in Enterprise Environments",
    category: "AI AGENTS",
    readTime: "6 MIN",
    id: "autonomous-agents-enterprise",
    content: [
      "Enterprise AI deployment is stuck in a loop. Companies build proof-of-concept demos that impress in boardrooms but fail in production. The gap between demo and deployment is not technical — it is organizational.",
      "Autonomous agents require a new operational framework. They need permission systems, audit trails, rollback capabilities, and human-in-the-loop escalation paths. These are not afterthoughts. They are the product.",
      "We have deployed agent systems across three enterprise clients. The agents handle invoice processing, vendor communication, and compliance checking. They operate within strict guardrails and report anomalies to human supervisors.",
      "The key metric is not accuracy. It is trust calibration — the system's ability to know what it does not know.",
    ],
    codeSnippet: {
      lang: "typescript",
      code: `// Agent decision boundary
interface AgentDecision {
  action: string;
  confidence: number;
  requires_human: boolean;
}

function evaluate(task: Task): AgentDecision {
  const confidence = model.predict(task);
  return {
    action: confidence > THRESHOLD
      ? executeAutonomously(task)
      : escalateToHuman(task),
    confidence,
    requires_human: confidence <= THRESHOLD,
  };
}`,
    },
  },
};
