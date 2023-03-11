import { useEffect, useState } from 'react';
import Albums from './components/Albums';
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Images from './components/Images'
import Footer from './components/Footer';

function App() {

  const [showAsc,setShowAsc]=useState(true)

  const changeOrder=(val)=>{
    val=="false" && setShowAsc(false)
    val=="true" && setShowAsc(true)
  }

  return (
      <Router>
         <div className='bg-success'>
          <Header showAsc={showAsc} changeOrder={changeOrder}></Header>
            <hr></hr>
          </div>
            <Route exact path="/" render={() => <Albums showAsc={showAsc} changeOrder={changeOrder}></Albums>} />
            <Route path="/images/:id" render={() => <Images showAsc={showAsc} changeOrder={changeOrder}></Images>} /> 
          <div>
            <Footer></Footer>
          </div> 
      </Router>
  );
}

export default App;
