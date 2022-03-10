import MemberModel, { Member } from "../models/member.model";
import TeamModel from "../models/team.model";
import UserModel, { User } from "../models/user.model";

export function createMember(input: Partial<Member>) {
  return MemberModel.create(input);
}
export async function findMemberById(id: string) {
  return await MemberModel.findById(id)
    .then((curUser) => curUser)
    .catch((err) => err);
}
export async function createTeam(member: Member, id: String) {
  const team = [];
  team.push({ creator: id, team: [member] });
  return await TeamModel.create(team);
}

export async function getTeam(id: String) {
  console.log(id);
  const curTeam = await TeamModel.findOne({ creator: id });
  console.log(curTeam);
  if (!curTeam) return [];
  return curTeam;
}
export async function teamBuildingFunction(id: String, member: Member) {
  console.log(id, member);
  const curTeam = await TeamModel.findOne({ creator: id });
  console.log(curTeam);
  if (!curTeam) return await createTeam(member, id);
  curTeam.team.push(member);
  return await curTeam.save();
}
