import { ReactElement, useEffect, useRef, useState } from "react";
import "../styles/components/modal.scss"
import React from "react";

interface ModalProps {
  triggerElement: ReactElement;
  modalContent: ReactElement;
}

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  const Modal: React.FC<ModalProps> = ({ triggerElement, modalContent }) => {
    return (
      <>
        {React.cloneElement(triggerElement, { onClick: openModal })}
        {isModalOpen && (
          <div className={`modal-overlay ${isModalOpen ? "open" : ""}`}>
            <div ref={modalRef} className="modal">
              {modalContent}
            </div>
          </div>
        )}
      </>
    );
  };

  return { Modal, openModal, closeModal };
};

export default useModal;
