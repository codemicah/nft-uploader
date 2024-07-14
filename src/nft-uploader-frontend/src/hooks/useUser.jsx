import { useContext } from "react";
import { userContext } from "../context/UserContext";

export function useUser() {
  const user = useContext(userContext);
  if (!user) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return user;
}
