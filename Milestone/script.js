document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    
    document.getElementById("contactForm").reset();
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.enroll-form').addEventListener('submit', function(event) {
      var fullname = document.getElementById('fullname').value.trim();
      var email = document.getElementById('email').value.trim();
      var phone = document.getElementById('phone').value.trim();
  
      if (fullname === '' || email === '' || phone === '') {
        alert('Please fill in all fields.');
        event.preventDefault();
      } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
      }
    });
  
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });