import { FaTimes } from "react-icons/fa";
import "../../styles/components/add-new.scss";
import useSubTasks from "../../hooks/useSubTasks";

const AddNewBoardModal = () => {
  const {
    subtasks,
    handleAddSubtask,
    handleRemoveSubtask,
    handleSubtaskChange,
  } = useSubTasks(["", ""]);


  return (
    <div className="form-modal">
      <p className="addnew-text">Add New Board</p>
      <form>
        <div className="form-container">
          <label htmlFor="task-name">Board Name</label>
          <input
            type="text"
            id="task-name"
            className="input_fields"
            placeholder="e.g, Web Design"
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
            Create New Board
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddNewBoardModal;
