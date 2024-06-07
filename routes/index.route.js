import express from "express";
const router = express.Router();
import { loginPage } from "../controllers/login.controller.js";

router.get('/', loginPage);


export default router;