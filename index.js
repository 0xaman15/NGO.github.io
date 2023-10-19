// JavaScript function to toggle a navigation menu on smaller screens
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
    }
  }
  
  // JavaScript function to open the volunteer form
  function openVolunteerForm() {
      const volunteerFormPopup = document.getElementById('volunteer-form-popup');
      volunteerFormPopup.style.display = 'block';
  }
  
  // JavaScript function to close the volunteer form
  function closeVolunteerForm() {
      const volunteerFormPopup = document.getElementById('volunteer-form-popup');
      volunteerFormPopup.style.display = 'none';
  }
  
  // JavaScript function to open the contact form
  function openContactForm() {
      const contactFormPopup = document.getElementById('contact-form-popup');
      contactFormPopup.style.display = 'block';
  }
  
  // JavaScript function to close the contact form
  function closeContactForm() {
      const contactFormPopup = document.getElementById('contact-form-popup');
      contactFormPopup.style.display = 'none';
  }
  
  // You can add more JavaScript functionality as needed.
  