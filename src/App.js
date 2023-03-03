//#region  "Styles"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//#endregion
//#region "React Elements"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//#endregion
//#region "Components"
import Header from '#components/header-component';
import MainComponent from '#components/main-component';
import FooterComponent from '#components/footer-component';
import Home from '#components/home-component';
import About from '#components/about-component';
import Contact from '#components/contact-component';
import Booking from '#components/booking-component';
//#endregion
import globals from '#src/globals';
function App() {
  return (
    <Router>
      <Header />
      <MainComponent />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path={globals.NAV_HOME} element={<Home />} />
        <Route path={globals.NAV_ABOUT} element={<About />} />
        <Route path={globals.NAV_CONTACT} element={<Contact />} />
        <Route path={globals.NAV_BOOKING} element={<Booking />} />
      </Routes>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
