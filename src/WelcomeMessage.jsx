import styles from './Highlights.module.css'
import heroImage from './assets/hero.png'

function WelcomeMessage() {
    return (
        <p className={`${styles.important} bg-amber-200`}>
            <img src={heroImage} height="50px" width="50px" /> We are delighted to welcome you on our platform.
        </p>
    )
}

export default WelcomeMessage