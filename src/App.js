import './App.css';
// import './Componet/About.css';
// import './Componet/Contact.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Route, Routes } from "react-router-dom";
import Home from './Componet/Home';
import About from './Componet/About';
import Serve from './Componet/Serve';
import Contact from './Componet/Contact';
import Header from './Componet/Header';
import Foter from './Componet/Foter';
import Domain from './Componet/Domain';

// https://html.dynamiclayers.net/it/cyberhost/

function App() {

  const red = {
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 5,
      }
    }

  }

  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/serve' element={<Serve />} />
          <Route path='/Domain' element={<Domain />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      {/* <Foter/> */}
      {/* Domain Start */}
      {/* <section className='domain padding bd-bottom align-center'>
        <Container>
          <Row>
            <Col className='col-md-6 col-sm-5 fix'>
              <div className='domain_head'>
                <h2>Find Your Perfect </h2>
                <h4>Starting From $1.99 Per Year!</h4>
              </div>
            </Col>
            <Col className='col-md-6 col-sm-7 fix'>
              <form className='search_form fix'>
                <div className='form_group d-flex text-right'>
                  <div className='xs-padding col-sm-6 fix'>
                    <input type='text' name='domain' className='form-input' placeholder='Enter Your Domain Name...'></input>
                  </div>
                  <div className='xs-padding col-sm-3 fix'>
                    <select className='form-input'>
                      <option>.com</option>
                      <option>.net</option>
                      <option>.org</option>
                      <option>.eu</option>
                      <option>.uk</option>
                    </select>
                  </div>
                  <div className='xs-padding col-sm-3'>
                    <button type='submit' className='submit'>Search</button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* Domain End */}
      <Foter/>
    </div>
  );
}

export default App;
