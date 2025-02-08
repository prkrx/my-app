import React, { createContext, useState, ReactNode } from "react";

type User = {
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    const dummyUsers = [
      { email: "admin@example.com", password: "admin123" },
      { email: "user@example.com", password: "user123" },
    ];

    const foundUser = dummyUsers.find((u) => u.email === email && u.password === password);
    if (foundUser) {
      setUser({ email });
      return true; // Login sukses
    }
    return false; // Login gagal
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
