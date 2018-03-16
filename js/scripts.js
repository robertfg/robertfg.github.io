/* =================================
   Functions
==================================== */


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
