import { NextFunction, Request, Response } from "express";
import { verifyJWT } from "../functions/JWT";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = (req.headers.authorization || "").replace(
    /^Bearer\s/,
    ""
  );
  if (!accessToken) {
    return next();
  }
  const decoded = verifyJWT(accessToken, "accessTokenPublicKey");
  if (decoded) {
    res.locals.user = decoded;
  }
  next();
}
