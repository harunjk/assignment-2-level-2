import { Request, Response } from "express";
import { ProductService } from "./product.service";
import productValidetonSchema from "./product.zodValideton";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const zodParsedData = productValidetonSchema.parse(productData);

    const result = await ProductService.createProductSr(zodParsedData);

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

const getAllProduct = async (req: Request, res: Response) => {
  const searcTerm = req.query.searchTerm as string;
  try {
    const result = await ProductService.getAllProductSr(searcTerm);

    if (searcTerm && result) {
      res.status(200).json({
        success: true,
        message: `Products matching search term ${searcTerm} fetched successfully!`,
        data: result,
      });
    } else {
      res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
  } catch (erro) {
    res.json({
      success: false,
      message: "product getting somthing is wrong",
      error: erro,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProduct(productId);

    res.json({
      success: true,
      message: "Products id fetched successfully !",
      data: result,
    });
  } catch (erro) {
    res.json({
      success: false,
      message: "product getting somthing is wrong",
      error: erro,
    });
  }
};

const updateMProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.UpdateProduct(productId);
    res.json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "somthing is wrong update",
      error: err,
    });
  }
};

const DeleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.DeleteSingleProduct(productId);
    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "somthing is wrong update",
      error: err,
    });
  }
};

export const ProductControllat = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateMProduct,
  DeleteSingleProduct,
};
