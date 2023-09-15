import DummyPage from "./components/DummyPage/index.js"

const App = () =>{

    const root = document.getElementById("root")
    root.appendChild(DummyPage())
}

export default App;