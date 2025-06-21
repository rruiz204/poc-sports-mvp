export const PingResolver = {
  Query: {
    ping: () => {
      return { ping: "pong" };
    },
  },
};