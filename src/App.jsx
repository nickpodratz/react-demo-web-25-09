import { Toaster } from 'react-hot-toast'
import Router from './Router'
import Layout from './Layout'

function App() {
  return (
    <>
      <Toaster />
      <Layout>
        <Router />
      </Layout>
    </>
  )
}

export default App
