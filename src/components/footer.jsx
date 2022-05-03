import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Footer(){
  const Css = {
    marginTop : '50px'
  }

  return(
    <>
    <div style={Css}>


  <footer id="sticky-footer" className="flex-shrink-0  bg-dark text-white-50">
  <div className="container p-2 pb-0 text-center">

      <a className="btn btn-outline-light btn-floating  " target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/manpreetji/" role="button"
        ><i className="fa fa-linkedin"></i
      ></a>
      &nbsp;
      <a className="btn btn-outline-light btn-floating " target="_blank"  rel="noreferrer" href="https://github.com/mannu-ji" role="button"
        ><i className="fa fa-github  "></i
      ></a>


  </div>
    <div className="container text-center">
      <small >Copyright &copy; Manpreet Singh</small>
    </div>
  </footer>

</div>
    </>
  )
}

export default Footer;
