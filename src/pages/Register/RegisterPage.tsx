import React from "react";
import { StyledForm } from "../../patterns/style";
import { Typography } from "../../styles/typography";
import { StyledMainRegister } from "./style";
import { StyledInput } from "../../components/Inputs/style";
import { StyledButton } from "../../components/Button/style";
import { StyledSelect } from "../../components/Select/style";
import { useNavigate } from "react-router-dom";
import { iUseFormData, useValidate } from "../../hooks/useValidateForm";
import { iRegisterRequestData, useRegister } from "../../hooks/useRequests";
import { SubmitHandler } from "react-hook-form";
const RegisterPage = () => {
  const { register, handleSubmit, errors } = useValidate("");
  const { registerUser, loading } = useRegister();
  const onSubmitFunction: SubmitHandler<iUseFormData> = (data) => {
    registerUser(data);
  };
  const navigate = useNavigate();
  return (
    <StyledMainRegister>
      <header>
        <Typography tag="h1" typography="title1" color="primary">
          Techs Hub
        </Typography>
        <StyledButton onClick={() => navigate("/")}>Voltar</StyledButton>
      </header>
      <StyledForm
        title="Crie sua conta"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <Typography tag="h2" typography="headline" color="grey-one">
          Rapido e grátis, vamos nessa
        </Typography>
        <StyledInput
          title="Nome"
          type="text"
          register={register("name")}
          placeholder="Digite aqui seu nome"
          error={errors?.name?.message}
        />
        <StyledInput
          title="Email"
          type="text"
          register={register("email")}
          placeholder="Digite aqui seu E-mail"
          error={errors?.email?.message}
        />
        <StyledInput
          title="Senha"
          type="password"
          register={register("password")}
          placeholder="Digite aqui sua Senha"
          error={errors?.password?.message}
        />
        <StyledInput
          title="Confirmar Senha"
          type="password"
          register={register("passwordConfirmation")}
          placeholder="Digite novamente sua Senha"
          error={errors?.passwordConfirmation?.message}
        />

        <StyledInput
          title="Bio"
          type="text"
          placeholder="Fale sobre você"
          register={register("bio")}
          error={errors?.bio?.message}
        />
        <StyledInput
          title="Contato"
          type="number"
          register={register("contact")}
          placeholder="Opção de contato"
          error={errors?.contact?.message}
        />
        <StyledSelect
          title="Selecionar módulo"
          register={register("course_module")}
        >
          <option value={"Primeiro módulo (Introdução ao Frontend)"}>
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value={"Segundo módulo (Frontend Avançado)"}>
            Segundo módulo (Frontend Avançado)
          </option>
          <option value={"Terceiro módulo (Introdução ao Backend)"}>
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value={"Quarto módulo (Backend Avançado)"}>
            Quarto módulo (Backend Avançado)
          </option>
        </StyledSelect>
        {loading && (
          <StyledButton type="submit" disabled={true}>
            Loading...
          </StyledButton>
        )}
        {!loading && (
          <StyledButton type="submit" primary="true">
            Entrar
          </StyledButton>
        )}
      </StyledForm>
    </StyledMainRegister>
  );
};

export default RegisterPage;
