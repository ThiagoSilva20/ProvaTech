import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import './style/MaisInformacoes.css'

const DetalheAsteroide = () => {
  const { id } = useParams()
  const [asteroide, setAsteroide] = useState(null)

  const requisicao = async () => {
    const asteroideConsulta = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=QWRE3ULoOtEeoaXwFMb1WDwWrY4Muv7NncJFWWsn`
    )
    setAsteroide(asteroideConsulta.data)

  }
  useEffect(() => {
    requisicao()
  }, [])


  return (
    <>
      <div id='detalhes_div'>
        <h1>Detalhes do asteroide</h1>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{asteroide?.name}</h5>
            <h6>É potencialmente perigoso?<br />{asteroide?.is_potentially_hazardous_asteroid ? 'Sim' : 'Não'}</h6>
            <h6>Diâmetro Máximo<br />{asteroide?.estimated_diameter.kilometers.estimated_diameter_max}</h6>
            <h6>Velocidade relativa(Hora)<br />{asteroide?.close_approach_data?.[0]?.relative_velocity?.kilometers_per_hour}</h6>
            <h6>Magnitude absoluta<br />{asteroide?.absolute_magnitude_h}</h6>
            <a style={{border:'1px solid black', borderRadius:'5px', textDecoration:'none', color:'black', padding:'5px 10px', background:'rgba(211, 211, 211, 0.5)'}} href={asteroide?.nasa_jpl_url} target='_blank'>Mais Detalhes</a>
          </div>
        </div>
      </div >
    </>
  )
}



export default DetalheAsteroide;