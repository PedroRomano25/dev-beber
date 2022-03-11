import { ChildrenProps } from "../../Types/allTypes";
import styles from "./GridCardContainer.module.scss";


const GridCardContainer: React.FC<ChildrenProps> = (props) => {
  return (
    <>
      <div className={styles.containerGridCard}>{props.children}</div>
    </>
  );
};

export default GridCardContainer;
