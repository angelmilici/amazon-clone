import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Coupons/infographic/1500x300._CB1198675309_.jpg" 
                    alt=""
                />
                {basket?.length === 0 ? (
                    // if basket empty, do the following
                    <div>
                        <h2>Your Basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item</p>
                    </div>
                ) : (

                    <div>
                        <h3>Hello, {!user? 'Guest': user.email}</h3>
                        <h2 className="checkout__title">Your shopping basket</h2>

                        {/* List out all the Checkout products */}
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
