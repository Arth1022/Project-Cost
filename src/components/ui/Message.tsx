import styles from './Message.module.css'
import {useState, useEffect} from "react";

const Message = (props: {type : any, text: string}) => {

    
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!props.text){
           setVisible(false);
           return; 
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [props.text]);


    return (
        <>
        {visible && (
            <div className={`${styles.message} ${styles[props.type]}`}>
                {props.text}
            </div>
        )}
        </>
    )
}

export default Message;