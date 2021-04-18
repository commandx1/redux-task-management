import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardsByCategory, toggleTodo } from "../../store/actions/card";
import "./checkbox.scss";

const Checkbox = ({ label, card, category }) => {
  const [filters, setfilters] = useState();
  const checkboxRef = useRef(null);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  const toggleChecked = () => {
    checkboxRef.current.checked = !checkboxRef.current.checked;
  };

  useEffect(() => {
    if (card) {
      checkboxRef.current.checked = card.task.isCompleted ? true : false;
    }

    const test = cards.filter((card) => card.categoryFiltered);
    test.length > 0
      ? dispatch({ type: "filtered" })
      : dispatch({ type: "unFiltered" });
  }, [cards]);

  return card ? (
    <div /* TODO CHECKBOXLARI İÇİN */
      onClick={(e) => {
        e.preventDefault();
        dispatch(toggleTodo(card));
      }}
      className="checkbox"
    >
      <input ref={checkboxRef} type="checkbox" id={label} />
      <span onClick={toggleChecked}></span>
      <label
        onClick={toggleChecked}
        style={
          card.task.isCompleted ? { textDecoration: "line-through" } : null
        }
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  ) : category /* CATEGORY CHECKBOXLARI İÇİN */ ? (
    <div
      className="checkbox"
      onClick={(e) => {
        e.preventDefault();
        toggleChecked();
        dispatch(getCardsByCategory(category));
      }}
    >
      <input ref={checkboxRef} type="checkbox" id={label} />
      <span></span>
      <label htmlFor={label} style={{ textTransform: "capitalize" }}>
        {label}
      </label>
    </div>
  ) : (
    /* NORMAL CHECKBOXLAR İÇİN */
    <div className="checkbox">
      <input ref={checkboxRef} type="checkbox" id={label} />
      <span onClick={toggleChecked}></span>
      <label onClick={toggleChecked} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
