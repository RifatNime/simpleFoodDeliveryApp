import { AddRounded, RemoveRounded } from '@mui/icons-material';
import React from 'react';
import './CartItem.css'

function CartItem({ itemId, name, imgSrc, price, qty }) {

    cartItem
    return (
        <div className="cartItem" id={itemId}>
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>
            <div className="itemSection">
                <div className="itemName">
                    <h2 className="itemName">{name}</h2>
                    <div className="itemQuantity">
                        <span>x {qty}</span>
                        <div className="quantity">
                            RemoveRounded
                            className="itemRemove"
                            onClick={() => updateQty("remove", itemId)}
            />
                            <AddRounded
                                className="itemAdd"
                                onClick={() => updateQty("add", itemId)} />
                        </div>
                    </div>
                </div>
            </div>
            <p className="itemPrice">
                <span className="dolorSign">$ </span>
                <span className="itemPriceValue">{price} </span>
            </p>
        </div>
    )
}

export default CartItem