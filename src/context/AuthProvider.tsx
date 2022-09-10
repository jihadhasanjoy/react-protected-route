import React, { createContext, useState } from 'react';

const AuthContext = createContext({});
interface IProviderParams {
  children: React.ReactNode;
}
export default function AuthProvider({ children }: IProviderParams) {
  const [auth, setAuth] = useState({});
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
}
