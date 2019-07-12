const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const log = require('./log');
const app = express();

const graphQLSettings = {
	schema: schema,
	graphiql: true,
};

app.use('/graphql', expressGraphQL(graphQLSettings));

app.listen(4000, () => {
	console.log(`\n \n`);
	console.log('GraphQl Server is running on port 4000 \n');
	console.log('Access Graphi IDE through \n', 'http://localhost:4000/graphql \n');
});
