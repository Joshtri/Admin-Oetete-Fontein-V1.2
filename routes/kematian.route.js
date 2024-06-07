import express from "express";
import { addKematianPage, createKematian, kematianPage } from "../controllers/kematian.controller.js";
const router = express.Router();


router.get('/kematian',kematianPage);
router.get('/add_kematian',addKematianPage);
router.post('/post_kematian', createKematian);

export default router;