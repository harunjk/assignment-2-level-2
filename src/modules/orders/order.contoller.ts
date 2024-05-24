import { Request, Response } from "express";
import { OrderService } from "./order.service";
import orderSchema from "./order.zod.validetion";

const createOrder = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const zodParsedData = orderSchema.parse(productData);

    const result = await OrderService.createOrder(zodParsedData);

    res.json({
      success: true,
      message: "Order is created successfully done",
      data: result,
    });
  } catch (erro) {
    res.json({
      success: false,
      message: "Order create somthing is wrong",
      error: erro,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  const searcTerm = req.query.email as string;
  try {
    const result = await OrderService.getAllOrders(searcTerm);

    if (searcTerm && result) {
      res.status(200).json({
        success: true,
        message: `Order matching search term '${searcTerm}' fetched successfully! `,
        data: result,
      });
    } else {
      res.json({
        success: true,
        message: "Order fetched successfully!",
        data: result,
      });
    }
  } catch (erro) {
    res.json({
      success: false,
      message: "Orders fetched somthing is wrong",
      error: erro,
    });
  }
};

export const OrderControllar = {
  createOrder,
  getAllOrders,
};
