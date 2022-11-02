import { PrismaClient } from "@prisma/client";

export const contentOrdersToInsert = [
  {
    pizza_name: "Marguerita",
    order_id: 1,
    quantidade: 1,
  },
  {
    pizza_name: "Muçarela",
    order_id: 2,
    quantidade: 2,
  },
  {
    pizza_name: "Portuguesa",
    order_id: 1,
    quantidade: 1,
  },
  {
    pizza_name: "Napolitana",
    order_id: 3,
    quantidade: 3,
  },
  {
    pizza_name: "Frango com catupiry",
    order_id: 4,
    quantidade: 1,
  },
  {
    pizza_name: "Napolitana",
    order_id: 3,
    quantidade: 2,
  },
  {
    pizza_name: "Romeu e julieta",
    order_id: 2,
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
