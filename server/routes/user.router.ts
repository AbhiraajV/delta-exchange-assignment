import express from "express";
import {
  createUserHandler,
  getCurrentUserHandler,
  loginUserHandler,
} from "../Controller/user.controller";
import RequireUser from "../Middleware/RequireUser";
import Validate from "../Middleware/Validate";
import { createUserSchema, loginUserSchema } from "../schema/user.schema";
const router = express.Router();

router.post("/api/signup", Validate(createUserSchema), createUserHandler);
router.post("/api/login", Validate(loginUserSchema), loginUserHandler);
router.get("/api/users/me", RequireUser, getCurrentUserHandler);
export default router;
