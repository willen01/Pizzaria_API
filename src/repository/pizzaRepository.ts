import { PrismaClient } from "@prisma/client";
import { IPizza } from "../entities/Pizzas";
import { Pizza } from "../protocols/Pizza";

export class PizzaRepository implements Pizza {
  private prismaClient = new PrismaClient();

  async list(): Promise<IPizza[]> {
    return await this.prismaClient.pizza.findMany();
  }
}
