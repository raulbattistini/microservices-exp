import { UsersService } from "../../adapters/UsersService";
import { UserSessionType } from "../types";

export const UserSession = {
//   id: async (userSession: UserSessionType) => {
//     const user = await UsersService.fetchUser({ userId: userSession.id });
//     return user!.username
//   },
  user: async (userSession: UserSessionType) => {
    return await UsersService.fetchUser({ userId: userSession.id });
  },
};
