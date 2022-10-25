import { Router } from "express";
import { OrdersController } from "../controllers/ordersController";
import { PizzariaController } from "../controllers/pizzariaController";

const router = Router();
const pizzariaController = new PizzariaController();
const ordersController = new OrdersController();

//listar pizzas
router.get("/api/pizzas", pizzariaController.listPizzas);

//listar pedidos
router.get("/api/order", ordersController.list);

//listar pedidos por id
router.get("/api/order/:id", ordersController.listOne);

//cadastrar pedido
router.post("/api/order", ordersController.create);

export default router;
