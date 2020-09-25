// Imports:
const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const { validateLoginInputs, validateLoginPassword } = require("../helpers/input/inputHelpers");
const CustomError = require("../helpers/errors/CustomError");
const { sendJWTToClient } = require("../helpers/auth/tokenHelpers");
const sendEmail = require("../helpers/libraries/sendEmail");

// Add a New User to DB:
const register = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// Login and Send Acces Token to Browser Cookies:
const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password, keepLogged } = req.body;
  // Input not provided:
  if (!validateLoginInputs(email, password))
    return next(new CustomError("Please provide an email and a password.", 400));

  const user = await User.findOne({ email }).select("+password");

  // Email not found in DB:
  if (!user) return next(new CustomError("Please enter a valid email and password combination.", 400));

  // Password is not correct:
  if (!validateLoginPassword(req.body.password, user.password))
    return next(new CustomError("Please enter a valid email and password combination.", 400));

  // If user found:
  sendJWTToClient(user, keepLogged, res);
});

// Get Logged User's Data:
const getLoggedUser = (req, res, next) => {
  res.json({
    success: true,
    data: req.user,
  });
};

// Create Forgot Password Token and Send E-Mail to User:
const forgotPassword = asyncErrorWrapper(async (req, res, next) => {
  const emailToReset = req.body.email;
  const user = await User.findOne({ email: emailToReset });

  if (!user) return next(new CustomError("There is no user with the e-mail that you provide.", 400));

  const resetPasswordToken = user.getResetPasswordTokenFromUser();

  await user.save();

  const resetPasswordURL =
    "http://localhost:3000/resetPassword=" + resetPasswordToken;

  const emailTemplate =
    "<h3>Reset Your Password</h3> <p> This <a href=" +
    resetPasswordURL +
    " target=" +
    "_blank" +
    ">link</a> will expire in an hour.</p>";

  try {
    await sendEmail({
      from: process.env.SMTP_USER,
      to: emailToReset,
      subject: "Reset your password",
      html: emailTemplate,
    });
    return res.status(200).json({
      success: true,
      message: "Token sent to your e-mail.",
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    return next("Email could not be sent!", 500);
  }

  res.json({
    success: true,
    message: "A code sent to your e-mail.",
  });
});

// Change User's Password:
const resetPassword = asyncErrorWrapper(async (req, res, next) => {
  const { resetPasswordToken } = req.query;
  const { password } = req.body;

  if (!resetPasswordToken) return next(new CustomError("Please provide a valid token", 400));

  let user = await User.findOne({
    resetPasswordToken: resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) return next(new CustomError("Invalid/expired token or session. Please get a new link.", 404));

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  return res.status(200).json({
    succes: true,
    message: "Reset password process successful.",
  });
});

// Get User by ID:
const getUser = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) return next(new CustomError("User not found.", 400));

  return res.status(200).json({
    succes: true,
    data: user,
  });
});


module.exports = { register, login, getLoggedUser, forgotPassword, resetPassword, getUser };
