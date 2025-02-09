import { useState } from "react";
import { useSeminarActions } from "../../hooks/useSeminarActions";
import { ErrorText, MainContainer } from "../../styles/MainPage";
import { AddSeminar } from "./components/AddSeminar";
import { SeminarList } from "./components/SeminarList";
import { Modal } from "../../components/Modal";

function MainPage() {
  const {
    addSeminar,
    changeSeminar,
    deleteSeminar,
    error,
    isLoading,
    seminars,
  } = useSeminarActions();
  const [editedSeminar, setEditedSeminar] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState("edit");

  const handleAddSeminar = (newSeminar) => {
    addSeminar(newSeminar);
  };

  const handleDeleteSeminar = (id) => {
    deleteSeminar(id);
    setIsModalOpen(false);
  };

  const handleEditSeminar = (seminar) => {
    setEditedSeminar(seminar);
    setActionType("edit");
    setIsModalOpen(true);
  };

  const handleSaveEdit = (editedSeminar) => {
    changeSeminar(editedSeminar.id, editedSeminar);
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = (seminar) => {
    setEditedSeminar(seminar);
    setActionType("delete");
    setIsModalOpen(true);
  };

  return (
    <MainContainer>
      {isLoading && <p>Загрузка...</p>}
      {error && <ErrorText>Ошибка: {error.message}</ErrorText>}
      <AddSeminar onAddSeminar={handleAddSeminar} />
      <SeminarList
        seminars={seminars}
        onEdit={handleEditSeminar}
        onDelete={handleConfirmDelete}
      />

      <Modal
        seminar={editedSeminar}
        onSave={handleSaveEdit}
        onDelete={handleDeleteSeminar}
        onClose={handleModalClose}
        isOpen={isModalOpen}
        actionType={actionType}
      />
    </MainContainer>
  );
}

export default MainPage;
