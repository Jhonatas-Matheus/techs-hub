import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Regex } from "../utils/regex";

export interface iUseFormData {
  email: string;
  password: string;
  title?: string;
  status?: string;
  name?: string;
  passwordConfirmation?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
}

export const useValidate = (type: string) => {
  const [form, setForm] = useState({});
  const [errorValidation, setErrorValidation] = useState(undefined);
  useEffect(() => {
    if (type === "login") {
      setForm({
        email: yup
          .string()
          .required("E-mail obrigatório")
          .email("E-mail inválido"),
        password: yup.string().required("A senha é obrigatória"),
      });
    } else if (type === "addTech") {
      setForm({
        title: yup.string().required(),
        status: yup.string().required(),
      });
    } else if (type === "editTech") {
      setForm({
        status: yup.string().required(),
      });
    } else {
      setForm({
        name: yup.string().required("Nome obrigatório"),
        email: yup
          .string()
          .required("E-mail obrigatório")
          .email("E-mail inválido"),
        password: yup
          .string()
          .required("A senha é obrigatória")
          .min(6, "A senha deve possuir no mínimo 6 dígitos"),
        passwordConfirmation: yup
          .string()
          .required("A confirmação de senha é obrigatória")
          .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
        bio: yup
          .string()
          .required("Digite um pouco sobre você (É obrigatório)"),
        contact: yup.string().required("Digite aqui seu contato"),
        course_module: yup.string().required(),
      });
    }
  }, []);
  const formSchema = yup.object(form);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUseFormData>({ resolver: yupResolver(formSchema) });
  return {
    register,
    handleSubmit,
    errorValidation,
    reset,
    errors,
  };
};
