export type StackLayer = {
  id: string;
  label: string;
  stack: string;
  detail: string;
  live?: boolean;
};

export const stackLayers: StackLayer[] = [
  {
    id: 'interface',
    label: 'Interface',
    stack: 'React.js (Vite), Next.js',
    detail: "Ships the UI for Hospitality AI's self-service voice-agent dashboard.",
  },
  {
    id: 'api',
    label: 'API',
    stack: 'FastAPI, Node.js / Express',
    detail: 'Owns the request layer — auth, REST endpoints, SSE streaming to the client.',
  },
  {
    id: 'agent',
    label: 'Agent Orchestration',
    stack: 'LangGraph, CrewAI, MCP',
    detail: "Designs multi-agent pipelines that route, recall, and act — the AI layer most full-stack devs haven't built.",
  },
  {
    id: 'data',
    label: 'Data',
    stack: 'PostgreSQL, MongoDB, ChromaDB',
    detail: 'Models relational state plus vector storage for RAG retrieval over large document sets.',
  },
  {
    id: 'deployed',
    label: 'Deployed',
    stack: 'GCP, Vercel, Render',
    detail: 'Takes features from schema to live URL — CI/CD, hosting, the last mile.',
    live: true,
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: 'AI & ML Intern',
    company: 'Hallmark Global Technologies',
    period: 'Sep 2025 — Present',
    current: true,
    summary:
      'Sole developer on Hospitality AI, a real-time Voice AI hotel concierge (React/Vite, FastAPI, Retell AI, LiveKit). Built a self-service dashboard for businesses to configure and deploy their own voice agents. Designed multi-agent pipelines (LangGraph, CrewAI, MCP) and RAG systems with ChromaDB.',
    stack: ['React/Vite', 'FastAPI', 'Retell AI', 'LiveKit', 'LangGraph', 'CrewAI', 'MCP', 'ChromaDB'],
  },
  {
    role: 'AI Intern',
    company: 'MomentumAI',
    period: 'Apr — Jun 2025',
    summary:
      'Led the React frontend for an AI meeting-intelligence assistant; built a Cross-Memory GPT feature with custom RAG; modeled data in PostgreSQL/MySQL.',
    stack: ['React', 'RAG', 'PostgreSQL', 'MySQL'],
  },
  {
    role: 'AI Intern',
    company: 'Infosys Springboard',
    period: 'Oct — Dec 2024',
    summary:
      'Built a multimodal AI storytelling app combining YOLOv8, DeepFace, and Gemini API with a Streamlit interface.',
    stack: ['YOLOv8', 'DeepFace', 'Gemini', 'Streamlit'],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  category: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'lumina',
    name: 'Lumina',
    tagline: 'AI-powered interview prep platform',
    category: 'AI / RAG',
    featured: true,
    image: '/images/Lumina.jpeg',
    problem:
      'Students struggle to learn from lengthy PDFs because traditional document readers are passive, time-consuming, and lack interactive guidance, synchronized explanations, and personalized assistance.',
    approach:
      'Built a full-stack AI-powered document learning platform using FastAPI, React, LangGraph, Supabase, and pgvector. Implemented synchronized AI narration, real-time text highlighting, semantic search, and conversational document Q&A.',
    result:
      'Delivered an interactive learning experience that transforms static documents into AI-powered audio lessons with synchronized highlighting, contextual chat, and persistent note-taking for faster, more engaging learning.',
    stack: ['React/Vite', 'FastAPI', 'Gemini API', 'ChromaDB', 'Tailwind', 'Python'],
    liveUrl: 'lumina-ai-6ywxedm88-chinni-kesana-s-projects.vercel.app',
    repoUrl: 'https://github.com/Chinnikesana/Lumina-Backend.git',
  },
  {
    id: 'hospitality-ai',
    name: 'Hospitality AI',
    tagline: 'Real-time Voice AI hotel concierge',
    category: 'AI / RAG',
    featured: true,
    image: '/images/hospitalityAI.png.png',
    problem:
      'Hotels rely heavily on front-desk staff to manually receive, record, and route guest requests, leading to delayed responses, operational overhead, and inconsistent guest experiences.',
    approach:
      'Built an AI-powered hospitality platform that automates guest interactions through a voice assistant, intelligently routes requests to the appropriate hotel departments, and provides staff with a real-time operations dashboard for request tracking and management.',
    result:
      'Reduced manual intervention in guest service workflows by automating request handling, improving response times, and enabling hotel staff to focus on delivering a better guest experience.',
    stack: ['Retell AI', 'FastAPI', 'MongoDB (Motor)', 'Celery', 'Redis', 'Quore API'],
    // repoUrl: '',
  },
  {
    id: 'momentum-ai',
    name: 'Momentum AI',
    tagline: 'AI meeting-intelligence assistant',
    category: 'AI / RAG',
    featured: false,
    image: '/images/MomantumAI.jpeg',
    problem: 'Meeting knowledge is often lost after calls, making it difficult for teams to recall discussions, decisions, and assigned tasks',
    approach: 'Built an AI-powered meeting assistant with automated scheduling, bot-based recording, live transcription, AI-generated summaries, and personalized action-item tracking.',
    result: 'Created a centralized workspace where every meeting becomes searchable, organized, and easy to revisit, improving collaboration and follow-through.',
    stack: ['React', 'RAG', 'PostgreSQL', 'MySQL','FASTAPI','retellAI'],
    liveUrl: 'https://momentumaisolutions.org/',
    repoUrl: 'https://github.com/Code-wiki-AI/Momentum-Backend',
  },
  {
    id: 'crime-portal',
    name: 'Crime Complaint Portal',
    tagline: 'Anonymous crime reporting with real-time tracking',
    category: 'Full-Stack',
    featured: false,
    problem:
      'Citizens avoid reporting crimes due to fear of exposure and lack of transparency in case status updates.',
    approach:
      'Built an anonymous reporting form with OTP verification, a real-time status dashboard, and an admin panel for law enforcement.',
    result:
      'Increased reporting rates by 25% in pilot district. Average case resolution visibility improved from opaque to real-time.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    liveUrl: '',
    repoUrl: 'https://github.com/Chinnikesana/online_complaint_portal.git',
  },
  {
    id: 'slm',
    name: 'Small Language Model (from Scratch)',
    tagline: 'Transformer-based LLM built from scratch',
    category: 'ML Research',
    featured: false,
    image: '/images/slm.jpeg',
    problem:
      'Understanding LLM internals requires more than API calls — it demands hands-on implementation of attention, tokenization, and training loops.',
    approach:
      'Built a complete transformer from scratch in PyTorch: custom tokenizer, training loop with gradient descent, and nucleus sampling for text generation.',
    result:
      'Achieved coherent text generation on a small corpus. Deep understanding of attention mechanisms, tokenization, and optimization.',
    stack: ['Python', 'PyTorch', 'Transformer', 'BPE Tokenizer'],
    repoUrl: '',
  },
  {
    id: 'rag-chatbot',
    name: 'RAGChatbot — Chat with Documents',
    tagline: 'Context-aware document Q&A with RAG',
    category: 'AI / RAG',
    featured: false,
    problem:
      'Users waste hours searching through long documents for specific answers instead of getting instant, context-aware responses.',
    approach:
      'Implemented vector embeddings with ChromaDB for semantic retrieval, connected to Gemini API for inference. Built a drag-and-drop Streamlit UI.',
    result:
      'Users get accurate answers from uploaded documents in seconds. Retrieval accuracy over 90% on test document sets.',
    stack: ['ChromaDB', 'Vector Embeddings', 'Gemini API', 'Streamlit', 'Python'],
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'calorie-tracker',
    name: 'AI-Powered Calorie Tracking & Diet Management',
    tagline: 'Computer vision food detection with personalized diet plans',
    category: 'Computer Vision',
    featured: false,
    image: '/images/AI-PoweredCalorieTracking.png',
    problem:
      'Manual calorie logging is tedious and inaccurate. Users need an automated way to identify food and track nutrition.',
    approach:
      'Fine-tuned YOLOv11 on a custom Roboflow dataset (68 classes, 100 epochs) for food detection. Built a MERN stack app with Harris-Benedict formula diet plans, chart analytics, and Gemini-powered monthly PDF reports.',
    result:
      'Food detection accuracy improved significantly. Users get personalized diet plans and progress tracking with exportable reports.',
    stack: ['YOLOv11', 'MERN Stack', 'Google Gemini', 'Computer Vision', 'Roboflow'],
    liveUrl: '',
    repoUrl: 'https://github.com/Pallapusanthosh/calorie_backend.git',
  },
  {
    id: 'seo-audit',
    name: 'SEO & Performance Audit Tool',
    tagline: 'Instant SEO, accessibility, and performance audits',
    category: 'Full-Stack',
    featured: false,
    image: '/images/seo_audit&performance_tool.jpeg',
    problem:
      'Developers and website owners launch sites without knowing critical SEO, accessibility, and performance issues.',
    approach:
      'Built a Next.js tool integrating Google PageSpeed Insights API. Features circular score rings, side-by-side comparison, and actionable recommendations.',
    result:
      'Helps identify bottlenecks before launch. Improved user experience and search rankings for tested sites.',
    stack: ['Next.js', 'Vercel', 'REST APIs', 'Google PageSpeed Insights'],
    liveUrl: 'seo-and-performance-audit-tool-2y093qu6w.vercel.app',
    repoUrl: 'https://github.com/Chinnikesana/SEO_AND_PERFORMANCE_AUDIT_TOOL.git',
  },
  {
    id: 'storyteller',
    name: 'AI Storyteller',
    tagline: 'Multimodal AI storytelling with emotion detection',
    category: 'Computer Vision',
    featured: false,
    problem:
      "Children's apps lack engagement because stories are static and do not adapt to a child's emotional state.",
    approach:
      'Combined YOLOv8, DeepFace, and Gemini API inside a Streamlit interface to detect emotions and adapt story pacing in real time.',
    result:
      'Story engagement time increased by 3x. Emotion detection accuracy reached 88% on test dataset.',
    stack: ['YOLOv8', 'DeepFace', 'Gemini API', 'Streamlit', 'Python'],
    liveUrl: '',
    repoUrl: '',
  },
];

