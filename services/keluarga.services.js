/* eslint-disable no-useless-catch */
// services/keluarga.service.js

import * as KeluargaRepository from "../repositories/keluarga.repository.js";

export const createKeluarga = async (keluargaData) => {
  try {
    const newKeluarga = await KeluargaRepository.createKeluarga(keluargaData);
    return newKeluarga;
  } catch (error) {
    throw error;
  }
};


export const getAllKeluarga = async()=>{
    try {
        const getAllKeluarga = await KeluargaRepository.getAllKeluarga();

        if(getAllKeluarga.length === 0) console.log('Data EMPTY');
        return getAllKeluarga;
    } catch (error) {
        throw error;
    }
};

// You can add more service functions here as needed
