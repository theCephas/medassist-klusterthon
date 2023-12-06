// AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextType {
  token: string | null;
  updateAuthToken: (authToken: string) => void;
  username: string | null;
  setAuthenticatedUser: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const setAuthenticatedUser = (username: string) => {
    setUsername(username);
  };

  const logout = () => {
    setUsername(null);
    setToken(null);
  };

  const updateAuthToken = (token: string) => {
    setToken(token);
  };
  return (
    <AuthContext.Provider
      value={{ token, updateAuthToken, username, setAuthenticatedUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
