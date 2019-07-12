const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

const app = express();

const graphQLSettings = {
	schema: schema,
	graphiql: true,
};

app.use('/graphql', expressGraphQL(graphQLSettings));

app.listen(4000, () => {
	console.log(`Server running on :4000;`);
});
