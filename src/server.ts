import app from "./app";

const server = app.listen(app.get("port"), () => {
  // tslint:disable-next-line:no-console
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env"),
    "\n  Press CTRL-C to stop\n");
});

export default server;
