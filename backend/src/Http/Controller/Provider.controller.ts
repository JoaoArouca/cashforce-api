import { Request, Response } from "express";
import { IProviderController, IProviderService } from "../../Interface";

export default class ProviderController implements IProviderController {
  private Service;

  constructor(ProviderService: IProviderService) {
    this.Service = ProviderService;
  }

  async getAllProviders(
    _req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const providers = await this.Service.getAllProviders();

      return res.status(200).json(providers);
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async getProviderById(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const { id } = req.params;
      const provider = await this.Service.getProviderById(Number(id));

      return res.status(200).json(provider);
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}
