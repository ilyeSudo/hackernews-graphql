const { GraphQLServer } = require("graphql-yoga");

// 1
const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}
type Link {
    id: ID!
    description: String!,
    url: String!,
  }
`;

let links = [
  {
    id: "xOd3wl2I1d3so9kz47o4dw",
    url: "http://ilyesudo.github.io",
    description: "New way to fuck up!",
  },
];

// 2
const resolvers = {
  Query: {
    info: () => "Hello from the other side!",
    feed: () => links,
  },
  //   Link: {
  //     id: (parent) => parent.id,
  //     description: (parent) => parent.description,
  //     url: (parent) => parent.url,
  //   },
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
server.start(() =>
  console.log(`🚀 Server is running on http://localhost:4000`)
);
