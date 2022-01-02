import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";

import { container } from "./di.container";
import { DbConfig } from "./config/db.config";

export class App {
  async setup() {
    await container.get(DbConfig).connect()

    const server = new InversifyExpressServer(container);

    server.setConfig((app) => {
      app.use(express.json());
    });

    const app = server.build();
    const port = Number(process.env.PORT || 5000)

    app.listen(port, () => {
      console.log(`Listening on :${port}`);
    });
  }
}