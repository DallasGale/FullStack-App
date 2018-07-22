import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
  type Query {
    hi: String
    resolutions: [Resolution]
  },
`
const myTypeDefinition = [ testSchema, ResolutionsSchema ];

const myResolver = {
  Query: {
    hi() {
      return "Hello Dallas!";
    },
    resolutions() {
      return [
        {
          _id: "this is an ID",
          name: "Get stuff done!"
        },
        {
          _id: "asdasdasdasd",
          name: "Get some more sleep"
        }
      ]
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs : myTypeDefinition,
  resolvers : myResolver
})


createApolloServer({ schema });