-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2025 at 09:21 AM
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
-- Database: `rkpos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(20) NOT NULL,
  `categoryName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`) VALUES
(1, 'Refreshments'),
(2, 'Alcohol Drinks'),
(3, 'Pasta'),
(4, 'Pizza'),
(5, 'Steak'),
(6, 'Desserts');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(20) NOT NULL,
  `categoryID` int(20) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `productCode` varchar(20) NOT NULL,
  `isAvailable` tinyint(1) NOT NULL,
  `productPrice` decimal(50,0) NOT NULL,
  `productImage` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `productName`, `productCode`, `isAvailable`, `productPrice`, `productImage`) VALUES
(1, 1, 'San Pellegrino Limonata', 'SPLM', 1, 0, 'assets/img/limonata.png'),
(2, 1, 'San Pellegrino Aranciata', 'SPAR', 1, 0, 'assets/img/aranciata.png'),
(3, 1, 'Chinotto', 'CHNT', 1, 0, 'assets/img/chinotto.png'),
(4, 1, 'Crodino', 'CRD', 1, 0, 'assets/img/crodino.png'),
(5, 1, 'Cedrata', 'CDRT', 1, 0, 'assets/img/cedrata.png'),
(6, 2, 'Prosecco', 'PRSC', 1, 0, 'assets/img/prosecco.png'),
(7, 2, 'Chianti', 'CHNT', 1, 0, 'assets/img/chianti.png'),
(8, 2, 'Barolo', 'BRLO', 1, 0, 'assets/img/barolo.png'),
(9, 2, 'Amarone', 'AMRN', 1, 0, 'assets/img/amarone.png'),
(10, 2, 'Limoncello', 'LMCL', 1, 0, 'assets/img/limoncello.png'),
(11, 2, 'Asti Spumante', 'ASTI', 1, 0, 'assets/img/asti.png'),
(12, 2, 'Montepulciano D\' Abruzzo', 'MDA', 1, 0, 'assets/img/montepulciano.png'),
(13, 3, 'Spaghetti alla Carbonara', 'CBNR', 1, 560, 'assets/img/carbonara.png'),
(14, 3, 'Penne all\'Arrabbiata', 'ARRB', 1, 455, 'assets/img/arrabbiata.png'),
(15, 3, 'Lasagna', 'LSGN', 1, 560, 'assets/img/lasagna.png'),
(16, 3, 'Fettuccine Alfredo', 'FTTA', 1, 530, 'assets/img/alfredo.png'),
(17, 3, 'Ravioli di Ricotta', 'RVLC', 1, 880, 'assets/img/ravioli.png'),
(18, 3, 'Tagliatelle al Ragù', 'TAGR', 1, 560, 'assets/img/ragu.png'),
(19, 3, 'Gnocchi al Pesto', 'GNCP', 1, 750, 'assets/img/gnocchi.png'),
(20, 4, 'Margherita', 'MARG', 1, 455, 'assets/img/Margherita.png'),
(21, 4, 'Quattro Stagioni', '4STG', 1, 480, 'assets/img/Stagioni.png'),
(22, 4, 'Diavola', 'DIAV', 1, 460, 'assets/img/Diavola.png'),
(23, 4, 'Capricciosa', 'CAPR', 1, 490, 'assets/img/Capricciosa.png'),
(24, 4, 'Prosciutto e Funghi', 'PRSF', 1, 480, 'assets/img/Funghi.png'),
(25, 5, 'Bistecca alla Fiorentina', 'BSTF', 1, 900, 'assets/img/Bistecca.png'),
(26, 5, 'Tagliata di Manzo', 'TAGM', 1, 950, 'assets/img/Tagliata.png'),
(27, 5, 'Filetto al Pepe Verde', 'FLPV', 1, 980, 'assets/img/Filetto.png'),
(28, 5, 'Scaloppine al Vino Bianco', 'SCVB', 1, 900, 'assets/img/Scaloppine.png'),
(29, 5, 'Cotoletta alla Milanese', 'CTML', 1, 920, 'assets/img/Cotoletta.png'),
(30, 5, 'Saltimbocca alla Romana', 'SLTR', 1, 940, 'assets/img/Saltimbocca.png'),
(31, 6, 'Tiramisù', 'TRMS', 1, 160, 'assets/img/Tiramisu.png'),
(32, 6, 'Panna Cotta', 'PNCT', 1, 150, 'assets/img/Panna.png'),
(33, 6, 'Cannoli Siciliani', 'CNSC', 1, 180, 'assets/img/Cannoli.png'),
(34, 6, 'Gelato alla Fragola', 'GLFG', 1, 155, 'assets/img/Fragola.png'),
(35, 6, 'Zabaglione', 'ZBLN', 1, 160, 'assets/img/Zabaglione.png'),
(36, 6, 'Torta Caprese', 'TRTC', 1, 195, 'assets/img/Caprese.png'),
(37, 6, 'Cassata Siciliana', 'CASS', 1, 210, 'assets/img/Cassata.png');

-- --------------------------------------------------------

--
-- Table structure for table `servings`
--

CREATE TABLE `servings` (
  `servingsID` int(20) NOT NULL,
  `productID` int(20) NOT NULL,
  `servingName` varchar(50) NOT NULL,
  `servingCode` varchar(20) NOT NULL,
  `servingPrice` int(20) NOT NULL,
  `servingImage` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `servings`
--

INSERT INTO `servings` (`servingsID`, `productID`, `servingName`, `servingCode`, `servingPrice`, `servingImage`) VALUES
(1, 6, 'glass', 'GLS', 450, 'assets/img/GProsecco.png'),
(2, 6, 'bottle', 'BTL', 1800, 'assets/img/BProsecco.png'),
(3, 7, 'glass', 'GLS', 520, 'assets/img/GChianti.png'),
(4, 7, 'bottle', 'BTL', 2000, 'assets/img/BChianti.png'),
(5, 8, 'glass', 'GLS', 750, 'assets/img/GBarolo.png'),
(6, 8, 'bottle', 'BTL', 3000, 'assets/img/BBarolo.png'),
(7, 9, 'glass', 'GLS', 820, 'assets/img/GAmarone.png'),
(8, 9, 'bottle', 'BTL', 3300, 'assets/img/BAmarone.png'),
(9, 10, 'glass', 'GLS', 350, 'assets/img/GLimoncello.png'),
(10, 10, 'bottle', 'BTL', 1400, 'assets/img/BLimoncello.png'),
(11, 11, 'glass', 'GLS', 480, 'assets/img/GAsti.png'),
(12, 11, 'bottle', 'BTL', 1900, 'assets/img/BAsti.png'),
(13, 12, 'glass', 'GLS', 390, 'assets/img/GMda.png'),
(14, 12, 'bottle', 'BTL', 1600, 'assets/img/BMda.png');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `sizeID` int(20) NOT NULL,
  `productID` int(20) NOT NULL,
  `sizeName` varchar(50) NOT NULL,
  `sizeCode` varchar(20) NOT NULL,
  `sizePrice` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`sizeID`, `productID`, `sizeName`, `sizeCode`, `sizePrice`) VALUES
(1, 1, 'regular', 'SPLMRG', 180),
(2, 1, 'medium', 'SPLMMD', 220),
(3, 1, 'large', 'SPLMLG', 260),
(4, 2, 'regular', 'SPARRG', 180),
(5, 2, 'medium', 'SPARMD', 220),
(6, 2, 'large', 'SPARLG', 260),
(7, 3, 'regular', 'CHNTRG', 200),
(8, 3, 'medium', 'CHNTMD', 240),
(9, 3, 'large', 'CHNTLG', 280),
(10, 4, 'regular', 'CRDRG', 190),
(11, 4, 'medium', 'CRDMD', 230),
(12, 4, 'large', 'CRDLG', 270),
(13, 5, 'regular', 'CDRTRG', 190),
(14, 5, 'medium', 'CDRTMD', 230),
(15, 5, 'large', 'CDRTLG', 270);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `servings`
--
ALTER TABLE `servings`
  ADD PRIMARY KEY (`servingsID`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`sizeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `servings`
--
ALTER TABLE `servings`
  MODIFY `servingsID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `sizeID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
