import config from 'config';
import * as dotenv from "dotenv";
import got from 'got';
import 'dotenv/config'

const USERS_SERVICE_URI = (process.env.USERS_SERVICE_URI as string)

export class UsersService {
   static async fetchUserSessions({sessionId}: {sessionId: string}){
      const body = await got.get(`${USERS_SERVICE_URI}/sessions/${sessionId}`).json();
      return body;
   }
}
