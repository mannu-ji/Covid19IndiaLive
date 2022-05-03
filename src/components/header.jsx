import React from 'react';
import image from '../images/coronavirus.png';

const logoCss={
  width: '60px',
  borderRadius: '20px',
}
const text ={
  color: 'black',
  fontSize: '20px'
}
function Header(){
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong ">

  <div className="container-fluid">

    <span className="navbar-brand img-fluid "  ><img className="img-fluid img-thumbnail float-left" src={image} style={logoCss} alt="logo"/>
<span  style={text}>&nbsp; Covid19 Live</span>
    </span>


  </div>

</nav>

    </>
  )
}
export default Header;
