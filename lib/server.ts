import express, { Request, Response } from "express";
import { Server } from "net";
import bodyParser from "body-parser";
import { config } from "../config/config";
import { appRouter } from "../app/app.index";

export class NewServer {
	public app: express.Application;
	public server: any = null;

	constructor() {
		this.app = express();
		this.setMiddleWares();
		this.setRoutes();
		this.catchErrors();
	}

	// start server
	public start({
		port = config.PORT,
	}: { port?: number | string } = {}): Promise<Server> {
		return new Promise((resolve) => {
			const server = this.app.listen(port, () => {
				if (process.env.NODE_ENV !== "test") {
					console.log(`Server is running on port: ${port}`);
				}
				resolve(server);
			});
		});
	}

	// stop server
	public stop(): Promise<boolean> {
		return new Promise<boolean>((resolve) => {
			if (this.server) {
				this.server.close(() => {
					return resolve(true);
				});
			} else {
				return resolve(true);
			}
		});
	}

	// bodyParser: To parse the request body
	private setMiddleWares(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}

	// set routes for NME service
	private setRoutes(): void {
		this.app.use("/", appRouter);
		this.app.get("/healthz", (req: Request, res: Response) => {
			return res.status(200).json("OK");
		});
	}

	// catch unhandled rejections
	private catchErrors(): void {
		this.app.use((res: Response) => {
			return res.status(500).json({
				code: 500,
				message: "Something went wrong, please try again later",
			});
		});
	}
}
