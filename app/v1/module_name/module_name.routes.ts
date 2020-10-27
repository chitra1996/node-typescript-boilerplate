import { Router } from "express";
const moduleRouter: Router = Router();

import { ModuleController } from "./module_name.controller";

const moduleController = new ModuleController();

moduleRouter.post("/", moduleController.new_api);

export { moduleRouter };
