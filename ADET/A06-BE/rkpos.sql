-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2025 at 11:12 AM
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
(2, 'Alcoholic Drinks'),
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
(1, 1, 'San Pellegrino Limonata', 'SPLM', 1, 0, 'limonata.png'),
(2, 1, 'San Pellegrino Aranciata', 'SPAR', 1, 0, 'aranciata.png'),
(3, 1, 'Chinotto', 'CHNT', 1, 0, 'chinotto.png'),
(4, 1, 'Crodino', 'CRD', 1, 0, 'crodino.png'),
(5, 1, 'Cedrata', 'CDRT', 1, 0, 'cedrata.png'),
(6, 2, 'Prosecco', 'PRSC', 1, 0, 'prosecco.png'),
(7, 2, 'Chianti', 'CHNT', 1, 0, 'chianti.png'),
(8, 2, 'Barolo', 'BRLO', 1, 0, 'barolo.png'),
(9, 2, 'Amarone', 'AMRN', 1, 0, 'amarone.png'),
(10, 2, 'Limoncello', 'LMCL', 1, 0, 'limoncello.png'),
(11, 2, 'Asti Spumante', 'ASTI', 1, 0, 'asti.png'),
(12, 2, 'Montepulciano D\' Abruzzo', 'MDA', 1, 0, 'montepulciano.png'),
(13, 3, 'Spaghetti alla Carbonara', 'CBNR', 1, 560, 'carbonara.png'),
(14, 3, 'Penne all\'Arrabbiata', 'ARRB', 1, 455, 'arrabbiata.png'),
(15, 3, 'Lasagna', 'LSGN', 1, 560, 'lasagna.png'),
(16, 3, 'Fettuccine Alfredo', 'FTTA', 1, 530, 'alfredo.png'),
(17, 3, 'Ravioli di Ricotta', 'RVLC', 1, 880, 'ravioli.png'),
(18, 3, 'Tagliatelle al Ragù', 'TAGR', 1, 560, 'ragu.png'),
(19, 3, 'Gnocchi al Pesto', 'GNCP', 1, 750, 'gnocchi.png'),
(20, 4, 'Margherita', 'MARG', 1, 455, 'Margherita.png'),
(21, 4, 'Quattro Stagioni', '4STG', 1, 480, 'Stagioni.png'),
(22, 4, 'Diavola', 'DIAV', 1, 460, 'Diavola.png'),
(23, 4, 'Capricciosa', 'CAPR', 1, 490, 'Capricciosa.png'),
(24, 4, 'Prosciutto e Funghi', 'PRSF', 1, 480, 'Funghi.png'),
(25, 5, 'Bistecca alla Fiorentina', 'BSTF', 1, 900, 'Bistecca.png'),
(26, 5, 'Tagliata di Manzo', 'TAGM', 1, 950, 'Tagliata.png'),
(27, 5, 'Filetto al Pepe Verde', 'FLPV', 1, 980, 'Filetto.png'),
(28, 5, 'Scaloppine al Vino Bianco', 'SCVB', 1, 900, 'Scaloppine.png'),
(29, 5, 'Cotoletta alla Milanese', 'CTML', 1, 920, 'Cotoletta.png'),
(30, 5, 'Saltimbocca alla Romana', 'SLTR', 1, 940, 'Saltimbocca.png'),
(31, 6, 'Tiramisù', 'TRMS', 1, 160, 'Tiramisu.png'),
(32, 6, 'Panna Cotta', 'PNCT', 1, 150, 'Panna.png'),
(33, 6, 'Cannoli Siciliani', 'CNSC', 1, 180, 'Cannoli.png'),
(34, 6, 'Gelato alla Fragola', 'GLFG', 1, 155, 'Fragola.png'),
(35, 6, 'Zabaglione', 'ZBLN', 1, 160, 'Zabaglione.png'),
(36, 6, 'Torta Caprese', 'TRTC', 1, 195, 'Caprese.png'),
(37, 6, 'Cassata Siciliana', 'CASS', 1, 210, 'Cassata.png');

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
(1, 6, 'glass', 'GLS', 450, 'GProsecco.png'),
(2, 6, 'bottle', 'BTL', 1800, 'BProsecco.png'),
(3, 7, 'glass', 'GLS', 520, 'GChianti.png'),
(4, 7, 'bottle', 'BTL', 2000, 'BChianti.png'),
(5, 8, 'glass', 'GLS', 750, 'GBarolo.png'),
(6, 8, 'bottle', 'BTL', 3000, 'BBarolo.png'),
(7, 9, 'glass', 'GLS', 820, 'GAmarone.png'),
(8, 9, 'bottle', 'BTL', 3300, 'BAmarone.png'),
(9, 10, 'glass', 'GLS', 350, 'GLimoncello.png'),
(10, 10, 'bottle', 'BTL', 1400, 'BLimoncello.png'),
(11, 11, 'glass', 'GLS', 480, 'GAsti.png'),
(12, 11, 'bottle', 'BTL', 1900, 'BAsti.png'),
(13, 12, 'glass', 'GLS', 390, 'GMda.png'),
(14, 12, 'bottle', 'BTL', 1600, 'BMda.png');

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
