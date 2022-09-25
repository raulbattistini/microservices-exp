import { IResolverContext } from "../../types";

interface IArgs {
  me: boolean;
}

const userSessionResolver = async (
  obj: any,
  args: IArgs,
  context: IResolverContext
) => {
  if (args.me !== true) throw new Error("Unsupported argument value");
  return await context.res.locals.userSession;
};

export default userSessionResolver;
