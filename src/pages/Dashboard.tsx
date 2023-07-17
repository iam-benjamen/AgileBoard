import { useState } from "react";
import Header from "../components/common/Header";
import PlayGround from "../components/common/PlayGround";
import SideBar from "../components/common/SideBar";

const Dashboard = () => {
  const [hideSideBar, setHideBar] = useState<boolean>(false);

  return (
    <>
      <Header />
      <SideBar hideSideBar={hideSideBar} setHideBar={setHideBar} />
      <PlayGround hideSideBar={hideSideBar} />
    </>
  );
};

export default Dashboard;
