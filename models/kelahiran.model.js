import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import Keluarga from '../models/keluarga.model.js';


const Kelahiran  = db.define('Kelahiran',{
    id_kelahiran:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
    },

    nama:{
        type: DataTypes.STRING(45),
        allowNull:false,
    },

    jenis_kelamin:{
        type: DataTypes.ENUM,
        values: ['Laki-laki', 'Perempuan'], // Specify allowed values
        allowNull: false
    },

    tanggal_kelahiran:{
        type: DataTypes.DATE,
        allowNull : false
    },

    nama_kepala_keluargaId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: Keluarga,
            key: 'id_keluarga'
        }
    }

});


Keluarga.hasMany(Kelahiran, {foreignKey: `nama_kepala_keluargaId`});
Kelahiran.belongsTo(Keluarga, {foreignKey: `nama_kepala_keluargaId`});

export default Kelahiran;


// Singkronisasi dengan basis data
(async () => {
    try {
        await db.sync();
        console.log("kelahiran table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();
