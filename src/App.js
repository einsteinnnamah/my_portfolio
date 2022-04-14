import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
