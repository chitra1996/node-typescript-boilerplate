import { Request, Response } from "express";
import { ModuleHandler } from "./module_name.handler";

// Define interfaces here

export class ModuleController {
	moduleHandler: ModuleHandler;
	constructor() {
		this.moduleHandler = new ModuleHandler();
	}

	// controller method here
	public new_api = async (req: Request, res: Response) => {
		try {
			// logic here
			this.moduleHandler.new_handler({});

			return res.status(200).json();
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				message: "Something. Please try again later",
				error: error,
			});
		}
	};
}
