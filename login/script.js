document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // In a real application, you would send the form data to the server for authentication and user creation.
      // For this demo, let's just display the entered information in the console.
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
  
      // Clear the form after submission
      loginForm.reset();
    });
  });
  