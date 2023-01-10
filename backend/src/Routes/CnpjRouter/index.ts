import { Router } from "express";
import CnpjController from "../../Http/Controller/Cnpj.controller";
import CnpjService from "../../Http/Service/Cnpj.service";

const cnpjRouter = Router();

const service = new CnpjService();
const Cnpj = new CnpjController(service);

cnpjRouter.get('/', (req, res) => Cnpj.getAllCnpj(req, res));
cnpjRouter.get('/:id', (req, res) => Cnpj.getCnpjById(req, res));

export default cnpjRouter;
