import { app } from "../../src/api/app";
import supertest from "supertest";

describe("test api", () => {
  test("happy path", async () => {
    const response = await supertest(app).get("/").expect(200);
    expect(response.body.msg).toBe("hello!")
  });
});
