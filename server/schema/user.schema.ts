import { object, string, TypeOf } from "zod";
export const createUserSchema = object({
  body: object({
    username: string({
      required_error: "username is a requierd field",
    }),
    email: string({
      required_error: "email is a requierd field",
    }).email("Not a valid Email"),
    password: string({
      required_error: "password is a requierd field",
    }).min(6, "Password is too short, minimum 6 characters required"),
    passwordConfirmation: string({
      required_error: "Password Confirmation is a requierd field",
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords Do not match",
    path: ["passwordConfirmation"],
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
export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];
