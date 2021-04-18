import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/formelements/Button";
import Checkbox from "../../../components/formelements/Checkbox";
import CreateTask from "./CreateTask.jsx";
import {
  deleteCard,
  deleteTodo,
  updateCard,
  updateTodo,
} from "../../../store/actions/card";
import Input from "../../../components/formelements/Input";

const Card = ({
  card,
  editCard,
  editableCard,
  handleCardTitleChange,
  resetEditableCard,
  editTodo,
  editableTodo,
  handleChange,
  resetEditableTodo,
}) => {
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo(editableTodo));
    resetEditableTodo();
  };

  const submitCardChange = (e) => {
    e.preventDefault();
    dispatch(updateCard(editableCard));
    resetEditableCard();
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      resetEditableTodo();
      resetEditableCard();
    }
  });

  return (
    <div className="card">
      {editableCard.id === card.id ? (
        <form className="form" onSubmit={submitCardChange}>
          <Input
            value={editableCard.title}
            handleChange={handleCardTitleChange}
          />
          <Button type="submit">
            <i className="fas fa-check"></i>
          </Button>
        </form>
      ) : (
        <h4>{card.title}</h4>
      )}

      {card.tasks.length > 0 &&
        card.tasks.map((task) => (
          <div key={task.id} className="task">
            {editableTodo.id === task.id ? (
              <form className="form" onSubmit={formSubmit}>
                <Input
                  value={editableTodo.description}
                  handleChange={handleChange}
                />
                <Button type="submit">
                  <i className="fas fa-check"></i>
                </Button>
              </form>
            ) : (
              <Checkbox card={{ task, card }} label={task.description} />
            )}
            <div style={{ flex: 1 }}></div>
            {editableTodo.id !== task.id && (
              <div className="buttons">
                <Button onClick={() => editTodo(task.id, task.description)}>
                  <i className="fas fa-edit"></i>
                </Button>
                <Button
                  onClick={() =>
                    window.confirm("Görevi silmek istediğinize emin misiniz?")
                      ? dispatch(deleteTodo(task.id))
                      : resetEditableCard()
                  }
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </div>
            )}
          </div>
        ))}
      <div style={{ flex: 1 }}></div>
      <CreateTask card={card} />
      <div className="card-header">
        <div
          className="edit-card"
          onClick={() => editCard(card.id, card.title)}
        >
          Başlığı Değiştir
        </div>
        <div
          onClick={() => {
            window.confirm(
              card.title.toLocaleUpperCase("tr-TR") +
                " başlıklı kartı silmek istediğinize emin misiniz?"
            )
              ? dispatch(deleteCard(card.id))
              : resetEditableCard();
          }}
        >
          Kartı sil
        </div>
      </div>
    </div>
  );
};

export default Card;
