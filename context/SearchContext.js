import { createContext, useState, useEffect } from "react";
import { parseCookies, destroyCookie } from "nookies";
import { jwtDecode } from "jwt-decode";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.token;

    if (token) {
      const decodedToken = jwtDecode(token);
      setUser({ email: decodedToken.email });
    }
  }, []);

  const login1 = async (email, password) => {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      setUser({ email });
    } else {
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    destroyCookie(null, 'token');
    setUser(null);
  };

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        user,
        login1,
        logout
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
