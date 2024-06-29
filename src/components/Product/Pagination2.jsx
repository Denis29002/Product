import React, { useState } from "react";
import style from "./product.module.css";

function Pagination2({ skip, setSkip, count }) {
  const arr = [];
  let pages = Math.ceil(count / 10);

  for (let i = 1; i < pages; i++) {
    arr.push(i);
  }
  console.log(skip, "skip");

  return (
    <div className={style.container_pages_buttons}>
      <button disabled={skip === 10} onClick={() => setSkip(skip - 10)}>
        &#10094;
      </button>
      {skip / 10 < 5 ? (
        <div className={style.pages_buttons__first_half}>
          {arr.slice(0, 5).map((el) => (
            <button
              className={skip === el * 10 ? style.active_page : ""}
              onClick={() => setSkip(el * 10)}
            >
              {el}
            </button>
          ))}
          <span>...</span>

          <button type="number" onClick={() => setSkip((pages - 1) * 10)}>
            {arr.length}
          </button>
        </div>
      ) : skip > pages * 10 - 30 ? (
        <div className={style.pages_buttons__last}>
          <button onClick={() => setSkip(10)}>1</button>
          <span>...</span>
          {arr.slice(-3).map((el) => (
            <button
              onClick={() => setSkip(el * 10)}
              className={skip === el * 10 ? style.active_page : ""}
            >
              {el}
            </button>
          ))}
        </div>
      ) : (
        <div className={style.pages_buttons__middle}>
          <button onClick={() => setSkip(10)}>1</button>
          <span>...</span>
          <button onClick={() => setSkip(skip - 10)}>{(skip - 10) / 10}</button>
          {arr.slice(skip / 10 - 1, skip / 10).map((el) => (
            <button className={skip === el * 10 ? style.active_page : ""}>
              {el}
              {console.log(el)}
            </button>
          ))}

          <button onClick={() => setSkip(skip + 10)}>{(skip + 10) / 10}</button>
          <span>...</span>
          <button onClick={() => setSkip((pages - 1) * 10)}>{pages - 1}</button>
        </div>
      )}
      <button
        disabled={skip / 10 === arr.length}
        onClick={() => setSkip((pages - 1) * 10)}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Pagination2;
