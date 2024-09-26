import React, { useContext, useState } from 'react'
import classes from "./payment.module.css";
import LayOut from '../../Components/LayOut/LayOut';
import {DataContext } from "../../Components/DataProvider/DataProvider"
import ProductCard from "../../Components/Product/ProductCard"
import { useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
const Payment = () => {
  const [{basket, user}] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item)=>{
      return item.amount + amount;
    },0);
  const total = basket.reduce((amount, item) => {
    return item?.price * item?.amount + amount;
  }, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null)
  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("")
  };
  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment_header}>
        {" "}
        Checkout ({totalItem}) items
      </div>
      <hr />
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{display: "flex", gap:"10px"}}>
                      <p>
                        Total Order | <CurrencyFormat amount={total} />
                      </p>
                    </span>
                  </div>
                  <button>Pay now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment
