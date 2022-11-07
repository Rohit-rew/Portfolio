const express = require("express")
const app = express()
const {graphqlHTTP} = require("express-graphql") 


const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const books = [
  { name: "Name of the wind", genre: "fantasy", id: "1", authorid: "1" },
  { name: "The final empire", genre: "Action", id: "2", authorid: "2" },
  { name: "The long earth", genre: "Sci-fi", id: "3", authorid: "3" },
  { name: "The hero of ages", genre: "fantasy", id: "4", authorid: "2" },
  { name: "The color of magic", genre: "fantasy", id: "5", authorid: "3" },
  { name: "The light fantastic", genre: "fantasy", id: "6", authorid: "3" },
];

const author = [
  { name: "Patrick Dharmatma", age: 44, id: "1" },
  { name: "Brandon Kumar", age: 44, id: "2" },
  { name: "Terry savitri", age: 44, id: "3" },
];

import connectPromise from "../../lib/mongodb"

const BookType = new GraphQLObjectType({
  name: "book",
  fields: () => {
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve(parent, args) {
          return _.find(author, { id: parent.authorid });
        },
      },
    };
  },
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => {
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent, args) {
          return _.filter(books, { authorid: parent.id });
        },
      },
    };
  },
});

const ImageType = new GraphQLObjectType({
  name:"image",
  fields:()=>{
    return {
      url : {type:GraphQLString}
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(author, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      args: { limit: { type: GraphQLInt } },
     async resolve (parent, args) {
        // return books.filter((book, i) => {
        //   return i < args.limit;
        // });
        const client = await connectPromise
        const db = client.db("graphql")
        const books = await db.collection("books")
        .find({})
        .limit(args.limit)
        .toArray()
        return books
      },
    },
    authors:{
      type: new GraphQLList(AuthorType),
      resolve(parent , args){
        return author
      }
    },
    images : {
      type : new GraphQLList(ImageType),
      args : {limit : {type : GraphQLInt}},
      async resolve(parent,args){

        const client = await connectPromise
        const db = client.db("portfolio")
        const images = await db.collection("images")
        .find({})
        .limit(args.limit)
        .toArray()
        return images

      }
    }
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});


export default app.use( graphqlHTTP({
  schema:schema,
  graphiql:true
}))


