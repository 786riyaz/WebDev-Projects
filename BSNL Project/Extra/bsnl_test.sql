-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2024 at 08:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bsnl_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `complain`
--

CREATE TABLE `complain` (
  `Complain_ID` int(11) NOT NULL,
  `Telephone_Number` varchar(20) NOT NULL,
  `Current_Address` varchar(200) NOT NULL,
  `Current_Mobile_Number` bigint(12) NOT NULL,
  `Complain_Description` varchar(200) NOT NULL,
  `Is_Resolved` tinyint(1) NOT NULL DEFAULT 0,
  `Booking_Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `complain`
--

INSERT INTO `complain` (`Complain_ID`, `Telephone_Number`, `Current_Address`, `Current_Mobile_Number`, `Complain_Description`, `Is_Resolved`, `Booking_Date`) VALUES
(26, '079-123123', '32-A, Sanjar Park-2, Danilimda, Ahmedabad - 380028', 9909221451, '', 0, '2024-09-29 05:08:53');

-- --------------------------------------------------------

--
-- Table structure for table `customerdetails`
--

CREATE TABLE `customerdetails` (
  `TelephoneNumber` varchar(20) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `MobileNumber` bigint(12) NOT NULL,
  `Service` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customerdetails`
--

INSERT INTO `customerdetails` (`TelephoneNumber`, `Name`, `Address`, `MobileNumber`, `Service`) VALUES
('079-123123', 'Riyaz Pathan', '32-A, Sanjar Park-2, Danilimda, Ahmedabad - 380028', 9909221451, 'FTTH'),
('079-234234', 'Arbaz Shaikh', 'Mahetab Nagar, Berrel Market, Danilimda, Ahmedabad - 380028', 6351973814, 'FTTH'),
('079-777777', 'PQR Name', 'PQR Address', 7777777777, 'XYZ'),
('079-786786', 'Tasin Pathan', 'Sanjar Park Ahmedbad', 9974032096, 'FTTH'),
('079-888888', 'XYZ Name', 'XYZ Address', 8888888888, 'XYZ'),
('079-999999', 'ABC Name', 'ABC Address', 9999999999, 'XYZ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `complain`
--
ALTER TABLE `complain`
  ADD PRIMARY KEY (`Complain_ID`);

--
-- Indexes for table `customerdetails`
--
ALTER TABLE `customerdetails`
  ADD PRIMARY KEY (`TelephoneNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `complain`
--
ALTER TABLE `complain`
  MODIFY `Complain_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
