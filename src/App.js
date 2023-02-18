import './App.css';
import Header from './components/header-component';
import NavComponent from './components/nav-component';
import MainComponent from './components/main-component';
import FooterComponent from './components/footer-component';
function App() {
  return (
    <>
    <Header />
    <NavComponent></NavComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
