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
    id: "rag-mcp-data-limits-2026",
    date: "2026.02",
    title: "RAG, MCP, and the Cost of \"Working Around\" Data Limits",
    category: "AI",
    readTime: "8 MIN",
  },
  {
    id: "proprietary-data-bottleneck-2026",
    date: "2026.01",
    title: "The Hidden Bottleneck: Proprietary Data",
    category: "AI",
    readTime: "6 MIN",
  },
  {
    id: "llm-limits-2025",
    date: "2025.12",
    title: "Are Large Language Models Hitting Their Limits?",
    category: "AI",
    readTime: "7 MIN",
  },
];

export const intelArticles: Record<string, IntelArticle> = {
  "llm-limits-2025": {
    date: "2025.12",
    title: "Are Large Language Models Hitting Their Limits?",
    category: "AI",
    readTime: "7 MIN",
    id: "llm-limits-2025",
    content: [
      "Over the past three years, large language models (LLMs) have improved at a breathtaking pace. Each new generation—GPT-4, Claude 3, Gemini—has pushed benchmarks higher and expanded what AI systems can do. But recent data from 2025–2026 suggests something subtle yet important: progress is no longer exponential in the way it once was.",
      "The Illusion of Continuous Breakthroughs — At first glance, frontier models are still improving. For example, Claude Opus 4 significantly outperforms GPT-4.1 on several benchmarks, including software engineering and graduate-level reasoning tasks. However, when we zoom out, a different pattern emerges: top models are converging.",
      "Across major leaderboards, models from OpenAI, Anthropic, and Google now cluster within a narrow performance band. Improvements still happen—but they are increasingly incremental rather than transformative.",
      "Benchmarks vs Reality — More importantly, benchmark gains are not translating cleanly into real-world capability. In a recent evaluation of AI systems performing actual job tasks, even the best model outperformed human experts less than half the time.",
      "This gap highlights a growing issue: benchmarks are saturating faster than real-world usefulness.",
      "Scaling Is Breaking in Unexpected Ways — One of the clearest signs of limits comes from long-context reasoning. While modern models boast context windows of up to one million tokens, their performance deteriorates sharply as context grows. In some studies, success rates fall below 10% in realistic long-horizon tasks.",
      "This suggests that simply feeding models more information does not make them more intelligent. Instead, it exposes weaknesses in planning, memory, and coherence.",
      "The Law of Diminishing Returns — Theoretically, this slowdown is not surprising. Scaling laws predict that performance gains shrink as models grow larger, especially when constrained by finite high-quality data. Recent research confirms that we are entering this regime of diminishing returns, where additional compute yields smaller improvements.",
      "Capabilities That Aren't Improving — Even more striking, some abilities appear to have plateaued entirely. Studies of LLM creativity show no measurable improvement over the past two years, with only a tiny fraction of outputs matching top human performance.",
      "At the same time, fundamental issues like overconfidence remain unresolved. Even the most advanced models systematically misjudge their own accuracy.",
      "The End of Scaling — or a Transition? — Does this mean LLM progress is over? Not quite.",
      "What we are witnessing is not a hard limit, but a paradigm shift. The frontier is moving away from brute-force scaling toward new approaches: reasoning at inference time, tool use and agent systems, retrieval and memory augmentation, higher-quality training data.",
      "In other words, the question is no longer \"How big can we make the model?\" but \"How do we make it think better?\"",
      "Conclusion — LLMs are not hitting a wall—they are hitting the limits of a particular strategy. The era of easy gains from scaling is ending, and a more complex phase of AI development is beginning.",
      "The next breakthroughs will likely not come from bigger models alone, but from fundamentally new ideas about how machines reason, learn, and interact with the world.",
    ],
  },
  "proprietary-data-bottleneck-2026": {
    date: "2026.01",
    title: "The Hidden Bottleneck: Proprietary Data",
    category: "AI",
    readTime: "6 MIN",
    id: "proprietary-data-bottleneck-2026",
    content: [
      "The Hidden Bottleneck: Proprietary Data — If scaling models is no longer enough, why aren't we seeing breakthroughs across more domains—like medicine, law, finance, or scientific discovery? One increasingly convincing answer is data access.",
      "The most valuable data in the world is not on the open internet. It sits behind institutional walls: hospital records and clinical data; internal company knowledge bases; legal case strategy and negotiations; financial transaction and market microstructure data.",
      "These datasets are not just large—they are structured, high-signal, and grounded in real-world outcomes. And crucially, they are proprietary.",
      "The End of \"Free Data\" — Early LLM progress was fueled by scraping the open web: books, articles, code, forums. This created a massive, diverse training corpus at relatively low cost. But that phase is ending.",
      "High-quality public data is: already heavily utilized; increasingly duplicated across datasets; often noisy or low signal. As a result, simply adding more internet-scale data produces diminishing returns.",
      "Why Proprietary Data Matters — In many domains, performance is not limited by model intelligence, but by domain-specific grounding.",
      "A model trained on public text can explain medical concepts but cannot reliably make clinical decisions. It can summarize legal principles but not navigate real case strategy.",
      "This gap exists because the critical knowledge is embedded in private data and workflows, not in public text.",
      "Structural Barriers to Access — Unlike compute, proprietary data does not scale easily: privacy regulations (HIPAA, GDPR) restrict sharing; companies treat data as a competitive advantage; data is fragmented and poorly standardized; labeling requires expensive human expertise.",
      "This creates a paradox: The domains where AI could be most transformative are precisely the ones where data is hardest to access.",
      "The New Frontier: Data, Not Models — This helps explain why progress appears uneven. We see rapid advances in coding (open-source code) and general reasoning (web-scale text), but slower progress in healthcare, law, and scientific discovery.",
      "The limiting factor is no longer just model capability—it is data availability and integration.",
      "Implication — If this view is correct, the next breakthroughs in AI will not come from scaling models alone, but from: partnerships with institutions; secure data-sharing frameworks; synthetic data generation; and systems that learn from interaction, not just static corpora.",
      "In this sense, AI is not just a technical problem anymore—it is an economic and institutional one.",
    ],
  },
  "rag-mcp-data-limits-2026": {
    date: "2026.02",
    title: "RAG, MCP, and the Cost of \"Working Around\" Data Limits",
    category: "AI",
    readTime: "8 MIN",
    id: "rag-mcp-data-limits-2026",
    content: [
      "If proprietary data is the bottleneck, how is the industry responding?",
      "The dominant answer today is not to train models directly on private data, but to route that data into models at inference time. This is the idea behind approaches like Retrieval-Augmented Generation (RAG) and emerging patterns such as Model Context Protocols (MCP), where systems dynamically inject relevant context into prompts.",
      "In principle, this is an elegant workaround: keep sensitive data private; avoid costly retraining; allow models to access up-to-date, domain-specific information. But in practice, this approach comes with a growing cost—literally.",
      "The Token Explosion Problem — RAG and MCP systems rely on feeding large amounts of context into the model. Instead of the model \"knowing\" the information, it must re-read it every time.",
      "This creates a fundamental inefficiency: every query requires retrieving documents; those documents are serialized into tokens; the model processes them repeatedly, from scratch. As context sizes grow (sometimes tens or hundreds of thousands of tokens), costs scale accordingly. The result is what could be called a token tax on intelligence.",
      "Why This Doesn't Scale Cleanly — This approach works well for: small knowledge bases; narrow use cases; low-frequency queries. But it struggles when: data is large and deeply interconnected; reasoning requires multi-step context accumulation; latency and cost constraints matter.",
      "In these cases, RAG systems become: expensive (due to repeated token usage); slow (due to retrieval + long-context inference); brittle (due to context selection errors).",
      "A Deeper Limitation — More fundamentally, RAG does not truly solve the data problem—it sidesteps it. Instead of integrating knowledge into the model's weights, it relies on \"just-in-time reading\" rather than \"learned understanding.\"",
      "This leads to weaker: abstraction; generalization; long-horizon reasoning. Because the model is constantly juggling external context instead of internalizing patterns.",
      "The Emerging Tension — We are now seeing a tension at the heart of modern AI systems: Training on proprietary data is powerful—but restricted. Injecting proprietary data at inference is flexible—but inefficient.",
      "RAG and MCP sit in the middle of this trade-off. They are currently the most practical solution, but they expose a deeper issue: The architecture of today's LLMs may not be well-suited for a world where the most valuable knowledge cannot be freely absorbed during training.",
      "What Comes Next? — If this bottleneck persists, we should expect new directions such as: more efficient context compression; hybrid systems with persistent memory; on-device or on-prem fine-tuning; architectures that separate reasoning from storage.",
      "Until then, the industry will continue paying the price—in tokens, latency, and complexity—for accessing the data it cannot fully learn from.",
    ],
  },
};
