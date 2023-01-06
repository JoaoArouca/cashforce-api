import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Cria os Cnpj
  const cnpj1 = {
    id: 1,
    cnpj: "00000000000001",
    companyType: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const cnpj2 = {
    id: 2,
    cnpj: "00000000000002",
    companyType: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const buyer = {
    id: 1,
    name: "SACADO 001",
    tradingName: "SACADO 001 LTDA",
    cashforceTax: "0",
    createdAt: new Date(),
    updatedAt: new Date(),
    cnpjId: 1,
  };

  const provider = {
    id: 1,
    name: "CEDENTE 002",
    tradingName: "CEDENTE 002 LTDA",
    createdAt: new Date(),
    updatedAt: new Date(),
    cnpjId: 2,
  };

  const user = {
    id: 1,
    name: "ALLAN SOUZA",
    email: "allan@cashforce.com.br",
    verificationCode: "",
    emailChecked: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    cashforceAdm: true,
  };

  const orders = [
    {
      id: 1,
      orderNfId: "1605181324132",
      orderNumber: "18153",
      emissionDate: "2020-10-30T11:00:00-03:00",
      emitedTo: "22843980000127",
      nNf: "18153",
      CTE: "",
      value: "198450",
      createdAt: new Date("2020-10-30 17:54:18"),
      updatedAt: new Date("2020-10-30 17:54:18"),
      cnpjId: 1,
      userId: 1,
      buyerId: 1,
      providerId: 1,
    },
    {
      id: 2,
      orderNfId: "160518132413",
      orderNumber: "18157",
      emissionDate: "2020-11-04T15:32:35-02:00",
      emitedTo: "35705180000272",
      nNf: "18157",
      CTE: "",
      value: "168850",
      createdAt: new Date("2020-11-10 18:33:46"),
      updatedAt: new Date("2020-11-10 18:33:46"),
      cnpjId: 1,
      userId: 1,
      buyerId: 1,
      providerId: 1,
    },
    {
      id: 3,
      orderNfId: "1605181324130",
      orderNumber: "18184",
      emissionDate: "2020-11-10",
      emitedTo: "00418477002640",
      nNf: "18184",
      CTE: "",
      value: "222795",
      createdAt: new Date("2020-11-12 11:42:06"),
      updatedAt: new Date("2020-11-18 12:22:14"),
      cnpjId: 1,
      userId: 1,
      buyerId: 1,
      providerId: 1,
      orderStatusBuyer: "7",
      orderStatusProvider: "3",
    },
  ];

  await prisma.cnpjs.create({
    data: cnpj1,
  });

  await prisma.cnpjs.create({
    data: cnpj2,
  });

  await prisma.buyers.create({
    data: buyer,
  });

  await prisma.providers.create({
    data: provider,
  });

  await prisma.users.create({
    data: user,
  });

  await prisma.orders.createMany({
    data: orders,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
