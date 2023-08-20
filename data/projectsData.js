const projectsData = [
  /Users/justingosses/Code/justingosses-website/public/static/images/blog/llm-geology-roadside-bot/LAGDAL_screenshot_sedona.png
  {
    title: 'LAGDAL',
    type: 'Website', 
    tools: 'leaflet.js, openAI, LLM, python, wikipedia, langchain, jupyter, requests, click, Flask',
    description: `LLM Assisted Geology Descriptions of Arbitrary Locations = LAGDAL. Front-end and back-end of website that uses geologic map API data from Macrostrat and series of prompts sent to openAI to generate geologic field trip descriptions globally.`,
    imgSrc: '/static/images/blog/llm-geology-roadside-bot/LAGDAL_screenshot_sedona.png',
    href: 'https://github.com/JustinGOSSES/LAGDAL'
  },
  {
    title: 'Maps that speak',
    type: 'Website with speech', 
    tools: 'leaflet.js, Nosleep.js, turf.js',
    description: `Built website that can stay open while driving or biking and tells you when you have entered or exited a flood plain in Harris County, Texas as January 2023 Houston Hackathon. Playing around with different ways to experience map data to make it more real and tied to a place. `,
    imgSrc: '/static/images/blog/maps-that-speak/Houston-floodplain-example1.png',
    href: 'https://justingosses.com/blog/maps-that-speak'


  },
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
    title: 'Game of Thrones Parallel Sets',
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
    description: `Made an entirely browser-based (no apps required) augmented reality back for my business card. 
    The 3D model is a topographic model of Jezero Crater on Mars. The previous 3D model was Gale Crater derived from data from ESA's Mars Express mission. `,
    imgSrc: '/static/images/projects/augmentedreality_2.png',
    href: 'https://github.com/JustinGOSSES/AR_BusinessCard',
  },
  {
    title: 'Mars Rover ChemCam Visualizations',
    type: 'Interactive Jupyter Notebook Visualization',
    tools: 'Python, Pandas, Plotly, Jupyter Notebook',
    description: `A Houston Data Visualization Meetup data jam using major element data from MarsScienceLaboratory 
    (Curiosity Rover) ChemCam rock sample data. This type of data has been visualized statically in the same way 
    for decades. We challenged non-geologists to do new and interactive things with it.`,
    imgSrc: '/static/images/projects/MarsMajorElements.png',
    href: 'https://github.com/JustinGOSSES/datajam_Mars_MajorElements',
  },
  {
    title: 'Dot Plot',
    type: 'Web Data Visualization Tooling',
    tools: 'D3.js',
    description: `D3.js v3 code for creating a bubble matrix plot - can be used for visualizing status of items over time.`,
    imgSrc: '/static/images/projects/dot_plot_1.png',
    href: 'https://github.com/JustinGOSSES/datajam_Mars_MajorElements',
  },
  {
    title: 'Car Lidar in Three.js',
    type: '3D Data Visualization',
    tools: 'Three.js',
    description: `Quick side project to visualize car-based LIDAR data using three.js. Very different than the 
    plane-acquired LIDAR datasets I'm more familiar with from GIS (geographic information systems) world. Easier tooling choice would be Potree as its purpose built for LIDAR but wanted to get it into three.js.`,
    imgSrc: '/static/images/projects/lidar_1.png',
    href: 'https://justingosses.github.io/lidar_threejs_playground/', 
            
  },
  {
    title: 'Old School Asteroids Clone',
    type: 'Game',
    tools: 'Python',
    description: `Clone of the old school Astroids game built for an online class. There's a way to cheat and enter your own score. You may need to allow pop-ups.`,
    imgSrc: '/static/images/projects/Astroids_screen_shot_zoom.png',
    href: 'http://www.codeskulptor.org/#user39_TX7MZeGm6m_10.py',
  },
  {
    title: 'Excessive Pong',
    type: 'Game',
    tools: 'Python, CodeSkulptor',
    description: `Built for an online class project. This is classic pong with a variety of twists added on including curve ball paths, way too many balls, portals, and speed that increases until the frame rate is reached.`,
    imgSrc: '/static/images/projects/ExcessivePong_zoom.png',
    href: 'https://py2.codeskulptor.org/#user40_L9g9vymraq_10.py',
  }
]

export default projectsData
