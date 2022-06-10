import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { actionType } from "../Reducer/Reducer";
import { useStateValue } from "../StateProvider/StateProvider";
import './CartItem.css'
let cartItems = [];

function CartItem({ itemId, name, imgSrc, price }) {
    const [qty, setQty] = useState(1); //in start
    const [{ cart, total }, dispatch] = useStateValue();
    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

    useEffect(() => {
        cartItems = cart;
        setItemPrice(parseInt(qty) * parseFloat(price));
    }, [qty]);

    const updateQuantity = (action, id) => {
        if (action === "add") {
            setQty(qty + 1);
        } else {
            // initial state value is one so you need to check if 1 then remove it
            if (qty === 1) {
                cartItems.pop(id); //remove that 0 value item
                dispatch({ //send data
                    type: actionType.SET_CART,
                    cart: cartItems,
                });
            } else {
                setQty(qty - 1);
                console.log(qty);
            }
        }
    };

    return (
        <div className="cartItem" id={itemId}>
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>
            <div className="itemSection">
                <h2 className="itemName">{name}</h2>
                <div className="itemQuantity">
                    <span>x {qty}</span>
                    <div className="quantity">
                        <RemoveRounded
                            className="itemRemove"
                            onClick={() => updateQuantity("remove", itemId)}
                        />
                        <AddRounded
                            className="itemAdd"
                            onClick={() => updateQuantity("add", itemId)}
                        />
                    </div>
                </div>
            </div>
            <p className="itemPrice">
                <span className="dolorSign">$</span>{" "}
                <span className="itemPriceValue">{itemPrice}</span>
            </p>
        </div>
    );
}

export default CartItem;