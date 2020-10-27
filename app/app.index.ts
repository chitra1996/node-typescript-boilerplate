import { Router } from "express";
const appRouter: Router = Router();

import { routerV1 } from "./v1/v1.index";

appRouter.use("/v1", routerV1);

export { appRouter };
