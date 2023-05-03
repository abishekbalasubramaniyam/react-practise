import './App.css'
import About from './About'
import Home from './Home'

function App() {
  const userDetails = {
    firstName : "Abi",
    lastName : "B",
    Age : 20,
    Gender : "M",
  }

  return (
    <>
      
      <About fname="abi" lname="b" /><hr />
      <Home userDetails = {userDetails} />
    </>
  )
}

export default App
