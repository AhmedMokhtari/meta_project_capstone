import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Highlights from './component/Highlights/Highlights';
import MyNavbar from './component/Navbar/Navbar';


function App() {
  return (
    <div className="App">
        <MyNavbar></MyNavbar>
        <Hero></Hero>
        <Highlights></Highlights>
        <Footer></Footer>
    </div>
  );
}

export default App;
