import User from "../../entities/User";
import { Query, Resolver } from "type-graphql";


@Resolver()
export class UserResolver {
    @Query(() => [User]) 
    async users(): Promise<User[]> {
        const users = await User.find({})
        console.log(users);
        
        return users
    }
}