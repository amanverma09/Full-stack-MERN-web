import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleuser,
  updateUser,
} from "../controller/usercontroller.js";

const router = express.Router();
router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getSingleuser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
