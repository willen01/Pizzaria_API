-- CreateTable
CREATE TABLE "pedidos" (
    "id" SERIAL NOT NULL,
    "pizza_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_pizza_id_fkey" FOREIGN KEY ("pizza_id") REFERENCES "pizzas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
