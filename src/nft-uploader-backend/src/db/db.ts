import { INFT, IUser } from "../interfaces";
import { randomID } from "../utils";

const users: IUser[] = [];
const nfts: INFT[] = [];

export const createUser = (email: string, password: string) => {
  const user: IUser = {
    id: randomID(),
    email,
    password,
  };
  users.push(user);
  return user;
};

export const loginUser = (email: string, password: string) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    return null;
  }
  const isPasswordCorrect = password === user.password;
  if (!isPasswordCorrect) {
    return null;
  }

  return user;
};

export const getUserByEmail = async (email: string) => {
  return users.find((user) => user.email === email);
};

export const createNFT = async (
  title: string,
  description: string,
  imageUrl: string,
  owner: string
) => {
  const nft: INFT = {
    id: randomID(),
    title,
    description,
    imageUrl,
    owner,
  };
  nfts.push(nft);
  return nft;
};

export const getNFTs = () => {
  return nfts;
};

export const getAllUsers = () => {
  return users;
};
