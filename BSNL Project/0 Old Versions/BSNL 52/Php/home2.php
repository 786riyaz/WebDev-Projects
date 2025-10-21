<?php
session_start();

// Ensure the user is logged in
if (!isset($_SESSION['userid'])) {
    header("Location: /Html/login.html");
    exit();
}

// Prevent page caching after login
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1
header("Pragma: no-cache"); // HTTP 1.0
header("Expires: 0"); // Proxies
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Home Page</title>
</head>

<body>
    

    <?php
    // Check user role and include corresponding HTML file
    if (isset($_SESSION['Role'])) {
        if ($_SESSION['Role'] == 'admin') {
            include '../Html/Home.php';  // Corrected path
        } elseif ($_SESSION['Role'] == 'manager') {
            include '../Html/Home.php'; // Corrected path
        } else {
            include '../Html/Home.php'; // Corrected path
        }
    } else {
        echo "Access denied. Please log in.";
    }
    ?>

    <!-- <a href="logout.php">Logout</a> -->
</body>

<script>
    // Prevent the user from using the back button after logout
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
</script>

</html>



<!-- <h1>Welcome, <?php echo htmlspecialchars($_SESSION['userid']); ?>!</h1> -->
