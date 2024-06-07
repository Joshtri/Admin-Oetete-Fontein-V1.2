/* eslint-disable no-useless-catch */

import Kelahiran from "../models/kelahiran.model.js";
import Keluarga from "../models/keluarga.model.js";


export const getAllKelahiran = async()=>{
    try {
        const getAllKelahiran = await Kelahiran.findAll({
            include: {
                model: Keluarga,
                attributes: ['nama_kepala_keluarga'] // Specify the columns you want to include from the Keluarga table
            }
        });
        return getAllKelahiran;
    } catch (error) {
        throw error;
    }
};


export const createKelahiran = async (kelahiranData)=>{
    try {
        const createKelahiran = await Kelahiran.create(kelahiranData);
        return createKelahiran;
    } catch (error) {
        throw error;
    }
};


// Fungsi untuk mendapatkan total data Kelahiran
export const getTotalKelahiran = async () => {
    try {
        const totalKelahiran = await Kelahiran.count();
        return totalKelahiran;
    } catch (error) {
        throw error;
    }
};