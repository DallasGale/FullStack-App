import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';


const myTypeDefinition = `
  type Query {
    hi: String
  }
`;

const myResolver = {
  Query: {
    hi() {
      return "Hello Dallas!";
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs : myTypeDefinition,
  resolvers : myResolver
})


createApolloServer({ schema });