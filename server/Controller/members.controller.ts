import { Request, Response } from "express";
import { signJWT } from "../functions/JWT";
import TeamModel from "../models/team.model";
import { User, validatePassword } from "../models/user.model";
import { CreateMemberInput } from "../schema/member.schema";
import {
  createMember,
  getTeam,
  teamBuildingFunction,
} from "../service/member.service";
import {
  createUser,
  findUserByEmail,
  findUserById,
  isUser,
} from "../service/user.service";

export async function getTeamHandler(req: Request<{}, {}, {}>, res: Response) {
  const curUser = await isUser(req);
  if (!curUser) return res.send("Login First");
  console.log(curUser);
  const id = curUser._id as string;
  const team = await getTeam(id);
  return res.json({
    message: "team found",
    team,
  });
}
export async function createMemberHandler(
  req: Request<{}, {}, CreateMemberInput>,
  res: Response
) {
  const body = req.body;
  console.log(body);
  try {
    const curUser = await isUser(req);
    if (!curUser) return res.send("Login First");
    const member = await createMember(body);
    const team = await teamBuildingFunction(curUser._id, member);
    return res.json({
      message: "User created Successfully",
      member,
    });
  } catch (e: any) {
    if (e.code === 11000) {
      return res.status(409).send("Account already exists");
    } else {
      return res.status(500).send(e);
    }
  }
}
