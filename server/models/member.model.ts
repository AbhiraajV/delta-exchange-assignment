import {
  DocumentType,
  getModelForClass,
  index,
  modelOptions,
  pre,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { nanoid } from "nanoid";
import argon2 from "argon2";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Member {
  @prop({ required: true })
  name: string;

  @prop({ required: true })
  company: string;

  @prop({ required: true })
  status: boolean;

  @prop({ required: true })
  notes: string;
}
const MemberModel = getModelForClass(Member);

export default MemberModel;
