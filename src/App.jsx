import React from 'react';
import Header from './components/header';
import Card from './components/card';
import Footer from './components/footer';
import IndiaCard from './components/india-card';
import image1 from './images/active.png'
import image2 from './images/recovered.png'
import image3 from './images/death.png'
import image5 from './images/bharat.png'


const Css ={
  alignItems: 'left',
  justifyContent : 'left',
}
function App(){
  return (
    <>
    <Header />
    <div className="container-fluid " >
    <div className="row text-center" style={Css}>
    <IndiaCard image={image5} title="India" />
    <Card image={image1} title="Active Cases" />
    </div></div>

    <div className="container-fluid " >
    <div className="row text-center" style={Css}>
    <Card image={image2} title="Recovered Cases"/>
    <Card image={image3} title="Deaths"/>
    </div></div>
    <Footer />
    </>
  )
}
export default App
