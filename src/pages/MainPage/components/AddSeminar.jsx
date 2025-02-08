import { useForm } from "react-hook-form";
import { TiTick } from "react-icons/ti";
import { AddSeminarContainer, Button, Input } from "../../../styles/AddSeminar";

export const AddSeminar = ({ onAddSeminar }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    onAddSeminar({ ...data, id: new Date().getTime().toString() });
    reset();
  };

  return (
    <AddSeminarContainer>
      <h2>Добавить мероприятие</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("title", { required: true })}
          placeholder="Название"
        />
        <Input
          {...register("description", { required: true })}
          placeholder="Описание"
        />
        <Input {...register("date", { required: true })} placeholder="Дата" />
        <Input {...register("time", { required: true })} placeholder="Время" />
        <Input
          {...register("photo", { required: true })}
          placeholder="Фото (URL)"
        />
        <Button type="submit">
          <TiTick />
        </Button>
      </form>
    </AddSeminarContainer>
  );
};
