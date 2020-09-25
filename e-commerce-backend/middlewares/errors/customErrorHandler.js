const CustomError = require("../../helpers/errors/CustomError");

const customErrorHandler = (err,req,res,next) => {
    let customError = err;
    console.log(err);

    if(err.name === "SyntaxError")
        customError = new CustomError("Unexpected syntax!",400);
    if(err.name === "ValidationError")
        customError = new CustomError(err.message,400);
    if(err.name === "CastError")
        customError = new CustomError("User not found.", 400);
    if(err.code === 11000)
        customError = new CustomError("This e-mail has been taken. Please try a different e-mail.",400)

    console.log(customError.message, customError.status);

    res.status(customError.status || 500).json({
        success: false,
        message: customError.message || "Internal server error"
    });
}

module.exports = customErrorHandler;