import React from "react";
import "../../styles/components/delete-modal.scss";

type ModalProps = {
  action: () => void;
};
const board = "Platform Launch";

const DeleteModal: React.FC<ModalProps> = ({ action }) => {
  return (
    <div className="delete-modal">
      <p className="delete-title">Delete this board?</p>
      <p className="delete-warning">{`Are you sure you want to delete the ${board} board? This action will
       remove all columns and tasks and cannot be reversed`}</p>
      <div className="action-btns">
        <button className="delete-btn">Delete</button>
        <button onClick={action} className="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
