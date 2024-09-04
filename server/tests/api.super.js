import request from "supertest";
import { app } from "../src";

  const invalidUserId = "888";
  const malformedUserId = "aU78";
const validUserId = "6";
  
export const getAUser_test_RESPONSE = await request(app).get(`/api/v1/get-user-by-id/${validUserId}`);

export const invalidIdgetAUser_test_RESPONSE= await request(app).get(`/api/v1/get-user-by-id/${invalidUserId}`);

export const rsp_exsistUserREGISTER_test= await request(app).post(`/api/v1/register-user`).send({
    "full_name":"mock_full name",
    "user_name":"mock_username",
    "email": "17@email.com",
    "phone_number":1234567890,
    "password":"mock_password",
    "cnf_password":"mock_password",
    "login_status":false
});

export const rsp_validUserREGISTER_test = await request(app).post(`/api/v1/register-user`).send({
  "full_name":"mock_full name",
  "user_name":"mock_username",
  "email": "14henry@email.com",
  "phone_number":1234567890,
  "password":"mock_password",
  "cnf_password":"mock_password",
  "login_status":false
});

export const deleteAUser_test= await request(app).get(`/api/v1/delete-user/${validUserId}`);

export const updateAUser_test= await request(app).get(`/api/v1/update-user/:user_id`);

export const getAllUsers_test= await request(app).get(`/api/v1/get-all-users`);





