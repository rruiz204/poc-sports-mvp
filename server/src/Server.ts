import express from "express";
import { Apollo } from "./Apollo";
import { Bootstrap } from "./Bootstrap";

const app = express();
const apollo = new Apollo();
const bootstrap = new Bootstrap(app);

await apollo.start();

bootstrap.addRouting();
bootstrap.addMiddleware();
bootstrap.addGraphQL(apollo);

app.listen(3000, () => {
  console.log("the server is running!!!");
});