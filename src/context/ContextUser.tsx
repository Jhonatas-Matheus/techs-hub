import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface iUserContextProps {
  children: React.ReactNode;
}
export interface iTechs {
  created_at: string;
  id: string;
  status?: string;
  title: string;
  updated_at: string;
}
export interface iAxiosResponse {
  token: string;
  data?: iUserInfo | null;
  user: iUserInfo;
}
export interface iUserInfo {
  avatar_url: null | string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: Array<iTechs> | null | undefined;
  updated_at: string;
  works: [];
}
interface iUserContext {
  loading: boolean;
  userInfo: null | iUserInfo | undefined;
  setUserInfo: React.Dispatch<
    React.SetStateAction<iUserInfo | null | undefined>
  >;
  setTriger: React.Dispatch<React.SetStateAction<boolean>>;
  triger: boolean;
  techs: Array<iTechs> | null | undefined;
  setTechs: React.Dispatch<React.SetStateAction<iTechs[] | undefined | null>>;
}
export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<null | iUserInfo | undefined>(null);
  const [techs, setTechs] = useState<null | iTechs[] | undefined>(null);
  const [triger, setTriger] = useState<boolean>(true);
  useEffect(() => {
    const loadUser = async () => {
      const token: string | null = localStorage.getItem("@token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data }: iAxiosResponse = await api.get("/profile");
          setUserInfo(data);
          setTechs(data?.techs);
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [triger]);

  return (
    <UserContext.Provider
      value={{
        loading,
        userInfo,
        setUserInfo,
        setTriger,
        triger,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
