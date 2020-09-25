// Libraries:
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// User Schema:
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please provide an e-mail."],
  },
  lastName: {
    type: String,
    required: [true, "Please provide an e-mail."],
  },
  email: {
    type: String,
    required: [true, "Please provide an e-mail."],
    unique: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please provide a valid e-mail."],
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    minlength: [6, "Please provide a password longer than 6 characters."],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  adresses: [
    {
      addressTitle: String,
      recieverName: String,
      recieverGSM: String,
      city: String,
      province: String,
      adressDetails: String,
    },
  ],
  favs: [
    {
      productID: String,
    },
  ],
  cart: [
    {
      productID: String,
      quantity: { type: Number, default: 0 },
    },
  ],
  orderHistory: [
    {
      productName: String,
      productImage: String,
      quantity: String,
      price: Number,
      orderedAt: Date,
    },
  ],
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpire: {
    type: Date,
  },
});

// Pre Hooks (Password Hash):
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      next();
    });
  });
});

// UserSchema Methods:
UserSchema.methods.generateJWTFromUser = function (keepLogged) {
  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

  const payload = {
    _id: this._id,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: keepLogged === true ? "30d" : JWT_EXPIRE });

  return token;
};

UserSchema.methods.getResetPasswordTokenFromUser = function() {
  const randomHexString = crypto.randomBytes(15).toString("hex");
  const resetPasswordToken = crypto.createHash("SHA256").update(randomHexString).digest("hex");

  const { RESET_PASSWORD_EXPIRE } = process.env;

  this.resetPasswordToken = resetPasswordToken;
  this.resetPasswordExpire = Date.now() + parseInt(RESET_PASSWORD_EXPIRE);

  return resetPasswordToken;
};

module.exports = mongoose.model("User", UserSchema);
