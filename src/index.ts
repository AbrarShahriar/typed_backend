import 'reflect-metadata'
import { createConnection } from "typeorm";
import Post from "./entities/Post";
import User, { Gender } from "./entities/User";
import path from "path";
import { exec, execSync } from "child_process";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./graphql/resolvers/UserResolver";
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

async function main() {
  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "ben_backend_db",
    entities: [User, Post],
    synchronize: false,
    logging: true,
    migrations: [path.join(__dirname, "./migrations/*")],
  });
  
  exec("npm run migration:gen", (err, stdout, stderr) => {
    if(err) {
      console.log('Migration Generation Not Needed.');
      return
    }
    console.log(stdout);
    connection.runMigrations()
  })
    
  const schema = await buildSchema({
    resolvers: [UserResolver],
    validate: true
  })
  const server = new ApolloServer({ 
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
   })
  server.listen(4000, () => {
    console.log('server started on port 4000');
    
  })
  
}

main()
.then(() => {
  console.log('Connected!!')

  
})
.catch(err => console.log(err))
