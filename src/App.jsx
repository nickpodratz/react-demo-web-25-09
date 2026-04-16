import Center from './Center'
import HelloTitle from './HelloTitle'
import WelcomeMessage from './WelcomeMessage'
import hightlightStyles from './Highlights.module.css'

function App() {
  return (
    <Center>
      <HelloTitle name="Syntax" />
      <WelcomeMessage />
      <p className={hightlightStyles.important}>Copyright by Syntax</p>
    </Center>
  )
}

export default App
