/* eslint-disable no-useless-catch */
import * as KelahiranRepository from "../repositories/kelahiran.repository.js";




export const getAllKelahiran = async()=>{
    try {
        const getAllKelahiran = await KelahiranRepository.getAllKelahiran();
        if(getAllKelahiran.length === 0) console.log('Data EMPTY');
        return getAllKelahiran;
    } catch (error) {
        throw error;
    }
};


export const createKelahiran = async(kelahiranData)=>{
    try {
        const newKelahiran = await KelahiranRepository.createKelahiran(kelahiranData);
        return newKelahiran;
    } catch (error) {
        throw error;
    }
};