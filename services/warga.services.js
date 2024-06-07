/* eslint-disable no-useless-catch */
import * as WargaRepository from '../repositories/warga.repository.js';



export const getAllWarga = async ()=>{
    try {
        const getAllWarga = await WargaRepository.getAllWarga();
        if(getAllWarga.length === 0) console.log('DATA WARGA IS EMPTY');

        return getAllWarga;
    } catch (error) {
        throw error;
    }
};


export const createWarga = async(keluargaData)=>{
    try {
        const newWarga = await WargaRepository.createWarga(keluargaData);
        return newWarga; 
    } catch (error) {
        throw error;
    }
};