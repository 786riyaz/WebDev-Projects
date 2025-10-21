fetch(`../Php/login.php`)
  .then((response) => response.json())
  .then((fetchedData) => {
    console.log(fetchedData);

    // Add an event listener for the login button
    document.getElementById("login-form-submit").addEventListener("click", function (event) {
      event.preventDefault();

      // Get the entered userid and password from the form
      var userid = document.getElementById("userid").value;
      var password = document.getElementById("password").value;
      console.log(userid);
      console.log(password);

      // Initialize a flag to check if login is successful
      let loginSuccessful = false;

      // Loop through the fetched data (which contains multiple users)
      for (let i = 0; i < fetchedData.length; i++) {
        let Userid = fetchedData[i].userid;
        let Password = fetchedData[i].password;

        console.log("Checking user: " + Userid);

        // Check if the current user's credentials match
        if (Userid === userid && Password === password) {
          alert("Login successful");
          window.location.href = '../Html/home.html'; // Redirect to home page
          loginSuccessful = true; // Mark login as successful
          break; // Exit the loop once a match is found
        }
      }

      // If no match was found after checking all users, show an error message
      if (!loginSuccessful) {
        alert("User ID or password is incorrect.");
      }
    });
  });
