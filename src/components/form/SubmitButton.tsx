import styles from './SubmitButton.module.css'

type SubmitButtonProps = {
    text: string
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
    return (
        <div>
            <button type="submit" className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton
