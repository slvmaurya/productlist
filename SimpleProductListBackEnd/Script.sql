-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2019 at 02:24 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mauryasakala`
--

-- --------------------------------------------------------

--
-- Table structure for table `productlist`
--

CREATE TABLE `productlist` (
  `Title` varchar(100) NOT NULL,
  `Description` varchar(200) NOT NULL,
  `ProductImage` varchar(100) NOT NULL,
  `Price` int(11) NOT NULL,
  `Comments` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productlist`
--

INSERT INTO `productlist` (`Title`, `Description`, `ProductImage`, `Price`, `Comments`) VALUES
('Pencil', 'Pencil', 'http://localhost:8012/img/pencil.jpg', 2, 'Pencil'),
('Pen', 'Pen', 'http://localhost:8012/img/pen.jpg', 4, 'Pen'),
('PunchHole', 'PunchHole', 'http://localhost:8012/img/PunchHole.jpg', 5, 'PunchHole'),
('Sketch', 'Sketch', 'http://localhost:8012/img/Sketch.png', 8, 'Sketch'),
('WallClock', 'Wall Clock', 'http://localhost:8012/img/WallClock.jpg', 15, 'Wall Clock'),
('NoteBook', 'NoteBook', 'http://localhost:8012/img/notebook.jpg', 15, 'NoteBook'),
('Ball', 'Ball', 'http://localhost:8012/img/ball.jpg', 2, 'Ball'),
('Scale', 'Scale', 'http://localhost:8012/img/scale.jpeg', 5, 'Scale'),
('Marker', 'Marker', 'http://localhost:8012/img/marker.jpg', 7, 'Marker'),
('Shoe', 'Shoe', 'http://localhost:8012/img/shoe.jpg', 25, 'Shoe');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
