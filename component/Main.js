import styles from "../styles/Main.module.css";

const Main = (props) => {
  return (
    <span className={styles.content}>
      {props.children}
    </span>
  );
};

export default Main;
