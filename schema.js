const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = require("graphql");

const { fetchCustomers, fetchCustomer } = require("./api");
const mutation = require("./mutation");
const { CustomerType } = require("./types");
const R = require("ramda");

// Root query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: async (parentValue, args) => {
        try {
          const { data } = await fetchCustomer(args.id);

          return data;
        } catch (e) {
          console.log(e);
        }
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve: async () => {
        try {
          const { data } = await fetchCustomers();
          return data;
        } catch (e) {
          console.error("failed to fetch", e);
        }
      }
    },
    searchCustomers: {
      type: new GraphQLList(CustomerType),
      args: {
        keyword: { type: GraphQLString }
      },
      resolve: async (parentValue, args) => {
        try {
          const { keyword } = args;
          const { data } = await fetchCustomers();

          if (keyword == "") return data;
          return R.filter(item => String(item.name).search(keyword) != -1, data);
        } catch (e) {
          console.error("failed to fetch", e);
        }
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
