import { TiPencil, TiTrash } from "react-icons/ti";
import {
  GridContainer,
  DescriptionText,
  Icons,
  IconButton,
  SeminarItem,
  SeminarText,
  TimeFrame,
} from "../../../styles/SeminarList";

export const SeminarList = ({ onDelete, onEdit, seminars }) => {
  return (
    <GridContainer>
      {seminars.map((seminar) => (
        <SeminarItem key={seminar.id}>
          <SeminarText>{seminar.title}</SeminarText>
          {seminar.photo && (
            <img src={seminar.photo} alt="seminar" width="250" height="250" />
          )}
          <DescriptionText>{seminar.description}</DescriptionText>
          <TimeFrame>
            Дата:{seminar.date} Время:{seminar.time}
          </TimeFrame>

          <Icons>
            <IconButton onClick={() => onEdit(seminar)}>
              <TiPencil />
            </IconButton>
            <IconButton onClick={() => onDelete(seminar)}>
              <TiTrash />
            </IconButton>
          </Icons>
        </SeminarItem>
      ))}
    </GridContainer>
  );
};
