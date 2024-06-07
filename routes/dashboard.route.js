import express from "express";
const router = express.Router();
import { dashboardPage } from "../controllers/dashboard.controller.js";

router.get('/dashboard', dashboardPage);


export default router;