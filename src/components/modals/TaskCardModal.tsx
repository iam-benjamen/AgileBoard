import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { useState } from "react";
import "../../styles/components/add-new.scss";
import "../../styles/components/taskcardmodal.scss";
import BoardAction from "../others/BoardActions";
import SubtaskItem from "../others/SubTaskItem";

const TaskCardModal = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="form-modal">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <p className="addnew-text">Build UI for onboarding flow</p>

        <div style={{ position: "relative" }}>
          <IoEllipsisVerticalOutline
            style={{
              color: "grey",
              paddingLeft: "1rem",
              paddingTop: ".3rem",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => {
              setClicked(!clicked);
            }}
          />
          {clicked && <BoardAction category="Task"/>}
        </div>
      </div>

      <div className="form-container">
        <div className="subtasks-section">
          <p className="subtasks-title">Subtasks (2 of 3)</p>

          {["Sign up page", "Sign in Page", "Welcome Page"].map(
            (item, index) => (
              <SubtaskItem text={item} key={index} />
            )
          )}
        </div>

        <label htmlFor="task-name">Current Status</label>
        <select name="" id="status" className="input_fields">
          <option className="options" value="todo">
            Todo
          </option>
          <option className="options" value="">
            Doing
          </option>
          <option className="options" value="">
            Done
          </option>
        </select>
      </div>
    </div>
  );
};

export default TaskCardModal;
