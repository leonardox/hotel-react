import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Galery from "./components/galery/Galery"
import Contact from "./components/contact/Contact"
import Board from "./components/board/Board"
import Tours from "./components/tours/Tours"

const App = () => {
  return <div>
    <Intro/>
    <Board/>
    <About/>
    <Galery/>
    <Tours/>
    <Contact/>
  </div>;
};

export default App;