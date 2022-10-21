-- CreateTable
CREATE TABLE "pizzas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "pizza_id" INTEGER NOT NULL,

    CONSTRAINT "pizzas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "client" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "list_orders" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "pizza_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "list_orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "list_orders" ADD CONSTRAINT "list_orders_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "list_orders" ADD CONSTRAINT "list_orders_pizza_id_fkey" FOREIGN KEY ("pizza_id") REFERENCES "pizzas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
