<?php
session_start();
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Database Variables
    $HOST_NAME = "localhost";
    $USERNAME = "root";
    $PASSWORD = "";
    $DATABASENAME = "u152745363_bsnl_test";

    // Database Connection
    $conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DATABASENAME);
    
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    }

    $userid = $_POST['userid'];
    $password = $_POST['password'];

    // Secure the query with prepared statements
    $stmt = $conn->prepare("SELECT * FROM users WHERE userid = ? AND password = ?");
    $stmt->bind_param("ss", $userid, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        $_SESSION['userid'] = $user['userid'];
        $_SESSION['Role'] = $user['Role'];  // assuming a 'role' field

        // Redirect based on role or to home page
        header("Location: home2.php");
        exit();
    } else {
        echo "<script>alert('Username and password is wrong..');</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
