import express from "express";
import {
  createMemberHandler,
  getTeamHandler,
} from "../Controller/members.controller";
import {
  createUserHandler,
  getCurrentUserHandler,
  loginUserHandler,
} from "../Controller/user.controller";
import RequireUser from "../Middleware/RequireUser";
import Validate from "../Middleware/Validate";
import { createMemberSchema } from "../schema/member.schema";
const router = express.Router();

router.post(
  "/api/createteam",
  Validate(createMemberSchema),
  createMemberHandler
);
router.get("/api/getteam", getTeamHandler);
// router.post("/api/login", Validate(loginUserSchema), loginUserHandler);
router.get("/api/users/me", RequireUser, getCurrentUserHandler);
export default router;
