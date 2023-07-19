import "../../styles/components/taskcard.scss";
import useModal from "../../hooks/useModal";
import TaskCardModal from "../modals/TaskCardModal";

const TaskCards = () => {
  const { Modal } = useModal();

  return (
    <Modal
      triggerElement={
        <div className="taskcard-container">
          <p className="taskcard-title">Build UI for onboarding flow</p>
          <p className="taskcard-status">2 of 3 completed tasks</p>
        </div>
      }
      modalContent={<TaskCardModal/>}
    />
  );
  
};

export default TaskCards;
