const customError = require("../../helpers/errors/customError");
const jwt = require("jsonwebtoken");
const { isTokenIncluded, getAccessTokenFromHeader } = require("../../helpers/auth/tokenHelpers");

const getAccessToRoute = (req, res, next) => {
  const { JWT_SECRET_KEY } = process.env;

  if (!isTokenIncluded(req)) return next(new customError("You are not authorized to access this route", 401));

  const accessToken = getAccessTokenFromHeader(req);

  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) return next(new customError("You are not authorized to access this route", 401));
    req.user = {
      _id: decoded._id,
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email,
    };
  });

  next();
};

module.exports = { getAccessToRoute };
