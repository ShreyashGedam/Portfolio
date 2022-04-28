// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Shreyash Gedam",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Self- motivated and aspiring full-stack developer with proficiency in MERN stack, looking forward to developing systematic and convenient web applications as per the client requirements. Capable learner seeking additional opportunities to enhance my skills and apply them effectively. ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma

const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    // svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    // faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    // faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    // faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    // faClass: "fab fa-node",
  },
  {
    name: "AWS",
    // svg: '',
    // faClass: "fab fa-aws",
  },
  {
    name: "MongoDb",
    svg: '',
    // faClass: "fab fa-js",
  },
  {
    name: "ExpressJs",
    svg: '',
    // faClass: "fab fa-js",
  },
  {
    name: "ReactJs",
    svg: '',
    // faClass: "fab fa-js",
  },

];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Appolo Pharmacy Clone",
    skills: ["HTML, CSS, JS"],
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Two_red_dice_01.svg/1200px-Two_red_dice_01.svg.png",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "The Home Depot Clone",
    skills: ["HTML, CSS, JS"],
    url: "https://phenomenal-eclair-a63f6c.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Bella Vita Organic Clone",
    skills: ["HTML, CSS, JS, MongoDb, Express"],
    url: "https://bella-vita-clone.netlify.app/",
  }
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  // {
  //   // Add image in './styles/images.css' in #misc1
  //   id: "misc1",
  //   name: "Miscellaneous 1",
  //   url: "https://github.com/kaustubhai",
  // },
  // {
  //   // Add image in './styles/images.css' in #misc2
  //   id: "misc2",
  //   name: "Miscellaneous 2",
  //   url: "https://github.com/kaustubhai",
  // },
  // {
  //   // Add image in './styles/images.css' in #misc3
  //   id: "misc3",
  //   name: "Miscellaneous 3",
  //   url: "https://github.com/kaustubhai",
  // },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Connect with me on ",
  copyright: "Shreyash Gedam",
  contactUrl: "https://formspree.io/f/xayvlbgb",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/ShreyashGedam",
  // facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  // instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/shreyash-gedam/",
  resume: "https://drive.google.com/file/d/1R8BU69DqiItn2EpmhQi6iuEpJM55eM2f/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
