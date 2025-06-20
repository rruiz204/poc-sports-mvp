import express from "express";
import { Bootstrap } from "./Bootstrap";

const app = express();

const bootstrap = new Bootstrap(app);

bootstrap.addRouting();

app.listen(3000, () => {
  console.log("the server is running!!!");
});