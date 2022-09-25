import { UsersService } from "../../../adapters/UsersService";

interface IArgs {
    password: string,
    username: string
}

const createUserResolver = async (obj: any, {password, username}: IArgs) =>{
    return await UsersService.createUser({password, username});
}

export default createUserResolver;