import { Container } from "inversify";

import { DbConfig } from "./config/db.config";

import { BaseRepository } from "./model/base.repo";

// User service identifiers
import "./controller/user.controller";
import { UserService } from "./service/user.service";
import { UserRepository } from "./model/user.model";


export const container = new Container({
  defaultScope: "Singleton"
})

const serviceIdentifiers: Array<new (...args: any[]) => {}> = [
  UserService,
  UserRepository,
  BaseRepository,
  DbConfig
]

serviceIdentifiers.forEach(SI => container.bind(SI).toSelf())
