/* eslint-disable no-useless-catch */
import  * as KelahiranService from "../services/kelahiran.services.js";
import * as KeluargaService from '../services/keluarga.services.js';

export const kelahiranPage = async(req,res)=>{
    const kelahiranData = await KelahiranService.getAllKelahiran();
    const keluargaData = await KeluargaService.getAllKeluarga();

    const title = "Data Kelahiran";
    res.render('data_kelahiran',{
        kelahiranData,
        keluargaData,
        title
    });
};


export const createKelahiran = async (req,res)=>{
    try {
        const kelahiranData = req.body;
        const newKelahiran = await KelahiranService.createKelahiran(kelahiranData);
        
        res.redirect('/adm/data/kelahiran');
    } catch (error) {
        throw error;
    }
};