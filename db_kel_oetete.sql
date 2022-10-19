-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2022 at 01:30 AM
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

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`nama_lengkap`, `user_id`, `user_name`, `user_password`, `user_session_id`) VALUES
('Edina Felix', 12, 'Edin', 'admin', ''),
('Lucky Kingston', 13, 'Lucky', 'admin', ''),
('Terono', 15, 'admin', 'admin', '');

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

--
-- Dumping data for table `kelahiran`
--

INSERT INTO `kelahiran` (`id_lahir`, `kel_nomor_kk`, `nama`, `jenis_kelamin`, `tgl_lahir`) VALUES
(0, 5371041550008889, 'Erix Kingston', 'Laki-Laki', '2022-10-26'),
(7, 5371046021115222, 'Andreas Ludjo', 'Laki-Laki', '2022-10-25');

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
(5371041550008889, 'Tino Query', 'Jalan Seribu Langkah', 5, 1, 'Oetete', 'Oebobo', 'Kota Kupang', 'Nusa Tenggara Timur'),
(5371046021115222, 'Endemic Anony', 'Jalan Terus Gak Jadian', 3, 1, 'Oetete', 'Oebobo', 'Kupang', 'Nusa Tenggara Timur'),
(7670015658892450, 'Albert Tylo', 'Jln. Ahmad Yani No 20', 8, 5, 'Oetete', 'Oebobo', 'Kota Kupang', 'Nusa Tenggara Timur'),
(53710401506020007, 'Eroxim', 'Jalan Amfibi', 3, 2, 'Oetete', 'Oebobo', 'Kota Kupang', 'Nusa Tenggara Timur');

-- --------------------------------------------------------

--
-- Table structure for table `kematian`
--

