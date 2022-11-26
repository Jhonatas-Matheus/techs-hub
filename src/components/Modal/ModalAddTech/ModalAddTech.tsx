import React from "react";
import Modal from "../Modal";
import { StyledInput } from "../../Inputs/style";
import { StyledSelect } from "../../Select/style";
import { iUseFormData, useValidate } from "../../../hooks/useValidateForm";
import { iCreateTechRequest, useCreateTech } from "../../../hooks/useRequests";
import { StyledButtonModal } from "../style";
import { ModalContext } from "../../../context/ContextModal";
import { useContext } from "react";
import { iTechs } from "../../../context/ContextUser";
import { SubmitHandler } from "react-hook-form";
interface iModalAddTechProps {
  title: string;
  setTechs: React.Dispatch<React.SetStateAction<iTechs[] | undefined | null>>;
}
const ModalAddTech = ({ title, setTechs }: iModalAddTechProps) => {
  const {
    modalIsOpenAddTech,
    handleCloseModalAddTech,
    setModalIsOpenAddTech,
    setNewTechTitle,
  } = useContext(ModalContext);
  const handleCreateTech: SubmitHandler<iUseFormData> = (data) => {
    createTech(data, setTechs);
    reset();
    setNewTechTitle("");
    setModalIsOpenAddTech("false");
  };
  const { createTech, loading: loadingCreateTech } = useCreateTech();
  const { register, handleSubmit, reset } = useValidate("addTech");
  return (
    <Modal
      title={title}
      isOpen={modalIsOpenAddTech}
      closeModal={handleCloseModalAddTech}
    >
      <form onSubmit={handleSubmit(handleCreateTech)}>
        <StyledInput title="Nome:" register={register("title")}></StyledInput>
        <StyledSelect title="Selecionar status" register={register("status")}>
          <option value={"Iniciante"}>Iniciante</option>
          <option value={"Intermediário"}>Intermediário</option>
          <option value={"Avançado"}>Avançado</option>
        </StyledSelect>
        {loadingCreateTech && (
          <StyledButtonModal type="submit" disabled={true}>
            Loading...
          </StyledButtonModal>
        )}
        {!loadingCreateTech && (
          <StyledButtonModal type="submit" primary="true">
            Entrar
          </StyledButtonModal>
        )}
      </form>
    </Modal>
  );
};

export default ModalAddTech;
