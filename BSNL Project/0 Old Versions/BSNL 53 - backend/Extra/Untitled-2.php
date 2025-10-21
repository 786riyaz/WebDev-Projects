<?php
$servername = "localhost"; // Your server name
$username = "username"; // Your database username
$password = "password"; // Your database password
$dbname = "database_name"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the AJAX request
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (name, email, mobile) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $name, $email, $mobile); // Adjust type accordingly

// Execute the statement
if ($stmt->execute()) {
    echo "Data submitted successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
