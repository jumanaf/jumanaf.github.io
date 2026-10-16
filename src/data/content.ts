// Revised site data.
// Lines marked TODO need your input — I've guessed where I had to, and it's
// better for you to correct a wrong guess than for me to leave a blank.

export const profile = {
  name: 'Jumana Fathima',
  tagline: 'I work at the seams',
  // Alt taglines if the above is too terse:
  //   'Bioengineer turned roboticist. Mostly found between two systems that disagree.'
  //   'I like putting the pieces of complicated problems together'  ← your original
  intro: [
    "I studied bioengineering in the University of Washington, and worked as a data scientist in gene therapy. Now I'm co-founding a robotics startup where I build software, customer experiences, and the underlying infrastructure.",
    'My experiences seem a bit random, but the throughline is the seams: where hardware meets software, where a model meets messy data, where research meets something that has to ship on Tuesday. I like going deep: into a device tree, a single protein in a sequence, the nitty-gritty of an RL parameter.',
  ],
  now: "Heads down building autonomous EV charging robots. On the side, I'm learning Rust, reading more classics, and starting to climb.",
  // TODO: verify — the file said Seattle, but Kiwi is Toronto-based.
  location: 'Toronto, ON',
  // Render this somewhere small near `now` so readers know how stale it is.
  lastUpdated: '2026-07',
};

export const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jumanafathima/', icon: 'linkedin' },
  { name: 'Twitter', href: 'https://twitter.com/jumanaf9', icon: 'twitter' },
  { name: 'GitHub', href: 'https://github.com/jumanafa', icon: 'github' },
  { name: 'Email', href: 'mailto:jumanafa@gmail.com', icon: 'mail' },
] as const;


export const getInTouch = [
  "Building the robot — perception, embedded, or the data pipelines behind it. Especially if you've shipped something that had to survive weather.",
  'EV charging at scale: fleets, depots, dealerships, anywhere charging is the bottleneck rather than a feature.',
  "Anything you've deployed outdoors that broke in an interesting way. I will read a long email about this.",
  "Making the jump to new domains. I did it and I'm happy to talk about it.",
];