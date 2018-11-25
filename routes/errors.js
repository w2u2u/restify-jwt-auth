const errors = require("restify-errors");

module.exports = server => {
	server.get("**", (req, res, next) => {
		return next(new errors.NotFoundError());
	});
};
