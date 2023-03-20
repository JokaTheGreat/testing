import React, { useState, FC } from "react";
import * as styles from "./Counter.css";

//TODO: tsconfig, разобраться с package.json

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
