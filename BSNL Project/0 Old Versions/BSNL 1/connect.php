<?php

// Variable Declaration
$telephoneNumber = $_POST['TelephoneNumber'];
$name = "Riyaz";
$address = $_POST['Address'];
$number = $_POST['Number'];
$service = "FTTH";
// echo "telephoneNumber :: ".$telephoneNumber

// Datanase Connection
$conn = new mysqli('localhost','root','','bsnl_test');
// $conn->close();
if($conn -> connect_error){
    die('Connection Failed : '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("Insert Into customerdetails(TelephoneNumber,Name,Address,MobileNumber,Service) values (?,?,?,?,?)");
    $stmt->bind_param("sssis",$telephoneNumber,$name,$address,$number,$service);
    $stmt->execute();
    echo "Registration Done";
    $stmt->close();
    }
    $conn->close();


?>