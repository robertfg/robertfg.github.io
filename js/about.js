/* =====================================================
     Put up a list of my skills on the web page.
  ======================================================== */

// 1. Create an XML HTTP Request object
let xhr = new XMLHttpRequest();

// 2.	Create a callback function: programming you want to run whille when server returns its response.
xhr.onreadystatechange = () => {
  if ( xhr.readyState === 4 ) {
    let skills = JSON.parse(xhr.responseText);

    // Get the ul tag
    let statusHTML = '<ul>';

    // Loop for employees
    for ( let i = 0; i < skills.length; i++ ) {
      if ( skills[i].level === "beginner" ) {
        statusHTML += '<li class="beginner">';
      } else if ( skills[i].level === "intermediate" ) {
        statusHTML += '<li class="intermediate">';
      } else {
        statusHTML += '<li class="advanced">';
      }
      statusHTML += skills[i].skill;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';

    // Write to the page
    document.getElementById('skills').innerHTML = statusHTML;
  }
};

// 3.	Open a Request:
xhr.open('GET', '../data/skills.json');

// 4.	Send the request
xhr.send();
