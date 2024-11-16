<?php
session_start();

// Unset all session variables and destroy the session
session_unset();
session_destroy();

// Clear the session cookie to ensure it can't be reused
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000, 
        $params["path"], $params["domain"], 
        $params["secure"], $params["httponly"]
    );
}

// Prevent caching after logout
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1
header("Pragma: no-cache"); // HTTP 1.0
header("Expires: 0"); // Proxies

// Redirect to login page
header("Location: /index.html");
exit();
?>
