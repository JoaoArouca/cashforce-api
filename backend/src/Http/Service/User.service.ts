import { IUser, IUserService } from "./../../Interface/index";
import { PrismaClient } from "@prisma/client";

export default class UserService implements IUserService {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllUsers(): Promise<IUser[]> {
    const users = await this.prisma.users.findMany();

    return users;
  }

  async getUserById(id: Number): Promise<IUser | Error> {
    if (id === null || id === undefined || typeof id !== "number") {
      throw Error("Id no formato errado");
    }

    const userById = await this.prisma.users.findFirst({
      where: { id },
    });

    if (userById === null) {
      throw Error("Id não encontrado");
    }

    return userById;
  }
}
