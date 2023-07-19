import "../../styles/components/add-new.scss";
import { FaTimes } from "react-icons/fa";
import useSubTasks from "../../hooks/useSubTasks";

const AddNewFormModal = () => {
  const {
    subtasks,
    handleAddSubtask,
    handleRemoveSubtask,
    handleSubtaskChange,
  } = useSubTasks(["", ""]);

  return (
    <div className="form-modal">
      <p className="addnew-text">Add New Task</p>
      <form>
        <div className="form-container">
          <label htmlFor="task-name">Task Name</label>
          <input
            type="text"
            id="task-name"
            className="input_fields"
            placeholder="e.g, Implement User Authentication"
          />
          <label htmlFor="task-name">Description</label>
          <textarea
            id="task-description"
            className="input_fields"
            placeholder="e.g, Implement user authentication for the application, 
            covering registration, login, and password recovery."
          />
          <label htmlFor="task-name">Subtasks</label>
          <div className="subtask">
            {subtasks.map((subtask, index) => (
              <div className="subtasks-container" key={index}>
                <input
                  type="text"
                  id="subtask"
                  value={subtask}
                  className="input_fields"
                  placeholder="e.g, Implement JWT Auth"
                  onChange={(e) => handleSubtaskChange(index, e.target.value)}
                />
                <FaTimes
                  className="times"
                  onClick={() => handleRemoveSubtask(index)}
                />
              </div>
            ))}
            <p className="add-subtask" onClick={() => handleAddSubtask()}>
              + Add New Subtask
            </p>
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

          <p className="add-subtask" id="create-task">
            Create Task
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddNewFormModal;
