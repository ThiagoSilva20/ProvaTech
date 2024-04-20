import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const MaisInformacoes = () => {
  const { id } = useParams()
  const [asteroide, setAsteroide] = useState(null);
  useEffect(async () => {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=QWRE3ULoOtEeoaXwFMb1WDwWrY4Muv7NncJFWWsn`
      )
      
        setAsteroide(response.data);
    }, [])
    return (
    <>
    {asteroide.map((astro) => (
      <h2 key={astro.id}>{astro.title}</h2>
    ))}</>
    )}

export default MaisInformacoes