-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2022 at 08:27 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

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

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`nama_lengkap`, `user_id`, `user_name`, `user_password`, `user_session_id`) VALUES
('admin123', 17, 'admin123', 'admin123', '');

-- --------------------------------------------------------

--
-- Table structure for table `kbli`
--

CREATE TABLE `kbli` (
  `id_kbli` int(100) NOT NULL,
  `no_kbli` int(100) NOT NULL,
  `keterangan` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kbli`
--

INSERT INTO `kbli` (`id_kbli`, `no_kbli`, `keterangan`) VALUES
(1, 1, 'Pertanian Tanaman, Peternakan, Perburuan dan Kegiatan YBDI'),
(2, 2, 'Pengelolaan Kehutanan dan Penebangan'),
(3, 3, 'Perikanan'),
(4, 5, 'Pertambangan Batu Bara dan Lignit'),
(5, 6, 'Pertambangan Minyak Bumi dan Gas Alam dan Panas Bumi'),
(6, 7, 'Pertambangan Bijih Logam'),
(7, 8, 'Pertambangan dan Penggalian Lainnya'),
(8, 9, 'Aktivitas Jasa Penunjang Pertambangan'),
(9, 10, 'Industri Makanan'),
(10, 11, 'Industri Minuman'),
(11, 12, 'Industri Pengolahan Tembakau'),
(12, 13, 'Industri Tekstil'),
(13, 14, 'Industri Pakaian Jadi'),
(14, 15, 'Industri Kulit, Barang dari Kulit dan Alas\nKaki'),
(15, 16, 'Industri Kayu, Barang dari Kayu dan Gabus (Tidak Termasuk Furnitur) dan Barang Anyaman dari Bambu, Rotan\ndan Sejenisnya'),
(16, 17, 'Industri Kertas dan Barang dari Kertas'),
(17, 18, 'Industri Pencetakan dan Reproduksi\nMedia Rekaman'),
(18, 19, 'Industri Produk Dari Batu Bara dan Pengilangan Minyak Bumi'),
(19, 20, 'Industri Bahan Kimia dan Barang dari Bahan Kimia'),
(20, 21, 'Industri Farmasi, Produk Obat Kimia dan Obat Tradisional'),
(21, 22, 'Industri Karet, Barang dari Karet dan Plastik'),
(22, 23, 'Industri Barang Galian Bukan Logam'),
(23, 24, 'Industri Logam Dasar'),
(24, 25, 'Industri Barang Logam, Bukan Mesin\ndan Peralatannya'),
(25, 26, 'Industri Komputer, Barang Elektronik dan Optik'),
(26, 27, 'Industri Peralatan Listrik'),
(27, 28, 'Industri Mesin dan Perlengkapan ytdl'),
(28, 29, 'Industri Kendaraan Bermotor, Trailer dan Semi Trailer'),
(29, 30, 'Industri Alat Angkutan Lainnya'),
(30, 31, 'Industri Furnitur'),
(31, 32, 'Industri Pengolahan Lainnya'),
(32, 33, 'Reparasi dan Pemasangan Mesin dan Peralatan'),
(33, 35, 'Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin'),
(34, 36, 'Treatment Air'),
(35, 37, 'Treatment Air Limbah'),
(36, 38, 'Pengumpulan, Treatment dan Pembuangan Limbah dan Sampah Serta\nAktivitas Pemulihan Material'),
(37, 39, 'Aktivitas Remediasi dan Pengelolaan Limbah dan Sampah Lainnya'),
(38, 41, 'Konstruksi Gedung'),
(39, 42, 'Konstruksi Bangunan Sipil'),
(40, 43, 'Konstruksi Khusus'),
(41, 45, 'Perdagangan, Reparasi dan Perawatan\nMobil dan Sepeda Motor'),
(42, 46, 'Perdagangan Besar, Bukan Mobil dan Sepeda Motor'),
(43, 47, 'Perdagangan Eceran, Bukan Mobil dan Motor'),
(44, 49, 'Angkutan Darat dan Angkutan Melalui Saluran Pipa'),
(45, 50, 'Angkutan Perairan'),
(46, 51, 'Angkutan Udara'),
(47, 52, 'Pergudangan dan Aktivitas Penunjang Angkutan'),
(48, 53, 'Aktivitas Pos dan Kurir'),
(49, 55, 'Penyediaan Akomodasi'),
(50, 56, 'Penyediaan Makanan dan Minuman'),
(51, 58, 'Aktivitas Penerbitan'),
(52, 59, 'Aktivitas Produksi Gambar Bergerak, Video dan Program Televisi, Perekaman Suara dan Penerbitan Musik'),
(53, 60, 'Aktivitas Penyiaran dan Pemrograman'),
(54, 61, 'Telekomunikasi'),
(55, 62, 'Aktivitas Pemrograman, Konsultasi\nKomputer dan Kegiatan Ybdi'),
(56, 63, 'Aktivitas Jasa Informasi'),
(57, 64, 'Aktivitas Jasa Keuangan, Bukan Asuransi dan Dana Pensiun'),
(58, 65, 'Asuransi, Penjaminan, Reasuransi dan Dana Pensiun, Bukan Jaminan Sosial\nWajib'),
(59, 66, 'Aktivitas Penunjang Jasa Keuangan, Asuransi, Penjaminan dan Dana Pensiun'),
(60, 68, 'Real Estat'),
(61, 69, 'Aktivitas Hukum dan Akuntansi'),
(62, 70, 'Aktivitas Kantor Pusat dan Konsultasi Manajemen'),
(63, 71, 'Aktivitas Arsitektur dan Keinsinyuran,\nAnalisis dan Uji Teknis'),
(64, 72, 'Penelitian dan Pengembangan Ilmu\nPengetahuan'),
(65, 73, 'Periklanan dan Penelitian Pasar'),
(66, 74, 'Aktivitas Profesional, Ilmiah dan Teknis Lainnya'),
(67, 75, 'Aktivitas Kesehatan Hewan'),
(68, 77, 'Aktivitas Penyewaan dan Sewa Guna Usaha Tanpa Hak Opsi'),
(69, 78, 'Aktivitas Ketenagakerjaan'),
(70, 79, 'Aktivitas Agen Perjalanan, Penyelenggara Tur dan Jasa Reservasi Lainnya'),
(71, 80, 'Aktivitas Keamanan dan Penyelidikan'),
(72, 81, 'Aktivitas Penyedia Jasa untuk Gedung dan Pertamanan'),
(73, 82, 'Aktivitas Administrasi Kantor, Aktivitas Penunjang Kantor dan Aktivitas Penunjang Usaha Lainnya'),
(74, 84, 'Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib'),
(75, 85, 'Pendidikan'),
(76, 86, 'Aktivitas Kesehatan Manusia'),
(77, 87, 'Aktivitas Sosial di Dalam Panti'),
(78, 88, 'Aktivitas Sosial Tanpa Akomodasi'),
(79, 90, 'Aktivitas Hiburan, Kesenian dan Kreativitas'),
(80, 91, 'Perpustakaan, Arsip, Museum dan Kegiatan Kebudayaan Lainnya'),
(81, 92, 'Aktivitas Perjudian dan Pertaruhan'),
(82, 93, 'Aktivitas Olahraga dan Rekreasi Lainnya'),
(83, 94, 'Aktivitas Keanggotaan Organisasi'),
(84, 95, 'Reparasi Komputer dan Barang Keperluan Pribadi dan Perlengkapan\nRumah Tangga'),
(85, 96, 'Aktivitas Jasa Perorangan Lainnya'),
(86, 97, 'Aktivitas Rumah Tangga Sebagai Pemberi Kerja Dari Personil Domestik'),
(87, 98, 'Aktivitas Yang Menghasilkan Barang dan Jasa oleh Rumah Tangga Yang Digunakan untuk Memenuhi Kebutuhan\nSendiri'),
(88, 99, 'Aktivitas Badan Internasional dan Badan Ekstra Internasional Lainnya');

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
-- Table structure for table `keluar`
--

CREATE TABLE `keluar` (
  `id_pindah` int(11) NOT NULL,
  `kel_nomor_kk` bigint(16) NOT NULL,
  `tgl_pindah` varchar(15) NOT NULL,
  `penduduk_nik` bigint(16) NOT NULL,
  `alasan` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `keluar`
--

INSERT INTO `keluar` (`id_pindah`, `kel_nomor_kk`, `tgl_pindah`, `penduduk_nik`, `alasan`) VALUES
(1, 5371041506020005, '2022-12-20', 23134243134, 'Test saja'),
(3, 2323232323232323, '2022-12-08', 234552, 'Saya lapar seka');

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

--
-- Dumping data for table `keluarga`
--

INSERT INTO `keluarga` (`no_kk`, `kepala_kel`, `alamat`, `rt`, `rw`, `kel_n_desa`, `kecamatan`, `kota_n_kab`, `provinsi`) VALUES
(2323232323232323, 'Kevin Sandro', 'Jln. Ahmad Yani No 20', 1, 1, 'Oetete', 'Oebobo', 'Kota Kupang', 'Kalimantan Tengah'),
(5371041506020005, 'Kevin Sanjaya', 'Jln. Rudy', 1, 2, 'Oetete', 'Oebobo', 'Kupang', 'Nusa Tenggara Timur'),
(5371041506020007, 'Andreas Ludji', 'Jln Keramat 11', 1, 2, 'Oetete', 'Oebobo', 'Kupang', 'Nusa Tenggara Timur');

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
-- Table structure for table `masuk`
--

CREATE TABLE `masuk` (
  `id_masuk` int(20) NOT NULL,
  `nomor_kk` bigint(16) NOT NULL,
  `nik_kk` bigint(16) NOT NULL,
  `tgl_masuk` varchar(50) NOT NULL,
  `alamat_sebelumnya` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `masuk`
--

INSERT INTO `masuk` (`id_masuk`, `nomor_kk`, `nik_kk`, `tgl_masuk`, `alamat_sebelumnya`) VALUES
(1, 867664534275, 867664534277, '565', 'uyuhg');

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

--
-- Dumping data for table `penduduk`
--

INSERT INTO `penduduk` (`nik`, `nama`, `jenis_kelamin`, `hubungan_keluarga`, `lahir`, `status_perkawinan`, `pekerjaan`, `pendidikan`, `kel_no_kk`) VALUES
(234552, 'Shanty Ratudjawa', 'Laki-Laki', 'Menantu', '2022-12-29', 'Sudah Menikah', 'Pekerja Lepas', 'SD/SDLB/MI/Paket A', 5371041506020005),
(23134243134, 'Sevanya Chaterine Lenggu', 'Perempuan', 'Istri', '2022-12-07', 'Sudah Menikah', 'WIRASWASTA', 'SD/SDLB/MI/Paket A', 2323232323232323),
(23134243134222, 'Nalfayo Andrew', 'Laki-Laki', 'Orang Tua', '2022-12-08', 'Cerai Hidup', 'Pegawai BUMN', 'SD/SDLB/MI/Paket A', 2323232323232323);

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
  `id_Usaha` int(50) NOT NULL,
  `nama_usaha` varchar(130) NOT NULL,
  `alamat_tempat_usaha` varchar(255) NOT NULL,
  `nama_kk` varchar(100) NOT NULL,
  `umur` int(50) NOT NULL,
  `nama_pemilik` varchar(135) NOT NULL,
  `alamat_tempat_tinggal` varchar(135) NOT NULL,
  `pendidikan_pemilik` enum('Belum/Tidak Pernah Sekolah','Belum/Tidak Pernah Tamat SD/SDLB/MI/Paket A','SD/SDLB/MI/Paket A','SMP/SMPLB/MTs/Paket B','SMA/SMLB/MTA/SMK/MAK/paket C','DI/DII/DII','DIV/S1','S2','S3') NOT NULL,
  `jenis_lokasi_usaha` enum('Tetap','Keliling') NOT NULL,
  `jenis_pengelolaan_usaha` enum('Perorangan','Badan Usaha') NOT NULL,
  `kbli` varchar(150) NOT NULL,
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
-- Indexes for table `kbli`
--
ALTER TABLE `kbli`
  ADD PRIMARY KEY (`id_kbli`);

--
-- Indexes for table `kelahiran`
--
ALTER TABLE `kelahiran`
  ADD PRIMARY KEY (`id_lahir`);

--
-- Indexes for table `keluar`
--
ALTER TABLE `keluar`
  ADD PRIMARY KEY (`id_pindah`);

--
-- Indexes for table `keluarga`
--
ALTER TABLE `keluarga`
  ADD PRIMARY KEY (`no_kk`);

--
-- Indexes for table `kematian`
--
ALTER TABLE `kematian`
  ADD PRIMARY KEY (`id_kematian`);

--
-- Indexes for table `masuk`
--
ALTER TABLE `masuk`
  ADD PRIMARY KEY (`id_masuk`);

--
-- Indexes for table `penduduk`
--
ALTER TABLE `penduduk`
  ADD PRIMARY KEY (`nik`);

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
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `kbli`
--
ALTER TABLE `kbli`
  MODIFY `id_kbli` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `kelahiran`
--
ALTER TABLE `kelahiran`
  MODIFY `id_lahir` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `keluar`
--
ALTER TABLE `keluar`
  MODIFY `id_pindah` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `kematian`
--
ALTER TABLE `kematian`
  MODIFY `id_kematian` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `masuk`
--
ALTER TABLE `masuk`
  MODIFY `id_masuk` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `publikasi`
--
ALTER TABLE `publikasi`
  MODIFY `id_publish` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `umkm`
--
ALTER TABLE `umkm`
  MODIFY `id_Usaha` int(50) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
