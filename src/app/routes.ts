import { Request, Response, Router } from "express";
import { OrdersController } from "../controllers/ordersController";
import { PizzariaController } from "../controllers/pizzariaController";

const router = Router();
const pizzariaController = new PizzariaController();
const ordersController = new OrdersController();

//home
router.get("/", (_: Request, res: Response) => {
  res.status(200).json({
    "Listar pizzas": "GET - https://pizzaria-api.onrender.com/api/pizzas",
    "Listar pedidos": "GET - https://pizzaria-api.onrender.com/api/order",
    "Listar pedidos por id":
      "GET - https://pizzaria-api.onrender.com/api/order/:id",
    "Cadastrat novo pedido":
      "POST - https://pizzaria-api.onrender.com/api/order",
  });
});

//listar pizzas
router.get("/api/pizzas", pizzariaController.listPizzas);

//listar pedidos
router.get("/api/order", ordersController.list);

//listar pedidos por id
router.get("/api/order/:id", ordersController.listOne);

//cadastrar pedido
router.post("/api/order", ordersController.create);

export default router;
