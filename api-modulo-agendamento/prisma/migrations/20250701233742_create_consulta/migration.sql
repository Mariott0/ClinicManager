-- CreateTable
CREATE TABLE "consultas" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,
    "profissionalId" TEXT NOT NULL,

    CONSTRAINT "consultas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultas" ADD CONSTRAINT "consultas_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "profissionais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
