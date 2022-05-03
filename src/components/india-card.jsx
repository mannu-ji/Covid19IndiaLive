import React from 'react';
import './card.css';

const textCss = {
  backgroundColor: '#2596be',
   color: '#FFFFFF',
    fontSize: '20px',
    borderRadius: '50px'


}

const titleCss = {
fontWeight: 'bold'
}


function Cdate(){
  const currentday = new Date().toLocaleString();
  return (
    currentday
  )
}
function IndiaCard(props){





  return(


      <div className="col-xl-3 col-sm-6 mt-2"  >
        <div className="bg-white rounded shadow py-5 px-4 cards " ><img src={props.image} alt="alt_image" width="80" className="img-fluid shadow-sm" />
          <h4 className="mb-0" style={titleCss}>{props.title} </h4>

          <h6 className="mt-1" >COVID-19 Cases as on (GMT+5:30)</h6>
            <div className="mt-3">
            <kbd  style={textCss} className=" shadow-lg text-uppercase">
            <Cdate />

              </kbd>
<br />



              </div>
        </div>
      </div>



  )
}

export default IndiaCard;
