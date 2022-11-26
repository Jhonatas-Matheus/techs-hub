import React from "react";
import { Typography } from "../../styles/typography";
import { StyledListItem } from "./style";
import { BsTrash } from "react-icons/bs";
interface iListItem {
  children?: string;
  title: string;
  status?: string;
  id?: string;
  handleOpenModal: () => void;
  handleDeleteTech: () => void;
}
const ListItem = ({
  children,
  title,
  status,
  handleOpenModal,
  handleDeleteTech,
  ...res
}: iListItem) => {
  return (
    <StyledListItem {...res} onClick={handleOpenModal}>
      <Typography tag="h2" typography="title2" color="grey-zero">
        {title}
      </Typography>
      <div>
        <Typography tag="h2" typography="headline" color="grey-one">
          {status}
        </Typography>
      </div>
    </StyledListItem>
  );
};

export default ListItem;
