import User from "../models/User.js";

// Create User
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    const saveUser = await newUser.save();
    res.status(201).send({ message: "User Created Succesfully" });
  } catch (error) {
    res.status(500).send({ message: "User creating failed!", error });
  }
};

// GET ALl USER
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(404).send({ message: "Users not found" });
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

// GET SINGLE USER FIND
export const getSingleuser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).send({ message: "User not found" });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updateUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    if (!updateUser) return res.status(404).send({ message: "User not found" });
    res.send({ message: "User Updated" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser)
      return res.status(404).send({ message: "User not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};
