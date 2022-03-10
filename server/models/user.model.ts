import {
  DocumentType,
  getModelForClass,
  index,
  modelOptions,
  pre,
  prop,
  Severity,
} from "@typegoose/typegoose";
import argon2 from "argon2";

export const privateFields = [
  "password",
  "__v",
  "verificationCode",
  "passwordResetCode",
  "verification",
];
@index({ email: 1 })
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@pre<User>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const hashedPassword = await argon2.hash(this.password);
  this.password = hashedPassword;
  return;
})
export class User {
  @prop({ lowercase: true, required: true, unique: true })
  email: string;

  @prop({ required: true })
  username: string;

  @prop({ required: true })
  password: string;

  //Methods
}
export async function validatePassword(
  actualPassword: string,
  candidatePassword: string
) {
  try {
    console.log(actualPassword, candidatePassword);
    return await argon2.verify(actualPassword, candidatePassword);
  } catch (e) {
    console.log(e, "Could not validate password");
  }
}
const UserModel = getModelForClass(User);

export default UserModel;
