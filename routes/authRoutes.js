import express from "express";
import {
  register,
  getAllUsers,
  deleteUser,
  updateSingleUser,
} from "../controllers/authController.js";
import { registrationRules } from "../validation/validation.js";

const router = express.Router();

// Register a new user
router.post("/register", registrationRules(), register);

router.get("/users", getAllUsers);
router.put("/user/:id", updateSingleUser);
router.delete("/user/:id", deleteUser);

export default router;
