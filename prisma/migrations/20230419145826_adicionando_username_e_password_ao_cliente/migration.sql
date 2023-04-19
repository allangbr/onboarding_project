/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `MenuItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_client_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_item_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_order_id_fkey";

-- AlterTable
ALTER TABLE "client" DROP CONSTRAINT "client_pkey",
ADD COLUMN     "password" VARCHAR(60) NOT NULL,
ADD COLUMN     "username" VARCHAR(60) NOT NULL,
ADD CONSTRAINT "client_pkey" PRIMARY KEY ("username");

-- DropTable
DROP TABLE "MenuItem";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderItem";

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'em andamento',

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menuItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "menuItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderItem" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "orderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_id_key" ON "client"("id");

-- CreateIndex
CREATE UNIQUE INDEX "client_username_key" ON "client"("username");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "menuItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
