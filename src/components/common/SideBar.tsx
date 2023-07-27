import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { HiViewBoards } from "react-icons/hi";
import React, { useState } from "react";
import "../../styles/components/sidebar.scss";
import useTheme from "../../hooks/useTheme";
import ModeSwitch from "./ModeSwitch";
import useModal from "../../hooks/useModal";
import AddNewBoardModal from "../modals/AddNewBoard";
import LogoutModal from "../modals/LogoutModal";

const totalBoards = 3;

type SideBarProps = {
  hideSideBar: boolean;
  setHideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar: React.FC<SideBarProps> = ({ hideSideBar, setHideBar }) => {
  const [active, setActive] = useState<number>(0);
  const { isDarkMode, toggleTheme } = useTheme();
  const { Modal } = useModal();

  return (
    <div className={`sidebar-container ${hideSideBar ? "obscure" : ""}`}>
      <div className={`top-content ${hideSideBar ? "obscure" : ""}`}>
        <p className="boards-all">{`ALL BOARDS (${totalBoards})`}</p>

        <div className="boards">
          {["Platform Launch", "Marketing Plan", "Roadmap"].map(
            (item, index) => (
              <button
                className={`board-btn ${active === index ? " active" : ""}`}
                key={index}
                onClick={() => {
                  setActive(index);
                }}
              >
                <HiViewBoards
                  style={{
                    fontSize: "1.2rem",
                    paddingRight: ".5rem",
                    color: "grey",
                  }}
                />
                {item}
              </button>
            )
          )}

          <Modal
            triggerElement={
              <button className="board-btn create">
                <HiViewBoards
                  style={{
                    fontSize: "1.2rem",
                    paddingRight: ".5rem",
                    color: "#D3D3D3",
                  }}
                />
                Create New Board
              </button>
            }
            modalContent={<AddNewBoardModal />}
          />
        </div>
      </div>

      <div>
        <ModeSwitch
          hid={hideSideBar}
          isToggled={isDarkMode}
          onToggle={() => toggleTheme()}
        />
        <button
          className={`board-btn obscure-btn ${hideSideBar ? "live" : ""}`}
          onClick={() => setHideBar(!hideSideBar)}
        >
          {hideSideBar ? (
            <AiFillEye style={{ color: "white", fontSize: "1.5rem"}} />
          ) : (
            <>
              <AiFillEyeInvisible
                style={{
                  fontSize: "1.5rem",
                  paddingRight: ".5rem",
                  color: "#D3D3D3",
                }}
              />
              Hide Sidebar
            </>
          )}
        </button>
        <LogoutModal hideSideBar={hideSideBar}/>
      </div>
    </div>
  );
};

export default SideBar;
