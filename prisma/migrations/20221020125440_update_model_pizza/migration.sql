/*
  Warnings:

  - You are about to drop the column `pizza_id` on the `pizzas` table. All the data in the column will be lost.
  - You are about to drop the `list_orders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "list_orders" DROP CONSTRAINT "list_orders_order_id_fkey";

-- DropForeignKey
ALTER TABLE "list_orders" DROP CONSTRAINT "list_orders_pizza_id_fkey";

-- AlterTable
ALTER TABLE "pizzas" DROP COLUMN "pizza_id";

-- DropTable
DROP TABLE "list_orders";
