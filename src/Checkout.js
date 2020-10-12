import userEvent from "@testing-library/user-event";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg" 
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Basket is empty! Please add items to checkout!</h2>
                    </div>
                ) : (

                    <div>
                        <h3>Hello, {!user? 'Guest': user.email}</h3>
                        <h2 className="checkout__title">Your shopping basket</h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
