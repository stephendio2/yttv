import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Global from './components/Global';

function App() {
  return (
    <Global>
      <Header/> 
      <Body/>
      <Footer/>
    </Global>
  );
}

export default App;
