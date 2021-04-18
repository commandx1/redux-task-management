import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import DarkMode from "../../components/darkmode/DarkMode";
import Input from "../../components/formelements/Input";
import { getUserFromLocalStorage } from "../../store/actions/user";
import "./login.scss";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    surname: "",
  });

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUser({ ...user, [inputName]: inputValue });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(getUserFromLocalStorage());
    history.push("/");
  };

  return (
    <div className="login">
      <form onSubmit={formSubmitHandler}>
        <DarkMode />
        <h3>Hoşgeldiniz !</h3>
        <Input
          label="Adınız"
          value={user.name}
          name="name"
          handleChange={handleInputChange}
          required
        />
        <Input
          label="Soyadınız"
          name="surname"
          value={user.surname}
          handleChange={handleInputChange}
          required
        />
        <button>Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
