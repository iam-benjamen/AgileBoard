import "../../styles/components/_header.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="logo" />
      </div>
      
    </div>
  );
};

export default Header;
