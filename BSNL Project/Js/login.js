console.log("Login JS Started...")
let Role = "";

fetch("../Php/login.php")
  .then((response) => response.json())
  .then((fetchedData) => {
    console.log("Fetched Data from Database :: ", fetchedData);
    // Add an event listener for the login button
    document.getElementById("login-form-submit").addEventListener("click", function (event) {
      event.preventDefault();

      // Get the entered userid and password from the form
      var userid = document.getElementById("userid").value;
      var password = document.getElementById("password").value;
      console.log("Entered User ID :: ", userid);
      console.log("Entered Password :: ", password);

      // Initialize a flag to check if login is successful
      let loginSuccessful = false;

      // Loop through the fetched data (which contains multiple users)
      for (let i = 0; i < fetchedData.length; i++) {

        console.log("Fetched Data from Database :: ", fetchedData);
        let Userid = fetchedData[i].userid;
        let Password = fetchedData[i].password;
        Role = fetchedData[i].Role;  // Get user role from the data

        console.log("Checking user: " + Userid);
        console.log("Checking Password: " + Password);
        console.log("Checking Role: " + Role);

        // Check if the current user's credentials match
        if (Userid === userid && Password === password) {
          loginSuccessful = true; // Mark login as successful
          console.log(Userid)
          // Check the user's role and redirect accordingly
          if (Role === 'admin') {
            alert("Login successful as Admin");
            window.location.href = '../Html/home.html'; // Admin page
          } else if (Role === 'manager') {
            alert("Login successful as Manager");
            window.location.href = '../Html/home.html'; // Manager page
          } else if (Role === 'user') {
            alert("Login successful as User");
            window.location.href = '../Html/home.html'; // Normal user page
          }
          break; // Exit the loop once a match is found
        }
      }

      // If no match was found after checking all users, show an error message
      if (!loginSuccessful) {
        alert("User ID or password is incorrect.");
      } else {
        localStorage.setItem("Role", Role);
        console.log
      }
    });
  });

