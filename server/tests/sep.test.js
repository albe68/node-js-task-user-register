import { userModel } from "../src/frameworks/mongoDB/model";
import { rsp_validUserREGISTER_test, deleteAUser_test, rsp_exsistUserREGISTER_test } from "./api.super";

describe("POST /api/v1/register-user", () => {
  it("if user already registered with email id", async () => {
    console.log(`SUGAR`, rsp_exsistUserREGISTER_test.body, `BOO`);
    expect(rsp_exsistUserREGISTER_test.body).toHaveProperty(
      "message",
      "User already exsists"
    );
  });

  it("if user is not registered with email id", async () => {
    console.log(`SUGAR`, rsp_exsistUserREGISTER_test.body, `BOO`);
   
  expect(rsp_validUserREGISTER_test.statusCode).toBe(200);

  });
  it("should get valid details", async () => {
    // console.log(`SUGAR`, registerAUser_test_RESPONSE.body, `BOO`);
    // expect(registerAUser_test_RESPONSE.body).toHaveProperty(
    //   "message",
    //   "User already exsists"
    // );
    
    // expect(registerAUser_test.body).toHaveProperty("full_name")
    // expect(registerAUser_test.body).toHaveProperty("email")
    // expect(registerAUser_test.body).toHaveProperty("phone_number")
    // expect(registerAUser_test.body).toHaveProperty("password")
  });


});

describe("DELETE /api/v1/delete-user/:user_id",()=>{
  
  expect(deleteAUser_test.statusCode).toBe(404);
});