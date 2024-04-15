import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Playground from './pages/Playground'



const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/playground' element={<Playground />}></Route>
                    <Route path='*' element={<NoPage />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;