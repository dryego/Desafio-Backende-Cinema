-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(100),

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filmes" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(130) NOT NULL,
    "diretor" VARCHAR(130) NOT NULL,
    "elenco" TEXT,
    "dataLancamento" VARCHAR(10) NOT NULL,
    "sinopse" VARCHAR(230) NOT NULL,
    "duracao" INTEGER NOT NULL,
    "generoId" INTEGER NOT NULL,

    CONSTRAINT "filmes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generos" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(50) NOT NULL,

    CONSTRAINT "generos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcionarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(130) NOT NULL,
    "email" VARCHAR(130) NOT NULL,
    "senha" VARCHAR(130) NOT NULL,
    "dataAdmicao" TIMESTAMP(3) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "funcionarios_email_key" ON "funcionarios"("email");

-- AddForeignKey
ALTER TABLE "filmes" ADD CONSTRAINT "filmes_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "generos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
