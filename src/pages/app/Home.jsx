import React, { useState } from "react";
import CreateCard from "./components/CreateCard";
import Card from "./components/Card.jsx";
import SidebarMenu from "./components/SidebarMenu";
import { useSelector } from "react-redux";
import "./home.scss";

const Home = () => {
  const { cards, isFiltered } = useSelector((state) => state);
  const [editableTodo, setEditableTodo] = useState({
    id: null,
    description: "",
  });
  const [editableCard, setEditableCard] = useState({
    id: null,
    title: "",
  });

  const resetEditableTodo = () =>
    setEditableTodo({ id: null, description: "" });

  const resetEditableCard = () => setEditableCard({ id: null, title: "" });

  let CARDS;
  if (isFiltered.isFilterMode) {
    CARDS =
      cards.length > 0 &&
      cards.map((card) =>
        card.categoryFiltered ? (
          <div key={card.id} className="col-24 col-sm-12 col-xl-8">
            <Card
              editableCard={editableCard}
              resetEditableCard={resetEditableCard}
              editCard={(id, title) => setEditableCard({ id, title })}
              handleCardTitleChange={(e) =>
                setEditableCard({ ...editableCard, title: e.target.value })
              }
              editableTodo={editableTodo}
              card={card}
              editTodo={(id, description) =>
                setEditableTodo({ id, description })
              }
              handleChange={(e) =>
                setEditableTodo({
                  ...editableTodo,
                  description: e.target.value,
                })
              }
              resetEditableTodo={resetEditableTodo}
            />
          </div>
        ) : null
      );
  } else {
    CARDS =
      cards.length > 0 &&
      cards.map((card) => (
        <div key={card.id} className="col-24 col-sm-12 col-xl-8">
          <Card
            editableCard={editableCard}
            resetEditableCard={resetEditableCard}
            editCard={(id, title) => setEditableCard({ id, title })}
            handleCardTitleChange={(e) =>
              setEditableCard({ ...editableCard, title: e.target.value })
            }
            editableTodo={editableTodo}
            card={card}
            editTodo={(id, description) => setEditableTodo({ id, description })}
            handleChange={(e) =>
              setEditableTodo({ ...editableTodo, description: e.target.value })
            }
            resetEditableTodo={resetEditableTodo}
          />
        </div>
      ));
  }

  return (
    <div className="home">
      <SidebarMenu />
      <div className="content">
        <div className="row">
          <div className="col-24 col-sm-12 col-xl-8">
            <CreateCard />
          </div>
          {CARDS}
        </div>
      </div>
    </div>
  );
};

export default Home;
