import React from 'react';
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './product.module.css';
import { Link } from "react-router-dom";

const ProductCard = ({ product, flex, renderDesc }) => {
    const { image, title, id, rating, price, description } = product;
    const rate = rating?.rate || 0; // Use optional chaining
    const count = rating?.count || 0; 

    return (
        <div className={`${classes.card__container} ${flex?classes.product__flexed: " "}`}>
            <Link to={`/products/${id}`}>
                <img src={image} alt="" />
            </Link>
            <div>
                <h3>{title}</h3>
                {
                    renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>
                }
                <div className={classes.rating}>
                {
                    /* rating */
                    <Rating value={rate} precision={0.1} />

                    /*ratingcounter */
                }
                <small>{count}</small>
                </div>
                <div>
                {/* description */}
                <CurrencyFormat amount={price} />
                </div>
                <button className={classes.button}>Add to Cart</button>
            </div>
        </div>
    );
    }

export default ProductCard;
