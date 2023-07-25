import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { useState } from "react";
import BoardAction from "../others/BoardActions";
import logo from "../../assets/logo.svg";
import useModal from "../../hooks/useModal";
import "../../styles/components/header.scss";
import AddNewFormModal from "../modals/AddNewModal";

const Header = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { Modal, openModal } = useModal();

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="logo" />
        <p className="header-logo-text">AgileBoard</p>
        <p className="current-board-name">Platform Launch</p>
      </div>
      <div className="header-options">
        <Modal
          triggerElement={
            <button className="add-btn" onClick={openModal}>
              + Add New Task
            </button>
          }
          modalContent={<AddNewFormModal />}
        />
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
        {clicked && <BoardAction category="Board"/>}
      </div>
    </div>
  );
};

export default Header;
