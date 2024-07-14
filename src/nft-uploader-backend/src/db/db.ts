import { StableBTreeMap } from "azle";
import { INFT, IUser } from "../interfaces";
import { randomID } from "../utils";

const users = StableBTreeMap<string, IUser>(0);
const nfts = StableBTreeMap<string, INFT>(1);

export const createUser = (email: string, password: string) => {
  const user: IUser = {
    id: randomID(),
    email,
    password,
  };

  users.insert(email, user);
  return { email: user.email, id: user.id };
};

export const loginUser = (email: string, password: string) => {
  const user = users.get(email);

  if (user.None) {
    return null;
  }

  const isPasswordCorrect = password === user.Some?.password;
  if (!isPasswordCorrect) {
    return null;
  }

  return { email: user.Some?.email, id: user.Some?.id };
};

export const getUserByEmail = (email: string) => {
  const user = users.get(email);

  if (user.None) {
    return null;
  }

  return { email: user.Some?.email, id: user.Some?.id };
};

export const createNFT = (payload: Omit<INFT, "id">) => {
  const { title, description, imageUrl, owner } = payload;

  const nft: INFT = {
    id: randomID(),
    title,
    description,
    imageUrl,
    owner,
  };

  nfts.insert(nft.id, nft);
  return nft;
};

export const getNFTs = () => {
  return nfts.values();
};

export const getAllUsers = () => {
  return users.values().map((user) => ({
    email: user.email,
    id: user.id,
  }));
};
