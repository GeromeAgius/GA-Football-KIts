function handleBuyNow() {
  alert("Thank you for shopping with us");
}
 document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    
    document.querySelectorAll(".error").forEach(el => el.remove());

    let valid = true;

    const fullName = document.querySelector('input[placeholder="Your full name.."]');
    const email = document.querySelector('input[placeholder="Your email.."]');
    const contact = document.querySelector('input[placeholder="e.g. +356 12345678"]');
    const comment = document.querySelector('textarea');

   
    function showError(element, message) {
        const error = document.createElement("div");
        error.className = "error";
        error.style.color = "red";
        error.textContent = message;
        element.parentNode.insertBefore(error, element.nextSibling);
        valid = false;
    }

    
    if (fullName.value.trim() === "") {
        showError(fullName, "Full name is required.");
    }

 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError(email, "Enter a valid email.");
    }

    
    const contactRegex = /^\+\d{3} \d{8}$/;
    if (!contactRegex.test(contact.value.trim())) {
        showError(contact, "Enter a valid phone number (e.g. +356 12345678).");
    }

    if (comment.value.trim() === "") {
        showError(comment, "Comment cannot be empty.");
    }

    if (valid) {
        alert("Form submitted successfully!");
       
    }
});
