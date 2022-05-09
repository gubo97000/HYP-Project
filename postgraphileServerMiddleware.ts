// const { postgraphile } = require('postgraphile')
import { postgraphile, PostGraphileOptions } from 'postgraphile'
const postgraphileOptions :PostGraphileOptions= {
  subscriptions: true,
  watchPg: true, // automatic reload when database changes
  dynamicJson: true,
  setofFunctionsContainNulls: false,
  ignoreRBAC: false,
  showErrorStack: "json",
  extendedErrors: ["hint", "detail", "errcode"],
  appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
  exportGqlSchemaPath: "schema.graphql",
  graphiql: true, // for dev
  enhanceGraphiql: true,
  // allowExplain(req) {
  //   // TODO: customise condition!
  //   return true;
  // },
  enableQueryBatching: true,
  legacyRelations: "omit",
  // pgSettings(req) {
  //   /* TODO */
  // },
};
module.exports = postgraphile(process.env.DATABASE_URL, 'public', {
  ...postgraphileOptions,
  graphqlRoute: '/api/graphql', // optional to avoid conflicts with nuxt.js default routing
  graphiqlRoute: '/api/graphiql',
})
