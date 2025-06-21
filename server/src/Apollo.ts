import { ApolloServer } from "@apollo/server";
import type { GraphQLContext } from "@Graphql/GraphQLContext";

import { PingGraphQL } from "@Graphql/Schemas/PingGraphQL";
import { PingResolver } from "@Graphql/Resolvers/PingResolver";

export class Apollo {
  public instance = new ApolloServer<GraphQLContext>({
    typeDefs: [PingGraphQL],
    resolvers: [PingResolver],
  });

  public async start(): Promise<void> {
    await this.instance.start();
  };
};