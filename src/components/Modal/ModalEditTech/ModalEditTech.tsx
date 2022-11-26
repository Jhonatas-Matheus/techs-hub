import React from "react";
import { useContext } from "react";
import { ModalContext } from "../../../context/ContextModal";
import Modal from "../Modal";
import { StyledInput } from "../../Inputs/style";
import { StyledSelect } from "../../Select/style";
import { iUseFormData, useValidate } from "../../../hooks/useValidateForm";
import { useUpdateTech } from "../../../hooks/useRequests";
import { StyledButtonModal } from "../style";
import { iTechs } from "../../../context/ContextUser";
import { SubmitHandler } from "react-hook-form";
interface iModalEditTechProps {
  title: string;
  techs: iTechs[] | null | undefined;
  setTechs: React.Dispatch<React.SetStateAction<iTechs[] | undefined | null>>;
  handleDeleteTech: () => void;
}
const ModalEditTech = ({
  title,
  techs,
  setTechs,
  handleDeleteTech,
}: iModalEditTechProps) => {
  const { modalIsOpen, titleTech, techId, handleCloseModal, setModalIsOpen } =
    useContext(ModalContext);
  const { editTech, loading: loadingEditTech } = useUpdateTech();
  const handleEditTech: SubmitHandler<iUseFormData> = (data) => {
    if (techs) {
      editTech(data, techId, techs, setTechs);
      setModalIsOpen("false");
    }
  };
  const {
    register: registerEditTech,
    handleSubmit: handleSubmitregisterEditTech,
  } = useValidate("editTech");
  return (
    <Modal title={title} isOpen={modalIsOpen} closeModal={handleCloseModal}>
      <form onSubmit={handleSubmitregisterEditTech(handleEditTech)}>
        <StyledInput
          title="Nome:"
          value={titleTech}
          readOnly={true}
        ></StyledInput>
        <StyledSelect
          title="Selecionar status"
          register={registerEditTech("status")}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </StyledSelect>
        <div>
          {loadingEditTech && (
            <StyledButtonModal type="submit" disabled={true}>
              Loading...
            </StyledButtonModal>
          )}
          {!loadingEditTech && (
            <StyledButtonModal type="submit" primary="true">
              Salvar Alterações
            </StyledButtonModal>
          )}
          <StyledButtonModal
            type="button"
            secundary="true"
            onClick={handleDeleteTech}
          >
            Excluir
          </StyledButtonModal>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEditTech;
