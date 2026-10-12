import styles from "./Container.module.css"

const Container = (props: { children?: React.ReactNode; customClass?: string }) => {
  return (
    <div className={`${styles.container} ${props.customClass ? styles[props.customClass] : ""}`}>
        {props.children}
    </div>
  );
};

export default Container;