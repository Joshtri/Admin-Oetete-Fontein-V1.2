/* eslint-disable no-useless-catch */
import * as KematianService from '../services/kematian.services.js';
import * as WargaService from '../services/warga.services.js';

export const kematianPage = async(req,res)=>{
    try {
        const title = "Data Kematian";
        const kematianData = await KematianService.getAllKematian();

        res.render('data_kematian',{
            title,
            kematianData,
        });
    } catch (error) {
        throw error;
    }
};


export const addKematianPage = async(req,res)=>{
    try {
        const title = "Tambah Data Kematian";
        const wargaData = await WargaService.getAllWarga();

        res.render('add_kematian',{
            title,
            wargaData
        });
    } catch (error) {
        throw error;
    }
};


export const createKematian = async (req,res)=>{
    try {
        const kematianData = req.body;
        const newKematian = await KematianService.createKematian(kematianData);
        res.redirect('/adm/data/kematian');
    } catch (error) {
        throw error;
    }
};
