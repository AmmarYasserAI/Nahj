const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('active'); // Add this line
  });
});

document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the language button
    document.querySelector(".lang").addEventListener("click", function () {
      console.log("Language button clicked"); // Debugging log
  
      // Fetch the translation JSON file
      fetch("translations_ar.json")
        .then((response) => {
          console.log("Fetching translation file"); // Debugging log
          if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
          }
          return response.json();
        })
        .then((translations) => {
          console.log("Translation file fetched successfully"); // Debugging log
          // Apply translations to the document title
          document.title = translations.title;
  
          // Apply translations to the header
          document.querySelector(".logo").alt = translations.header.logo_alt;
  
          // Update the navigation links and button text
          document.querySelector(".nav a[href='#main']").innerHTML = translations.header.nav.home + ' <i class="fas fa-home" id="emos"></i>';
          document.querySelector(".nav a[href='#Subjects']").innerHTML = translations.header.nav.subjects + ' <i class="fas fa-bookmark" id="emos"></i>';
          document.querySelector(".nav a[href='#Calendar']").innerHTML = translations.header.nav.calendar + ' <i class="fas fa-calendar-alt" id="emos"></i>';
          document.querySelector(".lang").innerHTML = '<i class="fas fa-globe" id="emosa"> ' + translations.header.nav.lang_button + '</i>';
  
          // Apply translations to the main section
          document.querySelector(".main h2").innerText = translations.main_section.welcome_message;
          document.querySelector(".main h3").innerText = translations.main_section.slogan;
  
          // Apply translations to the subjects section
          document.querySelector("#Subjects .title").innerText = translations.subjects_section.title;
  
          // Update each subject card
          const subjects = translations.subjects_section.cards;
          document.querySelectorAll(".card").forEach((card, index) => {
            card.querySelector("h3").innerText = subjects[index].subject;
            card.querySelector("p").innerText = subjects[index].description;
          });
  
          // Apply translations to the calendar section
          document.querySelector("#Calendar .title").innerText = translations.calendar_section.title;
  
          // Apply translations to the footer
          document.querySelector("footer p").innerText = translations.footer.copyright;
        })
        .catch((error) => {
          console.error("Error fetching translation file:", error); // Debugging log
        });
    });
  });
  