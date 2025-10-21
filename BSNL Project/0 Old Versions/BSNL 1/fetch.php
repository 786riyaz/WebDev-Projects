<?php

if (true) {
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
        $stmt = "select * from customerdetails Where telephonenumber = '".$_GET['telephoneNumber']."'";
        $result = mysqli_query($conn, $stmt);
        $output = [];

        // find the number of records returned
        $recordsCount = mysqli_num_rows($result);

        // we can fetch in a better way using while loop
        while ($row = mysqli_fetch_assoc($result)) {
            $output[] = $row;        
        }
    }
    $conn->close();
    echo json_encode($output);
}
?>