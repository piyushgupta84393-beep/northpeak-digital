const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    successMessage.innerText = "Thank you! Your message has been sent successfully.";

    form.reset();
});