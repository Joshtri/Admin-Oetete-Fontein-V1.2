import express from "express";
const router = express.Router();
import {  createKelahiran, kelahiranPage } from "../controllers/kelahiran.controller.js";

router.get('/kelahiran', kelahiranPage);
router.post('/post_kelahiran', createKelahiran);


export default router;