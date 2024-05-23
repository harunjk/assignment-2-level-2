import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./products.interface";

const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, default: 0 },
  inStock: { type: Boolean, default: true },
});
const productSchema = new Schema<TProduct>({
  name: { type: String, required: [true, "name is required"] },
  description: { type: String, required: [true, "Descri is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: [variantSchema],
  inventory: inventorySchema,
});

export const Products = model<TProduct>("Product", productSchema);