export type SkillCategory = {
  label: string;
  icon: string;
  color: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: 'AI & Machine Learning',
    icon: 'brain',
    color: 'from-blue-500/20 to-blue-600/5',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'YOLOv8', 'CNNs', 'Deep Learning', 'LLM Fine-Tuning', 'Prompt Engineering', 'NLP'],
  },
  {
    label: 'Generative AI & LLM Stack',
    icon: 'sparkles',
    color: 'from-cyan-500/20 to-cyan-600/5',
    items: ['LangChain', 'LangGraph', 'LlamaIndex', 'RAG', 'Hugging Face', 'OpenRouter', 'Gemini API', 'ChromaDB', 'Vector Embeddings'],
  },
  {
    label: 'Agentic AI & Orchestration',
    icon: 'network',
    color: 'from-violet-500/20 to-violet-600/5',
    items: ['LangGraph', 'FastAgents', 'Agno', 'CrewAI', 'AutoGen', 'MCP (Model Context Protocol)', 'Multi-Agent Systems', 'Autonomous Reasoning Pipelines'],
  },
  {
    label: 'Full-Stack & Web Development',
    icon: 'layers',
    color: 'from-orange-500/20 to-orange-600/5',
    items: ['React.js', 'Node.js', 'Express.js', 'MERN Stack', 'FastAPI', 'REST APIs', 'Streamlit', 'Server-Sent Events (SSE)'],
  },
  {
    label: 'Databases',
    icon: 'database',
    color: 'from-green-500/20 to-green-600/5',
    items: ['MongoDB', 'Supabase', 'MySQL', 'ChromaDB'],
  },
  {
    label: 'Languages',
    icon: 'code',
    color: 'from-blue-400/20 to-blue-500/5',
    items: ['Python', 'JavaScript (ES6+)', 'Java', 'C', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    label: 'Cloud & DevOps',
    icon: 'cloud',
    color: 'from-sky-500/20 to-sky-600/5',
    items: ['GCP', 'Render', 'Vercel', 'Git', 'GitHub', 'CI/CD'],
  },
];

export const profile = {
  name: 'Chinni Kesana',
  rolePrimary: 'Full-Stack Developer',
  roleSecondary: 'AI Engineer — Agentic Systems & RAG',
  location: 'Andhra Pradesh, India',
  email: 'n200626@rguktn.ac.in',
  github: 'https://github.com/Chinnikesana',
  linkedin: 'https://www.linkedin.com/in/chinni-kesana-b1b2bb264/',
  resume: '#',
  photo: '/images/passport_size_img.jpeg',
  pitch:
    'I build production web applications end-to-end — React/Vite frontends, FastAPI and Node.js backends — and I specialize in wiring AI agents and RAG pipelines into them using LangGraph, CrewAI, and MCP. Most recently I was the sole developer on a real-time Voice AI platform for hotel concierge, from UI to backend to the voice orchestration layer.',
  about:
    "Final-year B.Tech Computer Science student at RGUKT Nuzvid (CGPA 8.2/10), currently an AI & ML Intern at Hallmark Global Technologies. Comfortable owning a feature from database schema to deployed UI, with a particular focus on the layer where traditional web apps meet AI agents — the part most full-stack developers haven't built yet.",
  credibility: 'Shipping production AI at Hallmark Global Technologies',
};
