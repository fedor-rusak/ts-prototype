import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return 200 OK with \"Hello World!\" content", () => {
    return request(app).get("/")
      .expect(200, "Hello World!");
  });
});
