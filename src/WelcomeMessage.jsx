import styles from './Highlights.module.css'

function WelcomeMessage() {
    return (
        <p className={`${styles.important} bg-amber-200`}>
            We are delighted to welcome you on our platform.
        </p>
    )
}

export default WelcomeMessage