import { useState } from "react";
import useSubTasks from "../../hooks/useSubTasks";
import "../../styles/components/add-new.scss";
import { FaTimes } from "react-icons/fa";

const AddNewColumns = () => {
  const [boardname, setBoardName] = useState("Platform Launch");
  const {
    subtasks,
    handleAddSubtask,
    handleRemoveSubtask,
    handleSubtaskChange,
  } = useSubTasks(["Todo","Doing","Done"]);

  return (
    <div className="form-modal">
      <p className="addnew-text">Edit Board</p>
      <form>
        <div className="form-container">
          <label htmlFor="task-name">Board Name</label>
          <input
            type="text"
            required
            id="task-name"
            className="input_fields"
            placeholder="e.g, Web Design"
            value={boardname}
            onChange={(e) => setBoardName(e.target.value)}
          />

          <label htmlFor="task-name">Board Columns</label>
          <div className="subtask">
            {subtasks.map((subtask, index) => (
              <div className="subtasks-container" key={index}>
                <input
                  type="text"
                  id="subtask"
                  value={subtask}
                  className="input_fields"
                  placeholder="Todo"
                  onChange={(e) => handleSubtaskChange(index, e.target.value)}
                />
                <FaTimes
                  className="times"
                  onClick={() => handleRemoveSubtask(index)}
                />
              </div>
            ))}
            <p className="add-subtask" onClick={() => handleAddSubtask()}>
              + Add New Column
            </p>
          </div>

          <p className="add-subtask" id="create-task">
            Save Changes
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddNewColumns;
