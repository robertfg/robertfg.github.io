/* =====================================================
     Create array of projects and write to page.
  ======================================================== */

var output;

// Funcion to build string
function buildOutput(obj) {
  // let out = '<div class="projects">';
  // out += `
  //   <a href="${obj.url}" target="_blank">
  //     <img src="${obj.img}" alt="${obj.title}">
  //     <h2>${obj.title}</h2>
  //   </a>
  // `;
  // out += '</div>';
  // return out;

  // Refactored above:
  // return `<div class="projects">
  //   <a href="${obj.url}" target="_blank">
  //     <img src="${obj.img}" alt="${obj.title}">
  //     <h2>${obj.title}</h2>
  //   </a>
  // </div>`;

  // This works well: crops image, pads header.
  return `<div class="outer-projects">
    <a href="${obj.url}" target="_blank">
      <div class="crop-projects">
        <img src="${obj.img}" alt="${obj.title}">
      </div>
      <div class="header-projects">
        <h2>${obj.title}</h2>
      </div>
    </a>
  </div>`;
}

// load up array
let projects = [
  {
    title:  'Hoppy Beaver',
    url:    'https://github.com/robertfg/Hoppy-Beaver',
    img:    'img/Hoppy_Beaver.png'
  },
  {
    title:  'Memory Game',
    url:    'https://github.com/robertfg/Memory-Game',
    img:    'img/Memory_Game.png'
  },
  {
    title:  'Winston Churchill',
    url:    'https://github.com/robertfg/Tribute-Page',
    img:    'https://upload.wikimedia.org/wikipedia/commons/b/bc/Sir_Winston_Churchill_-_19086236948.jpg'
  },
  {
    title:  'Old Bootstrap Portfolio Page',
    url:    'https://github.com/robertfg/Portfolio-Page',
    img:    'img/Portfolio_Page.png'
  },
  {
    title:  'Object Exercise',
    url:    'https://github.com/robertfg/CL1-Object-Exercise',
    img:    'img/Flexbox.jpg'
  },
  {
    title:  'CSS Grid Exercise No.1',
    url:    'https://github.com/robertfg/CL2-CSS-Grid',
    img:    'img/Flexbox.jpg'
  },
  {
    title:  'Flexbox Exercise No.1',
    url:    'https://github.com/robertfg/CL3-Flexbox',
    img:    'img/Flexbox.jpg'
  },
  {
    title:  'CSS Grid Exercise No.2',
    url:    'https://github.com/robertfg/CL4-More-CSS-Grid',
    img:    'img/Flexbox.jpg'
  },
  {
    title:  'CSS Grid and Flexbox Exercise',
    url:    'https://github.com/robertfg/CL5-Grid-Flexbox',
    img:    'img/Flexbox.jpg'
  },
  {
    title:  'Flexbox Exercise No.2',
    url:    'https://github.com/robertfg/CL6-More-Flexbox',
    img:    'img/Flexbox.jpg'
  }
];

// Build html output
output = '<h1>Projects</h1>';
output += '<h2>These cards link to the relevant GitHub repositories.</h2>';
for ( let i = 0; i < projects.length; i++ ) {
  output += buildOutput(projects[i]);
}

// Write to primmary column
const primary = document.getElementsByClassName('primary');
primary[0].innerHTML = `${output}`;
