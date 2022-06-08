import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material";
import { useEffect } from "react";
import "./App.css";
import BannerName from "./Components/BannerName/BannerName";
import Header from "./Components/Header/Header";
import MenuContainer from "./Components/MenuContainer/MenuContainer";


function App() {

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    //click function setMenuActive
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, [])

  return <div className="App">
    {/* Header */}
    <Header></Header>
    {/* Main Container */}
    <main>
      <div className="mainContainer">
        {/* Banner */}
        <div className="banner">
          <BannerName name={'Rifat'} discount={'20'} link={'#'} />
          <img src="http://pizza-blitz-frommern.de/wp-content/uploads/2019/03/Vespa.png" alt="" className="deliveryPic" />
        </div>
      </div>
      <div className="rightMenu"></div>
    </main>

    {/* Bottom Menu Sections */}
    <div className="bottomMenu">
      <ul id='menu'>
        <MenuContainer link={'#'} icon={<HomeRounded />} />
        <MenuContainer link={'#'} icon={<Chat />} />
        <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
        <MenuContainer link={'#'} icon={<Favorite />} />
        <MenuContainer link={'#'} icon={<SummarizeRounded />} />
        <MenuContainer link={'#'} icon={<Settings />} />

        <div className="indicator"></div>
      </ul>

    </div>

  </div>;
}

export default App;
