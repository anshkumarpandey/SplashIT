// Simple form validation or interaction
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents form submission for now

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for contacting us, " + name + "!");
    } else {
        alert("Please fill out all fields.");
    }
});
