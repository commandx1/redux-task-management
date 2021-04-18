import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/formelements/Button";
import Checkbox from "../../../components/formelements/Checkbox";
import { removeUser } from "../../../store/actions/user";
import DarkMode from "../../../components/darkmode/DarkMode";

const SidebarMenu = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const { user, cards } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [categories, setcategories] = useState(
    cards.map((card) => card.category)
  );

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  useEffect(() => {
    const cats = cards.map((card) => card.category);
    setcategories(cats.filter(onlyUnique));
  }, [cards]);

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(removeUser());
  };

  return (
    <>
      {openSideDrawer && <div className="backdrop"></div>}
      <div
        className="sidebar"
        style={{
          transform: openSideDrawer ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <Button onClick={() => setOpenSideDrawer((prev) => !prev)}>
          <i
            className="fas fa-chevron-left"
            style={{
              transform: openSideDrawer ? "rotate(0)" : "rotate(180deg)",
            }}
          ></i>
        </Button>
        <div className="user-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
            alt="user"
          />
          <span>{user.name + " " + user.surname}</span>
        </div>
        <DarkMode />
        <div className="logout" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>
          Çıkış Yap
        </div>
        <div className="categories">
          {cards.length > 0 &&
            categories.map((category) => (
              <Checkbox category={category} key={category} label={category} />
            ))}
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
