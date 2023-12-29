import Container from "./components/containerCalculadora/Container.jsx";
import reactLogo from './assets/react.svg'
import viteLogo from "./assets/vite.svg"
import tailwindLogo from "./assets/tailwindLogo.svg"
import "./App.css"
function App() {


  return (
    <>
      <h1>Calculator</h1>

        <div className="imgContainer">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <h2>+</h2>
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <h2>+</h2>
            <img src={tailwindLogo} className="logo" alt="Tailwind logo" />
        </div>

        <Container />
    </>
  )
}

export default App
