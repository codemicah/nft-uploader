import { text, Variant, nat8, Record, reserved } from "azle";
export const TUserResponse = Variant({
  id: text,
  email: text,
  password: text,
});

export const TNFTResponse = Variant({
  id: text,
  title: text,
  description: text,
  imageUrl: text,
  owner: text,
});

export const Response = Record({
  statusCode: nat8,
  message: text,
  data: reserved,
  error: reserved,
});
