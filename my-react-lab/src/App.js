import './App.css';
import Content from './Components/Content';
import Greeting from './Components/Greeting';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Greeting/>
    <Header/>
    <Content/>
    <Footer/>
    </div>
  );
}

export default App;
