-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 16, 2024 at 12:58 PM
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

INSERT INTO `circuitdetails` (`Sr_no`, `Exchange`, `Circuit_ID`, `Name`, `Address_A`, `Address_B`, `Contect`, `Connectivity`, `Cable_Lenght`, `work_order_date`, `Is_Active`, `Remove_Reason`, `Remove_Date`) VALUES
(369, 'asdfasdf', 12313, 'asdfasdf', 'asdfasdf', 'asdfasdf', 1231231, 'adfasdf', '123', '2024-10-13', 0, '', '2024-10-13'),
(333, 'AHDAHD', 1000066670, 'State Bank of India', 'SBI Main Branch Nadiad', '', 1000066670, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(332, 'AHDAHD', 1000066930, 'State Bank of India', 'SBI Panchayatbhavan Nadiad', '', 1000066930, '4F', '300', '2024-01-01', 1, '', '2024-10-13'),
(335, 'AHDAHD', 1000067049, 'State Bank of India', 'SBI Collage Road Nadiad', '', 1000067049, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(336, 'AHDAHD', 1000067314, 'State Bank of India', 'SBI Kidney Circle Nadiad', '', 1000067314, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(334, 'AHDAHD', 1000103725, 'HDFC Bank', 'HDFC Bank Nadiad', '', 1000103725, '4F', '150', '2024-01-01', 1, '', '2024-10-13'),
(331, 'AHDAHD', 1000119781, 'State Bank of India', 'SBI R.O Nadiad', '', 1000119781, '4F', '150', '2024-01-01', 1, '', '2024-10-13'),
(204, 'AHDAHD', 1000119800, 'STATE BANK OF INDIA', 'State Bank of India Cambay', '', 1000119800, '4F', '220', '2024-01-01', 1, '', '2024-10-13'),
(282, 'AHDAHD', 1000257433, 'GSWAN', 'Vadodara DC', 'Kheda DC', 1000257433, '4F', '280', '2024-01-01', 1, '', '2024-10-13'),
(283, 'AHDAHD', 1000257467, 'GSWAN', 'Kheda DC', 'Anand DC', 1000257467, '4F', '280', '2024-01-01', 1, '', '2024-10-13'),
(281, 'AHDAHD', 1000257489, 'GSWAN', 'SDC, Gandhinagar', 'Kheda DC', 1000257489, '4F', '280', '2024-01-01', 1, '', '2024-10-13'),
(158, 'AHDAHD', 1000258019, 'GSWAN', 'Dholera TC', 'Dhandhuka TC', 1000258019, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(291, 'AHDAHD', 1000258093, 'GSWAN', 'Vaso TC', 'Matar TC', 1000258093, '4F', '860', '2024-01-01', 1, '', '2024-10-13'),
(289, 'AHDAHD', 1000258102, 'GSWAN', 'Nadiad DC', 'Vaso TC', 1000258102, '4F', '740', '2024-01-01', 1, '', '2024-10-13'),
(286, 'AHDAHD', 1000258115, 'GSWAN', 'Kheda TC', 'MEHMEDABAD TC', 1000258115, '4F', '750', '2024-01-01', 1, '', '2024-10-13'),
(284, 'AHDAHD', 1000258255, 'GSWAN', 'Mahudha TC (Thasara TC)', 'Nadiad DC', 1000258255, '4F', '280', '2024-01-01', 1, '', '2024-10-13'),
(285, 'AHDAHD', 1000258288, 'GSWAN', 'Kapadvanj TC', 'Thasra TC', 1000258288, '4F', '900', '2024-01-01', 1, '', '2024-10-13'),
(292, 'AHDAHD', 1000258289, 'GSWAN', 'Kathlal TC', 'Kapadvanj TC', 1000258289, '4F', '890', '2024-01-01', 1, '', '2024-10-13'),
(290, 'AHDAHD', 1000258297, 'GSWAN', 'Thasra TC', 'Galteshwar TC', 1000258297, '4F', '670', '2024-01-01', 1, '', '2024-10-13'),
(288, 'AHDAHD', 1000258298, 'GSWAN', 'Galteshwar TC', 'MAHUDHA TC', 1000258298, '4F', '670', '2024-01-01', 1, '', '2024-10-13'),
(287, 'AHDAHD', 1000258299, 'GSWAN', 'Mehmedabad TC', 'KATHLAL TC', 1000258299, '4F', '1000', '2024-01-01', 1, '', '2024-10-13'),
(354, 'AHDAHD', 1000278515, 'GSWAN', 'ANAND DC', 'KARAMSAD NAGARPALIKA', 1000278515, '4F', '620', '2024-01-01', 1, '', '2024-10-13'),
(301, 'AHDAHD', 1000278565, 'GSWAN', 'Kheda DC', 'DDO', 1000278565, '4F', '377', '2024-01-01', 1, '', '2024-10-13'),
(302, 'AHDAHD', 1000278566, 'GSWAN', 'Kheda DC', 'M.S.Building', 1000278566, '4F', '677', '2024-01-01', 1, '', '2024-10-13'),
(340, 'AHDAHD', 1000278605, 'GSWAN', 'Balasinor TC', 'Treasury Office', 1000278605, '4F', '700', '2024-01-01', 1, '', '2024-10-13'),
(293, 'AHDAHD', 1000278699, 'GSWAN', 'Mahemadabad TC', 'Nagarpalika', 1000278699, '4F', '612', '2024-01-01', 1, '', '2024-10-13'),
(202, 'AHDAHD', 1000278710, 'GSWAN', 'Nagarpalika Cambay', 'Sevasadan Cambay', 1000278710, '4F', '270', '2024-01-01', 1, '', '2024-10-13'),
(300, 'AHDAHD', 1000278727, 'GSWAN', 'Kheda DC', 'Chakalsi police station', 1000278727, '4F', '984', '2024-01-01', 1, '', '2024-10-13'),
(298, 'AHDAHD', 1000278780, 'GSWAN', 'Kheda DC', 'Dist. Court', 1000278780, '4F', '1100', '2024-01-01', 1, '', '2024-10-13'),
(349, 'AHDAHD', 1000278797, 'GSWAN', 'UMRETH TC', 'UMRETH NAGARPALIKA', 1000278797, '4F', '644', '2024-01-01', 1, '', '2024-10-13'),
(299, 'AHDAHD', 1000278812, 'GSWAN', 'Kheda DC', 'Civil Hospital', 1000278812, '4F', '526', '2024-01-01', 1, '', '2024-10-13'),
(341, 'AHDAHD', 1000278870, 'GSWAN', 'Virpur TC', 'TDO Office', 1000278870, '4F', '250', '2024-01-01', 1, '', '2024-10-13'),
(342, 'AHDAHD', 1000278913, 'GSWAN', 'Kapadwanj TC', 'SDOP', 1000278913, '4F', '600', '2024-01-01', 1, '', '2024-10-13'),
(339, 'AHDAHD', 1000278918, 'GSWAN', 'Balasinor TC', 'Balasinor Police Station', 1000278918, '4F', '500', '2024-01-01', 1, '', '2024-10-13'),
(294, 'AHDAHD', 1000278923, 'GSWAN', 'Kheda TC', 'KHEDA POLICE STATION', 1000278923, '4F', '250', '2024-01-01', 1, '', '2024-10-13'),
(296, 'AHDAHD', 1000278926, 'GSWAN', 'Thasra TC', 'Police Station', 1000278926, '4F', '211', '2024-01-01', 1, '', '2024-10-13'),
(297, 'AHDAHD', 1000278927, 'GSWAN', 'Thasra TC', 'Nagarpalika', 1000278927, '4F', '742', '2024-01-01', 1, '', '2024-10-13'),
(160, 'AHDAHD', 1000278973, 'GSWAN', 'Barvala TC', 'Nagar Palika', 1000278973, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(295, 'AHDAHD', 1000278980, 'GSWAN', 'Mahudha TC', 'Police Station', 1000278980, '4F', '1399', '2024-01-01', 1, '', '2024-10-13'),
(205, 'AHDAHD', 1000278993, 'GSWAN', 'PTD College X', 'Irrigation office (Mahi Canal)', 1000278993, '4F', '350', '2024-01-01', 1, '', '2024-10-13'),
(206, 'AHDAHD', 1000279025, 'GSWAN', 'Sojitra Exchange', 'Nagarpalika Sojitra', 1000279025, '4F', '950', '2024-01-01', 1, '', '2024-10-13'),
(353, 'AHDAHD', 1000279052, 'GSWAN', 'ANAND DC', 'VIDHYANAGAR NAGARPALIKA', 1000279052, '4F', '741', '2024-01-01', 1, '', '2024-10-13'),
(159, 'AHDAHD', 1000279062, 'GSWAN', 'Gandhinagar DC', 'IGP Office', 1000279062, '4F', '188', '2024-01-01', 1, '', '2024-10-13'),
(162, 'AHDAHD', 1000289648, 'GSWAN', 'Dehgam TC', 'ITI', 1000289648, '4F', '360', '2024-01-01', 1, '', '2024-10-13'),
(161, 'AHDAHD', 1000289650, 'GSWAN', 'IGP Office', 'City Survey Office Pethapur', 1000289650, '4F', '1020', '2024-01-01', 1, '', '2024-10-13'),
(167, 'AHDAHD', 1000289943, 'GSWAN', 'Ahmedabad DC', 'Gujarat Educational Institutions Services Tribunal.', 1000289943, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(355, 'AHDAHD', 1000289963, 'GSWAN', 'VVN NAGARPALIKA', 'GUJARAT NCC CTC GSWAN', 1000289963, '4F', '424', '2024-01-01', 1, '', '2024-10-13'),
(163, 'AHDAHD', 1000289967, 'GSWAN', 'Gujarat High Court, Sola', 'Range Forest Office Dascroi', 1000289967, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(168, 'AHDAHD', 1000289968, 'GSWAN', 'Daskroi TC', 'ITI Maninagar', 1000289968, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(178, 'AHDAHD', 1000289977, 'GSWAN', 'SRPF-2 Naroda', 'Krushnanagar Police Station', 1000289977, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(169, 'AHDAHD', 1000289978, 'GSWAN', 'Daskroi TC', 'Mahila ITI Maninagar', 1000289978, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(170, 'AHDAHD', 1000289979, 'GSWAN', 'DSP office, Sarkhej', 'Sarkhej ITI', 1000289979, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(362, 'AHDAHD', 1000289980, 'GSWAN', 'KHAMBHOLAJ POLICE STATION', 'CITY SURVEY OFFICE SARSA', 1000289980, '4F', '115', '2024-01-01', 0, '', '2024-10-13'),
(164, 'AHDAHD', 1000289986, 'GSWAN', 'SRPF-2 Naroda', 'City Survey Office Saijpur Bogha', 1000289986, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(165, 'AHDAHD', 1000289987, 'GSWAN', 'SRPF-2 Naroda', 'City Survey Office Naroda', 1000289987, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(171, 'AHDAHD', 1000289992, 'GSWAN', 'Mahiti Office', 'Gujarat Compo(Tech)Company NCC, LD Engineering Campus, Univercity Road Ahmedabad', 1000289992, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(179, 'AHDAHD', 1000289994, 'GSWAN', 'Ahmedabad DC', 'Vejalpur Chavdi, Vejalpur', 1000289994, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(172, 'AHDAHD', 1000290001, 'GSWAN', 'MS Building Bhadra', 'House Master Shri Narsinh Bhagat Chatralay', 1000290001, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(173, 'AHDAHD', 1000290012, 'GSWAN', 'MS Building Bhadra', 'C Division Traffic Police Station', 1000290012, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(174, 'AHDAHD', 1000290014, 'GSWAN', 'R & B Bhavan, Vastrapur', 'Mahila ITI Thaltej', 1000290014, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(176, 'AHDAHD', 1000290015, 'GSWAN', 'Sales tax Bhavan, Ashram Road', 'Municipal School Board,Ahmedabad', 1000290015, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(166, 'AHDAHD', 1000290019, 'GSWAN', 'R & B Bhavan, Vastrapur', 'ACP A Division (Ahmedabad City)', 1000290019, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(350, 'AHDAHD', 1000290022, 'GSWAN', 'KHAMBHOLAJ POLICE STATION', 'BHALEJ POLICE STATION', 1000290022, '4F', '950', '2024-01-01', 1, '', '2024-10-13'),
(343, 'AHDAHD', 1000290027, 'GSWAN', 'Balasinor TC', 'City Survey Office BNO', 1000290027, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(175, 'AHDAHD', 1000290031, 'GSWAN', 'RajpurHirpur Chavdi, Kalupur', 'Saraspur ITI', 1000290031, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(180, 'AHDAHD', 1000290033, 'GSWAN', 'Khokhra Chavdi, Khokhra', 'IIT RAM Khokhra', 1000290033, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(177, 'AHDAHD', 1000290036, 'GSWAN', 'Sales tax Vasna', 'Director for Rural Development (DRDA) and Gujarat Livelihood Promotion Company Ltd', 1000290036, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(303, 'AHDAHD', 1000290043, 'GSWAN', 'Civil hospital', 'Citv Survey Office Uttarsanda ', 1000290043, '4F', '50', '2024-01-01', 1, '', '2024-10-13'),
(348, 'AHDAHD', 1000290045, 'GSWAN', 'KHAMBHOLAJ POLICE STATION', 'CITY SURVEY KHAMBHOLAJ', 1000290045, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(181, 'AHDAHD', 1000291074, 'GSWAN', 'Daskroi TC', 'I Division Traffic Police Station', 1000291074, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(337, 'AHDAHD', 1000302203, 'ILL', 'AJS Honda Nadiad', '', 1000302203, '4F', '200', '2024-01-01', 1, '', '2024-10-13'),
(182, 'AHDAHD', 1000303298, 'GSWAN', 'DSP Office ,Gandhinagar', 'City Survey Office Rupal', 1000303298, '4F', '342', '2024-01-01', 1, '', '2024-10-13'),
(183, 'AHDAHD', 1000303299, 'GSWAN', 'DSP Office ,Gandhinagar', 'City Survey Office Randheja', 1000303299, '4F', '572', '2024-01-01', 1, '', '2024-10-13'),
(351, 'AHDAHD', 1000305362, 'GSWAN', 'KHAMBHOLAJ POLICE STATION', 'CITY SURVEY BHALEJ', 1000305362, '4F', '128', '2024-01-01', 1, '', '2024-10-13'),
(184, 'AHDAHD', 1000305363, 'GSWAN', 'MS building,Gandhinagar', 'City Survey Office Adalaj', 1000305363, '4F', '1220', '2024-01-01', 1, '', '2024-10-13'),
(304, 'AHDAHD', 1000305376, 'GSWAN', 'Kheda TC,Kheda', 'Agriculture Navagam', 1000305376, '4F', '620', '2024-01-01', 1, '', '2024-10-13'),
(352, 'AHDAHD', 1000305384, 'GSWAN', 'KHAMBHOLAJ POLICE STATION', 'CITY SURVEY ODE', 1000305384, '4F', '536', '2024-01-01', 1, '', '2024-10-13'),
(305, 'AHDAHD', 1000305519, 'GSWAN', 'Kheda TC,Kheda', 'Prant Office, Kheda', 1000305519, '4F', '150', '2024-01-01', 1, '', '2024-10-13'),
(185, 'AHDAHD', 1000305671, 'GSWAN', 'DSP Office', 'Bopal Police Station', 1000305671, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(186, 'AHDAHD', 1000305830, 'GSWAN', 'Ahmedabad DC', 'Shrambhavan', 1000305830, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(187, 'AHDAHD', 1000307210, 'GSWAN', 'Ahmedabad DC', 'IAS Colony Samrpan Flats', 1000307210, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(356, 'AHDAHD', 1000317163, 'GSWAN', 'ANKLAV TC', 'ANKLAV POLICE STATION', 1000317163, '4F', '957', '2024-01-01', 1, '', '2024-10-13'),
(189, 'AHDAHD', 1000317429, 'GSWAN', 'Ahmedabad DC', 'Khadia Police Station', 1000317429, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(188, 'AHDAHD', 1000317640, 'GSWAN', 'Mahiti Office, Ahmedabad', 'Govt. Girls Polytec., Navrangpura, Ahmedabad', 1000317640, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(190, 'AHDAHD', 1000318474, 'GSWAN', 'R&B Bhavan, Vastrapur', 'M.S.Building, Bahumali Bhavan, Vastrapur', 1000318474, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(143, 'AHDAHD', 1000319954, 'Namo Wifi', 'Govt Polytechnic', 'GOVT POLYTECHNIC WIFI AP 1 TO 7,MDO DEPT OF EDUCATION  GANDHINAGAR GANDHINAGAR 382610 GANDHINAGAR,GANDHINAGAR GJ INDIA', 1000319954, '4F', '500', '2024-01-01', 1, '', '2024-10-13'),
(145, 'AHDAHD', 1000320114, 'Namo Wifi', 'L D Engineering College', 'L D COLLEGE OF ENGG WIFI AP 1 TO 7,MDO DEPT OF EDUCATION  AHMEDABAD AHMEDABAD 380001 AHMEDABAD,AHMEDABAD GJ INDIA', 1000320114, '4F', '850', '2024-01-01', 1, '', '2024-10-13'),
(144, 'AHDAHD', 1000320134, 'Namo Wifi', 'Govt Science College', 'GOVERNMENT SCIENCE COLLEGE WIFI AP 1 TO 7,MDO DEPT OF EDUCATION GANDHINAGAR GANDHINAGAR 382610 GANDHINAGAR,GANDHINAGAR GJ INDIA', 1000320134, '4F', '180', '2024-01-01', 1, '', '2024-10-13'),
(142, 'AHDAHD', 1000320135, 'Namo Wifi', 'Govt. Engg. College', 'GOVERNMENT ENGG COLLEGE WIFI AP 1 TO 7,MDO DEPT OF EDUCATION GANDHINAGAR GANDHINAGAR382610', 1000320135, '4F', '700', '2024-01-01', 1, '', '2024-10-13'),
(306, 'AHDAHD', 1000320408, 'GSWAN', 'Chaklasi Police Station', 'Chaklasi City Survey', 1000320408, '4F', '871', '2024-01-01', 1, '', '2024-10-13'),
(191, 'AHDAHD', 1000321488, 'GSWAN', 'Ahmedabad DC', 'New Asarwa Mamlatdar office', 1000321488, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(307, 'AHDAHD', 1000326423, 'GSWAN', 'Kheda TC', 'Taluka Court, Kheda', 1000326423, '4F', '340', '2024-01-01', 1, '', '2024-10-13'),
(203, 'AHDAHD', 1000326429, 'GSWAN', 'Taluka Court Cambay', 'Nagarpalika Cambay', 1000326429, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(118, 'AHDAHD', 1000328092, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 1370 Camera: CSITMS Soni ni Chali Cross Road', 1000328092, '4F', '440', '2024-01-01', 1, '', '2024-10-13'),
(106, 'AHDAHD', 1000328143, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 1301 Junctions Cross Road Prahalanagara T Points Junction', 1000328143, '4F', '228', '2024-01-01', 1, '', '2024-10-13'),
(344, 'AHDAHD', 1000331013, 'GSWAN', 'Kapadwanj TC', 'Kapadwanj Rural Police Station', 1000331013, '4F', '200', '2024-01-01', 1, '', '2024-10-13'),
(338, 'AHDAHD', 1000340276, 'ILL', 'Agis Gas Limbasi', '', 1000340276, '4F', '165', '2024-01-01', 1, '', '2024-10-13'),
(309, 'AHDAHD', 1000341481, 'GSWAN', 'Nagarpalika Mehmedabad', 'ITI Office sardarnagar,Behind Railway Station', 1000341481, '4F', '650', '2024-01-01', 1, '', '2024-10-13'),
(310, 'AHDAHD', 1000341522, 'GSWAN', 'Mehmadabad TC', 'CPI Office', 1000341522, '4F', '600', '2024-01-01', 1, '', '2024-10-13'),
(308, 'AHDAHD', 1000341524, 'GSWAN', 'Mehmadabad TC', 'Range Forest Office', 1000341524, '4F', '890', '2024-01-01', 1, '', '2024-10-13'),
(311, 'AHDAHD', 1000342590, 'GSWAN', 'Nadiad DC', 'Nagarpalika Nadiad', 1000342590, '4F', '270', '2024-01-01', 1, '', '2024-10-13'),
(97, 'AHDAHD', 1000345294, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 1164 School BAPUNAGAR 13', 1000345294, '4F', '195', '2024-01-01', 1, '', '2024-10-13'),
(99, 'AHDAHD', 1000345311, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 1180 School RAJPUR 1 G (FTTH)-4', 1000345311, '4F', '169', '2024-01-01', 1, '', '2024-10-13'),
(16, 'AHDAHD', 1000345337, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 379 Sensors Water:WDS G Ward', 1000345337, '4F', '190', '2024-01-01', 1, '', '2024-10-13'),
(87, 'AHDAHD', 1000345422, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1033 School JAMALPUR PRIMARY SCHOOL 7', 1000345422, '4F', '90', '2024-01-01', 1, '', '2024-10-13'),
(133, 'AHDAHD', 1000355172, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 1593 River Front Event Centre', 1000355172, '4F', '276', '2024-01-01', 1, '', '2024-10-13'),
(4, 'AHDAHD', 1000356106, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 73 UHC KALUPUR', 1000356106, '4F', '333', '2024-01-01', 1, '', '2024-10-13'),
(1, 'AHDAHD', 1000356107, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 37 Ward Office 38 GOMTIPUR(RAJPUR WARD OFFICE)', 1000356107, '4F', '51', '2024-01-01', 0, 'asdfasdfasdf', '2024-10-13'),
(74, 'AHDAHD', 1000356119, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 821 Junctions Cross Road Odhav Ring road Cross road', 1000356119, '4F', '129', '2024-01-01', 1, '', '2024-10-13'),
(11, 'AHDAHD', 1000356123, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 222 Municipal Parks Rashmi Shukla Udhyan Gordhanwadi', 1000356123, '4F', '244', '2024-01-01', 1, '', '2024-10-13'),
(8, 'AHDAHD', 1000356130, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 164 Municipal Parks Asavalli garden', 1000356130, '4F', '202', '2024-01-01', 1, '', '2024-10-13'),
(10, 'AHDAHD', 1000356188, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 220 Municipal Parks Dr Ambedkar Udhyan,Nr Jogni Mata Mandir Majur Gam', 1000356188, '4F', '163', '2024-01-01', 1, '', '2024-10-13'),
(9, 'AHDAHD', 1000356261, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 213 Municipal Parks Manchani Masjid garden,Opp Ambar Cinema', 1000356261, '4F', '155', '2024-01-01', 1, '', '2024-10-13'),
(3, 'AHDAHD', 1000356317, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 64 UHC RAJPUR', 1000356317, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(13, 'AHDAHD', 1000356354, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 253 Municipal Parks Pacha Lake (FTTH)-3', 1000356354, '4F', '507', '2024-01-01', 1, '', '2024-10-13'),
(135, 'AHDAHD', 1000358810, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 1619 Viratnagar Fuvara Circle- Gherapar', 1000358810, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(134, 'AHDAHD', 1000363662, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 1596 Usmanpura Underpass', 1000363662, '4F', '151', '2024-01-01', 1, '', '2024-10-13'),
(345, 'AHDAHD', 1000379827, 'GSWAN', 'Balasinor TC', 'VD Balasinor', 1000379827, '4F', '150', '2024-01-01', 1, '', '2024-10-13'),
(75, 'AHDAHD', 1000385096, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 894 Police station Polic SHAR KOTDA POLICE STATION', 1000385096, '4F', '153', '2024-01-01', 1, '', '2024-10-13'),
(312, 'AHDAHD', 1000385311, 'GSWAN', 'DDO NADIAD', 'DIC NADIAD', 1000385311, '4F', '300', '2024-01-01', 1, '', '2024-10-13'),
(25, 'AHDAHD', 1000387498, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 496 Sensors Water:Pumpin Gomtipur DR Pumping Station(PURE WATER)', 1000387498, '4F', '160', '2024-01-01', 1, '', '2024-10-13'),
(79, 'AHDAHD', 1000391194, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 951 Police station Polic RIVERFRONT EAST POLICE STATION (FTTH)-4', 1000391194, '4F', '94', '2024-01-01', 1, '', '2024-10-13'),
(148, 'AHDAHD', 1000391713, 'SASGUJ', 'Police Station, Bopal', 'Manipur Three cross Road', 1000391713, '4F', '1800', '2024-01-01', 1, '', '2024-10-13'),
(149, 'AHDAHD', 1000391715, 'SASGUJ', 'Police Station, Bopal', 'Inductotherm Company Bopal', 1000391715, '4F', '372', '2024-01-01', 1, '', '2024-10-13'),
(150, 'AHDAHD', 1000391758, 'SASGUJ', 'Police Station, Bopal', 'Back side of sterling city Bopal', 1000391758, '4F', '1405', '2024-01-01', 1, '', '2024-10-13'),
(156, 'AHDAHD', 1000391787, 'SASGUJ', 'Ch-4-B Dena Bank Jilla Panchayat', 'Circle Corner Tree', 1000391787, '4F', '500', '2024-01-01', 1, '', '2024-10-13'),
(146, 'AHDAHD', 1000391791, 'SASGUJ', 'Police Station, Bopal', 'Police Station, Near Umiya Temple Bopal', 1000391791, '4F', '50', '2024-01-01', 1, '', '2024-10-13'),
(152, 'AHDAHD', 1000391802, 'SASGUJ', 'Chh-3 Birsamunda Gate Sec-10', 'Circle Tree', 1000391802, '4F', '125', '2024-01-01', 1, '', '2024-10-13'),
(153, 'AHDAHD', 1000391813, 'SASGUJ', 'Chh-3 Birsamunda Gate Sec-10', 'Indroda Village Cut', 1000391813, '4F', '1305', '2024-01-01', 1, '', '2024-10-13'),
(154, 'AHDAHD', 1000391817, 'SASGUJ', 'J-5 Opp Rajbhavan Gate Cut', 'Circle Board', 1000391817, '4F', '234', '2024-01-01', 1, '', '2024-10-13'),
(157, 'AHDAHD', 1000391875, 'SASGUJ', 'uvarsads Chowkdi', 'BSNl Chamber', 1000391875, '4F', '255', '2024-01-01', 1, '', '2024-10-13'),
(155, 'AHDAHD', 1000391882, 'SASGUJ', 'Ch-7 Sec-30 Cut Road', 'Circle Tree', 1000391882, '4F', '650', '2024-01-01', 1, '', '2024-10-13'),
(147, 'AHDAHD', 1000391891, 'SASGUJ', 'Police Station, Bopal', 'Ghuma Bus Station, three Cross Road Bopal', 1000391891, '4F', '128', '2024-01-01', 1, '', '2024-10-13'),
(151, 'AHDAHD', 1000391956, 'SASGUJ', 'POLICE STATION SASGUJ AHD035,AHMEDABAD RURAL AHMEDABAD AHMEDABAD 380001 SANAND,AHMEDABAD RURAL GJINDIA', 'GODAGADI STATION SANAND,SASGUJ AHD035 AHMEDABAD AHMEDABAD 380001 SANAND,AHMEDABAD RURAL GJ INDIA', 1000391956, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(240, 'AHDAHD', 1000392761, 'SASGUJ', 'SP, Nadiad', 'Express Way Tambu Police Choki', 1000392761, '4F', '150', '2024-01-01', 1, '', '2024-10-13'),
(238, 'AHDAHD', 1000392772, 'SASGUJ', 'Control Centre', 'Police Station', 1000392772, '4F', '2500', '2024-01-01', 1, '', '2024-10-13'),
(243, 'AHDAHD', 1000392773, 'SASGUJ', 'SP, Nadiad', 'Kamala Chockdi', 1000392773, '4F', '560', '2024-01-01', 1, '', '2024-10-13'),
(244, 'AHDAHD', 1000392774, 'SASGUJ', 'SP, Nadiad', 'Shreenath Vatika Pij Road', 1000392774, '4F', '880', '2024-01-01', 1, '', '2024-10-13'),
(242, 'AHDAHD', 1000392775, 'SASGUJ', 'SP, Nadiad', 'Bilodara Cross Road', 1000392775, '4F', '2050', '2024-01-01', 1, '', '2024-10-13'),
(237, 'AHDAHD', 1000392776, 'SASGUJ', 'Police Station, Dakor', 'Punit asharam Three ways', 1000392776, '4F', '371', '2024-01-01', 1, '', '2024-10-13'),
(239, 'AHDAHD', 1000392777, 'SASGUJ', 'SP, Nadiad', 'Nadiad DC', 1000392777, '4F', '874', '2024-01-01', 1, '', '2024-10-13'),
(245, 'AHDAHD', 1000392779, 'SASGUJ', 'SP, Nadiad', 'Railway Station- Tulsi Hotel', 1000392779, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(252, 'AHDAHD', 1000392780, 'SASGUJ', 'SP, Nadiad', 'Sardar statue (station road)', 1000392780, '4F', '433', '2024-01-01', 1, '', '2024-10-13'),
(259, 'AHDAHD', 1000392781, 'SASGUJ', 'SP, Nadiad', 'Santram Moti Shak Market', 1000392781, '4F', '567', '2024-01-01', 1, '', '2024-10-13'),
(233, 'AHDAHD', 1000392783, 'SASGUJ', 'Police Station, Dakor', 'Dakor new bus station (Strategic)', 1000392783, '4F', '250', '2024-01-01', 1, '', '2024-10-13'),
(258, 'AHDAHD', 1000392784, 'SASGUJ', 'SP, Nadiad', 'Kidney Circle', 1000392784, '4F', '907', '2024-01-01', 1, '', '2024-10-13'),
(232, 'AHDAHD', 1000392785, 'SASGUJ', 'Police Station, Dakor', 'Vikram vijay gate (Strategic)', 1000392785, '4F', '381', '2024-01-01', 1, '', '2024-10-13'),
(253, 'AHDAHD', 1000392786, 'SASGUJ', 'SP, Nadiad', 'Akshar Motel (BUS Stand)', 1000392786, '4F', '198', '2024-01-01', 1, '', '2024-10-13'),
(231, 'AHDAHD', 1000392788, 'SASGUJ', 'Police Station, Dakor', 'Mangal Seva Dham (Strategic)', 1000392788, '4F', '566', '2024-01-01', 1, '', '2024-10-13'),
(257, 'AHDAHD', 1000392789, 'SASGUJ', 'SP, Nadiad', 'Vaniyavad Circle', 1000392789, '4F', '609', '2024-01-01', 1, '', '2024-10-13'),
(248, 'AHDAHD', 1000392790, 'SASGUJ', 'SP, Nadiad', 'Chaklasi Bhagol', 1000392790, '4F', '871', '2024-01-01', 1, '', '2024-10-13'),
(247, 'AHDAHD', 1000392791, 'SASGUJ', 'SP, Nadiad', 'Mafatlal Mil Tri Road', 1000392791, '4F', '289', '2024-01-01', 1, '', '2024-10-13'),
(256, 'AHDAHD', 1000392793, 'SASGUJ', 'SP, Nadiad', 'Mahagujarat Circle', 1000392793, '4F', '733', '2024-01-01', 1, '', '2024-10-13'),
(255, 'AHDAHD', 1000392794, 'SASGUJ', 'SP, Nadiad', 'Paras Circle', 1000392794, '4F', '697', '2024-01-01', 1, '', '2024-10-13'),
(358, 'AHDAHD', 1000392795, 'SASGUJ', 'CONTROL CENTER', 'SASGUJ APC CHAR RASTA', 1000392795, '4F', '526', '2024-01-01', 1, '', '2024-10-13'),
(251, 'AHDAHD', 1000392796, 'SASGUJ', 'SP, Nadiad', 'Daban Bhagol POLICE Choki', 1000392796, '4F', '820', '2024-01-01', 1, '', '2024-10-13'),
(250, 'AHDAHD', 1000392797, 'SASGUJ', 'SP, Nadiad', 'Kabrastan Chokdi (kanipura- BSNL Tower )', 1000392797, '4F', '200', '2024-01-01', 1, '', '2024-10-13'),
(249, 'AHDAHD', 1000392798, 'SASGUJ', 'SP, Nadiad', 'Marida Bhagol', 1000392798, '4F', '1100', '2024-01-01', 1, '', '2024-10-13'),
(236, 'AHDAHD', 1000392799, 'SASGUJ', 'Police Station, Dakor', 'Patel Guest House ni same main road', 1000392799, '4F', '274', '2024-01-01', 1, '', '2024-10-13'),
(246, 'AHDAHD', 1000392800, 'SASGUJ', 'SP, Nadiad', 'Sardar Bhavan-tri road', 1000392800, '4F', '727', '2024-01-01', 1, '', '2024-10-13'),
(254, 'AHDAHD', 1000392816, 'SASGUJ', 'SP, Nadiad', 'Santram Circle', 1000392816, '4F', '240', '2024-01-01', 1, '', '2024-10-13'),
(360, 'AHDAHD', 1000392817, 'SASGUJ', 'CONTROL CENTER', 'SASGUJ JANTA XING', 1000392817, '4F', '239', '2024-01-01', 1, '', '2024-10-13'),
(361, 'AHDAHD', 1000392820, 'SASGUJ', 'CONTROL CENTER', 'SASGUJ AND NAGARPALIKA HOSPITAL', 1000392820, '4F', '400', '2024-01-01', 1, '', '2024-10-13'),
(277, 'AHDAHD', 1000392821, 'SASGUJ', 'SP, Nadiad', 'Santarm Dairy', 1000392821, '4F', '734', '2024-01-01', 1, '', '2024-10-13'),
(275, 'AHDAHD', 1000392835, 'SASGUJ', 'SP, Nadiad', 'Jilla Panchyat Office', 1000392835, '4F', '980', '2024-01-01', 1, '', '2024-10-13'),
(211, 'AHDAHD', 1000392837, 'SASGUJ', 'Police Station, Dakor', 'Welcome Patiya NADIAD - DAKOR ROAD', 1000392837, '4F', '910', '2024-01-01', 1, '', '2024-10-13'),
(274, 'AHDAHD', 1000392838, 'SASGUJ', 'SP, Nadiad', 'Shreyas Garnala (railiway line)', 1000392838, '4F', '589', '2024-01-01', 1, '', '2024-10-13'),
(272, 'AHDAHD', 1000392839, 'SASGUJ', 'SP, Nadiad', 'Devashish Park Kishnsmosa No Kancho', 1000392839, '4F', '1395', '2024-01-01', 1, '', '2024-10-13'),
(216, 'AHDAHD', 1000392853, 'SASGUJ', 'Police Station, Dakor', 'Ganesh Cinema (Strategic)', 1000392853, '4F', '335', '2024-01-01', 1, '', '2024-10-13'),
(279, 'AHDAHD', 1000392857, 'SASGUJ', 'SP, Nadiad', 'Neelkanth Mahadev Temple', 1000392857, '4F', '365', '2024-01-01', 1, '', '2024-10-13'),
(214, 'AHDAHD', 1000392858, 'SASGUJ', 'Police Station, Dakor', 'Traffic circle', 1000392858, '4F', '221', '2024-01-01', 1, '', '2024-10-13'),
(222, 'AHDAHD', 1000392859, 'SASGUJ', 'Police Station, Dakor', 'Veray mata temple Chowkdi', 1000392859, '4F', '319', '2024-01-01', 1, '', '2024-10-13'),
(219, 'AHDAHD', 1000392860, 'SASGUJ', 'Police Station, Dakor', 'Laxmi Temple (Strategic)', 1000392860, '4F', '284', '2024-01-01', 1, '', '2024-10-13'),
(221, 'AHDAHD', 1000392861, 'SASGUJ', 'Police Station, Dakor', 'Don Bosco School', 1000392861, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(278, 'AHDAHD', 1000392893, 'SASGUJ', 'SP, Nadiad', 'Patel bakery', 1000392893, '4F', '515', '2024-01-01', 1, '', '2024-10-13'),
(280, 'AHDAHD', 1000392895, 'SASGUJ', 'SP, Nadiad', 'Samta Party Plot', 1000392895, '4F', '510', '2024-01-01', 1, '', '2024-10-13'),
(215, 'AHDAHD', 1000392898, 'SASGUJ', 'Police Station, Dakor', 'Gandhiji Statue (Strategic)', 1000392898, '4F', '303', '2024-01-01', 1, '', '2024-10-13'),
(223, 'AHDAHD', 1000392900, 'SASGUJ', 'Police Station, Dakor', 'Satyam residency ni Chowkdi', 1000392900, '4F', '384', '2024-01-01', 1, '', '2024-10-13'),
(271, 'AHDAHD', 1000392913, 'SASGUJ', 'SP, Nadiad', 'Fatehpura Road (jak n jil school)', 1000392913, '4F', '839', '2024-01-01', 1, '', '2024-10-13'),
(212, 'AHDAHD', 1000392914, 'SASGUJ', 'Police Station, Dakor', 'Dakor railway station TRI ROAD (MAHAKALI TEMPLE)', 1000392914, '4F', '350', '2024-01-01', 1, '', '2024-10-13'),
(213, 'AHDAHD', 1000392915, 'SASGUJ', 'Police Station, Dakor', 'Mahudha T point (Entry/ Exit)', 1000392915, '4F', '2500', '2024-01-01', 1, '', '2024-10-13'),
(217, 'AHDAHD', 1000392916, 'SASGUJ', 'Police Station, Dakor', 'Bodana Statue (Strategic)', 1000392916, '4F', '191', '2024-01-01', 1, '', '2024-10-13'),
(218, 'AHDAHD', 1000392917, 'SASGUJ', 'Police Station, Dakor', 'Purshottam Bhavan (Strategic)', 1000392917, '4F', '227', '2024-01-01', 1, '', '2024-10-13'),
(220, 'AHDAHD', 1000392918, 'SASGUJ', 'Police Station, Dakor', 'GOMTI GHAT (Strategic)', 1000392918, '4F', '55', '2024-01-01', 1, '', '2024-10-13'),
(276, 'AHDAHD', 1000392921, 'SASGUJ', 'SP, Nadiad', 'Chandani Chock Poonam Bakery Near Railway crossing', 1000392921, '4F', '1031', '2024-01-01', 1, '', '2024-10-13'),
(357, 'AHDAHD', 1000392922, 'SASGUJ', 'CONTROL CENTER', 'SASGUJ KARAMSAD CIRCLE', 1000392922, '4F', '115', '2024-01-01', 1, '', '2024-10-13'),
(208, 'AHDAHD', 1000392924, 'SASGUJ', 'Police Station, Dakor', 'Mandir Tower (Strategic)', 1000392924, '4F', '332', '2024-01-01', 1, '', '2024-10-13'),
(229, 'AHDAHD', 1000392926, 'SASGUJ', 'Police Station, Dakor', 'Goli no Tekro (Strategic)', 1000392926, '4F', '350', '2024-01-01', 1, '', '2024-10-13'),
(230, 'AHDAHD', 1000392927, 'SASGUJ', 'Police Station, Dakor', 'Gujrinaka (Strategic)', 1000392927, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(224, 'AHDAHD', 1000392929, 'SASGUJ', 'Police Station, Dakor', 'Ganganagar society Chowkdi', 1000392929, '4F', '196', '2024-01-01', 1, '', '2024-10-13'),
(225, 'AHDAHD', 1000392930, 'SASGUJ', 'Police Station, Dakor', 'Bharat Bhuvan (Strategic)', 1000392930, '4F', '200', '2024-01-01', 1, '', '2024-10-13'),
(227, 'AHDAHD', 1000392931, 'SASGUJ', 'Police Station, Dakor', 'Harsad soni ni dukan (Strategic)', 1000392931, '4F', '165', '2024-01-01', 1, '', '2024-10-13'),
(266, 'AHDAHD', 1000392932, 'SASGUJ', 'SP, Nadiad', 'Piplag Chokdi (Near NH-8)', 1000392932, '4F', '925', '2024-01-01', 1, '', '2024-10-13'),
(265, 'AHDAHD', 1000392933, 'SASGUJ', 'SP, Nadiad', 'Jawahar Nagar Near Railway crossing', 1000392933, '4F', '1044', '2024-01-01', 1, '', '2024-10-13'),
(264, 'AHDAHD', 1000392934, 'SASGUJ', 'SP, Nadiad', 'Dabhan Chokdi', 1000392934, '4F', '350', '2024-01-01', 1, '', '2024-10-13'),
(263, 'AHDAHD', 1000392935, 'SASGUJ', 'SP, Nadiad', 'Vaishali Cinema Tri Road', 1000392935, '4F', '1226', '2024-01-01', 1, '', '2024-10-13'),
(262, 'AHDAHD', 1000392936, 'SASGUJ', 'SP, Nadiad', 'Zalak Police Choki', 1000392936, '4F', '371', '2024-01-01', 1, '', '2024-10-13'),
(261, 'AHDAHD', 1000392937, 'SASGUJ', 'SP, Nadiad', 'Vallabh Nagar Tri Road', 1000392937, '4F', '684', '2024-01-01', 1, '', '2024-10-13'),
(210, 'AHDAHD', 1000392938, 'SASGUJ', 'Police Station, Dakor', 'Narsi Tekri - SATYANARAYAN TEMPLE', 1000392938, '4F', '325', '2024-01-01', 1, '', '2024-10-13'),
(209, 'AHDAHD', 1000392939, 'SASGUJ', 'Police Station, Dakor', 'Gayo na vada (Entry/ Exit)', 1000392939, '4F', '3500', '2024-01-01', 1, '', '2024-10-13'),
(268, 'AHDAHD', 1000392940, 'SASGUJ', 'SP, Nadiad', 'Nadiad Railway Station Exit', 1000392940, '4F', '114', '2024-01-01', 1, '', '2024-10-13'),
(228, 'AHDAHD', 1000392942, 'SASGUJ', 'Police Station, Dakor', 'Bekavada new parking (Strategic)', 1000392942, '4F', '498', '2024-01-01', 1, '', '2024-10-13'),
(267, 'AHDAHD', 1000392943, 'SASGUJ', 'SP, Nadiad', 'Nadiad Railway Station Entry', 1000392943, '4F', '236', '2024-01-01', 1, '', '2024-10-13'),
(270, 'AHDAHD', 1000392946, 'SASGUJ', 'SP, Nadiad', 'Civil Court Road', 1000392946, '4F', '1024', '2024-01-01', 1, '', '2024-10-13'),
(269, 'AHDAHD', 1000392947, 'SASGUJ', 'SP, Nadiad', 'Canal road near Sales India Show room', 1000392947, '4F', '1248', '2024-01-01', 1, '', '2024-10-13'),
(260, 'AHDAHD', 1000392948, 'SASGUJ', 'SP, Nadiad', 'Gurudwara', 1000392948, '4F', '1119', '2024-01-01', 1, '', '2024-10-13'),
(359, 'AHDAHD', 1000392949, 'SASGUJ', 'CONTROL CENTER', 'SASGUJ SARDAR BAUG', 1000392949, '4F', '448', '2024-01-01', 1, '', '2024-10-13'),
(226, 'AHDAHD', 1000392950, 'SASGUJ', 'Police Station, Dakor', 'Vadabazar (Strategic)', 1000392950, '4F', '266', '2024-01-01', 1, '', '2024-10-13'),
(76, 'AHDAHD', 1000396414, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 909 Police station Polic ACP D DIV OFFICE,AHMEDABAD CITY', 1000396414, '4F', '75', '2024-01-01', 1, '', '2024-10-13'),
(78, 'AHDAHD', 1000396416, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 929 Police station Polic DCP ZONE 3 OFFICE,AHMEDABAD CITY', 1000396416, '4F', '147', '2024-01-01', 1, '', '2024-10-13'),
(347, 'AHDAHD', 1000396796, 'GSRTC', 'GSRTC Balasinor', '', 1000396796, '4F', '200', '2024-01-01', 1, '', '2024-10-13'),
(77, 'AHDAHD', 1000398308, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 925 Police station Polic DCP TRAFFIC EAST OFFICE,AHMEDABAD CITY', 1000398308, '4F', '151', '2024-01-01', 1, '', '2024-10-13'),
(315, 'AHDAHD', 1000398644, 'GSWAN', 'Civil Hospital', 'Kanjari Nagarpalika', 1000398644, '4F', '225', '2024-01-01', 1, '', '2024-10-13'),
(314, 'AHDAHD', 1000398645, 'GSWAN', 'Dakor nagarpalika', 'Dakor Nagarpalika', 1000398645, '4F', '540', '2024-01-01', 1, '', '2024-10-13'),
(346, 'AHDAHD', 1000398646, 'GSWAN', 'Balasinor TC', 'Balasinor Nagarpalika', 1000398646, '4F', '250', '2024-01-01', 1, '', '2024-10-13'),
(313, 'AHDAHD', 1000398648, 'GSWAN', 'DDO 0flice', 'GWSSB, Nadiyad', 1000398648, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(317, 'AHDAHD', 1000411230, 'GSWAN', 'MS Building', 'Labour Court', 1000411230, '4F', '225', '2024-01-01', 1, '', '2024-10-13'),
(316, 'AHDAHD', 1000411392, 'GSWAN', 'MS Building', 'Western Railway Police', 1000411392, '4F', '350', '2024-01-01', 1, '', '2024-10-13'),
(94, 'AHDAHD', 1000418273, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 1156 School NOBAL NAGAR GUJ 1 (FTTH)-3', 1000418273, '4F', '320', '2024-01-01', 1, '', '2024-10-13'),
(96, 'AHDAHD', 1000418274, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 1159 School NOBALNAGAR HINDI SCHOOL 2 (FTTH)-3', 1000418274, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(14, 'AHDAHD', 1000418365, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 349 Sensors Water:WDS Noble Nagar (FTTH)-4', 1000418365, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(95, 'AHDAHD', 1000418533, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 1157 School NOBAL NAGAR GUJ 3 (FTTH)-3', 1000418533, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(44, 'AHDAHD', 1000433109, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 660 BRT Route Traffic Si Ganesh Bunglow', 1000433109, '4F', '90', '2024-01-01', 1, '', '2024-10-13'),
(54, 'AHDAHD', 1000433272, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 704 Junctions Cross Road Indra residency Junction', 1000433272, '4F', '73', '2024-01-01', 1, '', '2024-10-13'),
(55, 'AHDAHD', 1000433897, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 710 BRT Route Traffic Si ISRO Colony', 1000433897, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(318, 'AHDAHD', 1000434510, 'GSWAN', 'Nadiad DC', '28 Gujarat Battalion NCC Office', 1000434510, '4F', '170', '2024-01-01', 1, '', '2024-10-13'),
(2, 'AHDAHD', 1000435640, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO(changed)', 'AMC 43 Ward Office 15 ASARWA (FTTH)-3', 1000435640, '4F', '72', '2024-01-01', 1, '', '2024-10-13'),
(119, 'AHDAHD', 1000436070, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 1372 BRT Route Traffic Si St Xaviers Corner', 1000436070, '4F', '72', '2024-01-01', 1, '', '2024-10-13'),
(273, 'AHDAHD', 1000436436, 'SASGUJ', 'SP, Nadiad', 'Ambdavadi Police Choki', 1000436436, '4F', '424', '2024-01-01', 1, '', '2024-10-13'),
(40, 'AHDAHD', 1000436806, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO(changed)', 'AMC 610 Junctions Cross Road BJ Medical College T', 1000436806, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(141, 'AHDAHD', 1000436905, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC N-9 Next to Nirma Univercity AMTS bus Stop ,Near Main Gate of Nirma Univercity', 1000436905, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(5, 'AHDAHD', 1000436990, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA(changed)', 'AMC 141 BRTS Depot ITO', 1000436990, '4F', '370', '2024-01-01', 1, '', '2024-10-13'),
(102, 'AHDAHD', 1000438244, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 1216 School KARSANNAGAR GUJ 1 (FTTH)-3', 1000438244, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(111, 'AHDAHD', 1000443570, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 1336 BRT Route Traffic Si Sahjanad Char Rasta', 1000443570, '4F', '110', '2024-01-01', 1, '', '2024-10-13'),
(61, 'AHDAHD', 1000443624, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 739 Camera Police Survil KalyanJwellers Teen Rasta', 1000443624, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(49, 'AHDAHD', 1000444399, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 694 BRT Route Traffic Si Helmet', 1000444399, '4F', '175', '2024-01-01', 1, '', '2024-10-13'),
(15, 'AHDAHD', 1000445834, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO(changed)', 'AMC 364 Sensors Water:WDS Vyaswadi', 1000445834, '4F', '328', '2024-01-01', 1, '', '2024-10-13'),
(136, 'AHDAHD', 1000451572, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 1733 ISKON CIRCLE', 1000451572, '4F', '250', '2024-01-01', 1, '', '2024-10-13'),
(32, 'AHDAHD', 1000452333, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO(changed)', 'AMC 543 Sensors Water:Pumpin Girdharnagar,Sewage Pumping Station', 1000452333, '4F', '300', '2024-01-01', 1, '', '2024-10-13'),
(70, 'AHDAHD', 1000452535, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 781 BRT Route Traffic Si Mehndi Kuva', 1000452535, '4F', '390', '2024-01-01', 1, '', '2024-10-13'),
(6, 'AHDAHD', 1000452746, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 142 BRTS Depot Chandola Talab', 1000452746, '4F', '92', '2024-01-01', 1, '', '2024-10-13'),
(120, 'AHDAHD', 1000453029, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 1377 Junctions Cross Road Subhash Chowk Cross Road', 1000453029, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(21, 'AHDAHD', 1000453046, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR(changed)', 'AMC 428 Sensors Water:WDS Kasiba Nagar', 1000453046, '4F', '320', '2024-01-01', 1, '', '2024-10-13'),
(85, 'AHDAHD', 1000453059, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1023 School SHAHPUR 15', 1000453059, '4F', '260', '2024-01-01', 1, '', '2024-10-13'),
(86, 'AHDAHD', 1000453060, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1025 School SHAHPUR U 10', 1000453060, '4F', '284', '2024-01-01', 1, '', '2024-10-13'),
(105, 'AHDAHD', 1000453321, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 1257 School CHANDOLA URDU SCH 1', 1000453321, '4F', '225', '2024-01-01', 1, '', '2024-10-13'),
(112, 'AHDAHD', 1000453814, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1341 Camera: CSITMS Sarangpur Circle', 1000453814, '4F', '200', '2024-01-01', 1, '', '2024-10-13'),
(39, 'AHDAHD', 1000454308, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 608 Junctions Cross Road Bhulabhai Park Cross road', 1000454308, '4F', '102', '2024-01-01', 1, '', '2024-10-13'),
(65, 'AHDAHD', 1000454355, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 757 BRT Route Traffic Si Krishna bhaug', 1000454355, '4F', '114', '2024-01-01', 1, '', '2024-10-13'),
(241, 'AHDAHD', 1000454453, 'SASGUJ', 'SP, Nadiad', 'Fatehpura bypass Road near D mart', 1000454453, '4F', '320', '2024-01-01', 1, '', '2024-10-13'),
(126, 'AHDAHD', 1000454518, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA(changed)', 'AMC 1413 Junction Cross Road Gandhi Bridge In', 1000454518, '4F', '225', '2024-01-01', 1, '', '2024-10-13'),
(128, 'AHDAHD', 1000454519, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA(changed)', 'AMC 1415 Junction Cross Road Master Colony In(same as 1416)', 1000454519, '4F', '315', '2024-01-01', 1, '', '2024-10-13'),
(38, 'AHDAHD', 1000454520, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 601 Junctions Cross Road Bhadbanjan Cross Road', 1000454520, '4F', '195', '2024-01-01', 1, '', '2024-10-13'),
(19, 'AHDAHD', 1000454559, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 404 Sensors Water:WDS Vasana Shahvadi', 1000454559, '4F', '610', '2024-01-01', 1, '', '2024-10-13'),
(109, 'AHDAHD', 1000454729, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 1321 BRT Route Traffic Si Ramrajya Nagar', 1000454729, '4F', '185', '2024-01-01', 1, '', '2024-10-13'),
(12, 'AHDAHD', 1000455441, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR(changed)', 'AMC 225 Municipal Parks Late Shambhubhai Jagabhai Udhyan', 1000455441, '4F', '220', '2024-01-01', 1, '', '2024-10-13'),
(26, 'AHDAHD', 1000455827, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO(changed)', 'AMC 514 Sensors Water:Pumpin Ambavadi (Bhadreshwar),Sewage Pumping Station', 1000455827, '4F', '115', '2024-01-01', 1, '', '2024-10-13'),
(73, 'AHDAHD', 1000456256, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 817 Junctions Cross Road Nirmalpura Cross Road,near chamunda bridge', 1000456256, '4F', '170', '2024-01-01', 1, '', '2024-10-13'),
(116, 'AHDAHD', 1000456257, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 1368 BRT Route Traffic Si Soma Textile', 1000456257, '4F', '503', '2024-01-01', 1, '', '2024-10-13'),
(48, 'AHDAHD', 1000456884, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH(changed)', 'AMC 690 Junctions Cross Road Haribhai Gopani Cross road', 1000456884, '4F', '105', '2024-01-01', 1, '', '2024-10-13'),
(132, 'AHDAHD', 1000456891, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 1444 Junctions Cross Road YMCA Cut', 1000456891, '4F', '249', '2024-01-01', 1, '', '2024-10-13'),
(103, 'AHDAHD', 1000456947, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 1233 School MANINAGAR 4 (FTTH)-3', 1000456947, '4F', '198', '2024-01-01', 1, '', '2024-10-13'),
(68, 'AHDAHD', 1000456983, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 776 BRT Route Traffic Si Maninagar Railway Crossing', 1000456983, '4F', '289', '2024-01-01', 1, '', '2024-10-13'),
(121, 'AHDAHD', 1000457292, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 1378 Junctions Cross Road Sukharam Nagar Cross road', 1000457292, '4F', '85', '2024-01-01', 1, '', '2024-10-13'),
(92, 'AHDAHD', 1000457307, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR(changed)', 'AMC 1126 School SARASPUR 7', 1000457307, '4F', '310', '2024-01-01', 1, '', '2024-10-13'),
(34, 'AHDAHD', 1000457312, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 580 Junctions Cross Road Asarwa Chakla', 1000457312, '4F', '70', '2024-01-01', 1, '', '2024-10-13'),
(41, 'AHDAHD', 1000457313, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 618 Junctions Cross Road Chamanpur Chakla', 1000457313, '4F', '92', '2024-01-01', 1, '', '2024-10-13'),
(35, 'AHDAHD', 1000457320, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 582 BRT Route Traffic Si Ashirwad Estate', 1000457320, '4F', '225', '2024-01-01', 1, '', '2024-10-13'),
(110, 'AHDAHD', 1000457349, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 1322 BRT Route Traffic Si Ranip', 1000457349, '4F', '140', '2024-01-01', 1, '', '2024-10-13'),
(33, 'AHDAHD', 1000457373, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR(changed)', 'AMC 571 Junctions Cross Road Amraiyawadi Cross road', 1000457373, '4F', '150', '2024-01-01', 1, '', '2024-10-13'),
(45, 'AHDAHD', 1000457407, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 678 Junctions Cross Road Gujarat Bottling Cross road', 1000457407, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(124, 'AHDAHD', 1000457563, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR(changed)', 'AMC 1404 Junctions Cross Road Vaikunth Dham Cross road', 1000457563, '4F', '128', '2024-01-01', 1, '', '2024-10-13'),
(7, 'AHDAHD', 1000457579, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 143 BRTS Depot Odhav', 1000457579, '4F', '464', '2024-01-01', 1, '', '2024-10-13'),
(47, 'AHDAHD', 1000457663, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 688 BRT Route Traffic Si Haraniyawas', 1000457663, '4F', '274', '2024-01-01', 1, '', '2024-10-13'),
(67, 'AHDAHD', 1000457796, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 773 Junctions Cross Road Manchani Masjid', 1000457796, '4F', '165', '2024-01-01', 1, '', '2024-10-13'),
(130, 'AHDAHD', 1000457797, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 1421 Junction Cross Road Vadaj Samshangruh,Riverfront Entry', 1000457797, '4F', '140', '2024-01-01', 1, '', '2024-10-13'),
(107, 'AHDAHD', 1000458330, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 1305 BRT Route Traffic Si Rabari Colony', 1000458330, '4F', '115', '2024-01-01', 1, '', '2024-10-13'),
(100, 'AHDAHD', 1000458331, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 1186 School RAJPUR 7', 1000458331, '4F', '430', '2024-01-01', 1, '', '2024-10-13'),
(104, 'AHDAHD', 1000458521, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 1236 School MILLATNAGAR GUJ 1', 1000458521, '4F', '350', '2024-01-01', 1, '', '2024-10-13'),
(69, 'AHDAHD', 1000458623, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 779 Junctions Cross Road Mariyam BB Cross Road', 1000458623, '4F', '470', '2024-01-01', 1, '', '2024-10-13'),
(58, 'AHDAHD', 1000458625, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR(changed)', 'AMC 727 BRT Route Traffic Si Jogeshwari Road', 1000458625, '4F', '230', '2024-01-01', 1, '', '2024-10-13'),
(18, 'AHDAHD', 1000458626, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 397 Sensors Water:WDS Meera Pragati', 1000458626, '4F', '190', '2024-01-01', 1, '', '2024-10-13'),
(89, 'AHDAHD', 1000458627, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1037 School JAMALPUR URDU 6', 1000458627, '4F', '236', '2024-01-01', 1, '', '2024-10-13'),
(22, 'AHDAHD', 1000458866, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 449 Sensors Water:WDS TP 10', 1000458866, '4F', '370', '2024-01-01', 1, '', '2024-10-13'),
(52, 'AHDAHD', 1000459233, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 699 BRT Route Traffic Si Hotel Landmark', 1000459233, '4F', '90', '2024-01-01', 1, '', '2024-10-13'),
(93, 'AHDAHD', 1000459243, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 1142 School KOTARPUR SHALA NO 1', 1000459243, '4F', '300', '2024-01-01', 1, '', '2024-10-13'),
(29, 'AHDAHD', 1000459246, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 533 Sensors Water:Pumpin Isanpur (1)Mony Hotel,Sewage Pumping Station', 1000459246, '4F', '421', '2024-01-01', 1, '', '2024-10-13'),
(98, 'AHDAHD', 1000460049, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH(changed)', 'AMC 1169 School SARASPUR HINDI 1', 1000460049, '4F', '230', '2024-01-01', 1, '', '2024-10-13'),
(137, 'AHDAHD', 1000460118, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC E-13 BAPUNAGAR 1', 1000460118, '4F', '365', '2024-01-01', 1, '', '2024-10-13'),
(138, 'AHDAHD', 1000460119, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC E-14 BAPUNAGAR 2', 1000460119, '4F', '340', '2024-01-01', 1, '', '2024-10-13'),
(139, 'AHDAHD', 1000460120, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC N-12 SCIENCE CITY', 1000460120, '4F', '190', '2024-01-01', 1, '', '2024-10-13'),
(140, 'AHDAHD', 1000460152, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC N-13 BHUYANGDEV', 1000460152, '4F', '170', '2024-01-01', 1, '', '2024-10-13'),
(23, 'AHDAHD', 1000460526, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH(changed)', 'AMC 451 Sensors Water:WDS Rakhiyal Housing', 1000460526, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(83, 'AHDAHD', 1000460527, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1012 School DARIYAPUR U 2', 1000460527, '4F', '158', '2024-01-01', 1, '', '2024-10-13'),
(88, 'AHDAHD', 1000460528, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1034 School JAMALPUR PRIMARY SCHOOL 16', 1000460528, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(108, 'AHDAHD', 1000460529, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH(changed)', 'AMC 1309 Junctions Cross Road Raipur Mill Cross Road', 1000460529, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(90, 'AHDAHD', 1000460602, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1040 School JAMALPUR URDU 14', 1000460602, '4F', '171', '2024-01-01', 1, '', '2024-10-13'),
(101, 'AHDAHD', 1000460603, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 1189 School RAJPUR H 1', 1000460603, '4F', '584', '2024-01-01', 1, '', '2024-10-13'),
(17, 'AHDAHD', 1000460827, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 380 Sensors Water:WDS Batata Mill Dariapur', 1000460827, '4F', '400', '2024-01-01', 1, '', '2024-10-13'),
(31, 'AHDAHD', 1000460828, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 542 Sensors Water:Pumpin Dariyapur Sewage Pumping Station', 1000460828, '4F', '174', '2024-01-01', 1, '', '2024-10-13'),
(62, 'AHDAHD', 1000461371, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 749 Junctions Cross Road Keval Kantha Cross Road', 1000461371, '4F', '408 ,tr', '2024-01-01', 1, '', '2024-10-13'),
(82, 'AHDAHD', 1000461382, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1009 School KALUPUR 22', 1000461382, '4F', '371', '2024-01-01', 1, '', '2024-10-13'),
(84, 'AHDAHD', 1000461383, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1014 School DARIYAPUR 16', 1000461383, '4F', '200', '2024-01-01', 1, '', '2024-10-13'),
(57, 'AHDAHD', 1000462784, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 725 Junctions Cross Road Jivaraj Park cross road Junction', 1000462784, '4F', '73', '2024-01-01', 1, '', '2024-10-13'),
(59, 'AHDAHD', 1000462800, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 731 BRT Route Traffic Si Jayantilal Park (Adiraj Bunglow)', 1000462800, '4F', '104', '2024-01-01', 1, '', '2024-10-13');
INSERT INTO `circuitdetails` (`Sr_no`, `Exchange`, `Circuit_ID`, `Name`, `Address_A`, `Address_B`, `Contect`, `Connectivity`, `Cable_Lenght`, `work_order_date`, `Is_Active`, `Remove_Reason`, `Remove_Date`) VALUES
(192, 'AHDAHD', 1000463143, 'GSWAN', 'SANAND TC', 'TALUKA PANCHAYAT', 1000463143, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(63, 'AHDAHD', 1000463542, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 754 BRT Route Traffic Si Khodiyarnagar', 1000463542, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(72, 'AHDAHD', 1000463544, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 802 BRT Route Traffic Si National Cloth Factory', 1000463544, '4F', '106', '2024-01-01', 1, '', '2024-10-13'),
(207, 'AHDAHD', 1000464365, 'GSWAN', 'Mehlav Police station', 'Mehlav exchange', 1000464365, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(46, 'AHDAHD', 1000464725, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 686 Junctions Cross Road Hansol taLavadi', 1000464725, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(81, 'AHDAHD', 1000464726, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1006 School KALUPUR 2', 1000464726, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(113, 'AHDAHD', 1000465028, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW(changed)', 'AMC 1344 Junctions Cross Road Sarkehj Circle', 1000465028, '4F', '191', '2024-01-01', 1, '', '2024-10-13'),
(114, 'AHDAHD', 1000465241, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 1345 Junctions Cross Road Sarkhej Dhal', 1000465241, '4F', '81', '2024-01-01', 1, '', '2024-10-13'),
(129, 'AHDAHD', 1000465346, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR(changed)', 'AMC 1419 Junction Cross Road Picnic House Tran Rasta', 1000465346, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(117, 'AHDAHD', 1000465616, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW(changed)', 'AMC 1369 Junctions Cross Road Sonal Cinema cross road', 1000465616, '4F', '82', '2024-01-01', 1, '', '2024-10-13'),
(195, 'AHDAHD', 1000465937, 'GSWAN', 'NEW SOLA CHAVDI', 'VD Ognaj', 1000465937, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(193, 'AHDAHD', 1000465941, 'GSWAN', 'ACB office AHMEDABAD', 'CID 1B Office', 1000465941, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(198, 'AHDAHD', 1000465954, 'GSWAN', 'ACB, AHMEDABAD', 'AHMEDABAD DIVISION OFFICE', 1000465954, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(194, 'AHDAHD', 1000465957, 'GSWAN', 'Rajpur Hirpur Chavdi', 'Shaherkotda Police Station', 1000465957, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(197, 'AHDAHD', 1000465961, 'GSWAN', 'SRPF 2 Naroda', 'Naroda Police Station', 1000465961, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(196, 'AHDAHD', 1000465975, 'GSWAN', 'Rakhiyal Chavdi', 'Bapunagar Police Station', 1000465975, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(24, 'AHDAHD', 1000468032, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 474 Sensors Water:WDS Vejalpur Shaivali', 1000468032, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(37, 'AHDAHD', 1000468036, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 595 BRT Route Traffic Si Bapunagar Approach', 1000468036, '4F', '115', '2024-01-01', 1, '', '2024-10-13'),
(51, 'AHDAHD', 1000468038, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 698 Junctions Cross Road Hirawadi cross road', 1000468038, '4F', '382', '2024-01-01', 1, '', '2024-10-13'),
(60, 'AHDAHD', 1000468039, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 736 BRT Route Traffic Si Kalupur Bank', 1000468039, '4F', '406', '2024-01-01', 1, '', '2024-10-13'),
(127, 'AHDAHD', 1000468042, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH', 'AMC 1414 Junction Cross Road Gandhi Bridge Out', 1000468042, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(66, 'AHDAHD', 1000468562, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 761 Junctions Cross Road Lakhudi Lavadi', 1000468562, '4F', '419', '2024-01-01', 1, '', '2024-10-13'),
(201, 'AHDAHD', 1000468632, 'GSWAN', 'ACB PoP', 'Residence of the Collector District Magistrate', 1000468632, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(200, 'AHDAHD', 1000468633, 'GSWAN', 'Ahmedabad DC', 'ITI GOTA RANIP', 1000468633, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(199, 'AHDAHD', 1000470165, 'GSWAN', 'GANDHINAGAR DC', 'IG OFFICE', 1000470165, '4F', '450', '2024-01-01', 1, '', '2024-10-13'),
(36, 'AHDAHD', 1000470309, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 588 Junctions Cross Road Avkar Hall Cross road', 1000470309, '4F', '90', '2024-01-01', 1, '', '2024-10-13'),
(80, 'AHDAHD', 1000470630, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 995 School NAVA NARODA GUJ PRI SCHOOL', 1000470630, '4F', '399', '2024-01-01', 1, '', '2024-10-13'),
(131, 'AHDAHD', 1000471245, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 1431 Junctions Cross Road Vijay Cross road Junction', 1000471245, '4F', '349', '2024-01-01', 1, '', '2024-10-13'),
(28, 'AHDAHD', 1000472062, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 528 Sensors Water:Pumpin Zone', 1000472062, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(122, 'AHDAHD', 1000472189, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 1391 BRT Route Traffic Si Thakkarbapa nagar', 1000472189, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(42, 'AHDAHD', 1000472190, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 631 Junctions Cross Road Cozy Hotel Cross road', 1000472190, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(30, 'AHDAHD', 1000472263, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 534 Sensors Water:Pumpin Isanpur (2)Sewage Pumping Station', 1000472263, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(125, 'AHDAHD', 1000472276, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 1406 Junctions Cross Road Valinath Chowk Junction', 1000472276, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(91, 'AHDAHD', 1000472383, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 1056 School ELLISBRIDGE 29', 1000472383, '4F', '830', '2024-01-01', 1, '', '2024-10-13'),
(50, 'AHDAHD', 1000472384, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 695 Junctions Cross Road Himalaya Mall Junction', 1000472384, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(123, 'AHDAHD', 1000472386, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 1393 Camera: CSITMS Thaltej Circle', 1000472386, '4F', '220', '2024-01-01', 1, '', '2024-10-13'),
(56, 'AHDAHD', 1000472448, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 716 Camera: CSITMS Janpath T', 1000472448, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(320, 'AHDAHD', 1000472480, 'GSWAN', 'THASRA TC', 'Sub Treasury Office', 1000472480, '4F', '640', '2024-01-01', 1, '', '2024-10-13'),
(71, 'AHDAHD', 1000473508, 'smart city', 'AMC 50 Dr SHYAMAPRASAD BHAV,MANINAGAR', 'AMC 801 Junctions Cross Road Narol Junction', 1000473508, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(43, 'AHDAHD', 1000475447, 'smart city', 'AMC 52 B BLOCK SARDAR PATEL,DANAPITH(changed)', 'AMC 654 Junctions Cross Road Everest Cinema Cross Road', 1000475447, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(115, 'AHDAHD', 1000475448, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 'AMC 1364 Junctions Cross Road Sims Hospital Cross Road,Science City Road', 1000475448, '4F', 'Will be informed later', '2024-01-01', 1, '', '2024-10-13'),
(319, 'AHDAHD', 1000477942, 'GSWAN', 'KHEDA DC', 'DSP Office Kheda', 1000477942, '4F', '350', '2024-01-01', 1, '', '2024-10-13'),
(321, 'AHDAHD', 1000477946, 'GSWAN', 'MS BLDG', 'District Consumer Disputes Redressal Forum', 1000477946, '4F', '200', '2024-01-01', 1, '', '2024-10-13'),
(64, 'AHDAHD', 1000479237, 'smart city', 'AMC 49 RAJIV GANDHI BHAVAN,MEMCO', 'AMC 756 Junctions Cross Road Kotarpur Waterworks teen rasta', 1000479237, '4F', '1559', '2024-01-01', 1, '', '2024-10-13'),
(53, 'AHDAHD', 1000479377, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 'AMC 701 Junctions Cross Road Income Tax Junction', 1000479377, '4F', '71', '2024-01-01', 1, '', '2024-10-13'),
(20, 'AHDAHD', 1000479612, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 427 Sensors Water:WDS Odhav Arbuda Nagar', 1000479612, '4F', '215', '2024-01-01', 1, '', '2024-10-13'),
(27, 'AHDAHD', 1000479762, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 'AMC 521 Sensors Water:Pumpin Arbudanagar,Sewage Pumping Station', 1000479762, '4F', '285', '2024-01-01', 1, '', '2024-10-13'),
(322, 'AHDAHD', 1000490820, 'GSWAN', 'MS Building', 'Assistant Research Officer', 1000490820, '4F', '350', '2024-01-01', 1, '', '2024-10-13'),
(323, 'AHDAHD', 1000490821, 'GSWAN', 'Mahudha TC', 'Dy Executive Engineer', 1000490821, '4F', '650', '2024-01-01', 1, '', '2024-10-13'),
(324, 'AHDAHD', 1000490862, 'GSWAN', 'Mahudha TC', 'GSCSCL Godown', 1000490862, '4F', '320', '2024-01-01', 1, '', '2024-10-13'),
(327, 'AHDAHD', 1000540198, 'GSWAN', 'KHEDA DC', 'DISTRICT TREASURY OFFICE', 1000540198, '4F', '350', '2024-01-01', 1, '', '2024-10-13'),
(326, 'AHDAHD', 1000540228, 'GSWAN', 'MEHMDABAD TC', 'GSCSCL GODOWN', 1000540228, '4F', '780', '2024-01-01', 1, '', '2024-10-13'),
(328, 'AHDAHD', 1000544729, 'GSWAN', 'MATAR TC', 'VETERNARY DISPENSARY, MATAR', 1000544729, '4F', '190', '2024-01-01', 1, '', '2024-10-13'),
(234, 'AHDAHD', 1000547916, 'SASGUJ', 'Police Station, Dakor', 'Old Bus Station (Strategic)', 1000547916, '4F', '350', '2024-01-01', 1, '', '2024-10-13'),
(235, 'AHDAHD', 1000547917, 'SASGUJ', 'Police Station, Dakor', 'Dakor teen darwaza (Strategic)', 1000547917, '4F', '100', '2024-01-01', 1, '', '2024-10-13'),
(329, 'AHDAHD', 1000548079, 'GSWAN', 'THASRA TC', 'DAKOR VETERINARY DISPENSARY', 1000548079, '4F', '650', '2024-01-01', 1, '', '2024-10-13'),
(330, 'AHDAHD', 1000548315, 'GSWAN', 'MS BUILDING', 'IRRIGATION DIVISION, KAPADWANJ ROAD', 1000548315, '4F', '140', '2024-01-01', 1, '', '2024-10-13'),
(368, 'AHDVST', 1000590185, 'Vastrapur Police Stations', 'Vastrapir', 'Anand', 7041000410, '4F', '250', '2024-10-13', 0, 'No longer needed', '2024-10-13'),
(325, 'AHDAHD', 1056635820, 'GSWAN', 'Mehmdabad tc', 'City Survey Superintendent', 1056635820, '4F', '600', '2024-01-01', 1, '', '2024-10-13');

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
  `booking_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Resolution_Duration` int(11) NOT NULL,
  `complain_solve_code` int(50) NOT NULL,
  `complain_solve_remark` varchar(100) NOT NULL,
  `complain_solve_date` datetime NOT NULL,
  `Is_Resolved` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `complain`
--

INSERT INTO `complain` (`Complain_ID`, `Exchange`, `circuit_id`, `Name`, `Address_A`, `contact`, `current_contact`, `current_address`, `booking_date`, `Resolution_Duration`, `complain_solve_code`, `complain_solve_remark`, `complain_solve_date`, `Is_Resolved`) VALUES
(4, 'AHDAHD', 1000468032, 'smart city', 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', 1000468032, 1000468032, 'AMC 54 RAJMATA SINDDIA BHAV,JUDGES BUNGLOW', '2024-10-09 16:36:52', 168, 300, '0', '2024-10-09 16:36:48', 1),
(5, 'AHDAHD', 1000457663, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 1000457663, 786786, 'Sanjar Park', '2024-10-13 13:48:37', 66, 999, '0', '2024-10-13 13:43:55', 1),
(6, 'AHDAHD', 1000472448, 'smart city', 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', 1000472448, 1000472448, 'AMC 53 Dr RAMANBHAI PATEL,USMANPURA', '2024-10-13 13:50:03', 93, 300, 'asdfadfasdfasdf', '2024-10-13 13:49:55', 1),
(7, 'AHDAHD', 1000356107, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 1000356107, 1000356107, 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', '2024-10-13 11:24:49', 0, 300, '0', '2024-10-13 11:24:04', 1),
(8, 'AHDAHD', 1000356107, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 1000356107, 1000356107, 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', '2024-10-13 11:37:43', 0, 200, '0', '2024-10-13 11:37:36', 1),
(9, 'AHDAHD', 1000356107, 'smart city', 'AMC 51 HASUBHAI MEHTA BHAVA,VIRATNAGAR', 1000356107, 1000356107, 'sadfasdfasdfasdf', '2024-10-13 11:32:14', 0, 0, '0', '0000-00-00 00:00:00', 0),
(10, 'AHDAHD', 1000392914, 'SASGUJ', 'Police Station, Dakor', 1000392914, 1000392914, 'Police Station, Dakor', '2024-10-13 12:31:20', 0, 0, '0', '0000-00-00 00:00:00', 0),
(11, 'AHDAHD', 1000392914, 'SASGUJ', 'Police Station, Dakor', 1000392914, 1000392914, 'Police Station, Dakor', '2024-10-13 12:31:57', 0, 0, '0', '0000-00-00 00:00:00', 0),
(12, 'AHDAHD', 1000392853, 'SASGUJ', 'Police Station, Dakor', 1000392853, 1000392853, 'Police Station, Dakor', '2024-10-13 12:33:44', 0, 0, '0', '0000-00-00 00:00:00', 0),
(13, 'AHDAHD', 1000392917, 'SASGUJ', 'Police Station, Dakor', 1000392917, 1000392917, 'Police Station, Dakor', '2024-10-13 12:34:22', 0, 0, '0', '0000-00-00 00:00:00', 0),
(14, 'AHDAHD', 1000392860, 'SASGUJ', 'Police Station, Dakor', 1000392860, 1000392860, 'Police Station, Dakor', '2024-10-15 07:21:36', 42, 200, 'ok ok ok', '2024-10-15 07:21:25', 1),
(15, 'AHDAHD', 1000392918, 'SASGUJ', 'Police Station, Dakor', 1000392918, 1000392918, 'Police Station, Dakor', '2024-10-15 07:20:21', 42, 300, 'working ok', '2024-10-15 07:20:05', 1),
(16, 'AHDAHD', 1000392918, 'SASGUJ', 'Police Station, Dakor', 1000392918, 1000392918, 'Police Station, Dakor', '2024-10-13 13:34:22', 0, 200, '0', '2024-10-13 12:36:51', 1),
(17, 'AHDAHD', 1000067049, 'State Bank of India', 'SBI Collage Road Nadiad', 1000067049, 1000067049, 'SBI Collage Road Nadiad', '2024-10-16 08:11:06', 0, 0, '', '0000-00-00 00:00:00', 0),
(18, 'AHDAHD', 1000103725, 'HDFC Bank', 'HDFC Bank Nadiad', 1000103725, 1000103725, 'HDFC Bank Nadiad', '2024-10-16 08:13:01', 0, 0, '', '0000-00-00 00:00:00', 0);

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

INSERT INTO `users` (`userno`, `userid`, `password`, `Role`) VALUES
(1, 'Shivamtelecom', 'Shiv@2261', 'Manager'),
(2, 'Arbaz', 'Arbaz@9909', 'Admin'),
(3, 'bsnl', 'bsnl@123', 'user');

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
  MODIFY `Complain_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
