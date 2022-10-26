const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

// const bookDB = require("../database/bookschema")
// const authorDB = reuqire("../database/authorscheema.js")

const _ = require("lodash");

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
      args: { limit: { type: GraphQLID } },
      resolve(parent, args) {
        return books.filter((book, i) => {
          return i < args.limit;
        });
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return author;
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
