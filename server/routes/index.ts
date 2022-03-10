import express from "express";
const router = express.Router();
import userRouter from "./user.router";
import memberRouter from "./member.router";

router.get("/healthcheck", (___, res) => {
  res.json("Running");
});
router.use(userRouter);
router.use(memberRouter);

export default router;
