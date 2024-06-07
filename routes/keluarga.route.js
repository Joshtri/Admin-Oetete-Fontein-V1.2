import express from "express";
const router = express.Router();
import { createKeluargaController, keluargaPage } from "../controllers/keluarga.controller.js";

router.get('/kartu_keluarga', keluargaPage);
router.post('/post_kartu_keluarga', createKeluargaController);


export default router;