CREATE TABLE `kematian` (
  `id_kematian` int(11) NOT NULL,
  `nik` bigint(16) NOT NULL,
  `tgl_kematian` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kematian`
--

INSERT INTO `kematian` (`id_kematian`, `nik`, `tgl_kematian`) VALUES
(0, 100588834599, '2022-10-19'),
(3, 537088834512343, '2022-10-10');

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
(100588834599, 'Ayo Andrew', 'Laki-Laki', 'Kepala Keluarga', '', 'Cerai Hidup', 'Pegawai BUMN', 'S2', 7670015658892450),
(537088834512343, 'Urei', 'Perempuan', 'Istri', '', 'Cerai Hidup', 'SWASTA', 'DIV/S1', 5371046021115222),
(3201162706040004, 'Erico Ling', 'Laki-Laki', 'Anak', '2002-02-21', 'Belum Menikah', 'Pegawai BUMN', 'Belum/Tidak Pernah Sekolah', 53710401506020007),
(5370008882233401, 'Endin', 'Perempuan', 'Anak', '2022-10-13', 'Belum Menikah', 'Pelajar/Mahasiswa', 'DIV/S1', 7670015658892450),
(5371030912912990, 'Sulesto', 'Laki-Laki', 'Kepala Keluarga', '2022-01-20', 'Sudah Menikah', 'SWASTA', 'S2', 5371046021115222),
(5371041506020002, 'Eroxim', 'Laki-Laki', 'Kepala Keluarga', '2002-06-15', 'Sudah Menikah', 'SWASTA', 'DIV/S1', 53710401506020007),
(5371041506021452, 'Frenderic X. Marxim', 'Perempuan', 'Istri', '2002-07-29', 'Sudah Menikah', 'SWASTA', 'S2', 5371046021115222),
(5541114453450091, 'Ulexia Uefina Udin', 'Perempuan', 'Anak', '2034-10-18', 'Belum Menikah', 'Belum Bekerja', 'DIV/S1', 5371046021115222),
(6105556005450002, 'Axio Acerina Trodox', 'Laki-Laki', 'Anak', '2030-07-24', 'Belum Menikah', 'Belum Bekerja', 'SMP/SMPLB/MTs/Paket B', 5371046021115222),
(6705556610130005, 'Vandali Uriem', 'Perempuan', 'Anak', '2030-09-27', 'Belum Menikah', 'Belum Bekerja', 'SMA/SMLB/MA/SMK/MAK/paket C', 5371046021115222);

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
  `kbli` enum('Pertanian Tanaman, Peternakan, Perburuan dan Kegiatan YBDI','Pengelolaan Kehutanan dan Penebangan','Perikanan','Pertambangan Batu Bara dan Lignit','Pertambangan Minyak Bumi dan Gas Alam dan Panas Bumi','Pertambangan Bijih Logam','Pertambangan dan Penggalian Lainnya','Aktivitas Jasa Penunjang Pertambangan','Industri Makanan','Industri Minuman','Industri Pengolahan Tembakau','Industri Tekstil','Industri Pakaian Jadi','Industri Kulit, Barang dari Kulit dan Alas\nKaki','Industri Kayu, Barang dari Kayu dan Gabus (Tidak Termasuk Furnitur) dan Barang Anyaman dari Bambu, Rotan\ndan Sejenisnya','Industri Kertas dan Barang dari Kertas','Industri Pencetakan dan Reproduksi\nMedia Rekaman','Industri Produk Dari Batu Bara dan Pengilangan Minyak Bumi','Industri Bahan Kimia dan Barang dari Bahan Kimia','Industri Farmasi, Produk Obat Kimia dan Obat Tradisional','Industri Karet, Barang dari Karet dan Plastik','Industri Barang Galian Bukan Logam','Industri Logam Dasar','Industri Barang Logam, Bukan Mesin\ndan Peralatannya','Industri Komputer, Barang Elektronik dan Optik','Industri Peralatan Listrik','Industri Mesin dan Perlengkapan ytdl','Industri Kendaraan Bermotor, Trailer dan Semi Trailer','Industri Alat Angkutan Lainnya','Industri Furnitur','Industri Pengolahan Lainnya','Reparasi dan Pemasangan Mesin dan Peralatan','Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin','Treatment Air','Treatment Air Limbah','Pengumpulan, Treatment dan Pembuangan Limbah dan Sampah Serta\nAktivitas Pemulihan Material','Aktivitas Remediasi dan Pengelolaan Limbah dan Sampah Lainnya','Konstruksi Gedung','Konstruksi Bangunan Sipil','Konstruksi Khusus','Perdagangan, Reparasi dan Perawatan\nMobil dan Sepeda Motor','Perdagangan Besar, Bukan Mobil dan Sepeda Motor','Perdagangan Eceran, Bukan Mobil dan Motor','Angkutan Darat dan Angkutan Melalui Saluran Pipa','Angkutan Perairan','Angkutan Udara','Pergudangan dan Aktivitas Penunjang Angkutan','Aktivitas Pos dan Kurir','Penyediaan Akomodasi','Penyediaan Makanan dan Minuman','Aktivitas Penerbitan','Aktivitas Produksi Gambar Bergerak, Video dan Program Televisi, Perekaman Suara dan Penerbitan Musik','Aktivitas Penyiaran dan Pemrograman','Telekomunikasi','Aktivitas Pemrograman, Konsultasi\nKomputer dan Kegiatan Ybdi','Aktivitas Jasa Informasi','Aktivitas Jasa Keuangan, Bukan Asuransi dan Dana Pensiun','Asuransi, Penjaminan, Reasuransi dan Dana Pensiun, Bukan Jaminan Sosial\nWajib','Aktivitas Penunjang Jasa Keuangan, Asuransi, Penjaminan dan Dana Pensiun','Real Estat','Aktivitas Hukum dan Akuntansi','Aktivitas Kantor Pusat dan Konsultasi Manajemen','Aktivitas Arsitektur dan Keinsinyuran;\nAnalisis dan Uji Teknis','Penelitian dan Pengembangan Ilmu\nPengetahuan	','Periklanan dan Penelitian Pasar','Aktivitas Profesional, Ilmiah dan Teknis Lainnya','Aktivitas Kesehatan Hewan','Aktivitas Penyewaan dan Sewa Guna Usaha Tanpa Hak Opsi','Aktivitas Ketenagakerjaan','Aktivitas Agen Perjalanan, Penyelenggara Tur dan Jasa Reservasi Lainnya','Aktivitas Keamanan dan Penyelidikan','Aktivitas Penyedia Jasa untuk Gedung dan Pertamanan','Aktivitas Administrasi Kantor, Aktivitas Penunjang Kantor dan Aktivitas Penunjang Usaha Lainnya','Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib','Pendidikan','Aktivitas Kesehatan Manusia','Aktivitas Sosial di Dalam Panti','Aktivitas Sosial Tanpa Akomodasi','Aktivitas Hiburan, Kesenian dan Kreativitas','Perpustakaan, Arsip, Museum dan Kegiatan Kebudayaan Lainnya','Aktivitas Perjudian dan Pertaruhan','Aktivitas Olahraga dan Rekreasi Lainnya','Aktivitas Keanggotaan Organisasi','Reparasi Komputer dan Barang Keperluan Pribadi dan Perlengkapan\nRumah Tangga','Aktivitas Jasa Perorangan Lainnya','Aktivitas Rumah Tangga Sebagai Pemberi Kerja Dari Personil Domestik','Aktivitas Yang Menghasilkan Barang dan Jasa oleh Rumah Tangga Yang Digunakan untuk Memenuhi Kebutuhan\nSendiri','Aktivitas Badan Internasional dan Badan Ekstra Internasional Lainnya') NOT NULL,
  `rincian_kgiatan_usaha` text NOT NULL,
  `omset` enum('Omset <= Rp.300 Juta','Rp.300 Juta < Omset <= Rp.2,5 Milliar','Rp.2,5 Milliar < Omset <= Rp.50 Milliar') NOT NULL,
  `kekayaan_bersih_usaha` enum('KBU <= Rp.50 Juta','Rp.50 Juta < KBU <= Rp.500 Juta','Rp.500 Juta < KBU <= Rp.10 Milliar') NOT NULL,
  `jumlah_tenaga_kerja` enum('1-5 Tenaga Kerja','6-19 Tenaga Kerja','≥ 20 Tenaga Kerja') NOT NULL,
  `modal_usaha` enum('Modal Sendiri','Bantuan Pemerintah','Modal Sendiri & Bantuan Pemerintah') NOT NULL,
  `bina_usaha` enum('Ya','Tidak') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `umkm`
--

INSERT INTO `umkm` (`id_Usaha`, `nama_usaha`, `alamat_tempat_usaha`, `nama_kk`, `umur`, `nama_pemilik`, `alamat_tempat_tinggal`, `pendidikan_pemilik`, `jenis_lokasi_usaha`, `jenis_pengelolaan_usaha`, `kbli`, `rincian_kgiatan_usaha`, `omset`, `kekayaan_bersih_usaha`, `jumlah_tenaga_kerja`, `modal_usaha`, `bina_usaha`) VALUES
(1, 'Bakmie Covid 19', 'Jln. Sentikom Anjayd', 'Sulthan Lamarian', 20, 'Sulthan Lamarian', 'Jln. Kebiri 10', 'S2', 'Tetap', 'Perorangan', 'Industri Makanan', 'Tempat makan yang bergizi dan sangat sehat sekali, ya sangat enak sih bro.', 'Omset <= Rp.300 Juta', 'KBU <= Rp.50 Juta', '1-5 Tenaga Kerja', 'Bantuan Pemerintah', 'Ya'),
(5, 'Warung Sentikom', 'Jalan Penfui No.3', 'Ricky Manafe', 27, 'Ricky Manafe', 'Jln. IBM', 'DIV/S1', 'Tetap', 'Badan Usaha', 'Industri Makanan', 'Bekerja dengan semangat bersama warung sentikom', 'Omset <= Rp.300 Juta', 'KBU <= Rp.50 Juta', '6-19 Tenaga Kerja', 'Modal Sendiri', 'Ya');

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
