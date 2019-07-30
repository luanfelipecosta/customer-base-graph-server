const express = require('express');
const cors = require('cors');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const app = express();

const graphQLSettings = {
	schema: schema,
	graphiql: true,
};
app.use(cors())
app.use('/graphql', expressGraphQL(graphQLSettings));

app.listen(3001, () => {
	console.log(`\n \n`);
	console.log('GraphQl Server is running on port 3001 \n');
	console.log('Access Graphi IDE through \n', 'http://localhost:3001/graphql \n');
});
