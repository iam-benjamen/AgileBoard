import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { useState } from "react";
import "../../styles/components/header.scss";
import logo from "../../assets/logo.svg";
import BoardAction from "../others/BoardActions";

const Header = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="logo" />
        <p className="header-logo-text">AgileBoard</p>
        <p className="current-board-name">Platform Launch</p>
      </div>
      <div className="header-options">
        <button className="add-btn">+ Add New Task</button>
        <IoEllipsisVerticalOutline
          style={{
            color: "grey",
            paddingLeft: "1rem",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setClicked(!clicked);
          }}
        />
        {clicked && <BoardAction />}
      </div>
    </div>
  );
};

export default Header;
