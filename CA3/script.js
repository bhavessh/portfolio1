function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
 // console.log("out");

 const section__text = document.getElementById("section__text");

function shownav() {
  section__text.classList.toggle("section__text__p2");
}

// Get the elements matching the selector
var elements = document.querySelectorAll("#projects .experience-details-container .about-containers .details-container");

// Loop through each element
elements.forEach(function(element) {
  // Add event listeners for mouseenter and mouseleave
  element.addEventListener("mouseenter", function() {
    // Add the hover effect styles
    element.style.backgroundColor = "rgb(18, 233, 249)";
  });

  element.addEventListener("mouseleave", function() {
    // Remove the hover effect styles
    element.style.backgroundColor = "";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Fetch the form data
    var formData = new FormData(contactForm);
    
    // You can now process the formData object as needed, for example, you can send it to a server via AJAX
    // Here, I'm just logging the form data to the console
    for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    
    // Optionally, you can reset the form after submission
    contactForm.reset();
  });
});
const text = "Bhavesh Jain";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("name").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust typing speed here (in milliseconds)
  }
}

typeWriter();

const roles = ["Developer", "Blogger", "Programmer", "Designer"];
let index1 = 0;

function changeRole() {
  document.getElementById("role").textContent = roles[index1];
  index1 = (index1 + 1) % roles.length;
}

setInterval(changeRole, 1200); // Change role every 2 seconds (adjustable)
