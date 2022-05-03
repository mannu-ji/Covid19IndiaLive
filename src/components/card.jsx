import React from 'react';
import CovidInfo from './covid-info.jsx';
import './card.css';
function Card(props){



  const textCss = {
        backgroundColor: '#2596be',
        color: '#FFFFFF',
        fontSize: '40px',
        borderRadius: '50px',

  }
const titleCss ={
  fontWeight: 'bold'
}

  return(


      <div className="col-xl-3 col-sm-6 mt-2 "  >
        <div className="bg-white rounded shadow py-5 cards " ><img src={props.image} alt="alt_image" width="80" className="img-fluid rounded-circle  img-thumbnail shadow-sm" />
          <h5 className="mb-0" style={titleCss}>{props.title} </h5>

            <div className="mt-3"><kbd  style={textCss} className=" shadow-lg text-uppercase">
                      <CovidInfo  title={props.title}/>

              </kbd>
              </div>
        </div>
      </div>



  )
}

export default Card;
