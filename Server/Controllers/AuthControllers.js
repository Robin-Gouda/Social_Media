import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

//registering a new user
export const registerUser = async (req, res) => {
  const { username, Password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(10);
  console.log(`salt : ${salt}`);
  console.log(`Password : ${Password}`);
  const hashedPass = await bcrypt.hash(Password, salt);

  const newUser = new UserModel({
    username,
    password: hashedPass,
    firstname,
    lastname,
  });

  try {
    // await newUser.save();
    console.log(`body : ${req.body}`);
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login User

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      validity
        ? res.status(200).json(user)
        : res.status(400).json("Wrong Password");
    } else {
      res.status(404).json("User dose not exist ");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
