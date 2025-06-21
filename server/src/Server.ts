import express from "express";
import { Apollo } from "./Apollo";
import { Bootstrap } from "./Bootstrap";

const app = express();

const apollo = new Apollo();
await apollo.start();

const bootstrap = new Bootstrap(app);

bootstrap.addRouting();
bootstrap.addMiddleware();
bootstrap.addGraphQL(apollo.instance);

app.listen(3000, () => {
  console.log("the server is running!!!");
});