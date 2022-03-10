import {
  DocumentType,
  getModelForClass,
  index,
  modelOptions,
  pre,
  prop,
  Ref,
  Severity,
} from "@typegoose/typegoose";
import { Member } from "./member.model";
import { User } from "./user.model";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Team {
  @prop({ required: true })
  creator: Ref<User>;

  @prop({ required: true })
  team: Ref<Member>[];
}
const TeamModel = getModelForClass(Team);

export default TeamModel;
