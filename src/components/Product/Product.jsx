import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./product.module.css";
import Pagination2 from "./Pagination2";
import List from "./List";
import CatalogMenu from "./CatalogMenu";

function Product() {
  const [items, setItems] = useState([]);
  const [skip, setSkip] = useState(10);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(null);
  const [text, setText] = useState("");
  const [notFoundMessage, setNotFoundMessage] = useState(false);

  const getItems = async () => {
    try {
      const products = await axios(
        `https://dummyjson.com/products?limit=8&skip=${skip}`
      );
      setLoading(true);
      setItems(products.data.products);
      setCount(products.data.total);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const searchItem = () => {
    const filteredItems = items.filter((el) =>
      el.title.toLowerCase().includes(text.toLowerCase())
    );
    if (filteredItems.length < 1) {
      setNotFoundMessage(true);
    } else {
      setNotFoundMessage(false);
    }

    return filteredItems;
  };

  console.log(count);

  useEffect(() => {
    getItems();
  }, [skip]);

  console.log(items, "items");
  return (
    <div className={style.product_container}>
      <header>
        <CatalogMenu text={text} setText={setText} />
      </header>
      <body>
        {loading && "Loading products..."}
        <List searchItem={searchItem} notFoundMessage={notFoundMessage} />
      </body>
      <footer>
        <Pagination2
          setNotFoundMessage={true}
          skip={skip}
          setSkip={setSkip}
          count={count}
          items={items}
        />
      </footer>
    </div>
  );
}

export default Product;
