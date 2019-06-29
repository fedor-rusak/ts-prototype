import express from "express";

import { helloWorld } from "./controllers/api";

// Create a new express application instance
const app: express.Application = express();

app.get("/", helloWorld);

app.listen(3000, () => {
  // tslint:disable-next-line:no-console
  console.log("Example app listening on port 3000!");
});
