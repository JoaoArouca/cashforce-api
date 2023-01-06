import { Router } from "express";
import ProviderController from "../../Http/Controller/Provider.controller";
import ProviderService from "../../Http/Service/Provider.service";

const providerRouter = Router();

const service = new ProviderService();
const Provider = new ProviderController(service);

providerRouter.get("/", (req, res) => Provider.getAllProviders(req, res));
providerRouter.get("/:id", (req, res) => Provider.getProviderById(req, res));

export default providerRouter;
