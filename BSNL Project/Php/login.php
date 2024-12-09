<?php
// --- Session and Cache Settings ---
session_start();  // Start the PHP session to manage user sessions
header("Cache-Control: no-store, no-cache, must-revalidate");  // Prevent browser caching of sensitive pages
header("Pragma: no-cache");
header("Expires: 0");

// Enable error reporting for debugging purposes during development
ini_set('display_errors', 1);          // Display errors on the page
error_reporting(E_ALL);                // Report all types of errors

// --- Handle POST Requests ---
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // --- Database Configuration ---
    $HOST_NAME = "localhost";          // Database host
    $USERNAME = "root";                // Database username
    $PASSWORD = "";                    // Database password (blank for localhost setups)
    $DATABASENAME = "u152745363_bsnl_test";  // Name of the target database

    // --- Establish Database Connection ---
    $conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DATABASENAME);

    // Check if the database connection was successful
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);  // Stop execution if connection fails
    }

    // --- Retrieve and Secure Input Data ---
    $userid = $_POST['userid'];  // Retrieve the submitted user ID
    $password = $_POST['password'];  // Retrieve the submitted password

    // --- Secure Authentication Query with Prepared Statements ---
    $stmt = $conn->prepare("SELECT * FROM users WHERE userid = ? AND password = ?");
    $stmt->bind_param("ss", $userid, $password);  // Bind user input to the query to prevent SQL injection
    $stmt->execute();  // Execute the prepared statement
    $result = $stmt->get_result();  // Get the query result

    // --- Validate Login ---
    if ($result->num_rows == 1) {
        // User found: Fetch user details
        $user = $result->fetch_assoc();

        // Store user information in session variables
        $_SESSION['userid'] = $user['userid'];  // Store the user ID
        $_SESSION['Role'] = $user['Role'];      // Store the user's role (if applicable)

        // Redirect the user to the home page or a role-specific page
        header("Location: home2.php");  // Redirect to 'home2.php'
        exit();  // Ensure no further code is executed
    } else {
        // Invalid credentials: Show an alert message to the user
        echo "<script>alert('Username and password is wrong..');</script>";
    }

    // --- Close Database Resources ---
    $stmt->close();  // Close the prepared statement
    $conn->close();  // Close the database connection
}
?>