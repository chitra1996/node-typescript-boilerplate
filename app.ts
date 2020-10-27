import { NewServer } from "./lib/server";

// Handle unhandledRejection
process.on("unhandledRejection", function (reason, p) {
	console.log(
		"Possibly Unhandled Rejection at: Promise ",
		p,
		" reason: ",
		reason
	);
});

const server: any = new NewServer();
server.start();
