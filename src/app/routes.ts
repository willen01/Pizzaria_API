import { Router } from "express";
import { PizzariaController } from "./controllers/PizzariaController";

const router = Router();
const pizzariaController = new PizzariaController();

//listar pizzas
router.get("/api/pizzas", pizzariaController.listPizzas);

//listar pedidos
router.get("/api/order", pizzariaController.listOrders);

//listar pedidos por id
router.get("/api/order/:id", pizzariaController.listOrderById);

//cadastrar pedido
router.post("/api/order", pizzariaController.createOrder);

export default router;
