// All site content lives here. Update this file to keep the site in sync with the CV.

export const profile = {
  name: 'Sachin Deb',
  title: 'Ph.D. Student in Computer Science',
  affiliation: 'Arizona State University',
  lab: 'Ubiquitous & Intelligent Sensing (UIS) Lab',
  advisor: 'Prof. Asif Salekin',
  location: 'Tempe, AZ',
  email: 'sachinde@asu.edu',
  cv: `${process.env.PUBLIC_URL}/Sachin_Deb_CV.pdf`,
  links: {
    scholar: 'https://scholar.google.com/citations?user=0XV94KgAAAAJ&hl=en',
    github: 'https://github.com/Sachin-deb',
    linkedin: 'https://linkedin.com/in/sachin-deb-7810921b6',
  },
  tagline:
    'Label-efficient, multimodal foundation models for health — that keep working on new people, new cohorts, and under-represented subgroups.',
  interests: [
    'Medical foundation models',
    'Multimodal learning',
    'Wearable & contactless sensing',
    'Zero-shot learning',
    'ML fairness',
  ],
};

export const news = [
  { date: 'Sep 2026', text: <><em>Reducing the Adaptation Gap Through Reachable Fisher Geometry</em> is on <a href="https://arxiv.org/abs/2609.36329">arXiv</a> and under review at <strong>ICLR 2027</strong>.</> },
  { date: 'Aug 2026', text: <><em>Representation Is Not Enough</em> (FABLE-Therm), contactless stress and craving sensing in opioid use disorder, is on <a href="https://arxiv.org/abs/2608.16087">arXiv</a>.</> },
  { date: '2025', text: <>Joined <strong>Arizona State University</strong> as a Ph.D. student and Graduate Research Associate in the UIS Lab.</> },
  { date: '2025', text: <>Served as <strong>Chief Judge</strong> of the Bangladesh Olympiad in Informatics, National Round.</> },
];

export const themes = [
  {
    title: 'Adapting foundation models with scarce labels',
    text: 'Getting pretrained vision, signal, and clinical-language models to work on medical tasks where only clip-level labels or small cohorts exist: weak supervision, multiple-instance learning, and parameter-efficient fine-tuning.',
  },
  {
    title: 'Physiological sensing beyond the clinic',
    text: 'Reading stress, craving, and substance use from thermal video and wearable electrodermal activity, so health monitoring can happen without contact or dense annotation.',
  },
  {
    title: 'Generalization you can trust',
    text: 'Evaluating on held-out people and held-out datasets, explaining where performance is lost across cohorts, and proving when fine-tuning helps some subgroups more than others — then fixing it.',
  },
];

