/* =================================
   Header and Footer
================================= === */
const header = document.getElementsByTagName('header');
header[0].innerHTML = `
  <h1 id="name"><a href="index.html">Robert Glover</a></h1>
  <menu>
    <div id="hamburger_menu"><span class="hamburger"></span><span class="hamburger"></span><span class="hamburger"></span></div>
    <ul class="main-nav">
      <li id="li-index"><a href="index.html">Home</a></li>
      <li id="li-projects"><a href="projects.html">Projects</a></li>
      <li id="li-about"><a href="about.html">About</a></li>
      <li id="li-contact"><a href="contact.html">Contact</a></li>
    </ul>
  </menu>
`;

const footer = document.getElementsByTagName('footer');
footer[0].innerHTML = `
  <p>Copyright &copy; <span id="thisYear"></span> Robert Glover</p>
`;

/* =================================
   Handle "hamburger" events
==================================== */

// When you hover over the "hamburger," change the entire color.
const hamburger_menu = document.getElementById('hamburger_menu');
hamburger_menu.addEventListener('mouseover', (e) => {
  const hamburger = document.getElementsByClassName('hamburger');
  for ( let i = 0; i < hamburger.length; i++ ) {
    hamburger[i].style.background = '#FDB47D';
  }
});

// Change it back when you stop hovering
hamburger_menu.addEventListener('mouseout', (e) => {
  const hamburger = document.getElementsByClassName('hamburger');
  for ( let i = 0; i < hamburger.length; i++ ) {
    hamburger[i].style.backgroundColor = 'FloralWhite';
  }
});

// Auto-update the year in the footer.
let thisYear = document.getElementById('thisYear');
thisYear.textContent = new Date().getFullYear();
