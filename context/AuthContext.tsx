import { createContext, useContext, useEffect, useState } from "react";
import SecureStore from "expo-secure-store";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const JWT_KEY = "user-token";

type AuthProps = {
  token: string | null;
  onRegister: (email: string, password: string) => Promise<any>;
  onLogin: (email: string, password: string) => Promise<any>;
  onLogout: () => Promise<void>;
  initialized: boolean;
};

const AuthContext = createContext<Partial<AuthProps>>({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await SecureStore.getItemAsync(JWT_KEY);
      if (storedToken) {
        setToken(storedToken);
      }
      setInitialized(true);
    };

    loadToken();
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await fetch(`${API_URL}/auth`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
    } catch (error) {
      console.error("Error occurred: ", JSON.stringify(error));
    }
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      const result = await fetch(`${API_URL}/user`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      return result;
    } catch (error) {
      console.error("Error occurred: ", JSON.stringify(error));
    }
  };

  const handleLogout = async () => {
    setToken(null);
    await SecureStore.deleteItemAsync(JWT_KEY);
  };

  const value = {
    initialized,
    onLogin: handleLogin,
    onRegister: handleRegister,
    onLogout: handleLogout,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
