'use strict';


// TELGRAM BOT SEND TO GROUP
const botToken = '6749638875:AAH0eWkummTf0Es0pQwor_CpnRHy8RgaV6Y';
const chatId = -1002049841372;

// Corrected sendMessage function
const sendMessage = async () => {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email_address"]').value;
  const subject = document.querySelector('input[name="subject"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  try {
    if (!name || !email || !message) {
      alert("Barcha ma'lumotlar to'ldirilishi lozim");
      return null;
    }

    // Construct the message text
    let messageText = `Name: ${name}\nEmail: ${email}`;
    if (subject) messageText += `\nSubject: ${subject}`;
    if (phone) messageText += `\nPhone: ${phone}`;
    messageText += `\nMessage: ${message}`;

    // Prepare JSON payload
    const payload = {
      chat_id: chatId,
      text: messageText
    };

    // Send the POST request with the correct URL and headers
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      // Parse the JSON error message and alert it
      const errorData = await response.json();
      throw new Error(`Failed to send message: ${errorData.description}`);
    }

    alert("Message is sent!");
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="email_address"]').value = '';
    document.querySelector('input[name="subject"]').value = '';
    document.querySelector('input[name="phone"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';

  } catch (error) {
    console.error('Error:', error);
    alert(error.message);
  }
};

// Ensure that the event listener is attached correctly
document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  sendMessage();
});



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});