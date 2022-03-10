import { verifyJWT } from "../functions/JWT";
import UserModel, { User } from "../models/user.model";

export function createUser(input: Partial<User>) {
  return UserModel.create(input);
}
export async function findUserById(id: string) {
  return await UserModel.findById(id)
    .then((curUser) => curUser)
    .catch((err) => err);
}
export async function findUserByEmail(email: string) {
  return await UserModel.findOne({ email: email })
    .then((data) => data)
    .catch((err) => err);
}
export async function isUser(req: any): Promise<typeof UserModel | null> {
  console.log(req.headers);
  return await verifyJWT(req.headers.authorization, "ACCESS_TOKEN_PUBLIC_KEY");
}
