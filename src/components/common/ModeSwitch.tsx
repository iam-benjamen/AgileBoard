import "../../styles/components/sidebar.scss";
import iconlight from "../../assets/icon-light.svg";
import icondark from "../../assets/icon-dark.svg";

type SwitchProps = {
  hid: boolean;
  isToggled: boolean;
  onToggle: () => void;
};

const ModeSwitch: React.FC<SwitchProps> = ({ hid, isToggled, onToggle }) => {
  return (
    <div className={`switch-container ${hid ? "obscure" : ""}`}>
      <div className="icon-marker">
        <img src={iconlight} alt="icon-light" />
      </div>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <div className="icon-marker">
        <img src={icondark} alt="icon-dark" />
      </div>
    </div>
  );
};

export default ModeSwitch;
