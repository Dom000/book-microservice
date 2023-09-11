-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "prices" DOUBLE PRECISION NOT NULL,
    "authorId" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