export const research = [
  {
    id: 'fable-therm',
    title: 'FABLE-Therm: Contactless Stress and Craving Sensing from Thermal Video',
    status: 'Under review',
    area: 'Contactless sensing · Multiple-instance learning · Foundation-model fusion',
    summary:
      'Interpretable, label-efficient detection of stress and drug craving from a thermal camera in a clinical opioid-use-disorder population. From only a clip-level label, the model learns which body regions and which moments carry the signal — with no wearable-sensor supervision.',
    metrics: [
      { value: '0.938', label: 'AUROC on held-out participants', note: 'vs. 0.744 per-encoder baseline' },
      { value: '+0.20', label: 'AUROC from embedding-level fusion', note: 'over feature/prediction-level fusion' },
      { value: '0.752', label: 'AUROC on self-reported craving' },
    ],
    points: [
      'Gated MIL architecture (temporal summaries, spatial self-attention) that keeps evidence separated by body region, time, and encoder, so every prediction traces back to its source.',
      'Fused several frozen thermal and vision foundation models through one shared aggregator with fewer trainable parameters, and showed theoretically why separate branches learn incompatible coordinate systems.',
      'Cohort-transfer analysis decomposing the drop on a held-out OUD cohort into representation mismatch (0.158 AUROC recoverable with in-cohort data) and person-to-person variability (0.169 AUROC remaining) — what more data can and cannot fix.',
      'Validated on the public StressNet dataset.',
    ],
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2608.16087' }],
  },
  {
    id: 'reachable-fisher',
    title: 'Reachable Fisher Geometry for Fairer Parameter-Efficient Fine-Tuning',
    status: 'ICLR 2027 submission',
    area: 'ML theory · LoRA / DoRA · Subgroup fairness',
    summary:
      'Why fine-tuning large pretrained models helps some subgroups more than others, and a training objective that narrows the gap. Introduces the reachable Fisher: curvature measured only along directions a LoRA or DoRA adapter can actually change.',
    metrics: [
      { value: '30 / 30', label: 'settings where the subgroup gap narrowed', note: 'task × encoder × adapter' },
      { value: '17.2%', label: 'median relative reduction', note: 'best-to-worst subgroup gap' },
      { value: '306', label: 'models trained and evaluated', note: '1,218 subgroup evaluations' },
    ],
    points: [
      'Characterized the LoRA Jacobian kernel: guarantees for factorized adapters must be stated on the subspace that truly changes the model, not in redundant adapter coordinates (extended to DoRA).',
      'Proved when reachable-Fisher differences predict whether a subgroup gap grows or shrinks, showed the Fisher trace alone cannot guarantee this, and derived a matrix-free identity that makes auditing large models practical.',
      'Showed that the restricted operator norm of the reachable Fisher governs the worst-case (quadratic) change in subgroup gaps during fine-tuning.',
      'Higher reachable-Fisher trace identified the harder subgroup in 75.7% of evaluations across image and tabular tasks.',
    ],
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2609.36329' }],
  },
  {
    id: 'mayo-ct',
    title: '3D CT Foundation Models for Bladder Cancer Staging',
    status: 'Ongoing · with Mayo Clinic',
    area: 'Medical imaging · Vision–language · Report generation',
    summary:
      'Multimodal learning from volumetric CT and radiology reports to separate muscle-invasive (≥T2) from non-muscle-invasive bladder cancer with limited labels, using pathology-confirmed stage as ground truth.',
    points: [
      'Adapting and combining pretrained 3D CT foundation models (FMCIB, SwinUNETR, SegResNetDS) on Mayo Clinic CT urography studies.',
      'Pairing each CT volume with its radiology report through a medical text encoder to learn from images and text jointly.',
      'One pipeline that localizes the bladder, segments the tumor, predicts stage, and drafts a structured radiology-style report — designed for small multi-planar cohorts and to scale with more data.',
    ],
  },
  {
    id: 'zero-shot-wearables',
    title: 'Clinical-Language and Wearable-Signal Alignment for Zero-Shot Detection',
    status: 'Ongoing',
    area: 'Wearables · Cross-modal alignment · Zero-shot learning',
    summary:
      'Reading physiological signals through a clinical language model, for conditions where labeled data is rare.',
    points: [
      'Aligning GatorTron (clinical LM) with the NormWear wearable foundation-model encoder so short electrodermal activity windows are classified zero-shot for cannabis use, alcohol use, and craving.',
      'Domain-calibrated adaptation: a three-stage pipeline that specializes the generalist model to one physiological domain (craving, stress, epilepsy, cardiovascular) while preserving pretrained knowledge.',
      'Leave-one-dataset-out zero-shot evaluation across several wearable datasets against the frozen generalist.',
    ],
  },
  {
    id: 'moonlihood',
    title: 'MOONLiHood: Federated Learning on Non-IID Client Data',
    status: 'Undergraduate thesis · BUET',
    area: 'Federated learning · Privacy-preserving ML',
    summary:
      'Deciding how much each client should contribute when local data distributions differ, by combining model-contrastive learning, likelihood-based client weighting, and simulated annealing. Advised by Dr. Muhammad Ali Nayeem.',
    metrics: [
      { value: '~71%', label: 'global test accuracy, CIFAR-10/100', note: 'vs. ~61–65% for FedAvg' },
    ],
    links: [
      { label: 'Code', url: 'https://github.com/Sachin-deb/Federated-Learning-MOONLiHood' },
      { label: 'Extended abstract', url: 'https://drive.google.com/file/d/1XQWrXt-5JjRTEPkYbbJ4a5iIqCHRif4E/view?usp=sharing' },
    ],
  },
];

export const publications = [
  {
    title: 'Reducing the Adaptation Gap Through Reachable Fisher Geometry',
    authors: ['Wasif Jalal', 'Sachin Deb', 'Asif Salekin'],
    venue: 'arXiv:2609.36329, 2026 · Under review at ICLR 2027',
    project: 'reachable-fisher',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2609.36329' }, { label: 'PDF', url: 'https://arxiv.org/pdf/2609.36329' }],
  },
  {
    title:
      'Representation Is Not Enough: Body-Localized Thermal Evidence for Contactless Stress and Craving Sensing in Opioid Use Disorder',
    authors: ['Sachin Deb', 'Harshit Sharma', 'Asif Salekin'],
    venue: 'arXiv:2608.16087, 2026 · Under review',
    project: 'fable-therm',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2608.16087' }, { label: 'PDF', url: 'https://arxiv.org/pdf/2608.16087' }],
  },
];

