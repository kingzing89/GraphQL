const express = require("express")
const { graphqlHTTP } = require('express-graphql');
var app = express()
const schema =  require("./schema")
const cors =  require("cors")

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  );

  const port = process.env.PORT || 5000

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });