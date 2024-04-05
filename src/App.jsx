import  axios  from "axios"
import { useEffect, useState } from "react"
import * as S from "./Styled"

export default function App() {

     const[categoria, setCategoria] = useState(`animation`)
     const [busca, setBusca] = useState("")

      const[filmes, setFilmes] = useState([])

      async function buscarDados(){
        const Dados = await axios.get(`https://api.sampleapis.com/movies/${categoria}`)
         
        try{
          setFilmes(Dados.data)
        }catch(erro){
          alert(`Desculpe, houve uma falha ${erro}`)
        }     
        
      }
     
      useEffect(()=>{
        buscarDados()
      },[categoria])


   const filtrar = filmes.filter((item)=>item.title.toLowerCase().includes(busca.toLowerCase()))

  return (
    <>
    
   <h1>Cine VnW</h1>

<div>
  <button onClick={() => setCategoria("animation")}>Animação</button>
  <button onClick={() => setCategoria("comedy")}>Comedia</button>
  <button onClick={() => setCategoria("family")}>Familia</button>
  <input type="text"
  placeholder="Buscar..."
  onChange={(e)=>setBusca(e.target.value)}
   />
</div>
<S.Section>
   
    {filtrar.map((item)=>(
     <div>
      <img src={item.posterURL} alt="" />
      <h2>{item.title}</h2>
     </div>
    ))}
   
   </S.Section>
    </>
  )
}
