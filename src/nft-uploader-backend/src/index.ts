import { Canister, query, text, update } from "azle";
import { createUser, loginUser, getAllUsers } from "./db";
import { errorResponse, successResponse } from "./utils";

export default Canister({
  greet: query([text], text, (name) => {
    return `Hello, ${name}!`;
  }),
  register: update([text, text], text, (email, password) => {
    try {
      const user = createUser(email, password);
      console.log(user);
      return successResponse(200, "User created successfully", user);
    } catch (error: any) {
      return errorResponse(500, "Error creating account", error);
    }
  }),
  login: query([text, text], text, async (email, password) => {
    try {
      const user = loginUser(email, password);

      if (!user) {
        return errorResponse(404, "Incorrect credentials", null);
      }

      return successResponse(200, "User logged in successfully", user);
    } catch (error: any) {
      return errorResponse(500, "Error logging in", error);
    }
  }),
  getUsers: query([], text, () => {
    try {
      const users = getAllUsers();
      return successResponse(200, "Users fetched successfully", users);
    } catch (error: any) {
      return errorResponse(500, "Error fetching users", error);
    }
  }),
});
