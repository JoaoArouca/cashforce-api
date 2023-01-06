import { PrismaClient } from "@prisma/client";
import { IProvider, IProviderService } from "../../Interface";

class ProviderService implements IProviderService {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllProviders(): Promise<IProvider[]> {
    const providers = await this.prisma.providers.findMany();

    return providers;
  }

  async getProviderById(id: Number): Promise<IProvider | Error> {
    if (id === null || id === undefined || typeof id !== "number") {
      throw Error("Id no formato errado");
    }

    const providerById = await this.prisma.providers.findFirst({
      where: { id },
    });

    if (providerById === null) {
      throw Error("Id não encontrado");
    }

    return providerById;
  }
}

export default ProviderService;
