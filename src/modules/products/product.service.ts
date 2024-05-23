import { TProduct } from "./products.interface";
import { Products } from "./products.model";

const createProductSr = async (proData: TProduct) => {
  const result = await Products.create(proData);
  return result;
};

export const ProductService = {
  createProductSr,
};
