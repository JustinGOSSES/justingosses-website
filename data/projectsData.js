const projectsData = [
  {
    title: 'Stratigraphy vs. Sea Level Interactive Model',
    type: 'Explorable Explanation', 
    tools: 'Observable, Vega.js, Wellioviz.js',
    description: `A weekend code doodle where I explored building an explorable explainable for 
    stratigraphic stacking patterns controlled by sea level. Hope to come back to this at some point and polish it up.`,
    imgSrc: '/static/images/projects/sed_model_doodle.png',
    href: 'https://observablehq.com/@justingosses/overly-simplified-stratigraphic-modeling',
  },
  {
    title: 'Wellioviz.js',
    type: 'JavaScript Library',
    tools: 'D3.js, wellio.js',
    description: `Wellioviz.js was originally created as I was annoyed that there wasn't a way to visualize well logs 
    on the web without downloading the files and converting them locally from government sites. 
    It leverages d3.js and wellio.js. `,
    imgSrc: '/static/images/projects/wellioviz.png',
    href: 'https://github.com/JustinGOSSES/wellioviz',
  },
  {
    title: 'Houston: Art City / Science City',
    type: 'Weekend Hackathon',
    tools: 'Kepler.gl, Tableau, Web Scraping, JavaScript, Pandas',
    description: `Texas arts organization Glasstire sponsored a weekend hackathon. I combined their dataset of art events with my scraped dataset of science related job advertisements to compare spatial distributions.`,
    imgSrc: '/static/images/projects/houstonArtScience.png',
    href: 'https://justingosses.github.io/glasstiredatahack/kepler/index.html',
  },
  {
    title: 'Machine Learning vs. Human Generated Keywords',
    type: 'Observable Notebook',
    tools: 'Observable, D3.js, Python, Natural Language Processing',
    description: `Quick notebook to explore the differences between machine learning and human generated keywords.`,
    imgSrc: '/static/images/projects/screenshot_ai_tags.png',
    href: 'https://observablehq.com/@justingosses/comparing-human-generated-vs-a-i-generated-keyword-tags-on-c',
  },
  {
    title: 'Modeled Flood Damage Dashboard',
    type: 'Tableau, Maps',
    tools: 'GeoPandas, Tableau',
    description: `Exploration of different ways to represent the intersection of FEMA modeled damage from Hurricane Harvey 
    in Houston and real estate value from Harris County Appraisal District. Helping out with SketchCity a local civic tech group.`,
    imgSrc: '/static/images/projects/Harvey.png',
    href: 'https://public.tableau.com/app/profile/justin.gosses/viz/Harvey_FEMA-HCADmerge_vD_20170907/Story1#streetView',
  },
  {
    title: 'Game of Trones Parallel Sets',
    type: 'Interative Data Visualization',
    tools: 'D3.js',
    description: `Built my own implimentation of parallel sets with some interactive draggable features using a dataset of game of thrones battles.`,
    imgSrc: '/static/images/projects/paraset_screenshot.png',
    href: 'https://justingosses.github.io/ParallelSets_GameOfThrones/',
  },
  {
    title: 'Can Sound Add Value to a Data Visualization',
    type: 'Observable Notebook',
    tools: 'Tone.js, Observable, D3.js',
    description: `An experiment using tone.js to add sound to a data visualization built with d3.js that represents the GISS Surface Temperature Analysis dataset from NASA's Goddard Institute for Space Studies.`,
    imgSrc: '/static/images/projects/viz_as_sound2.png',
    href: 'https://observablehq.com/@justingosses/can-sound-add-value-to-data-visualizations',
  },
  {
    title: 'Augmented Reality Business Card',
    type: 'AR Web App',
    tools: 'AR.js, aframe.js, three.js, Artoolkit.js',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/projects/augmentedreality_2.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'The Time Machine',
    type: 'Web App',
    tools: 'React, Node.js, Express, MongoDB',
    description: `Made an entirely browser-based (no apps required) augmented reality back for my
     business card. The 3D model is a topographic model of Gale Crater derived from data from 
     ESA's Mars Express mission. `,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'The Time Machine',
    type: 'Web App',
    tools: 'React, Node.js, Express, MongoDB',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'The Time Machine',
    type: 'Web App',
    tools: 'React, Node.js, Express, MongoDB',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'The Time Machine',
    type: 'Web App',
    tools: 'React, Node.js, Express, MongoDB',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
