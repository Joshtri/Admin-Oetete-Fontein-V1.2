/* eslint-disable no-useless-catch */
import Warga from "../models/warga.model.js";
import Keluarga from "../models/keluarga.model.js";


// Fungsi untuk menambahkan mahasiswa baru (contoh tambahan)
export const createWarga = async (wargaData) => {

    try {
        const newWarga = await Warga.create(wargaData);
        return newWarga;
    } catch (error) {
        throw error;
    }
};


export const getAllWarga = async () => {
    try {
        const getAllWarga = await Warga.findAll({
            include: {
                model: Keluarga,
                attributes: ['nama_kepala_keluarga'] // Specify the columns you want to include from the Keluarga table
            }
        });
        return getAllWarga;
    } catch (error) {
        throw error;
    }
};

// Fungsi untuk mendapatkan total data Warga
export const getTotalWarga = async () => {
    try {
        const totalWarga = await Warga.count();
        return totalWarga;
    } catch (error) {
        throw error;
    }
};