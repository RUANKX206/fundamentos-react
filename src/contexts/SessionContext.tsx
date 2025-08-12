import { Children, createContext, ReactNode, useContext, useState } from "react";

type User = {
  id: string;
  cpf: string;
  email: string;
  fullName: string;
  avatarUrl: string;
}

type sessionContextData = {
  user: User;
  updateUser: (user: User) => Promise<void>;
}

const SessionContext = createContext({} as sessionContextData);

interface SessionProviderProps {

  children: ReactNode;
}

export function SessionProvider({ children }: SessionProviderProps) {

  const [user, setUser] = useState<User>({} as User);

  async function updateUser(user: User) {
    setUser(user);
  }

  return (
    <SessionContext.Provider value={{ user, updateUser }}>
      {children}
    </SessionContext.Provider>
  );
}


export const useSession = () => useContext(SessionContext);

