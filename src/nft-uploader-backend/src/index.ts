import { Canister, query, text, update } from "azle";
import {
  createUser,
  loginUser,
  getAllUsers,
  createNFT,
  getUserByEmail,
} from "./db";
import { errorResponse, isValidEmail, successResponse } from "./utils";

export default Canister({
  register: update([text, text], text, (email, password) => {
    try {
      if (!isValidEmail(email)) {
        return errorResponse(400, "Invalid email", null);
      }

      const userExists = getUserByEmail(email);

      if (userExists) {
        return errorResponse(400, "User already exists", null);
      }

      const user = createUser(email, password);
      return successResponse(200, "User created successfully", user);
    } catch (error: any) {
      return errorResponse(500, "Error creating account", error);
    }
  }),
  login: query([text, text], text, async (email, password) => {
    try {
      if (!isValidEmail(email)) {
        return errorResponse(400, "Invalid email", null);
      }

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
  createNFT: update([text], text, (payload) => {
    try {
      const jsonPayload = JSON.parse(payload);

      const nftData = {
        title: jsonPayload.title,
        description: jsonPayload.description,
        imageUrl: jsonPayload.imageUrl,
        owner: jsonPayload.owner,
      };

      const nft = createNFT(nftData);

      return successResponse(200, "NFT created successfully", nft);
    } catch (error: any) {
      return errorResponse(500, "Error creating NFT", error);
    }
  }),
});
