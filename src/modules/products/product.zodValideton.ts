import { z } from "zod";

const variantSchema = z.object({
  type: z.string().min(1, "Type is required "),
  value: z.string().min(1, "Value is required"),
});

const inventorySchema = z.object({
  quantity: z.number().nonnegative().default(0),
  inStock: z.boolean().default(true),
});

const productValidetonSchema = z.object({
  name: z.string().max(20, { message: "name is 20 charector" }),
  description: z.string(),
  price: z.number().positive("Price must be greater than zero"),
  category: z.string(),
  tags: z.array(z.string()).nonempty("Tags are required"),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});

export default productValidetonSchema;
