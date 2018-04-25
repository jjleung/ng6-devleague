import gql from 'graphql-tag'
import * as express from 'express'
import * as expressGraphql from 'express-graphql'
import { buildSchema } from 'graphql'

// GraphQL schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`)

// Root resolver
const root = {
  message: () => 'Hello World!'
}

// Create an express server and a GraphQL endpoint
const app = express()

app.use(
  '/graphql',
  expressGraphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)
app.listen(4001, () =>
  console.log('Express GraphQL Server Now Running On localhost:4001/graphql')
)
