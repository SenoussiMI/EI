-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('A_FAIRE', 'EN_COURS', 'TERMINE');

-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "status" "TicketStatus" NOT NULL DEFAULT 'A_FAIRE',

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);
