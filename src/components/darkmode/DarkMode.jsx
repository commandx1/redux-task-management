import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkModeHandler } from "../../store/actions/darkMode";
import "./darkmode.scss";

const DarkMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className="dm-toggle" onClick={() => dispatch(darkModeHandler())}>
      {darkMode ? <span className="D"></span> : <span className="L"></span>}
    </div>
  );
};

export default DarkMode;
