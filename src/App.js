import './App.css';
import Content from './routes/routes.js';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Content></Content>
        </Router>
    );
}

export default App;
