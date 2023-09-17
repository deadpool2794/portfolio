import NavBar from "../NavBar/index.js"
import sheet from './index.css' assert{type: 'css'}
document.adoptedStyleSheets = [sheet];

const HomePage = () => {
    return NavBar()
}

export default HomePage;