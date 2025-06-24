import { Apollo } from "./Apollo";
import { json } from "body-parser";

import type { Express } from "express";
import { PingRouter } from "@Routers/PingRouter";

import { expressMiddleware } from "@as-integrations/express5";

export class Bootstrap {
  constructor(private app: Express) {};

  public addRouting(): void {
    this.app.use("/api/ping", PingRouter);
  };

  public addMiddleware(): void {
    this.app.use(json());
  };

  public addGraphQL(apollo: Apollo): void {
    this.app.use("/graphql", expressMiddleware(apollo.instance));
  };
};