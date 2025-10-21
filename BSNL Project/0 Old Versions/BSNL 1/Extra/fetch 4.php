<?php

if (isset($_POST['telephoneNumber'])) {
    echo "Data received successfully!\n";

    // Process the received data from the AJAX request
    echo "Received TelePhone Number :: " . $_POST['telephoneNumber']. "\n\n";

    // Perform your desired PHP operations here
    echo "Initiating Database Connection!!! \n";

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
        echo "Database Connected Successfully. \n\n";

        $stmt = "select * from customerdetails Where telephonenumber = '".$_POST['telephoneNumber']."'";
        $result = mysqli_query($conn, $stmt);

        // find the number of records returned
        $recordsCount = mysqli_num_rows($result);
        echo "Total Records Found :: " . $recordsCount."\n";
        echo "\n";

        // we can fetch in a better way using while loop
        while ($row = mysqli_fetch_assoc($result)) {
            // echo var_dump($row);
            echo "Telephone Number :: " . $row['TelephoneNumber'];
            echo "\n";
            echo "Name :: " . $row['Name'];
            echo "\n";
            echo "Address :: " . $row['Address'];
            echo "\n";
            echo "Number :: " . $row['MobileNumber'];
            echo "\n";
            echo "Service :: " . $row['Service'];
            echo "\n";
            echo "\n";
            echo "\n";
            $output[] = $row;        
        }
    }
    $conn->close();
    echo json_encode($output);
}


?>