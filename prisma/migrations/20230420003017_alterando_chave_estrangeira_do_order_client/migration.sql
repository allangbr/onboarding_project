/*
  Warnings:

  - The primary key for the `client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `client_id` on the `order` table. All the data in the column will be lost.
  - Added the required column `client_username` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_client_id_fkey";

-- AlterTable
ALTER TABLE "client" DROP CONSTRAINT "client_pkey",
ADD CONSTRAINT "client_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "order" DROP COLUMN "client_id",
ADD COLUMN     "client_username" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_client_username_fkey" FOREIGN KEY ("client_username") REFERENCES "client"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
