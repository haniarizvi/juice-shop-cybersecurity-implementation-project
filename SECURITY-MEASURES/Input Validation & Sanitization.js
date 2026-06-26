validator = require('validator');
if (!validator.isEmail(email)) {
return res.status(400).send('Invalid email');
}
Password Hashing: Use bcrypt to hash
passwords: npm install bcrypt const
bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);