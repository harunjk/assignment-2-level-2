import express from "express";
import { ProductControllat } from "./products.controllar";
const router = express.Router();

router.post("/", ProductControllat.createProduct);

export const ProductRouter = router;
