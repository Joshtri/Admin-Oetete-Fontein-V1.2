/* eslint-disable no-useless-catch */
import Kematian from "../models/kematian.model.js";
import Warga from "../models/warga.model.js";



export const getAllKematian = async ()=>{
    try {
        const getAllKematian = await Kematian.findAll({
            include: {
                model: Warga,
                attributes: ['nama_warga'] // Specify the columns you want to include from the Keluarga table
            }
        });
        return getAllKematian;

    } catch (error) {
        throw error;
    }
};

export const createKematian = async(kematianData)=>{
    try {
        const newKematian = await Kematian.create(kematianData);
        return newKematian;
    } catch (error) {
        throw error;
    }
};

export const getTotalKematian = async()=>{
    try {
        const totalKematian = await Kematian.count();
        return totalKematian;
    } catch (error) {
        throw error;
    }
};