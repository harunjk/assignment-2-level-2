import { TProduct } from "./products.interface";
import { Products } from "./products.model";

const createProductSr = async (proData: TProduct) => {
  const result = await Products.create(proData);
  return result;
};

const getAllProductSr = async () => {
  const result = await Products.find();
  return result;
};

const getSingleProduct = async (_id: string) => {
  const result = await Products.findOne({ _id });
  return result;
};

const UpdateProduct = async (_id: string) => {
  const result = await Products.updateOne(
    { _id },
    {
      $set: { "inventory.quantity": 49 },
    }
  );
  return result;
};

const DeleteSingleProduct = async (_id: string) => {
  const result = await Products.deleteOne({ _id });
  return result;
};

const saerchProduct = async (searData: string) => {};

export const ProductService = {
  createProductSr,
  getAllProductSr,
  getSingleProduct,
  UpdateProduct,
  DeleteSingleProduct,
  saerchProduct,
};
