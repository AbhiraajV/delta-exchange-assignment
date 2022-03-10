require("dotenv").config();
import express from "express";
import routes from "./routes/index";
import ConnectToDb from "./functions/ConnectToDb";
const cors = require("cors");
// import DeserializeUser from "./Middleware/DeserializeUser";

const app = express();
app.use(express.json());
app.use(cors());
// app.use(DeserializeUser);
app.use(routes);
const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log("server listening http://localhost:" + PORT);
  ConnectToDb();
});
