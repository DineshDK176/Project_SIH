import './App.css'

function App() {

  let clk = () => {
    window.open("https://github.com/Nishanthnaa52/FunWeb_Project", "_blank");
  }
  return (
    <>
    <h1>Hello, Everyone</h1>
    <p> Want to contribute to this project? Click the button below to visit the GitHub repository.</p>
    <p>Join us and make a difference! 🚀</p>
    <button onClick={clk}>Contribute</button>
    </>      
  )
}

export default App
