// lib/programs.js

export const programs = {
  reorientation: {
    slug: "reorientation",
    pillarLabel: "Pillar 01",
    navTitle: "Reorientation",
    title: "Reorientation",
    tagline: "Inspiring national reorientation and moral alignment.",
    type: "standard",
    heroDesc:
      "Reorientation is the foundation on which every other pillar stands. Before skills, funding, or governance can take root, a people must first realign their values, their sense of purpose, and their responsibility to one another.",
    sections: [
      {
        heading: "Why Reorientation Comes First",
        body: "Sustainable change is not primarily a resource problem — it is a mindset problem. Communities that rebuild successfully do so because they first restore a shared moral compass: honesty, diligence, accountability, and respect for others. Our Reorientation program is designed to instill these values before any technical or financial intervention begins.",
      },
      {
        heading: "What the Program Covers",
        body: "Participants engage in structured sessions covering ethical leadership, civic responsibility, integrity in the workplace, and the connection between individual character and collective progress. The curriculum draws on real case studies, group dialogue, and reflective exercises rather than one-directional lectures.",
      },
      {
        heading: "Who It's For",
        body: "This program is open to anyone — students, artisans, community leaders, and professionals — who wants to be part of a deliberate shift toward a more honest, disciplined, and purpose-driven society. It is often the entry point for participants who go on to join our Training or Mentorship tracks.",
      },
      {
        heading: "Outcomes",
        body: "Graduates of the Reorientation program leave with a clarified sense of personal values, a stronger understanding of their civic role, and readiness to responsibly pursue the practical opportunities offered through our other pillars.",
      },
    ],
  },

  crowdfunding: {
    slug: "crowdfunding",
    pillarLabel: "Pillar 02",
    navTitle: "Crowdfunding",
    title: "Crowdfunding",
    tagline: "Promoting justice, structured community guidelines, and equity.",
    type: "standard",
    enrollHref: "/enroll/crowdfunding",
    heroDesc:
      "Access to capital is one of the biggest barriers to community progress. Our Crowdfunding pillar exists to close that gap by structurally sourcing money and resources for verified, worthwhile projects.",
    sections: [
      {
        heading: "What Sourcing Money Means",
        body: "We provide structured support for individuals, groups, cooperatives, and community projects that need to source funding or resources from multiple channels — donors, grants, partner organizations, and diaspora networks.",
      },
      {
        heading: "What We Help With",
        body: "This includes identifying suitable funding sources and partners, supporting proposal writing and pitch preparation, making introductions to our network of partner organizations, and maintaining accountability structures to preserve donor trust over time.",
      },
      {
        heading: "Our Approach",
        body: "Every project under this pillar is reviewed for legitimacy and structured around equity and justice — no one is turned away for lacking connections, and no project proceeds without transparency safeguards for contributors.",
      },
      {
        heading: "Who It's For",
        body: "Open to individuals with a personal project, and to groups or cooperatives pursuing a shared community initiative that requires outside funding or resources to move forward.",
      },
    ],
  },

  training: {
    slug: "training",
    pillarLabel: "Pillar 03",
    navTitle: "Hands-on Skills Training",
    title: "Hands-on Skills Training",
    tagline: "Fostering clean leadership and sustainable civic models.",
    type: "training",
    heroDesc:
      "Real independence comes from a skill in your hands. Our Training pillar equips participants with practical, income-generating trade skills through a structured, job-linked program.",
    skills: [
      {
        name: "Bricklaying",
        desc: "Foundational and structural masonry work for residential and commercial construction.",
      },
      {
        name: "Tiling",
        desc: "Floor and wall tiling techniques, surface preparation, and finishing standards.",
      },
      {
        name: "Plumbing",
        desc: "Pipe fitting, water systems, and fixture installation and repair.",
      },
      {
        name: "Electrical Wiring",
        desc: "Basic residential wiring, safety standards, and fixture installation.",
      },
      {
        name: "Carpentry",
        desc: "Woodworking fundamentals, furniture basics, and structural framing.",
      },
      {
        name: "Painting & Decorating",
        desc: "Surface preparation, finishing techniques, and interior/exterior decoration.",
      },
    ],
    sections: [
      {
        heading: "How the Program Works",
        body: "Training runs as a 6-month intensive program. Participants who complete the full novice track are connected with real, paid job opportunities in their chosen trade — the program is deliberately structured around actual work, not just certification.",
      },
      {
        heading: "Novice Track",
        body: "Designed for participants with little or no prior experience in the trade. Covers fundamentals, safety, tools, and supervised hands-on practice, building up to independent competence over the 6-month period.",
      },
      {
        heading: "Professional Track",
        body: "Participants who already have experience in a trade can bypass the novice curriculum by taking an aptitude test. Passing qualifies them to be placed directly onto available jobs, without repeating foundational training.",
      },
    ],
  },

  mentorship: {
    slug: "mentorship",
    pillarLabel: "Pillar 04",
    navTitle: "Mentorship",
    title: "Mentorship",
    tagline:
      "Empowering individuals through cultural depth, skills, and opportunities.",
    type: "standard",
    heroDesc:
      "Skills and funding go further when paired with guidance. Our Mentorship pillar connects participants with experienced mentors who help them navigate their personal, professional, and civic growth.",
    sections: [
      {
        heading: "What Mentorship Looks Like",
        body: "Mentees are paired with mentors drawn from relevant trades, professions, or community leadership backgrounds. Relationships are structured around regular check-ins, goal-setting, and accountability — not one-off advice sessions.",
      },
      {
        heading: "Areas of Focus",
        body: "Mentorship covers career direction, trade-specific growth (for those in the Training pillar), financial discipline, and personal development rooted in the values taught in our Reorientation pillar.",
      },
      {
        heading: "Who Can Join",
        body: "Any participant across our other three pillars can request a mentor. We also welcome experienced professionals and artisans who want to give back by mentoring the next generation.",
      },
    ],
  },
};

export const programsList = Object.values(programs);
