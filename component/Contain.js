import styles from "../styles/Contain.module.css";

const Contain = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};

export default Contain;
