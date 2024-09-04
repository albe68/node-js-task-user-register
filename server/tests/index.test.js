import colors from "colors";
import request from "supertest";

import {
  getAUser_test_RESPONSE,
  invalidIdgetAUser_test_RESPONSE,
  // registerAUser_test_RESPONSE,
} from "./api.super.js";
beforeEach(()=>{
  
})
describe("/GET /api/v1/get-user-by-id/:id", () => {
  it("should return a valid with given Id", async () => {
    const GET_A_USER_RESPONSE = await getAUser_test_RESPONSE;
    console.log(GET_A_USER_RESPONSE.toString().blue);
    expect(GET_A_USER_RESPONSE.statusCode).toBe(200);
    expect(GET_A_USER_RESPONSE.body).toHaveProperty("data");
    expect(GET_A_USER_RESPONSE.statusCode).not.toBe(401);
    expect(GET_A_USER_RESPONSE.body.data).toHaveProperty("user_id");
  });

  it("should return 404 if the user is not found", async () => {
    expect(invalidIdgetAUser_test_RESPONSE.statusCode).toBe(401);
    expect(invalidIdgetAUser_test_RESPONSE.body).toHaveProperty("error", true);
  });
});

