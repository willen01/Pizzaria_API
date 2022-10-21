import { PrismaClient } from "@prisma/client";

export const pizzasToInsert = [
  {
    name: "Calabresa",
    price: 20,
  },
  {
    name: "Portuguesa",
    price: 25,
  },
  {
    name: "Marguerita",
    price: 30,
  },
  {
    name: "Muçarela",
    price: 15,
  },
  {
    name: "Frango com catupiry",
    price: 29,
  },
  {
    name: "Napolitana",
    price: 22,
  },
  {
    name: "Romeu e julieta",
    price: 23,
  },
];

export async function seedPizzas() {
  const prisma = new PrismaClient();
  for (const pizza of pizzasToInsert) {
    const p = await prisma.pizza.findFirst({
      where: { name: pizza.name },
    });
    if (!p) await prisma.pizza.create({ data: pizza });
  }
}
