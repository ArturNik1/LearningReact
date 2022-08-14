import Card from "./Card";
import styles from "./Error.module.css";
import Button from "./Button";

const Error = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Error;
