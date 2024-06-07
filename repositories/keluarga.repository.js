/* eslint-disable no-useless-catch */

import Keluarga from "../models/keluarga.model.js";


// Fungsi untuk menambahkan mahasiswa baru (contoh tambahan)
export const createKeluarga = async (keluargaData) => {

    try {
        const newKeluarga = await Keluarga.create(keluargaData);
        return newKeluarga;
    } catch (error) {
        throw error;
    }
};


export const getAllKeluarga = async()=>{
    try {
        const getAllKeluarga = await Keluarga.findAll();
        return getAllKeluarga;
    } catch (error) {
        throw error;
    }
};


// Fungsi untuk mendapatkan total data keluarga
export const getTotalKeluarga = async () => {
    try {
        const totalKeluarga = await Keluarga.count();
        return totalKeluarga;
    } catch (error) {
        throw error;
    }
};