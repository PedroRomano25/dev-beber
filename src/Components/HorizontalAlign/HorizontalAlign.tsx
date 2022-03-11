import { ChildrenProps } from "../../Types/allTypes";
import styles from "./HorizontalAlign.module.scss";

const HorizontalAlign: React.FC<ChildrenProps> = (props) => {
  return (
    <>
      <div className={styles.verticalContainer}>{props.children}</div>
    </>
  );
};

export default HorizontalAlign;
