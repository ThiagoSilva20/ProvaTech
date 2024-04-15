import axios from 'axios'
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css'
function App() {
  const [astros, setAstros] = useState([]);

  const searchData = async () => {

    try {
      const response = await axios.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-04-13&end_date=2024-04-13&api_key=QWRE3ULoOtEeoaXwFMb1WDwWrY4Muv7NncJFWWsn");
      const data = response.data;
      setAstros(data.near_earth_objects['2024-04-13']);
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    searchData();
  }, [])

  return (
    <>
      <h1>ultimas informações</h1>
      {astros.length === 0 ? <p>Carregando...</p> : (
        astros.map((astro) => (
          <div className='infoMain'>
            <div key={astro.id}>
              {/* nome */}
              <div>
                {astro.name}
              </div>
              {/* se é perigoso */}
              <div key={astro.id}>É potencialmente perigoso?{astro.is_potentially_hazardous_asteroid === false ?<p> Não</p> : <p> Sim</p> }</div>
              {/* diametro em km */}
              <p key={astro.id}> Diâmetro MÁXIMO estimado em quilômetros é de {astro.estimated_diameter.kilometers.estimated_diameter_max}</p>
            </div>
              

          </div>
        ))
      )}
    </>
  )
}
// cao  


export default App
