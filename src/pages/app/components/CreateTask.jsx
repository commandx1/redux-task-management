import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/formelements/Button";
import Input from "../../../components/formelements/Input";
import { addTodo } from "../../../store/actions/card";

const CreateTask = ({ card }) => {
  const [createMode, setCreateMode] = useState(false);
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ card, task: newTask }));
    setCreateMode(false);
    setNewTask("");
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setCreateMode(false);
      setNewTask("");
    }
  });

  return createMode ? (
    <form onSubmit={formSubmit}>
      <Input value={newTask} handleChange={(e) => setNewTask(e.target.value)} />
    </form>
  ) : (
    <Button onClick={() => setCreateMode(true)}>Görev Ekle</Button>
  );
};

export default CreateTask;
