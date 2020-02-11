-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 09 oct. 2019 à 20:31
-- Version du serveur :  10.4.6-MariaDB
-- Version de PHP :  7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ajax-messa`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(100) NOT NULL,
  `name` varchar(120) NOT NULL,
  `jaimes` int(100) NOT NULL,
  `message` varchar(120) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `name`, `jaimes`, `message`, `date`) VALUES
(1, 'username1', 2, 'message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 ', '2019-10-09'),
(2, 'username2', 1, 'message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 ', '2019-10-09'),
(3, 'mathilde2111', 2, ' aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2019-10-09'),
(4, ' alaa', 1, ' alaa kaddour alaa kaddour alaa kaddour alaa kaddour alaa kaddour alaa kaddour alaa kaddour', '2019-10-09'),
(5, ' amino2111', 0, 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulat', '2019-10-09'),
(6, ' racha', 1, ' event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.', '2019-10-09'),
(7, ' jamil', 1, ' With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScrip', '2019-10-09'),
(8, ' racha', 0, ' Create a new jQuery object with elements added to the set of matched elements.', '2019-10-09'),
(9, ' username1', 0, ' Add the previous set of elements on the stack to the current set, optionally filtered by a selector.', '2019-10-09'),
(10, ' racha', 0, ' aaaa', '2019-10-09'),
(11, ' username1', 0, ' Add the previous set of elements on the stack to the current set, optionally filtered by a selector.\n', '2019-10-09'),
(12, ' azerty', 0, ' Add the previous set of elements on the stack to the current set, optionally filtered by a selector.\n', '2019-10-09'),
(13, ' test3', 0, ' gdfsgsdhdsfsf', '2019-10-09');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
