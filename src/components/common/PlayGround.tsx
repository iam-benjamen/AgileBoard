import "../../styles/components/playground.scss";
import TaskCards from "../others/TaskCards";
import { BiAddToQueue } from "react-icons/bi";
import useModal from "../../hooks/useModal";
import AddNewColumns from "../modals/AddNewColumns";

type PlayProps = {
  hideSideBar: boolean;
};

const PlayGround: React.FC<PlayProps> = ({ hideSideBar }) => {
  const { Modal } = useModal();

  return (
    <div className="playground-container">
      <div
        className={`playground-content ${
          hideSideBar === true ? "hidebar" : ""
        }`}
      >
        <div className="playground column">
          <div className="column-label">
            <div
              className="color-circle"
              style={{ background: "#EAB308" }}
            ></div>
            <p className="column-title">Todo(4)</p>
          </div>
          <div className="tasks">
            <TaskCards />
            <TaskCards />
            <TaskCards />
            <TaskCards />
          </div>
        </div>

        <div className="playground column">
          <div className="column-label">
            <div
              className="color-circle"
              style={{ background: "#EC4899" }}
            ></div>
            <p className="column-title">Doing(6)</p>
          </div>
          <div className="tasks">
            <TaskCards />
            <TaskCards />
            <TaskCards />
            <TaskCards />
            <TaskCards />
            <TaskCards />
          </div>
        </div>

        <div className="playground column">
          <div className="column-label">
            <div className="color-circle" style={{ background: "green" }}></div>
            <p className="column-title">Done(5)</p>
          </div>
          <div className="tasks">
            <TaskCards />
            <TaskCards />
            <TaskCards />
            <TaskCards />
            <TaskCards />
          </div>
        </div>

        <Modal
          triggerElement={
            <div className="add-column">
              <BiAddToQueue style={{ fontSize: "1.5rem" }} />
              <p>New Column</p>
            </div>
          }
          modalContent={<AddNewColumns />}
        />
      </div>
    </div>
  );
};

export default PlayGround;
