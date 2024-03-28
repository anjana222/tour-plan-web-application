import express from "express";

import { getAllCultures, getCulture, createCulture, updateCulture, deleteCulture } from "../controllers/culture.js";

const router = express.Router();

router.get("/", getAllCultures);
router.post("/create", createCulture);
router.put("/update/:id", updateCulture);
router.delete("/delete/:id", deleteCulture);
router.get("/:id", getCulture);

export default router;