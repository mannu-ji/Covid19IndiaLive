import  {useEffect, useState} from 'react';


function CovidInfo(props){

  const [data,setData] = useState([]);
 let d;
  const getCovidData = async () => {

    try {
      const res = await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true');
      const actualData = await res.json();
      setData(actualData);
  }
  catch(e){
    console.log(e);
  }
  }

  useEffect(() => {

        getCovidData();

  },[]);

if(props.title === 'Recovered Cases')
{
  d = data.recovered
}

else if(props.title === 'Active Cases') {
    d = data.activeCases
  }

    else {
        d = data.deaths
      }
  return(

      d


  )
}

export default CovidInfo;
