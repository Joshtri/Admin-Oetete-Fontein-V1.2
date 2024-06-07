/* eslint-disable no-useless-catch */
import * as KematianRepository from "../repositories/kematian.repository.js";


export const getAllKematian = async()=>{
    try {
        const getAllKematian = await KematianRepository.getAllKematian();

        if(getAllKematian.length === 0) console.log('Data EMPTY');
        return getAllKematian;

    } catch (error) {
        throw error;
    }
};


export const createKematian = async(kematianData)=>{
    try {
        const newKematian = await KematianRepository.createKematian(kematianData);
        return newKematian;
    } catch (error) {
        throw error;
    }
};