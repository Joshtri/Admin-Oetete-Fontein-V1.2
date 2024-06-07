import { addWargaPage, createWargaController, wargaPage } from "../controllers/warga.controller.js";
import express from "express";


const router = express.Router();

router.get('/warga', wargaPage);
router.post('/post_warga', createWargaController);
router.get('/add_warga', addWargaPage);


export default router;