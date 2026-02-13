export const STAKEHOLDERS = [
  { 
    id: 1, 
    name: "Manhiru Ranasinghe", 
    role: "Lead Architect / Me", 
    image: "https://i.postimg.cc/tCDpz6RH/123.png", 
    quote: "I'm essentially a professional translator at this point. Jason wants 'cheap but luxury' and Meehan wants a 'full kitchen' in a shoe box. My job is making sure this thing doesn't blow away.",
  },
  { 
    id: 2, 
    name: "Jason Ogbuehi", 
    role: "Main Buyer / Visionary", 
    image: "https://i.postimg.cc/qq363LVL/Screenshot-20260212-204301-Whats-App.jpg", 
    quote: "Look, the vibe is simple: nice looking, solar-powered, and strictly minimalist. I want that 'Apple Store in the forest' type. If it’s not cyan white, gray, or wood, I don't want it.",
  },
  { 
    id: 3, 
    name: "Meehan Thaapa", 
    role: "The Roommate", 
    image: "https://i.postimg.cc/k5JSpKKC/Screenshot-20260212-204203-Tik-Tok.jpg", 
    quote: "I don't care how 'minimalist' it is, I need a real kitchen to cook in. We're building in a forest with thunder and winds; if this house shakes when it rains, I'm running for my life.",
  }
];

export const SYSTEM_TAGS = ["Recycled Steel", "Solar Powered", "Weather Proof"];

export const JOURNEY_STAGES = [
  {
    version: "STAGE_01",
    title: "The Raw Ideas",
    desc: "A few sketches, putting pen to paper seeing what I could come up with, based on my clients wants and I think I made a decent amount of sketches. At the start I was going for another one before I chose the container, and i'm fortunate that happened",
    // Your actual project photo
    image: "https://i.postimg.cc/WbNrbx51/20260212_221014.jpg", 
    tags: ["Brainstorming", "Sketches", "Starting Off"],
    rotate: true // Flag to flip the upside-down photo in the UI
  },
 {
    version: "STAGE_02",
    title: "THE FINAL PICK",
    desc: "The first proper, in detail drawing. Finally locked in the layout. This is the blueprint for the whole design,everything starts from this sketch, I kept true to the measurements (converted to the paper) throughout so I think I did that well.",
    image: "https://i.postimg.cc/zGMR7v83/20260212_221024.jpg",
    tags: ["Orthographic Drawing", "Final Draft", "Locked"],
    rotate: true // Flipped it so it shows right side up
  },
  {
    version: "STAGE_03",
    title: "THE 'FOOT' PRINT",
    desc: "Mapping the floor plan. Balanced the client's basic needs with my own layout preferences to make it pretty balabced. Its about taking their 'want list' and making it actually functional, comfortable and lovely to live in.",
    image: "https://i.postimg.cc/NMv2hnKW/20260212_221029.jpg",
    tags: ["Floor Plan", "Haha get it, foot, floor.", "Drafting"],
    rotate: false // Kept this false as requested
  },
  {
    version: "STAGE_04",
    title: "DIGITAL MOCKUP",
    desc: "Taking the final sketches into SketchUp. This is where we see how it exactly looks like and helps us to map it out in real life. It’s the digital bridge between a rough idea and the actual build.",
    image: "./bigmanting.png",
    tags: ["3D Modeling", "SketchUp", "CAD"],
    rotate: false
  },
  {
    version: "STAGE_05",
    title: "PHYSICAL SCALE",
    desc: "Moving from 2D drafts to the first cardboard prototype. This is where the the room layout actually gets tested. It’s one thing to draw a plan, but building the physical model reveals exactly how it feels irl.",
    image: "https://i.postimg.cc/L69f6GxT/20260129_154354.jpg",
    tags: ["I lost this for 3 days", "Scale Model", "Prototyping"],
    rotate: false
  },
];

