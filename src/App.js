import './App.css';
import MyNavBar from './components/MyNavBar'
import MyFooter from './components/MyFooter'
import Welcome  from './components/Welcome'

function App() {
  return (
    <>
      {/* this is a react fragment, just a wrapper because every component
    MUST return a single JSX element */}
      <MyNavBar />
      <Welcome title="Strive Book Shop" subtitle="Welcome to Strive Book Shop" />
      <MyFooter />
    </>
  )
}

export default App