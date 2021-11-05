import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Details from './Details';
import Home from './Home';
import Nav from './Nav';
import NotFound from './NotFound';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/num/:id' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
