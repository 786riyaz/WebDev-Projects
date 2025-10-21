<?php

// Variable Declaration
$telephoneNumber = $_POST['TelephoneNumber'];
$name = "Riyaz";
$address = $_POST['Address'];
$number = $_POST['Number'];
$service = "FTTH";
// echo "telephoneNumber :: ".$telephoneNumber

// Datanase Connection
$conn = new mysqli('localhost', 'root', '', 'bsnl_test');
// $conn->close();
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {
    $stmt = "select * from customerdetails";
    $result = mysqli_query($conn, $stmt);

    // find the number of records returned
    $recordsCount = mysqli_num_rows($result);
    echo "Total Records is Database :: " . $recordsCount;
    echo "<br>";

    // display rows 
    if ($recordsCount > 0) {
        $row = mysqli_fetch_assoc($result);
        echo var_dump($row);
        echo "<br>";

        $row = mysqli_fetch_assoc($result);
        echo var_dump($row);
        echo "<br>";

        $row = mysqli_fetch_assoc($result);
        echo var_dump($row);
        echo "<br>";

        $row = mysqli_fetch_assoc($result);
        echo var_dump($row);
        echo "<br>";

        $row = mysqli_fetch_assoc($result);
        echo var_dump($row);
        echo "<br>";

        $row = mysqli_fetch_assoc($result);
        echo var_dump($row);
        echo "<br>";

        $row = mysqli_fetch_assoc($result);
        echo var_dump($row);
        echo "<br>";
    }
}
$conn->close();


?>