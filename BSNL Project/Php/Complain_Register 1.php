<?php

// Database Variables
$HOST_NAME = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DABASENAME = "bsnl_test";

// Datanase Connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

// Variable Declaration
$CurrentAddress = $_POST['CurrentAddress'];
$CurrentNumber = $_POST['CurrentNumber'];
$TelephoneNumber = $_POST['TelephoneNumber'];

// $conn->close();
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {
    $stmt = "Insert Into complain (Telephone_Number, Current_Address, Current_Mobile_Number) Values ('" . $TelephoneNumber . "','" . $CurrentAddress . "','" . $CurrentNumber . "')";
    // echo $stmt."<br>";
    $result = mysqli_query($conn, $stmt);
    // echo "Complain Booked";
    echo $result;
    // $stmt->close();
}
$conn->close();
?>