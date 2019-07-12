const { addCustomer, deleteCustomer, editCustomer } = require('./api');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull,
} = require('graphql');

const { CustomerType } = require('./types');

const customerMutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addCustomer: {
			type: CustomerType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				email: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve: (parentValue, args) => addCustomer(args).then(res => res.data),
		},
		deleteCustomer: {
			type: CustomerType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve: (parentValue, args) => deleteCustomer(args.id).then(res => res.data),
		},
		editCustomer: {
			type: CustomerType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLString) },
				name: { type: GraphQLString },
				email: { type: GraphQLString },
				age: { type: GraphQLInt },
			},
			resolve: (parentValue, args) => editCustomer(args.id, args).then(res => res.data),
		},
	},
});

module.exports = customerMutation;
