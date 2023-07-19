import "../../styles/components/boardaction.scss";
import useModal from "../../hooks/useModal";
import DeleteModal from "../modals/DeleteModal";
import AddNewColumns from "../modals/AddNewColumns";

const BoardAction = () => {
  const { Modal: EditModal, openModal: EditOpenModal } = useModal();
  const {
    Modal: DeleteModalElement,
    openModal: DeleteOpenModal,
    closeModal: DeleteCloseModal,
  } = useModal();

  return (
    <div className="boardactions">
      <EditModal
        triggerElement={
          <button className="edit-btn" onClick={EditOpenModal}>
            Edit Board
          </button>
        }
        modalContent={<AddNewColumns />}
      />

      <DeleteModalElement
        triggerElement={
          <button className="delet-btn" onClick={DeleteOpenModal}>
            Delete Board
          </button>
        }
        modalContent={<DeleteModal action={DeleteCloseModal} />}
      />
    </div>
  );
};

export default BoardAction;
