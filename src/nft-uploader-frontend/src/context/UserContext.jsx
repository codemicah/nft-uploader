import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("userData");
    if (!token && !user) {
      console.log("No token found");
      setLoading(false);
    } else {
      setCurrentUser(JSON.parse(token));
      setLoading(false);
    }
  }, [navigate]);
  const setCurrentUser = (userData) => {
    setUser(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    setLoading(false);
  };

  return (
    <userContext.Provider value={{ user, setCurrentUser, loading, setLoading }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
