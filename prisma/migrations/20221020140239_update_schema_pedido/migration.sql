/*
  Warnings:

  - You are about to drop the column `pizza_id` on the `pedidos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `pizzas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pizza_name` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_pizza_id_fkey";

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "pizza_id",
ADD COLUMN     "pizza_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "pizzas_name_key" ON "pizzas"("name");

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_pizza_name_fkey" FOREIGN KEY ("pizza_name") REFERENCES "pizzas"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
