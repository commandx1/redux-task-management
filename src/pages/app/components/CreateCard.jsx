import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../../store/actions/card";
import Input from "../../../components/formelements/Input";
import Button from "../../../components/formelements/Button";

const CreateCard = () => {
  const dispatch = useDispatch();
  const [createMode, setCreateMode] = useState(false);
  const [card, setCard] = useState({
    title: "",
    category: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCard({ ...card, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addCard(card));
    setCard({ title: "", category: "" });
    setCreateMode(false);
  };

  return (
    <>
      {createMode ? (
        <div className="card">
          <form onSubmit={submitForm}>
            <Input
              name="title"
              label="Başlık"
              value={card.title}
              handleChange={handleChange}
              required
            />
            <Input
              name="category"
              label="Kategori"
              value={card.category}
              handleChange={handleChange}
              required
            />
            <div className="btn-group">
              <Button>Ekle</Button>
              <Button onClick={() => setCreateMode(false)} type="button">
                Vazgeç
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button onClick={() => setCreateMode(true)}>Yeni Kart Ekle</Button>
      )}
    </>
  );
};

export default CreateCard;
