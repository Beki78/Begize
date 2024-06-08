import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const isValidEthiopianPhoneNumber = (phoneNumber) => {
  const ethiopianPhoneNumberPattern = /^09\d{8}$/;
  return ethiopianPhoneNumberPattern.test(phoneNumber);
};

const userSchema = new mongoose.Schema({
  firstUserName: {
    type: String,
    required: true,
  },
  lastUserName: {
    type: String,
    required: true,
  },
  userPhoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.statics.signup = async function (
  userPhoneNumber,
  firstUserName,
  lastUserName,
  password
) {
  if (!userPhoneNumber || !firstUserName || !lastUserName || !password) {
    throw Error("All fields must be filled");
  }
  if (!isValidEthiopianPhoneNumber(userPhoneNumber)) {
    throw new Error("Phone number must be a valid (e.g., 09XXXXXXXX)");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exist = await this.findOne({ userPhoneNumber });
  if (exist) {
    throw Error("Phone already in use");
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await this.create({
    userPhoneNumber,
    firstUserName,
    lastUserName,
    password: hash,
  });
  return user;
};

userSchema.statics.login = async function (userPhoneNumber, password) {
  if (!userPhoneNumber || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ userPhoneNumber });
  if (!user) {
    throw Error("Incorrect phone number");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

const User = mongoose.model("User", userSchema);
export default User;
