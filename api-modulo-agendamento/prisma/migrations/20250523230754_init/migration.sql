/*
  Warnings:

  - Added the required column `idade` to the `profissionais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profissionais" ADD COLUMN     "idade" INTEGER NOT NULL;
