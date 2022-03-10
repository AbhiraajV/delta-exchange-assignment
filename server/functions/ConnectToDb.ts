import mongoose from "mongoose";
import config from "config";

export default () => {
  const dbURI = process.env.DB_URI as string;

  mongoose
    .connect(dbURI)
    .then(() => {
      console.log("Connected :D");
    })
    .catch((e) => {
      console.log("Connection Failed :(", e);
      process.exit(1);
    });
};
