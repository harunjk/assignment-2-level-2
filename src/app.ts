import express, { Request, Response } from "express";
import { ProductRouter } from "./modules/products/products.route";
const app = express();

// Parser
app.use(express.json());

app.use("/api/products", ProductRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
