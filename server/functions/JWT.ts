const jwt = require("jsonwebtoken");

export async function signJWT(
  object: Object,
  keyName: "ACCESS_TOKEN_PRIVATE_KEY" | "refreshTokenPrivateKey"
) {
  // console.log(keyName, object, process.env[keyName] as string, "JWT ME HU BC");
  const signingKey = Buffer.from(
    process.env[keyName] as string,
    "base64"
  ).toString("ascii");
  console.log(object);
  var signOptions = {
    algorithm: "RS256",
  };
  return await jwt.sign(object, signingKey, signOptions);
}
export async function verifyJWT<T>(
  token: string,
  keyName: "ACCESS_TOKEN_PUBLIC_KEY" | "refreshTokenPublicKey"
) {
  const verifyingKey = Buffer.from(
    process.env[keyName] as string,
    "base64"
  ).toString("ascii");
  try {
    const decoded = (await jwt.verify(token, verifyingKey)) as T;
    return decoded;
  } catch (e) {
    return null;
  }
}
