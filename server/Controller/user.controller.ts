import { Request, Response } from "express";
import { signJWT } from "../functions/JWT";
import { User, validatePassword } from "../models/user.model";
import { CreateUserInput, LoginUserInput } from "../schema/user.schema";
import {
  createUser,
  findUserByEmail,
  findUserById,
} from "../service/user.service";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  const body = req.body;
  console.log(body);
  try {
    const user = await createUser(body);
    // console.log(signJWT(user.toJSON, "ACCESS_TOKEN_PRIVATE_KEY"));
    return res.json({
      message: "User created Successfully",
      user: await signJWT(JSON.stringify(user), "ACCESS_TOKEN_PRIVATE_KEY"),
    });
  } catch (e: any) {
    if (e.code === 11000) {
      return res.status(409).send("Account already exists");
    } else {
      return res.status(500).send(e);
    }
  }
}
export async function loginUserHandler(
  req: Request<{}, {}, LoginUserInput>,
  res: Response
) {
  const body = req.body;
  try {
    const user = await findUserByEmail(body.email);
    console.log(user);
    const token = await signJWT(
      JSON.stringify(user),
      "ACCESS_TOKEN_PRIVATE_KEY"
    );
    console.log(token);
    const isPassCrct = await validatePassword(user.password, body.password);
    console.log(isPassCrct);
    if (!isPassCrct) return res.json({ error: "Invalid Password" });
    return res.json({
      message: "User logged in Successfully",
      user: token,
    });
  } catch (e: any) {
    if (e.code === 11000) {
      return res.status(409).send("Account already exists");
    } else {
      return res.status(500).send(e);
    }
  }
}
export async function getCurrentUserHandler(req: Request, res: Response) {
  return res.send(res.locals.user);
}
