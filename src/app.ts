import express, { Request, Response } from "express";
import { ProductRouter } from "./modules/products/products.route";
import { OrderRouter } from "./modules/orders/order.router";
const app = express();

// Parser
app.use(express.json());

// THIS IS PRODUCT  ROUTE
app.use("/api/products", ProductRouter);
app.get("/api/products", ProductRouter);

// THIS IS ORDER ROUTE
app.use("/api/orders", OrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
