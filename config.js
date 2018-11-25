module.exports = {
	ENV: process.env.process || "development",
	PORT: process.env.PORT || 3000,
	URL: process.env.BASE_URL || "http://localhost:3000",
	MONGODB_URI:
		process.env.MONGODB_URI || "mongodb://mongo:27017/customer_api",
	JWT_SECRET: process.env.JWT_SECRET || "restify-traversy"
};
