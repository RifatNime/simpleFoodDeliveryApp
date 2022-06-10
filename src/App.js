import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import BannerName from "./Components/BannerName/BannerName";
import Header from "./Components/Header/Header";
import MenuCard from "./Components/MenuCard/MenuCard";
import MenuContainer from "./Components/MenuContainer/MenuContainer";
import SubMenuContainer from "./Components/SubMenuContainer/SubMenuContainer";
import { MenuItems, Items } from "./Components/ItemsData/ItemsData";
import ItemCard from "./Components/ItemCard/ItemCard";
import DebitCard from "./Components/DebitCard/DebitCard";
import CartItem from "./Components/CartItem/CartItem";


function App() {
  //state for MAIN DISH
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "burger01")
  );

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    //click function setMenuActive
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
    //menuCard Active toggle onclick
    const menuCards = document.querySelector('.rowContainer').querySelectorAll('.rowMenuCard');
    //click function setMenuCardActive
    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach(n => n.addEventListener('click', setMenuCardActive));
  }, [isMainData]);

  // data filter by click  item id er modde diye pathabo jeta filter hobe
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };
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
        {/* DishItems */}
        <div className="dishContainer">
          <div className="menuCard">
            <SubMenuContainer name={'Menu Category'}></SubMenuContainer>
          </div>
          <div className="rowContainer">
            {
              MenuItems && MenuItems.map((data) => (
                //on click filter function called here
                <div key={data.id} onClick={() => setData(data.itemId)}>
                  <MenuCard
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive={data.id === "1" ? true : false}
                  />
                </div>
              ))}
          </div>
          <div className="dishItemContainer">
            {isMainData &&
              isMainData.map((data) => (
                <ItemCard
                  key={data.id}
                  itemId={data.id} //to show id in inspect and data
                  imgSrc={data.imgSrc}
                  name={data.name}
                  ratings={data.ratings}
                  price={data.price}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="rightMenu">
        <div className="debitCardContainer">
          <div className="debitCard">
            <DebitCard />
          </div>
        </div>
        <div className="cartCheckOutContainer">
          <div className="cartContainer">
            <SubMenuContainer name={'Carts Items'}/>
            <div className="cartItems">
            <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}
            </div>
          </div>
        </div>
      </div>
    </main>

    {/* Bottom Menu Sections */}
    <div className="bottomMenu">
      <ul id='menu'>
        <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
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
