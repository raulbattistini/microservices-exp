import { IResolverContext } from "../../../graphql/types";
import { UsersService } from "../../../adapters/UsersService";

interface IArgs {
  password: string;
  username: string;
}

const createUserSession = async (
  obj: any,
  { password, username }: IArgs,
  context: IResolverContext
) => {
  const userSession = await UsersService.createUserSession({ password, username });

  context.res.cookie("userSessionId", userSession.id, { httpOnly: true });

  return userSession;
};

export default createUserSession;