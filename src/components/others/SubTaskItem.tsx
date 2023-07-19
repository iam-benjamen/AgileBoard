import React, { useState } from "react";
import "../../styles/components/taskcardmodal.scss";

type SubTaskProps = {
  text: string;
};

const SubtaskItem: React.FC<SubTaskProps> = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  return (
    <div className="subtask-div">
      <input
        type="checkbox"
        name="subtask-checkbox"
        id="subtask-checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p className={`subtask-text ${isChecked ? "checked" : ""}`}>{text}</p>
    </div>
  );
};

export default SubtaskItem;
