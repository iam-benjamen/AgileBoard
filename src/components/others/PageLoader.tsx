import logo from "../../assets/logo.svg";
import "../../styles/common/pageloader.scss"

const PageLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader-logo">
        <img src={logo} alt="logo" />
        AgileBoard
      </div>
    </div>
  );
};

export default PageLoader;
