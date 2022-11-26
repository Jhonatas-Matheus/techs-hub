import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { StyledButton } from "../../components/Button/style";
import { StyledInput } from "../../components/Inputs/style";
import { StyledForm } from "../../patterns/style";
import { Typography } from "../../styles/typography";
import { StyledMain } from "./style";
import { iUseFormData, useValidate } from "../../hooks/useValidateForm";
import { useLogin } from "../../hooks/useRequests";
import { UserContext } from "../../context/ContextUser";
import { SubmitHandler } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    userInfo,
    loading: laoder,
    setUserInfo,
    setTriger,
    triger,
  } = useContext(UserContext);
  const { loginUser, loading, errorRequest } = useLogin(setUserInfo);
  const { register, handleSubmit, errors } = useValidate("login");
  const onSubmitFunction: SubmitHandler<iUseFormData> = (data) => {
    loginUser(data, setTriger, triger);
  };

  return (
    <>
      {!userInfo ? (
        <StyledMain>
          <Typography tag="h1" typography="title1" color="primary">
            Techs Hub
          </Typography>
          <StyledForm title="Login" onSubmit={handleSubmit(onSubmitFunction)}>
            <StyledInput
              title="Email"
              type="text"
              placeholder="Digite seu E-mail"
              register={register("email")}
              error={errors?.email?.message}
            />
            <StyledInput
              title="Senha"
              type="password"
              placeholder="Digite sua Senha"
              register={register("password")}
              error={errors?.password?.message}
            />
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

            {errorRequest && (
              <Typography tag="h2" typography="headline" color="error">
                <>{errorRequest}</>
              </Typography>
            )}
            <Typography tag="h2" typography="headline" color="grey-one">
              Ainda não possui uma conta?
            </Typography>
            <StyledButton
              secundary="true"
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              Cadastre-se
            </StyledButton>
          </StyledForm>
        </StyledMain>
      ) : (
        <Navigate to="/dashboard" replace />
      )}
    </>
  );
};

export default LoginPage;
