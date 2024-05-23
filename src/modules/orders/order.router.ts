import express from "express";
import { OrderControllar } from "./order.contoller";
const router = express.Router();
router.post("/", OrderControllar.createOrder);
router.get("/", OrderControllar.getAllOrders);

export const OrderRouter = router;
