// controllers/keluarga.controller.js

import * as KeluargaService from "../services/keluarga.services.js";

export const createKeluargaController = async (req, res) => {
  try {
    const keluargaData = req.body;
    const newKeluarga = await KeluargaService.createKeluarga(keluargaData);
    // res.status(201).json(newKeluarga);
    res.redirect('/adm/data/kartu_keluarga');
  } catch (error) {
    res.status(500).json({ message: "Failed to create Keluarga", error: error.message });
  }
};

// You can add more controller functions here as needed



export const keluargaPage = async (req,res)=>{
    const title = "Data Keluarga";

    const keluargaData = await KeluargaService.getAllKeluarga();
    res.render('data_keluarga',{
        title,
        keluargaData
    });
    console.log(keluargaData);
};