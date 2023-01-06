import { Request, Response } from "express";
import { IUserController, IUserService } from "../../Interface";

export default class UserController implements IUserController {
  private Service;
  constructor(UserService: IUserService) {
    this.Service = UserService;
  }

  async getAllUsers(
    _req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const users = await this.Service.getAllUsers();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getUserById(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const { id } = req.params;
      const user = await this.Service.getUserById(Number(id));

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
