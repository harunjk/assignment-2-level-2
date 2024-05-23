import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductService.createProductSr(productData);

    res.json({
      success: true,
      message: "product is created successfully done",
      data: result,
    });
  } catch (erro) {
    res.json({
      success: false,
      message: "product create somthing is wrong",
      error: erro,
    });
  }
};

export const ProductControllat = {
  createProduct,
};
