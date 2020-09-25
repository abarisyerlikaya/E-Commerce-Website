const bcrypt = require('bcryptjs');

const validateLoginInputs = (email, password) => {
    return email && password;
};

const validateLoginPassword = (password,hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}

module.exports = { validateLoginInputs, validateLoginPassword };