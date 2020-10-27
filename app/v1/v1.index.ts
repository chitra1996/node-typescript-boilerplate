import { Router } from "express";
const routerV1: Router = Router();

import { moduleRouter } from "./module_name/module_name.routes";

routerV1.use("/module_name", moduleRouter);

export { routerV1 };
