-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2022 at 02:50 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_kel_oetete`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `nama_lengkap` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_session_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kelahiran`
--

CREATE TABLE `kelahiran` (
  `id_lahir` int(11) NOT NULL,
  `kel_nomor_kk` bigint(16) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `jenis_kelamin` enum('Laki-Laki','Perempuan') NOT NULL,
  `tgl_lahir` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `keluarga`
--

CREATE TABLE `keluarga` (
  `no_kk` bigint(16) NOT NULL,
  `kepala_kel` varchar(50) NOT NULL,
  `alamat` text NOT NULL,
  `rt` int(11) NOT NULL,
  `rw` int(11) NOT NULL,
  `kel_n_desa` varchar(50) NOT NULL,
  `kecamatan` varchar(50) NOT NULL,
  `kota_n_kab` varchar(50) NOT NULL,
  `provinsi` enum('Nanggroe Aceh Darussalam (NAD)','Sumatera Utara','Sumatera Selatan','Sumatera Barat','Bengkulu','Riau','Kepulauan Riau','Jambi','Lampung','Bangka Belitung','Kalimantan Barat','Kalimantan Timur','Kalimantan Selatan','Kalimantan Tengah','Kalimantan Utara','Banten','Daerah Khusus Ibu Kota Jakarta (DKI Jakarta)','Jawa Barat','Jawa Tengah','Daerah Istimewa Yogyakarta (DIY)','Jawa Timur','Bali','Nusa Tenggara Timur','Nusa Tenggara Barat','Gorontalo','Sulawesi Barat','Sulawesi Tengah','Sulawesi Utara','Sulawesi Tenggara','Sulawesi Selatan','Maluku Utara','Maluku','Papua Barat','Papua','Papua Selatan','Papua Tengah','Papua Pegunungan') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kematian`
--

CREATE TABLE `kematian` (
  `id_kematian` int(11) NOT NULL,
  `nik` bigint(16) NOT NULL,
  `tgl_kematian` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `penduduk`
--

CREATE TABLE `penduduk` (
  `nik` bigint(16) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `jenis_kelamin` enum('Laki-Laki','Perempuan') NOT NULL,
  `hubungan_keluarga` enum('Kepala Keluarga','Istri','Anak','Menantu','Orang Tua','Mertua','Famili Lain','Pembantu') NOT NULL,
  `lahir` varchar(50) NOT NULL,
  `status_perkawinan` enum('Belum Menikah','Sudah Menikah','Cerai Hidup','Cerai Mati') NOT NULL,
  `pekerjaan` enum('Belum Bekerja','Mengurus Rumah Tangga','Pelajar/Mahasiswa','Pensiunan','PNS','POLRI','TNI','WIRASWASTA','SWASTA','Pegawai BUMN','Pekerja Lepas','Petani/peternak/pekebun','Nelayan','Industri') NOT NULL,
  `pendidikan` enum('Belum/Tidak Pernah Sekolah','Belum/Tidak Tamat SD/SDLB/MI/Paket A','SD/SDLB/MI/Paket A','SMP/SMPLB/MTs/Paket B','SMA/SMLB/MA/SMK/MAK/paket C','DI/DII/DIII','DIV/S1','S2','S3') NOT NULL,
  `kel_no_kk` bigint(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `publikasi`
--

CREATE TABLE `publikasi` (
  `file_article` varchar(255) NOT NULL,
  `judul_publish` varchar(100) NOT NULL,
  `tanggal_terbit` varchar(10) NOT NULL,
  `id_publish` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `umkm`
--

CREATE TABLE `umkm` (
  `id_Usaha` int(11) NOT NULL,
  `nama_usaha` varchar(130) NOT NULL,
  `alamat_tempat_usaha` varchar(255) NOT NULL,
  `nama_kk` varchar(100) NOT NULL,
  `umur` int(11) NOT NULL,
  `nama_pemilik` varchar(135) NOT NULL,
  `alamat_tempat_tinggal` varchar(135) NOT NULL,
  `pendidikan_pemilik` enum('Belum/Tidak Pernah Sekolah','Belum/Tidak Pernah Tamat SD/SDLB/MI/Paket A','SD/SDLB/MI/Paket A','SMP/SMPLB/MTs/Paket B','SMA/SMLB/MTA/SMK/MAK/paket C','DI/DII/DII','DIV/S1','S2','S3') NOT NULL,
  `jenis_lokasi_usaha` enum('Tetap','Keliling') NOT NULL,
  `jenis_pengelolaan_usaha` enum('Perorangan','Badan Usaha') NOT NULL,
  `kbli` enum('') NOT NULL,
  `rincian_kgiatan_usaha` text NOT NULL,
  `omset` enum('Omset <= Rp.300 Juta','Rp.300 Juta < Omset <= Rp.2,5 Milliar','Rp.2,5 Milliar < Omset <= Rp.50 Milliar') NOT NULL,
  `kekayaan_bersih_usaha` enum('KBU <= Rp.50 Juta','Rp.50 Juta < KBU <= Rp.500 Juta','Rp.500 Juta < KBU <= Rp.10 Milliar') NOT NULL,
  `jumlah_tenaga_kerja` enum('1-5 Tenaga Kerja','6-19 Tenaga Kerja','≥ 20 Tenaga Kerja') NOT NULL,
  `modal_usaha` enum('Modal Sendiri','Bantuan Pemerintah','Modal Sendiri & Bantuan Pemerintah') NOT NULL,
  `bina_usaha` enum('Ya','Tidak') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `kelahiran`
--
ALTER TABLE `kelahiran`
  ADD PRIMARY KEY (`id_lahir`),
  ADD KEY `kelahiran` (`kel_nomor_kk`);

--
-- Indexes for table `keluarga`
--
ALTER TABLE `keluarga`
  ADD PRIMARY KEY (`no_kk`);

--
-- Indexes for table `kematian`
--
ALTER TABLE `kematian`
  ADD PRIMARY KEY (`id_kematian`),
  ADD KEY `kematian` (`nik`);

--
-- Indexes for table `penduduk`
--
ALTER TABLE `penduduk`
  ADD PRIMARY KEY (`nik`),
  ADD KEY `penduduk` (`kel_no_kk`);

--
-- Indexes for table `publikasi`
--
ALTER TABLE `publikasi`
  ADD PRIMARY KEY (`id_publish`);

--
-- Indexes for table `umkm`
--
ALTER TABLE `umkm`
  ADD PRIMARY KEY (`id_Usaha`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `kelahiran`
--
ALTER TABLE `kelahiran`
  MODIFY `id_lahir` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `kematian`
--
ALTER TABLE `kematian`
  MODIFY `id_kematian` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `publikasi`
--
ALTER TABLE `publikasi`
  MODIFY `id_publish` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `umkm`
--
ALTER TABLE `umkm`
  MODIFY `id_Usaha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `kelahiran`
--
ALTER TABLE `kelahiran`
  ADD CONSTRAINT `kelahiran` FOREIGN KEY (`kel_nomor_kk`) REFERENCES `keluarga` (`no_kk`);

--
-- Constraints for table `kematian`
--
ALTER TABLE `kematian`
  ADD CONSTRAINT `kematian` FOREIGN KEY (`nik`) REFERENCES `penduduk` (`nik`);

--
-- Constraints for table `penduduk`
--
ALTER TABLE `penduduk`
  ADD CONSTRAINT `penduduk` FOREIGN KEY (`kel_no_kk`) REFERENCES `keluarga` (`no_kk`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



INSERT INTO kbli(no_kbli ,deskripsi_kbli) 
VALUES
(1,'Pertanian Tanaman, Peternakan, Perburuan dan Kegiatan YBDI'),
(2,''),
(3,''),
(5,''),
(6,''),
(7,''),

(8,''),
(9,''),
(10,''),
(11,''),

(12,''),
(13,''),
(14,''),
(15,''),
(16,''),
(17,''),
(18,''),
(19,''),
(20,''),
(21,''),
(22,''),
(23,''),
(24,''),


(25,''),
(26,''),
(27,''),
(28,''),

(29,''),
(30,''),
(31,''),

(32,''),
(33,''),
(35,''),
(36,''),
(37,''),
(38,''),
(39,''),

(41,''),
(42,''),
(43,''),
(45,''),
(46,''),
(47,''),

(49,''),
(50,''),
(51,''),

(52,''),
(53,''),
(55,''),
(56,''),
(58,''),
(59,''),
(60,''),
(61,''),
(62,''),
(63,''),
(64,''),
(65,''),
(66,''),
(68,''),

(69,''),
(70,''),
(71,''),
(72,''),
(73,''),

(74,''),
(75,''),

(77,''),
(78,''),
(79,''),
(80,''),
(81,''),
(82,''),
(84,''),
(85,''),
(86,''),
(87,''),
(88,''),
(90,''),
(91,''),

(92,''),
(93,''),
(94,''),
(95,''),
(96,''),
(97,''),
(98,''),
(99,'');