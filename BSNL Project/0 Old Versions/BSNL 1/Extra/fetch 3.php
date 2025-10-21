<?php
// Database Variables
$HOST_NAME = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DABASENAME = "bsnl_test";

// Datanase Connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {
    $stmt = "select * from customerdetails";
    $result = mysqli_query($conn, $stmt);

    // find the number of records returned
    $recordsCount = mysqli_num_rows($result);
    echo "Total Records is Database :: " . $recordsCount;
    echo "<br>";
    echo "<br>";

    // we can fetch in a better way using while loop
    while ($row = mysqli_fetch_assoc($result)) {
        // echo var_dump($row);
        echo "Telephone Number :: ".$row['TelephoneNumber'];
        echo "<br>";
        echo "Name :: ".$row['Name'];
        echo "<br>";
        echo "Address :: ".$row['Address'];
        echo "<br>";
        echo "Number :: ".$row['MobileNumber'];
        echo "<br>";
        echo "Service :: ".$row['Service'];
        echo "<br>";
        echo "<br>";
        echo "<br>";
        }
    }
$conn->close();


?>