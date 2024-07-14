import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
  }, []);
  const setCurrentUser = (user) => {
    setUser(user);
    setLoading(false);
  };

  return (
    <userContext.Provider value={{ user, setCurrentUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
