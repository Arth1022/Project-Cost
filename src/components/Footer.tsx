import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styles from './Footer.module.css';


const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div>
                <p><span>Costs</span> &copy; 2021</p>
                <div className={styles.social}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;