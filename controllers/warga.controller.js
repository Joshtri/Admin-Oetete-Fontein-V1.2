/* eslint-disable no-useless-catch */
import * as WargaService from '../services/warga.services.js';
import * as KeluargaService from '../services/keluarga.services.js';


export const wargaPage = async (req,res)=>{
    const title = "Data Warga";
    const wargaData = await WargaService.getAllWarga();


    res.render('data_warga',{
        title,
        wargaData
    });
};

export const createWargaController = async (req,res)=>{
    try {
        const wargaData = req.body;
        const newWarga = await WargaService.createWarga(wargaData);
        res.status(201).json(newWarga);

        // return newWarga;
    } catch (error) {
        throw error;
    }

};

export const addWargaPage = async(req,res)=>{
    try {
        const title = "Tambah Data Warga";
        const keluargaData = await KeluargaService.getAllKeluarga();

        res.render('add_warga',{
            title,
            keluargaData
        });
    } catch (error) {
        throw error;
    }
};