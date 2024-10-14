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
        // $stmt = "SELECT CD.TelephoneNumber, CD.Service, CD.Name, CD.MobileNumber, CD.Address ,C.Is_Resolved, C.Complain_ID FROM CustomerDetails CD LEFT JOIN Complain C ON C.Telephone_Number = CD.TelephoneNumber WHERE CD.TelephoneNumber = '" . $_GET['telephoneNumber'] . "' AND C.is_resolved = 0";
        $stmt = "SELECT CD.Exchange, CD.Circuit_ID, CD.Name, CD.Address_A, CD.Address_B,CD.Contect,CD.Connectivity,CD.Cable_Lenght ,C.Is_Resolved, C.complain_id FROM circuitdetails CD LEFT JOIN complain C ON C.circuit_id = CD.circuit_id WHERE CD.circuit_id = '" . $_GET['circuit_id'] . "' AND C.Is_Resolved = '0'";
        $result = mysqli_query($conn, $stmt);
        $output = [];

        // find the number of records returned
        $recordsCount = mysqli_num_rows($result);

        // we can fetch in a better way using while loop
        while ($row = mysqli_fetch_assoc($result)) {
            // echo $row;
            $output[] = $row;
        }
    }
    $conn->close();

    echo json_encode($output);
    // echo $output;
}
?>