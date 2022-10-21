import { PrismaClient } from "@prisma/client";

export const contentOrdersToInsert = [
  {
    pizza_name: "Marguerita",
    order_id: 11,
    quantidade: 1,
  },
  {
    pizza_name: "Muçarela",
    order_id: 11,
    quantidade: 2,
  },
  {
    pizza_name: "Portuguesa",
    order_id: 12,
    quantidade: 1,
  },
  {
    pizza_name: "Napolitana",
    order_id: 13,
    quantidade: 3,
  },
  {
    pizza_name: "Frango com catupiry",
    order_id: 13,
    quantidade: 1,
  },
  {
    pizza_name: "Napolitana",
    order_id: 14,
    quantidade: 2,
  },
  {
    pizza_name: "Romeu e julieta",
    order_id: 14,
    quantidade: 1,
  },
];

export async function seedContentOrders() {
  const prisma = new PrismaClient();
  for (const contentOrder of contentOrdersToInsert) {
    const c = await prisma.ordersPizza.findFirst({
      where: { pizza_name: contentOrder.pizza_name },
    });
    if (!c) await prisma.ordersPizza.create({ data: contentOrder });
  }
}
