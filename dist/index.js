"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Post_1 = __importDefault(require("./entities/Post"));
const User_1 = __importDefault(require("./entities/User"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const UserResolver_1 = require("./graphql/resolvers/UserResolver");
const apollo_server_core_1 = require("apollo-server-core");
async function main() {
    const connection = await (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "root",
        database: "ben_backend_db",
        entities: [User_1.default, Post_1.default],
        synchronize: false,
        logging: true,
        migrations: [path_1.default.join(__dirname, "./migrations/*")],
    });
    (0, child_process_1.exec)("npm run migration:gen", (err, stdout, stderr) => {
        if (err) {
            console.log('Migration Generation Not Needed.');
            return;
        }
        console.log(stdout);
        connection.runMigrations();
    });
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [UserResolver_1.UserResolver],
        validate: true
    });
    const server = new apollo_server_1.ApolloServer({
        schema,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()]
    });
    server.listen(4000, () => {
        console.log('server started on port 4000');
    });
}
main()
    .then(() => {
    console.log('Connected!!');
})
    .catch(err => console.log(err));
