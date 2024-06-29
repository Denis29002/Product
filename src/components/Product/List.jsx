import React from "react";
import style from "./product.module.css";
import { HiOutlineStar } from "react-icons/hi";

function List({ searchItem, notFoundMessage }) {
  console.log(notFoundMessage);
  return (
    <div className={style.procduct_container_list}>
      {" "}
      {notFoundMessage && <h1>Item not found...</h1>}
      {searchItem()?.map((el) => (
        <div className={style.list_item} key={el.id}>
          {console.log(el, "афы")}
          <h1>{el?.title}</h1>
          <h2>Category: {el?.category}</h2>
          <p>About: {el?.description}</p>
          <p>Price: {el?.price} $</p>
          <span>
            <HiOutlineStar /> {el?.rating}
          </span>
        </div>
      ))}
    </div>
  );
}

export default List;
