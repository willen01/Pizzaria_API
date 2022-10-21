import { PrismaClient } from "@prisma/client";

export const ordersToInsert = [
  {
    client: "Maria Fernanda",
    adress: "Rua da maria n° 15",
    phone: "(91)96598-5616",
    payment_method: "cartão de crédito",
  },
  {
    client: "Pedro silva",
    adress: "Rua do pedro n° 10",
    phone: "(91)96598-5616",
    payment_method: "cartão de débito",
  },
  {
    client: "Carla Almenida",
    adress: "Rua da carla n° 50",
    phone: "(91)96598-5616",
    payment_method: "pix",
  },
  {
    client: "Maria odete",
    adress: "Rua da maria n° 3",
    phone: "(91)96598-5616",
    payment_method: "cartão de crédito",
  },
];

export async function seedOrders() {
  const prisma = new PrismaClient();
  for (const order of ordersToInsert) {
    const o = await prisma.orders.findFirst({
      where: { client: order.client },
    });
    if (!o) await prisma.orders.create({ data: order });
  }
}
