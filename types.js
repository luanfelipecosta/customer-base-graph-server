// Customer type
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
} = require('graphql');


const CustomerType = new GraphQLObjectType({
	name: 'CustomerType',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		age: { type: GraphQLInt },
	}),
});

module.exports = {
	CustomerType,
};
