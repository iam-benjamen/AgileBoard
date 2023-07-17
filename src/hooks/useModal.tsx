import { ReactElement, useEffect, useRef, useState } from "react";
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
  }, [isModalOpen]);

  const Modal: React.FC<ModalProps> = ({ triggerElement, modalContent }) => {
    return (
      <>
        {React.cloneElement(triggerElement, { onclick: openModal })}
        {isModalOpen && (
          <div className="modal-overlay">
            <div ref={modalRef} className="modal">
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
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
