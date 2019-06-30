import express from "express";
import mongoose from "mongoose";

import { helloWorld } from "./controllers/api";


const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.log(err.message);
  } else {
    // tslint:disable-next-line:no-console
    console.log("Succesfully connected to MongoDB!");
  }
});


const app: express.Application = express();

app.set("port", 3000);

app.get("/", helloWorld);


export default app;
