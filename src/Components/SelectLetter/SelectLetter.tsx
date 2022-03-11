import React from "react";
import { MenuSelectLetter } from "../../Types/allTypes";
import styles from "./SelectLetter.module.scss";

const SelectLetter: React.FC<MenuSelectLetter> = (props) => {
  return (
    <>
      <div className={styles.container}>
        {props.data.map((i,index) => {
          return (
            <button
            key={index}
              onClick={(x) => {          
                props.onClick( i );
              }}
            >
              {i}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SelectLetter;
