import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import { AiOutlineShopping } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { UserContext } from "../../UserContext";

function Header() {
  const { username, setUsername } = useContext(UserContext);
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  // Get location for hide & show SearchBar Component
  const location = useLocation();
  const { pathname } = location;

  // run only if state changes and Not Mount
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      setTimeout(() => {
        dispath({ type: "REMOVE_CLASS" });
      }, 1000);
    } else {
      didMount.current = true;
    }
  }, [dispath, state.favorites]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };



  const logoutButtonStyle = {
    backgroundColor: "#4CAF50", 
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "20px",
  };


  return (
    <header className="header">
      <nav className="nav">
        <Link to={"/"} className="logo">
          {username ? `Welcome to hourly` : ""}
        </Link>
        {username ? (
          <>
            <div className="search_header">
              {pathname === "/" && <SearchBar />}
            </div>
            <div className="icon_Sopping_box">
              <Link to={"/basket"} className="shoppe_icon_box">
                <AiOutlineShopping className="shop_icon" />
                {state.basket.length > 0 && (
                  <span className="badge_shope">{state.basket.length}</span>
                )}
              </Link>
              <Link
                to={"/favorite"}
                className={`mark_icon_box ${state.isFavorite ? "tada" : ""}`}
              >
                <BsFillBookmarkHeartFill className="mark_icon" />
                {state.favorites.length > 0 && (
                  <span className="badge_mark">{state.favorites.length}</span>
                )}
              </Link>
            </div>
            <button style={logoutButtonStyle} className="logout_button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login_button">
            Login
          </Link>
        )}
      </nav>
    </header>
    );
}

export default Header;
