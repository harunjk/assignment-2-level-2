import { TOrder } from "./order.interface";
import { Orders } from "./order.model";

const createOrder = async (proData: TOrder) => {
  const result = await Orders.create(proData);
  return result;
};
const getAllOrders = async (searchname?: string) => {
  if (searchname) {
    const result = await Orders.find({ email: RegExp(searchname, "i") });
    return result;
  } else {
    const result = await Orders.find();
    return result;
  }
};

export const OrderService = {
  createOrder,
  getAllOrders,
};
