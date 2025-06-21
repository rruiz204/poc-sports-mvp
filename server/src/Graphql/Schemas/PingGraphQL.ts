const PingType = `#graphql
  type Ping {
    ping: String!
  }
`;

const PingQueries = `#graphql
  type Query {
    ping: Ping!
  }
`;

export const PingGraphQL = `#graphql
  ${PingType}
  ${PingQueries}
`;