import "reflect-metadata";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import { PORT } from "./config/app.config";
import { UserService } from "./service/user.service";

// Importing classes with @controller for Inversify
import "./controller/user.controller";
import { UserRepository } from "./model/user.model";

export async function bootstrap(port: number) {
  const container = new Container();
  const server = new InversifyExpressServer(container);

  container.bind(UserService).toSelf();
  container.bind(UserRepository).toSelf();

  const app = server.build();
  app.listen(port, () => {
    console.log(`Listening on :${port}`);
  });
}

bootstrap(PORT || Number(process.env.PORT)).catch(console.error);
