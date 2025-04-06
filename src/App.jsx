import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SOTD from './projects/SOTD';
import EcoJourney from './projects/EcoJourney';
import SignTrail from './projects/SignTrail.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/StationOfTheDead" element={<SOTD />} />
                    <Route path="/EcoJourney" element={<EcoJourney />} />
                    <Route path="/SignTrail" element={<SignTrail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
