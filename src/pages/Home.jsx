import Center from '../components/Center'
import HelloTitle from '../components/HelloTitle'
import WelcomeMessage from '../components/WelcomeMessage'
import Copyright from '../components/Copyright'

export default function Home() {
    return (
        <Center>
            <HelloTitle name="Syntax" />
            <WelcomeMessage />
            <Copyright />
        </Center>
    )
}