export const experience = [
  {
    org: 'Arizona State University',
    role: 'Graduate Research Associate, UIS Lab',
    dates: '2025 – Present',
    place: 'Tempe, AZ',
    points: [
      'Foundation-model methods for contactless sensing, medical imaging (with Mayo Clinic), and wearable signals; theory of fair parameter-efficient fine-tuning. Advisor: Prof. Asif Salekin.',
    ],
  },
  {
    org: 'Chaldal Engineering (Y Combinator-backed)',
    role: 'Software Engineer, Level 2',
    dates: 'Jun 2024 – Jul 2025',
    place: 'Dhaka, Bangladesh',
    points: [
      'Built a personalized two-tower recommendation pipeline deployed with online A/B testing, and improved multilingual semantic search in production.',
      'Engineered real-time (WebSocket) components of a 10-minute delivery system, contributing to a 20% rise in orders.',
      'Built and maintained catalog, search, and recommendation microservices on Kubernetes with CI/CD (Azure DevOps).',
      'Cut worst-case mobile navigation latency from 30 s to 5 s on Android and iOS.',
    ],
  },
  {
    org: 'Bangladesh University of Engineering and Technology',
    role: 'Undergraduate Researcher',
    dates: 'B.Sc. thesis',
    place: 'Dhaka, Bangladesh',
    points: ['Federated learning on non-IID client data (MOONLiHood). Advisor: Dr. Muhammad Ali Nayeem.'],
  },
  {
    org: 'MYSOFT Limited',
    role: 'Engineering Intern',
    dates: 'Jan 2023 – Apr 2023',
    place: 'Dhaka, Bangladesh',
    points: ['Implemented authentication, sessions, catalog, cart, and order processing for a Spring Boot / Angular web platform.'],
  },
];

export const education = [
  {
    school: 'Arizona State University',
    degree: 'Ph.D. in Computer Science',
    detail: 'GPA 4.00 / 4.00 · Advisor: Prof. Asif Salekin',
    dates: '2025 – Present',
  },
  {
    school: 'Bangladesh University of Engineering and Technology (BUET)',
    degree: 'B.Sc. in Computer Science and Engineering',
    detail: 'CGPA 3.64 / 4.00',
    dates: '2018 – 2024',
  },
];

export const honors = [
  { what: '2nd place', where: 'ICPC Asia Dhaka Preliminary Contest', when: '2023' },
  { what: '7th place', where: 'ICPC Asia Dhaka Regional Contest', when: '2022' },
  { what: '7th place', where: 'ICPC Asia Dhaka Regional Contest', when: '2021' },
  { what: 'Rank 310', where: 'Google Kick Start, Round F', when: '2022', url: 'https://zibada.guru/gcj/ks2022f/' },
  { what: 'Rank 477', where: 'Google Kick Start, Round A', when: '2021', url: 'https://zibada.guru/gcj/ks2021a/' },
];

export const ratings = [
  { site: 'Codeforces', value: '2002' },
  { site: 'LeetCode', value: '2309' },
  { site: 'CodeChef', value: '2103' },
];

export const service = [
  { role: 'Chief Judge', where: 'Bangladesh Olympiad in Informatics, National Round', when: '2025' },
  { role: 'Problem Setter & Judge', where: 'BUET Inter-University Programming Contests', when: '2023, 2024' },
  { role: 'Competitive Programming Trainer', where: 'Bangladesh University of Business and Technology', when: '2023 – 2025' },
  { role: 'Competitive Programming Trainer', where: 'International University of Business Agriculture and Technology', when: '2024 – 2025' },
];

export const skills = [
  { area: 'Health data', items: 'Volumetric CT, radiology reports, wearable physiological signals (EDA), thermal video' },
  { area: 'Methods', items: 'Foundation-model adaptation, LoRA / DoRA, multimodal fusion, MIL, ViTs, segmentation, zero-shot' },
  { area: 'Evaluation', items: 'Held-out-participant and leave-one-dataset-out validation, subgroup auditing, large-scale ablations' },
  { area: 'Frameworks', items: 'PyTorch, Hugging Face (Transformers, PEFT), MONAI, timm, scikit-learn, TensorFlow / Keras' },
  { area: 'Systems', items: 'Linux, CUDA, HPC / SLURM, Docker, Kubernetes, FastAPI, Git' },
  { area: 'Languages', items: 'Python, C++, Java, C#, F#, JavaScript / TypeScript, Bash' },
];

export const otherProjects = [
  { name: 'Plant Disease Detection', tech: 'TensorFlow', text: 'Inception-style CNN on PlantVillage (50k+ images, 38 classes); 92.2% validation accuracy.', url: 'https://colab.research.google.com/drive/1OC3hHeqJu9GGc5NEMuimviLgq-oAmPZX?usp=sharing' },
  { name: 'Ray Tracing Renderer', tech: 'C++', text: 'Ray tracer simulating realistic light interactions and material effects.', url: 'https://github.com/Sachin-deb/Ray-Tracing' },
  { name: 'Compiler', tech: 'C, Flex/Bison', text: 'Tokenizer, lexical analyzer, and parser that generate executable output.', url: 'https://github.com/Sachin-deb/Compiler-Sessional' },
  { name: 'CoderVai', tech: 'FastAPI, Next.js', text: 'Custom Codeforces leaderboards, rating calculation, and problem recommendations.', url: 'https://github.com/Sachin-deb/CoderVaiCodeforcesHelper' },
];
