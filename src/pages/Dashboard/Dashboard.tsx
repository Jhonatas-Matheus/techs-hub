import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { StyledButton } from "../../components/Button/style";
import { UserContext } from "../../context/ContextUser";
import { Typography } from "../../styles/typography";
import { HiPlusSm } from "react-icons/hi";
import {
  StyledButtonAddTec,
  StyledContainer,
  StyledContainerTec,
  StyledContainerTecHeader,
  StyledHeader,
  StyledRow,
  StyledSection,
} from "./style";
import ListItem from "../../components/ListItem/ListItem";
import { useDeleteTech } from "../../hooks/useRequests";
import ModalAddTech from "../../components/Modal/ModalAddTech/ModalAddTech";
import { ModalContext } from "../../context/ContextModal";
import ModalEditTech from "../../components/Modal/ModalEditTech/ModalEditTech";

const Dashboard = () => {
  const navigate = useNavigate();
  const { userInfo, loading, setUserInfo, techs, setTechs } =
    useContext(UserContext);
  const { techId, handleOpenModal, handleOpenModalAddTech, setModalIsOpen } =
    useContext(ModalContext);
  const { deleteTech } = useDeleteTech();
  if (loading) {
    return null;
  }
  const handleDeleteTech = () => {
    if (techs) {
      deleteTech(techId, techs, setTechs);
      setModalIsOpen("false");
    }
  };
  const logout = () => {
    navigate("/");
    localStorage.removeItem("@token");
    setUserInfo(null);
  };
  return (
    <>
      {userInfo ? (
        <>
          <StyledContainer>
            <StyledHeader>
              <Typography tag="h1" typography="title1" color="primary">
                Techs Hub
              </Typography>
              <StyledButton onClick={logout}>Logout</StyledButton>
            </StyledHeader>
          </StyledContainer>
          <StyledRow />
          <StyledContainer>
            <StyledSection>
              <Typography tag="h2" typography="title1" color="grey-zero">
                Olá, {userInfo.name}
              </Typography>
              <Typography tag="h3" typography="headline" color="grey-one">
                {userInfo.course_module}
              </Typography>
            </StyledSection>
          </StyledContainer>
          <StyledRow />
          <StyledContainerTecHeader>
            <Typography tag="h2" typography="title2" color="grey-zero">
              Tecnologias
            </Typography>
            <StyledButtonAddTec onClick={handleOpenModalAddTech}>
              <HiPlusSm />
            </StyledButtonAddTec>
          </StyledContainerTecHeader>
          <StyledContainerTec>
            {techs?.map((tech) => (
              <ListItem
                handleOpenModal={() => handleOpenModal(tech.title, tech.id)}
                handleDeleteTech={handleDeleteTech}
                title={tech.title}
                status={tech.status}
                key={tech.id}
                id={tech.id}
              />
            ))}
          </StyledContainerTec>
          <ModalEditTech
            title="Editar Tecnologia"
            techs={techs}
            setTechs={setTechs}
            handleDeleteTech={handleDeleteTech}
          />
          <ModalAddTech title="Cadastrar Tecnologia" setTechs={setTechs} />
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default Dashboard;
