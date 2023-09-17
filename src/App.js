import DummyPage from "./components/DummyPage/index.js"
import HomePage from "./components/Home/index.js"

const App = () =>{

    const root = document.getElementById("root")
    console.log(HomePage());
    root.appendChild(HomePage())
}

export default App;