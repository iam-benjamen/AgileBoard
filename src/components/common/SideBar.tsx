import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { HiViewBoards } from "react-icons/hi";
import { useState } from "react";
import "../../styles/components/sidebar.scss";
import useTheme from "../../hooks/useTheme";
import ModeSwitch from "./ModeSwitch";

const totalBoards = 3;

const SideBar = () => {
  const [active, setActive] = useState<number>(0);
  const [hideBar, setHideBar] = useState<boolean>(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`sidebar-container ${hideBar ? "obscure" : ""}`}>
      <div className={`top-content ${hideBar ? "obscure" : ""}`}>
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
        </div>
      </div>

      <div>
        <ModeSwitch
          hid={hideBar}
          isToggled={isDarkMode}
          onToggle={() => toggleTheme()}
        />
        <button
          className={`board-btn obscure-btn ${hideBar ? "live" : ""}`}
          onClick={() => setHideBar(!hideBar)}
        >
          {hideBar ? (
            <AiFillEye style={{ color: "white", fontSize: "1.5rem" }} />
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
      </div>
    </div>
  );
};

export default SideBar;
