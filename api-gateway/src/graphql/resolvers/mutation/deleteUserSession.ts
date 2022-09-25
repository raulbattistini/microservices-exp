import { UsersService } from "../../../adapters/UsersService";
import { IResolverContext } from "../../../graphql/types"

interface IArgs{
    me: boolean
}

const deleteUserSessionResolver = async (obj: any, args: IArgs, context: IResolverContext) =>{
    if (args.me !== true) throw new Error("Unsupported argument value");
    
    const sessionId = context.res.locals.userSession.id;

    await UsersService.deleteUserSession({sessionId})

    context.res.clearCookie("userSessionId");

    return true;
}

export default deleteUserSessionResolver