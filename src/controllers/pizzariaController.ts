import { Request, Response } from "express";
import { ListPizzaUseCase } from "../useCases/ListPizza";
import { PizzaRepository } from "../repository/pizzaRepository";

const pizzas = new ListPizzaUseCase(new PizzaRepository());

export class PizzariaController {
  async listPizzas(_: Request, response: Response): Promise<void> {
    try {
      const allpizas = await pizzas.list();
      response.status(200).json(allpizas);
    } catch (error) {
      response.status(400).json(error);
    }
  }
}
