import { ICnpj, ICnpjService } from './../../Interface/index';
import { PrismaClient } from '@prisma/client';

export default class CnpjService implements ICnpjService {
    private prisma;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAllCnpj(): Promise<ICnpj[]> {
        const cnpjList = await this.prisma.cnpjs.findMany();

        return cnpjList;
    }

    async getCnpjById(id: Number): Promise<ICnpj | Error> {
        if (id === null || id === undefined || typeof id !== "number") {
            throw Error("Id no formato errado");
        }

        const cnpjById = await this.prisma.cnpjs.findFirst({
            where: { id },
        });

        if (cnpjById === null) {
            throw Error("Id não encontrado");
        }

        return cnpjById;
    }
}
