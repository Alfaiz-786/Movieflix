import styles from "@/app/styles/common.module.css";
import ProductCard from "../components/ProductCard";

const Product = async () => {
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&category_id=aps";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c8911b9a32mshb0e0c45cb2531cfp1e0026jsne17974acfddc",
      "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const products = data.data.products;
  console.log(products);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Product</h1>
          <div className={styles.card_section}>
            {products.map((curElem) => {
              return <ProductCard key={curElem.asin} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
