import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

type LinkButtonProps = {
    to: string
    text?: string
}

const LinkButton = ({ to, text }: LinkButtonProps) => {
    return (
        <Link to={to} className={styles.linkButton}>
            {text}
        </Link>
    )
}

export default LinkButton