import { boolean, object, string, TypeOf } from "zod";
export const createMemberSchema = object({
  body: object({
    name: string({
      required_error: "username is a requierd field",
    }),
    company: string({
      required_error: "company is a requierd field",
    }),
    status: boolean({
      required_error: "statur is a requierd field",
    }),
    notes: string({
      required_error: "notes is a requierd field",
    }),
  }),
});
export const loginUserSchema = object({
  body: object({
    email: string({
      required_error: "email is a requierd field",
    }).email("Not a valid Email"),
    password: string({
      required_error: "password is a requierd field",
    }).min(6, "Password is too short, minimum 6 characters required"),
  }),
});
// export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
export type CreateMemberInput = TypeOf<typeof createMemberSchema>["body"];
