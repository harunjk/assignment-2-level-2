import express from "express";
import { ProductControllat } from "./products.controllar";
const router = express.Router();

router.post("/", ProductControllat.createProduct);
router.get("/", ProductControllat.getAllProduct);
router.get("/:productId", ProductControllat.getSingleProduct);
router.put("/:productId", ProductControllat.updateMProduct);
router.delete("/:productId", ProductControllat.DeleteSingleProduct);

export const ProductRouter = router;
