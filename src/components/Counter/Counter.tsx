import React, { useState, FC } from "react";
import styles from "./Counter.css";

//TODO: .gitignore, авто генерейт index.html, с css modules разобраться, tsconfig, webpack resolve alias, разобраться с package.json

export const Counter: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{count}</h1>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
