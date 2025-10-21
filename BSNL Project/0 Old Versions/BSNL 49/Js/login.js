console.log("Login JS Started...");
let Role = "";

fetch("../Php/login.php")
  .then((response) => response.json())
  .then((fetchedData) => {
    console.log(fetchedData)
    // Add an event listener for the login button
    document.getElementById("login-form-submit").addEventListener("click", function (event) {
      event.preventDefault();

      // Get the entered userid and password from the form
      var userid = document.getElementById("userid").value;
      var password = document.getElementById("password").value;

      // Initialize a flag to check if login is successful
      let loginSuccessful = false;

      // Loop through the fetched data (which contains multiple users)
      for (let i = 0; i < fetchedData.length; i++) {
        let Userid = fetchedData[i].userid;
        let Password = fetchedData[i].password;
        Role = fetchedData[i].Role;  // Get user role from the data

        // Check if the current user's credentials match
        if (Userid === userid && Password === password) {
          loginSuccessful = true; // Mark login as successful

          // Check the user's role and redirect accordingly
          if (Role === 'admin') {
            alert("Login successful as Admin");
            window.location.href = '../Html/complain_booking_new.html'; // Admin page
          } else if (Role === 'manager') {
            alert("Login successful as Manager");
            window.location.href = '../Html/complain_booking_new.html'; // Manager page
          } else if (Role === 'user') {
            alert("Login successful as User");
            window.location.href = '../Html/complain_booking_new.html'; // Normal user page
          }
          break; // Exit the loop once a match is found
        }
      }

         



      // If no match was found after checking all users, show an error message
      if (!loginSuccessful) {
        alert("User ID or password is incorrect.");
      } else {
        localStorage.setItem("Role", Role);  // Store role in local storage
      }
    });
  });
