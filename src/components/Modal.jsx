import { useEffect, useState } from "react";
import { TiTickOutline, TiCancel, TiTrash } from "react-icons/ti";
import {
  ModalContainer,
  ModalContent,
  ModalInput,
  Button,
} from "../styles/Modal";

export const Modal = ({
  actionType,
  isOpen,
  onSave,
  onClose,
  onDelete,
  seminar,
}) => {
  const [editedSeminar, setEditedSeminar] = useState({ ...seminar });

  useEffect(() => {
    setEditedSeminar(seminar);
  }, [seminar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedSeminar((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedSeminar);
    onClose();
  };

  const handleDelete = () => {
    onDelete(seminar.id);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        {actionType === "edit" && (
          <>
            <h2>Редактировать Семинар</h2>
            <ModalInput
              name="title"
              value={editedSeminar.title}
              onChange={handleChange}
              placeholder="Название семинара"
            />
            <ModalInput
              name="description"
              value={editedSeminar.description}
              onChange={handleChange}
              placeholder="Описание"
            />
            <ModalInput
              name="time"
              value={editedSeminar.time}
              onChange={handleChange}
              placeholder="Время"
            />
            <ModalInput
              name="date"
              value={editedSeminar.date}
              onChange={handleChange}
              placeholder="Дата"
            />
            <ModalInput
              name="photo"
              value={editedSeminar.photo}
              onChange={handleChange}
              placeholder="Ссылка на фото"
            />
            <Button onClick={handleSave}>
              <TiTickOutline /> Сохранить
            </Button>
            <Button onClick={onClose}>
              <TiCancel /> Отмена
            </Button>
          </>
        )}
        {actionType === "delete" && (
          <>
            <h2>Вы действительно хотите удалить мероприятие?</h2>

            <Button onClick={handleDelete}>
              <TiTrash /> Удалить
            </Button>
            <Button onClick={onClose}>
              <TiCancel /> Отмена
            </Button>
          </>
        )}
      </ModalContent>
    </ModalContainer>
  );
};
