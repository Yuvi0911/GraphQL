import { ApolloServer } from "@apollo/server"
import { graphQLSchema } from "./schema/schema.js"
import { graphQLResolver } from "./resolvers/resolvers.js"
// import { startStandaloneServer } from "@apollo/server/standalone"

export const connectGraphQL = (port: number, envMode:string) => {
    const server = new ApolloServer({
        typeDefs: graphQLSchema,
        resolvers: graphQLResolver
      });

      
// startStandaloneServer(server, {
//     listen: {
//       port,
//     }
//   }).then(() => {
//     console.log("Server is working on Port:" + port + " in " + envMode + " Mode.");
//   }).catch((err) => {
//     console.log(err);
//   })

  return server;
}