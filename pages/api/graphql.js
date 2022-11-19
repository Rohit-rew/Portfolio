const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");

const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
} = graphql;

import connectPromise from "../../lib/mongodb";

const ImageType = new GraphQLObjectType({
  name: "image",
  fields: () => {
    return {
      url: { type: GraphQLString },
    };
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    images: {
      type: new GraphQLList(ImageType),
      args: { limit: { type: GraphQLInt } },
      async resolve(parent, args) {
        const client = await connectPromise;
        const db = client.db("portfolio");
        const images = await db
          .collection("images")
          .find({})
          .limit(args.limit)
          .toArray();
        return images;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default app.use(
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
