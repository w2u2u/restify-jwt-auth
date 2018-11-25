const restify = require("restify");
const mongoose = require("mongoose");
const rjwt = require("restify-jwt-community");
const config = require("./config");

const server = restify.createServer();

// Middleware
server.use(restify.plugins.bodyParser());

// Protect routes
server.use(
	rjwt({ secret: config.JWT_SECRET }).unless({ path: ["/register", "/auth"] })
);

server.listen(config.PORT, () => {
	mongoose.set("useFindAndModify", false);
	mongoose.connect(
		config.MONGODB_URI,
		{ useNewUrlParser: true }
	);
});

const db = mongoose.connection;

db.on("error", err => console.log(err));

db.once("open", () => {
	require("./routes/customers")(server);
	require("./routes/users")(server);
	require("./routes/errors")(server);
	console.log(`Server starting on port ${config.PORT}`);
});
