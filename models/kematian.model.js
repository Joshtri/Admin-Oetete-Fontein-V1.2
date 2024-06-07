import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import Warga from "./warga.model.js";


const Kematian  = db.define('Kematian',{
    id_kematian:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
    },

    namaWargaId:{
        type: DataTypes.INTEGER,
        references: {
          model: Warga,
          key: 'id_warga',
        },
    },

    penyebab_kematian:{
        type: DataTypes.STRING(45),
        allowNull:false,
    },

    tanggal_kematian:{
        type: DataTypes.DATE,
        allowNull : false
    },

    tempat_kematian:{
        type: DataTypes.STRING(45),
        allowNull:false,
    }
});

// Membuat relasi
Warga.hasMany(Kematian, { foreignKey: 'namaWargaId' });
Kematian.belongsTo(Warga, { foreignKey: 'namaWargaId' });

export default Kematian;


// Singkronisasi dengan basis data
(async () => {
    try {
        await db.sync();
        console.log("kelahiran table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();
