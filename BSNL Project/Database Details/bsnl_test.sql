-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2024 at 09:35 PM
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
-- Table structure for table `circuitdetails`
--

CREATE TABLE `circuitdetails` (
  `Sr_no` int(11) NOT NULL,
  `Exchange` varchar(255) NOT NULL,
  `Circuit_ID` bigint(20) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Address_A` varchar(255) NOT NULL,
  `Address_B` varchar(255) NOT NULL,
  `Contect` bigint(20) NOT NULL,
  `Connectivity` varchar(255) NOT NULL,
  `Cable_Lenght` varchar(255) NOT NULL,
  `work_order_date` date NOT NULL DEFAULT current_timestamp(),
  `Is_Active` tinyint(1) NOT NULL DEFAULT 1,
  `Remove_Reason` varchar(100) NOT NULL,
  `Remove_Date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `circuitdetails`
--
-- --------------------------------------------------------

--
-- Table structure for table `complain`
--

CREATE TABLE `complain` (
  `Complain_ID` int(11) NOT NULL,
  `Exchange` varchar(10) NOT NULL,
  `circuit_id` bigint(20) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Address_A` varchar(200) NOT NULL,
  `contact` bigint(20) NOT NULL,
  `current_contact` bigint(20) NOT NULL,
  `current_address` varchar(220) NOT NULL,
  `booking_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Hidden_Date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Resolution_Duration` int(11) NOT NULL,
  `Hidden_Duration` int(11) NOT NULL,
  `complain_solve_code` int(50) NOT NULL,
  `complain_solve_remark` varchar(100) NOT NULL,
  `complain_solve_date` datetime NOT NULL,
  `Is_Resolved` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `complain`
--



-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userno` int(11) NOT NULL,
  `userid` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `Role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

--
-- Indexes for dumped tables
--

--
-- Indexes for table `circuitdetails`
--
ALTER TABLE `circuitdetails`
  ADD PRIMARY KEY (`Circuit_ID`),
  ADD UNIQUE KEY `Sr_no` (`Sr_no`);

--
-- Indexes for table `complain`
--
ALTER TABLE `complain`
  ADD PRIMARY KEY (`Complain_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `circuitdetails`
--
ALTER TABLE `circuitdetails`
  MODIFY `Sr_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=370;

--
-- AUTO_INCREMENT for table `complain`
--
ALTER TABLE `complain`
  MODIFY `Complain_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
