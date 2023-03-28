import { useEffect, useState } from "react";

function App() {
  const[pokemon,setPokemon]=useState([])
  const API='https://pokeapi.co/api/v2';
  
  useEffect(()=>{
    const fetchData= async(API)=>{
      const res = await fetch(`${API}/pokemon/?offset=30&limit=30`);
      console.log(res)
      const resJson =await res.json();
      console.log(resJson)
      const data = await resJson.result;
      setPokemon(data);
    }
    fetchData(API);
  },[])

 console.log(pokemon)
 

    
  return (
    <div className="App">
    </div>
  );
}

export default App;
