import { api } from "../services/api";
import { useState } from "react";
import { toastError, toastSucess } from "../utils/reactToast";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { iAxiosResponse, iTechs, iUserInfo } from "../context/ContextUser";
import { Iterator } from "typescript";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { iUseFormData } from "./useValidateForm";

//Interfaces: Start;
export interface iErrorRequest {
  status: string;
  message: string;
}

interface iLoginRequestData {
  email: string;
  password: string;
}

export interface iRegisterRequestData {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
}

interface iRegisterRequestResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

export interface iCreateTechRequest {
  title: string;
  status: string;
}

export interface iCreateTechRequestResponse {
  id: string;
  title: string;
  status: string;
  user: {
    id: string;
  };
  created_at: string;
  updated_at: string;
}

interface iUpdateTechRequestData {
  status?: string | undefined;
}
interface iUpdateTechResponse {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}
//Interface: End
export const useLogin = (
  setUserInfo: React.Dispatch<
    React.SetStateAction<iUserInfo | null | undefined>
  >
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorRequest, setErrorRequest] = useState<undefined | iErrorRequest>(
    undefined
  );
  const navigate: NavigateFunction = useNavigate();
  const loginUser = async (
    data: iLoginRequestData,
    setTriger: React.Dispatch<React.SetStateAction<boolean>>,
    triger: boolean
  ) => {
    setLoading(true);
    try {
      await api.post<iAxiosResponse>("/sessions", data).then((response) => {
        toastSucess("Login feito com sucesso");
        localStorage.setItem("@token", response.data.token);
        setUserInfo(response.data.user);
        setTriger(!triger);
        navigate("/dashboard");
      });
      setLoading(false);
    } catch {
      toastError("Não foi possível fazer o login");
      setLoading(false);
    }
  };
  return {
    loginUser,
    loading,
    errorRequest,
  };
};

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const registerUser = async (data: iRegisterRequestData) => {
    try {
      setLoading(true);
      await api.post<iRegisterRequestResponse>("/users", data);
      toastSucess("Registro realizado com sucesso");
      navigate("/");
      setLoading(false);
    } catch {
      setLoading(true);
      toastError(
        "Ocorreu um erro ao tentar realizar seu registro tente novamente."
      );
      setLoading(false);
    }
  };
  return {
    registerUser,
    loading,
  };
};

export const useCreateTech = () => {
  const [loading, setLoading] = useState(false);
  const createTech = async (
    data: iUseFormData,
    setTechs: React.Dispatch<React.SetStateAction<iTechs[] | undefined | null>>
  ) => {
    setLoading(true);
    try {
      const response = await api.post<iCreateTechRequestResponse>(
        "/users/techs",
        data
      );
      setTechs((actualTechs) => {
        if (actualTechs) {
          return [...actualTechs, response.data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return {
    loading,
    createTech,
  };
};
export const useUpdateTech = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const editTech = async (
    data: iUpdateTechRequestData,
    techId: string,
    techs: iTechs[],
    setTechs: React.Dispatch<React.SetStateAction<iTechs[] | undefined | null>>
  ) => {
    setLoading(true);
    try {
      await api.put<iUpdateTechResponse>(`/users/techs/${techId}`, data);
      const currentTech: iTechs | undefined = techs.find(
        (tech) => tech.id === techId
      );
      if (currentTech) {
        currentTech.status = data.status;
      }
      setTechs((actualTechs) => {
        if (actualTechs) {
          return [...actualTechs];
        }
      });
      setLoading(false);
    } catch (error) {}
  };
  return {
    editTech,
    loading,
  };
};
export const useDeleteTech = () => {
  const deleteTech = async (
    techId: string,
    techs: Array<iTechs>,
    setTechs: React.Dispatch<React.SetStateAction<iTechs[] | undefined | null>>
  ) => {
    try {
      await api.delete(`/users/techs/${techId}`);
      const filterTech = techs.filter((tech: iTechs) => tech.id !== techId);
      setTechs(filterTech);
    } catch (error) {}
  };
  return { deleteTech };
};
