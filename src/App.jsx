import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Routes from "./components/Routes";
import { getDmFromLocalStorage } from "./store/actions/darkMode";
import { getUserFromLocalStorage } from "./store/actions/user";

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    dispatch(getDmFromLocalStorage());
    dispatch(getUserFromLocalStorage());
  }, []);

  return (
    <div className={darkMode ? "dark App" : "App"}>
      <Routes />
    </div>
  );
}

export default App;
