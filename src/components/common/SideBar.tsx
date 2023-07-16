import { useState } from "react";
import "../../styles/components/sidebar.scss";
import { HiViewBoards } from "react-icons/hi";
import { AiFillEyeInvisible } from "react-icons/ai";

const totalBoards = 3;

const SideBar = () => {
  const [active, setActive] = useState<number>(0);
  const [hideBar, setHideBar] = useState<boolean>(false);

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
        <button
          className={`board-btn obscure-btn ${hideBar ? "live" : ""}`}
          onClick={() => setHideBar(!hideBar)}
        >
          {hideBar ? (
            <AiFillEyeInvisible style={{ color: "white", fontSize:"1.5rem" }} />
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
