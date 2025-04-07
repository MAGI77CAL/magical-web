// src/App.jsx

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Projects />
      <Footer /> 
    </div>
  );
}

export default App;
