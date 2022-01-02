import { Container } from "inversify";

import { DbConfig } from "./config/db.config";

import "./controller/user.controller";
import { UserService } from "./service/user.service";
import { UserRepository } from "./model/user.model";
import { BaseRepository } from "./model/base.repo";


export const container = new Container({
  defaultScope: "Singleton"
})

container.bind(UserService).toSelf()
container.bind(UserRepository).toSelf()
container.bind(BaseRepository).toSelf()
container.bind(DbConfig).toSelf();
