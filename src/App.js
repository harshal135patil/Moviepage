
import './App.css';
import Navbar from './component/navbar/Navbar';
import Graph from './component/graph/index';
import Movieprop from './component/movie property/index.js';
import Moviecollection from './component/moviecollection';
import Footer from './component/moviecollection/footer';

function App() {
  return (
    <>
    <Navbar />
    <Graph />
    <Movieprop />
    <Moviecollection />
    <Footer />
    </>
  );
}

export default App;
