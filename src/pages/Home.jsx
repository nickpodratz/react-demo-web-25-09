import Center from '../components/Center'
import HelloTitle from '../components/HelloTitle'
import WelcomeMessage from '../components/WelcomeMessage'
import Copyright from '../components/Copyright'
import ToastButton from '../components/ToastButton'

export default function Home() {
    return (
        <Center>
            <HelloTitle name="Syntax" />
            <WelcomeMessage />
            <Copyright />
            <ToastButton />
        </Center>
    )
}