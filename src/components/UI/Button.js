import styles from "./Button.module.css";

const Button = (props) => {

    return (
        <button className = {styles.button} onClick={props.onClick == null ? null : props.onClick} type = {props.type}>{props.children}</button>
    );

}

export default Button;