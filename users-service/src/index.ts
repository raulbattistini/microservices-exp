import  config  from "config";
import "reflect-metadata";
import "./db/connection";
import {startServer} from "../src/server/startServer";

startServer();