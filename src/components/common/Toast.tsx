import React, { useEffect, useState } from "react";
import "../../styles/common/toast.scss"

type ToastProps = {
  type: "success" | "error" | "info";
  message: string;
  duration: number;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ type, message, duration, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleToastClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div
      onClick={handleToastClose}
      className={`toast ${type} ${visible ? "visible" : ""}`}
    >
      {message}
    </div>
  );
};

export default Toast;
