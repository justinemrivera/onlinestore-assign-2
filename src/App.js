
import './App.css';
import NavBar from './components/navBar';
import Footer from "./components/footer";
import QuantityPicker from './components/quantitypicker';
import Catalog from './components/catalog';
import"bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
    <NavBar></NavBar>  
  <div className="container-fluid">
    <Catalog></Catalog>
    <h1>Online Store</h1>
    <QuantityPicker></QuantityPicker>
</div>

<Footer></Footer>
  </div>
  );
}

export default App;

