import React, { useState } from "react";
import "../../styles/components/delete-modal.scss";
import "../../styles/components/sidebar.scss";
import useModal from "../../hooks/useModal";
import { HiViewBoards } from "react-icons/hi";
import { auth } from "../../main";
import { useNavigate } from "react-router-dom";
import Toast from "../common/Toast";

type logoutProps = {
  hideSideBar: boolean;
};

const LogoutModal: React.FC<logoutProps> = ({ hideSideBar }) => {
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const { Modal, closeModal } = useModal();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error: unknown) {
      let errorMessage = "unknown error";
      if (typeof error === "string") {
        errorMessage = errorMessage.toUpperCase();
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      setShowToast(true);
      setToastType("error");
      setToastMessage(errorMessage);
    }
  };

  return (
    <>
      <Modal
        triggerElement={
          <button
            className={`board-btn logout ${hideSideBar ? "obscure" : ""} `}
          >
            <HiViewBoards
              style={{
                fontSize: "1.2rem",
                paddingRight: ".5rem",
                color: "#D3D3D3",
              }}
            />
            Log out
          </button>
        }
        modalContent={
          <div className="delete-modal">
            <p className="delete-title">Log out?</p>
            <p className="delete-warning">Are you sure you want to log out?</p>
            <div className="action-btns">
              <button onClick={() => void logout()} className="delete-btn">
                Logout
              </button>
              <button onClick={closeModal} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        }
      />
      {showToast && (
        <Toast
          onClose={() => setShowToast(false)}
          duration={2000}
          message={toastMessage}
          type={toastType}
        />
      )}
    </>
  );
};

export default LogoutModal;
