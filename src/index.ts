import "reflect-metadata";

import { App } from "./app";


export async function bootstrap() {
 await new App().setup()
}

bootstrap().catch(console.error);
