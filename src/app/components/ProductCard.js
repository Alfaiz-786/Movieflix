import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = (curElem) => {
  const { asin, product_title, product_price, product_photo, product_url } =
    curElem;
  return (
    <div className={styles.productCard}>
      <img
        src={product_photo}
        alt={product_title}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product_title}</h2>
        <p className={styles.productPrice}>{product_price}</p>
        <a
          href={product_url}
          className={styles.productLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Amazon
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
