import * as dotEnv from "dotenv";
dotEnv.config();

export const config = {
	PORT: process.env.PORT || 8080,
	// Define the configuration here which can be used in the whole project using this config
};
