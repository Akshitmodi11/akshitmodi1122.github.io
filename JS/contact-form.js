// Initialize EmailJS with your user ID
(function() {
    emailjs.init("Y-JKUm2fV6YpNt-Qt"); // Replace "YOUR_USER_ID" with your actual EmailJS user ID
})();

// JavaScript to handle the form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send form data using EmailJS
    emailjs.sendForm("service_kgrogif", "template_ocefa0f", this)
        .then(function() {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
});
