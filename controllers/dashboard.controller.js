import { getTotalWarga } from "../repositories/warga.repository.js";
import { getTotalKeluarga } from "../repositories/keluarga.repository.js";
import { getTotalKelahiran } from "../repositories/kelahiran.repository.js";


export const dashboardPage = async(req,res)=>{

    const totalWarga = await getTotalWarga();
    const totalKeluarga= await getTotalKeluarga();
    const totalKelahiran= await getTotalKelahiran();

    const title = "Dashboard";
    res.render('dashboard',{
        title,
        totalWarga,
        totalKeluarga,
        totalKelahiran
    });
    // console.log(totalWarga, totalKeluarga, totalKelahiran);
};