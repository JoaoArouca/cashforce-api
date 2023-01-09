import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ICnpjController, ICnpjService } from "../../Interface";

export default class CnpjController implements ICnpjController {
    private service;

    constructor(CnpjService: ICnpjService) {
        this.service = CnpjService
    }

    async getAllCnpj(_req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
        try {
            const cnpjList = await this.service.getAllCnpj();

            return res.status(200).json(cnpjList);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getCnpjById(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
        try {
            const { id } = req.params;
            const cnpj = await this.service.getCnpjById(Number(id));

            return res.status(200).json(cnpj);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}