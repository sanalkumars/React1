
//import { Container } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './App.css';
//import Header from './Components/Header';
//import Navbar from './Components/Navbar';
//import States from './Components/States';
//import Main from './Components/condition/Main';
//import Key from './Components/Key';
import Products from './Components/products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Container>
    <Products />
    </Container>  
    
    </div>
  );
}

export default App;
