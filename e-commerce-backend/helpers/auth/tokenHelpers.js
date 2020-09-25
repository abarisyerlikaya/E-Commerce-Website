const sendJWTToClient = (user, keepLogged, res) => {
  const token = user.generateJWTFromUser(keepLogged);
  const { NODE_ENV, JWT_COOKIE } = process.env;

  return res
    .status(200)
    .cookie("access_token", token, {
      httpOnly: false,
      expires:
        keepLogged === true
          ? new Date(Date.now() + 360 * 24 * 60 * 60 * 1000)  // Keep Logged: 1 year
          : new Date(Date.now() + parseInt(JWT_COOKIE) * 1000), 
      secure: NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      access_token: token,
      data: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      },
    });
};

const isTokenIncluded = (req) => {
  return req.headers.authorization && req.headers.authorization.startsWith("Bearer:");
};

const getAccessTokenFromHeader = (req) => {
  const authorization = req.headers.authorization;
  const access_token = authorization.split(" ")[1];
  return access_token;
};

module.exports = { sendJWTToClient, isTokenIncluded, getAccessTokenFromHeader };