import React, { useContext } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import BasketItem from "./BasketItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";
import axios from "axios";
import {UserContext} from "../../UserContext";




const pusher = {
  items: [],
  userid: "",
  lng:0,
  lat:0,
  totalPrice:0

};
// let pusher = new finalBasket();


export default function Basket() {
  const { username, setUsername} = useContext(UserContext);
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            back to shopping
          </Link>
        </div>
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map(
              (product) => (
                (<BasketItem key={product.id} {...product} />),
                alert(product.id.toLocaleString() +" Quantity "+ product.count.toLocaleString()),

                pusher.items.push(product.id.toLocaleString()),
                pusher.items.push(product.count.toLocaleString())


              )
            )}
          </div>

          <div className="basket_container">
            <div className="basket_itemBox">
              {state.basket.map((product) => (
                <BasketItem key={product.id} {...product} />
              ))}
            </div>{" "}
          </div>

          <div className="basket_priceBox">
            <OfferBadge />
            <div className="basket_price">
              <span>overall</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} shekels</span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span> the discount </span>
                <span>

                  { //here for adding to the list
                  pusher.totalPrice=state.totalPriceAfterOffer.toLocaleString()} shekels

                </span>
              </div>
            )}
            <Offer />
            <SendProducts />
            <div className="basket_send">
              <span> overall</span>
              <span>{state.totalPriceFainal.toLocaleString()} shekels</span>
            </div>
            <button
              className="basket_button_buy"
              onClick={() => {
                state.basket.map((product) => (
                  <BasketItem key={product.id} {...product} />
                ));

                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    function (position) {
                      var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                      };
                      alert(

                        "lat " +
                          pos.lat +
                          " lng" +
                          pos.lng +
                          "totla price :" +
                          state.totalPrice.toLocaleString()
                      );
                      pusher.lng=pos.lng;
                      pusher.lat=pos.lat;
                      //done this works
                      // you can use post to get location
                      console.log({
                        items: pusher.items,
                        lat: pusher.lat,
                        lng: pusher.lng,
                        id: pusher.id,
                        totalPrice: pusher.totalPrice
                      })
                      axios.post("http://localhost:5000/baskets/addDelivery", {
                        username: username,
                        items: pusher.items,
                        lat: pusher.lat,
                        lng: pusher.lng,
                        id: pusher.id,
                        totalPrice: pusher.totalPrice
                      })
                          .then(res => {
                            console.log("Item has been added!")
                          })
                          .catch(err => {
                            console.log(err)
                          })

                    },
                    function () {
                      // handle errors here if any
                    }
                  );
                } else {
                  // Browser doesn't support Geolocation
                }

                //here print the items
              }}
            >
              confirm{" "}
            </button>

            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              {state.basket.length} Delte all
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
        </div>
      )}
    </>
  );
}