import { json } from "body-parser";

import type { Express } from "express";
import { ApolloServer } from "@apollo/server";

import { expressMiddleware } from "@as-integrations/express5";
import type { GraphQLContext } from "@Graphql/GraphQLContext";

import { PingRouter } from "@Routers/PingRouter";

export class Bootstrap {
  constructor(private app: Express) {};

  public addRouting(): void {
    this.app.use("/api/ping", PingRouter);
  };

  public addMiddleware(): void {
    this.app.use(json());
  };

  public addGraphQL(apollo: ApolloServer<GraphQLContext>): void {
    this.app.use("/graphql", expressMiddleware(apollo));
  };
};