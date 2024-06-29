import React from "react";
import style from "./product.module.css";

function CatalogMenu({ text, setText }) {
  return (
    <div className={style.product_container_menu}>
      <h1>Product Catalog</h1>
      <input
        placeholder="Searh item..."
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
      />
    </div>
  );
}

export default CatalogMenu;
