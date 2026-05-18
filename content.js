/**
 * content.js — all portfolio copy lives here.
 * Edit any value in CARDS and it instantly reflects on the site.
 *
 * Structure per card:
 *   accent       hex colour for this card's brand accent
 *   shapes       background shape SVG paths (1–2 per card)
 *   accessLabel  top-left label (use \n for line break)
 *   cardId       top-right label (use \n for line break)
 *   meta         array of { label, value } fields;
 *                company fields also take a `logo` object (see below)
 *   name         large display name / role title
 *   nameClass    'name-display' (hero) | 'name-display-job' (role cards)
 *   bio          array of paragraph strings
 *   tags         array of skill/industry tag strings
 *
 * Logo types:
 *   { type: 'img', src: '...', alt: '...' }   — external image
 *   { type: 'svg', markup: '...' }             — inline SVG string
 */

const CARDS = [

  // ── Card 0 · Hero badge ──────────────────────────────────────────────────
  {
    id: 'card-0',
    accent: '#7AE04D',
    shapes: [
      { cls: 'shape-1', src: 'assets/shapes/Shape 114.svg' },
      { cls: 'shape-2', src: 'assets/shapes/Shape 061.svg' },
    ],
    accessLabel: 'FULL-STACK\nCX/UI/UX',
    cardId: 'KUL / SIN / JKT / OSL\n10Y Exp - Active',
    meta: [
      { label: 'Based in',     value: 'Kuala Lumpur\nMalaysia' },
      { label: 'Currently at', value: 'PNB, Head of Customer\nExperience Design' },
      { label: 'Discipline',   value: 'Research\nDesign\nStrategy' },
      { label: 'Markets',      value: 'MY · SG\nID · NO' },
    ],
    name: 'ARVIN - DESIGN LEADER',
    nameClass: 'name-display',
    bio: [
      'I design products & services. I hire, grow, and lead the teams that deliver them at scale. I create operating frameworks that make design and customer experience a strategic advantage for institutions.',
      'From pre-seeded startups to national institutions — fintech, investment management, digital banking, commerce, and payments.',
    ],
    tags: ['CX Strategy', 'Product Design', 'Design Ops', 'Fintech', 'Service Design', 'Mentor'],
  },

  // ── Card 1 · PNB ─────────────────────────────────────────────────────────
  {
    id: 'card-1',
    accent: '#4D8EFF',
    shapes: [
      { cls: 'shape-1', src: 'assets/shapes/Shape 089.svg' },
    ],
    accessLabel: 'CX Strategy\nGovernance',
    cardId: 'KUL / MY\nMar 2025 — Present',
    meta: [
      {
        label: 'Company',
        logo: { type: 'img', src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Permodalan_Nasional_Berhad.svg', alt: 'PNB' },
        value: 'Permodalan Nasional Berhad',
      },
      { label: 'Scale',      value: '22M+ Users\nDigital · Branch\nCall Centre' },
      { label: 'Discipline', value: 'CX Strategy\nGovernance\nVoC Programs' },
      { label: 'Industry',   value: 'Asset Management\nFintech · Gov-linked' },
    ],
    name: 'Head of Customer Experience',
    nameClass: 'name-display-job',
    bio: [
      'Created from scratch — built the CX function with a mandate to professionalise experience as a strategic capability within a large government-linked financial institution, establishing governance, measurement, and cross-departmental ownership.',
      "Established Malaysia's investment fund industry-leading NPS of 66 and the first consolidated cross-channel CSAT framework — a unified baseline of 88.56% across digital, branch, and call centre channels.",
    ],
    tags: ['CX Strategy', 'Governance', 'VoC', 'NPS · CSAT', 'National Institution'],
  },

  // ── Card 2 · Jewel Digital Ventures ──────────────────────────────────────
  {
    id: 'card-2',
    accent: '#F0C040',
    shapes: [
      { cls: 'shape-1', src: 'assets/shapes/Shape 072.svg' },
    ],
    accessLabel: 'Product Design\nFintech',
    cardId: 'KUL / MY\nFeb 2021 — Feb 2025',
    meta: [
      {
        label: 'Company',
        logo: {
          type: 'svg',
          markup: `<svg class="company-logo-svg" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2H17L22 8L12 18L2 8Z" stroke="rgba(240,192,64,0.75)" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M2 8H22M7 2L12 8L17 2" stroke="rgba(240,192,64,0.4)" stroke-width="1" stroke-linejoin="round"/></svg>`,
        },
        value: 'Jewel Digital Ventures',
      },
      { label: 'Scale',      value: '30M Target Market\nMY · SG' },
      { label: 'Discipline', value: 'Product Design\nUX Research\nDesign Systems' },
      { label: 'Industry',   value: 'Fintech\nInvestments\nDigital Banking' },
    ],
    name: 'Head of Product Design',
    nameClass: 'name-display-job',
    bio: [
      "Built the product design organisation from zero — hiring and developing a multidisciplinary team of designers, UX researchers, and CX specialists inside the digital arm of Malaysia's largest asset manager.",
      'Designed end-to-end digital ecosystems across investment platforms, digital onboarding, and account management — establishing design systems, research frameworks, and moonshot product exploration for 30M target users.',
    ],
    tags: ['Product Design', 'Design Systems', 'UX Research', 'Moonshot', 'Leadership'],
  },

  // ── Card 3 · Maybank ─────────────────────────────────────────────────────
  {
    id: 'card-3',
    accent: '#FFCF01',
    shapes: [
      { cls: 'shape-1', src: 'assets/shapes/Shape 031.svg' },
    ],
    accessLabel: 'UX Design\nDigital Banking',
    cardId: 'KUL / MY\nJun 2020 — Feb 2021',
    meta: [
      {
        label: 'Company',
        logo: { type: 'img', src: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Maybank_Logo.svg', alt: 'Maybank' },
        value: 'Maybank',
      },
      { label: 'Products',   value: 'MAE App\nMaybank2U\nMerchant Banking' },
      { label: 'Discipline', value: 'Experience Design\nDesign Systems\nLifestyle Banking' },
      { label: 'Team',       value: '2 Direct\n11 Cross-team\nDesigners' },
    ],
    name: 'Assistant Vice President, UX/UI',
    nameClass: 'name-display-job',
    bio: [
      "Led UX design for MAE and Maybank2U — two of Malaysia's most widely used consumer banking apps — driving usability improvements across account management, fund transfers, payments, and financial product discovery.",
      'Pioneered lifestyle-centric banking experiences integrating payments, rewards, and everyday activities; drove design system adoption across multiple product verticals with broader oversight of 11 designers.',
    ],
    tags: ['Digital Banking', 'UX Leadership', 'Design Systems', 'Lifestyle Banking'],
  },

  // ── Card 4 · Fave ─────────────────────────────────────────────────────────
  {
    id: 'card-4',
    accent: '#FF4D95',
    shapes: [
      { cls: 'shape-1', src: 'assets/shapes/Shape 012.svg' },
    ],
    accessLabel: 'Product Design\nCommerce · Payments',
    cardId: 'MY · SG · ID\nJul 2018 — Jun 2020',
    meta: [
      {
        label: 'Company',
        logo: { type: 'img', src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Logo_of_Fave.svg', alt: 'Fave' },
        value: 'Fave',
      },
      { label: 'Markets',    value: 'Malaysia\nSingapore\nIndonesia' },
      { label: 'Discipline', value: 'Product Design\nE-Wallet\nDesign Systems' },
      { label: 'Award',      value: 'Creative Designer\nof the Year\nFave, 2019' },
    ],
    name: 'Lead Product Designer',
    nameClass: 'name-display-job',
    bio: [
      "Led end-to-end redesign of Fave's consumer and merchant digital ecosystem across Malaysia, Singapore, and Indonesia — improving discoverability, payment flows, cashback experiences, and merchant dashboards during rapid regional expansion.",
      'Built and scaled the design system and component library; implemented hypothesis-driven discovery and A/B testing frameworks across a fast-growing regional commerce platform.',
    ],
    tags: ['Commerce', 'E-Wallet', 'Rewards', 'Design Systems', 'MY · SG · ID'],
  },

  // ── Card 5 · dahmakan ────────────────────────────────────────────────────
  {
    id: 'card-5',
    accent: '#4CD97B',
    shapes: [
      { cls: 'shape-1', src: 'assets/shapes/Shape 005.svg' },
    ],
    accessLabel: 'Product Design\nFood Tech · Startup',
    cardId: 'KUL / MY\nMar 2018 — Feb 2019',
    meta: [
      {
        label: 'Company',
        logo: {
          type: 'svg',
          markup: `<svg class="company-logo-svg" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1C9 1 2 6 2 12C2 16.4 5 20 9 21C13 20 16 16.4 16 12C16 6 9 1 9 1Z" stroke="rgba(76,217,123,0.75)" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M9 21V11M9 11C9 11 6 9 5 7M9 11C9 11 12 9 13 7" stroke="rgba(76,217,123,0.45)" stroke-width="1" stroke-linecap="round"/></svg>`,
        },
        value: 'dahmakan (YC S17)',
      },
      { label: 'Backed by',  value: 'Y Combinator\nS17 Batch\nFarm-to-fork' },
      { label: 'Discipline', value: 'Consumer UX\nMobile · Web\nUser Research' },
      { label: 'Platform',   value: 'iOS · Android\nWeb\nSubscription' },
    ],
    name: 'Product Designer',
    nameClass: 'name-display-job',
    bio: [
      "Designed the consumer-facing digital experience for Malaysia's first farm-to-fork food delivery platform — a Y Combinator-backed startup delivering freshly cooked, nutritionist-designed meals directly to customers.",
      'Owned meal discovery, subscription management, delivery scheduling, and account flows optimised for repeat usage — conducting user research and usability testing in close collaboration with the founding team.',
    ],
    tags: ['Startup', 'YC-backed', 'Consumer UX', 'Food Tech', 'Mobile'],
  },

];
