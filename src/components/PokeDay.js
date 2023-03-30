import React, { useState, useEffect } from "react";

function PokeDay({ data }) {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = data[pokemonIndex];
  console.log(pokemon);

  const getTypeStyles = (type) => {
    switch (type) {
      case "fire":
        return "bg-orange-500 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "water":
        return "bg-blue-500 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "grass":
        return "bg-green-500 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white ";
      case "electric":
        return "bg-yellow-500 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "rock":
        return "bg-gray-500 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "ground":
        return "bg-brown-500 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "poison":
        return "bg-purple-500 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "psychic":
        return "bg-pink-500 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "dark":
        return "bg-gray-800 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "flying":
        return "bg-blue-300 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      default:
        return "bg-white w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-black";
    }
};

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * data.length);
      setPokemonIndex(newIndex);
      console.log(newIndex);
      
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [data]);


  return (
    <>
    {pokemon && 
    <section className="flex flex-col justify-center items-center ">
      <h1 className="text-2xl">Pokemon of the day</h1>
      <article className="flex justify-center w-2/4 rounded-2xl p-4 bg-gradient-to-b from-yellow-300 to-yellow-700">
        <figure className="flex justify-center items-center">
          <img className='h-48'src={pokemon.sprites.other.dream_world.front_default} alt="nombre"></img>
        </figure>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center p-10 ">
            <p className="text-xl text-white">{pokemon.name}</p>
            {pokemon.types.map((type)=>(<p className={`${getTypeStyles(type.type.name)}`}>{type.type.name}</p>))}
           </div>
           <div className="flex m-0.5 place-content-evenly">
           {pokemon.abilities.map((ability) => (
            <p className="bg-gradient-to-b from-red-600 to-yellow-900 w-14 px-12 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white">{ability.ability.name}</p>
          ))}
           </div>
           <div className="grid grid-cols-2 gap-4 justify-items-center mt-4  text-xs m-0.5 place-content-center">
           {pokemon.stats.map((stat) => (
            <p className="flex  justify-items-center text-black">
              {stat.stat.name}:<p className="bg-indigo-900 w-8 h-7 rounded-md flex items-center justify-center mx-2 text-center text-white">{stat.base_stat}</p>
            </p>
          ))}
           </div>
        </div>
      </article>
    </section>}
    </>
  );
}

export default PokeDay;
