import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function createOrder(order) {
  const payload = {
    ProductName: order.productName,
    OrderDescription: order.oderDescription,
    BaseSellingQuantity: order.base_selling_quantity,
  };

  const response = await fetch(`${apiURL}/CreateOrder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (response.status !== 200) {
    throw new Error("Failed to create order");
  }else{
   alert("Order created successfully");
  }
}
