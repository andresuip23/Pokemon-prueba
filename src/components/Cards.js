import React from "react";
import styles from "../app/App.css";

function Cards({ pokemonList }) {
  const getTypeBackgroundColor = (type) => {
    switch (type) {
      case "fire":
        return "bg-gradient-to-b from-orange-500 to-orange-800";
      case "water":
        return "bg-gradient-to-b from-blue-500 to-blue-800";
      case "grass":
        return "bg-gradient-to-b from-green-500 to-green-800";
      case "electric":
        return "bg-gradient-to-b from-yellow-500 to-yellow-800";
      case "rock":
        return "bg-gradient-to-b from-gray-500 to-gray-800";
      case "ground":
        return "bg-gradient-to-b from-brown-500 to-brown-800";
      case "poison":
        return "bg-gradient-to-b from-purple-500 to-purple-800";
      case "psychic":
        return "bg-gradient-to-b from-pink-500 to-pink-800";
      case "dark":
        return "bg-gradient-to-b from-gray-800 to-gray-500";
      case "flying":
        return "bg-blue-300bg-gradient-to-b from-indigo-300 to-indigo-800";
      default:
        return "bg-gradient-to-b from-blue-200 to-green-600";
    }
  };
  const getTypeStylesCard = (type) => {
    switch (type) {
      case "fire":
        return "bg-gradient-to-t from-orange-800 to-orange-500 mb-2 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "water":
        return "bg-gradient-to-t from-blue-800 to-blue-500 mb-2 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "grass":
        return "bg-gradient-to-t from-green-800 to-green-500 mb-2 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white ";
      case "electric":
        return "bg-gradient-to-t from-yellow-800 to-yellow-500 mb-2 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "rock":
        return "bg-gradient-to-t from-gray-800 to-gray-500 w-14 mb-2 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "ground":
        return "bg-brown-700 w-14 h-7 rounded-md flex items-start mb-2 justify-center mx-2 text-center text-white";
      case "poison":
        return "bg-gradient-to-t from-purple-800 to-purple-500 mb-2 w-14 h-7 rounded-md flex items-start justify-center mx-2 text-center text-white";
      case "psychic":
        return "bg-gradient-to-t from-pink-800 to-pink-500 w-14 h-7 rounded-md flex items-start mb-2 justify-center mx-2 text-center text-white";
      case "dark":
        return "bg-gradient-to-t from-gray-800 to-gray-500 w-14 h-7 rounded-md flex items-start mb-2 justify-center mx-2 text-center text-white";
      case "flying":
        return "bg-gradient-to-t from-blue-500 to-blue-300 w-14 h-7 rounded-md flex items-start mb-2 justify-center mx-2 text-center text-white";
      default:
        return "bg-gradient-to-t from-gray-300 to-gray-50 w-14 h-7 rounded-md flex items-start mb-2 justify-center mx-2 text-center text-black";
    }
  };

  return (
    <>
      <div
        className={`m-0.5 w-64 h-82 0 rounded-md border-4 border-yellow-500 ${getTypeBackgroundColor(
          pokemonList?.types[0].type.name
        )}`}
      >
        <div className="h-8  flex  items-center place-content-between  px-2 tracking-widest bg-gradient-to-b from-poke-yellow to-yellow-600">
          <div className="px-1.5">{pokemonList.name}</div>
          <div className="px-1.5">{pokemonList.id}</div>
        </div>
        <div className="flex m-0.5 place-content-center border-4 border-yellow-500 bg-gray-200 mx-10 rounded-md my-4">
          <img
            className="w-28 z-10"
            src={pokemonList.sprites.front_default}
            alt={pokemonList.name}
          ></img>
        </div>
        <div className="flex justify-center items-center ">
          {pokemonList.types.map((type) => (
            <p className={`${getTypeStylesCard(type.type.name)}`}>
              {type.type.name}
            </p>
          ))}
        </div>
        <div className="h-8 rounded-md flex tracking-wider items-center place-content-evenly mx-4  px-2 bg-poke-blue-l text-poke-blue-d ">
          <p>weight:{pokemonList.weight}</p>
          <p>height:{pokemonList.height}</p>
        </div>
        <div className="flex m-0.5 tracking-widest place-content-evenly">
          {pokemonList.abilities.map((ability) => (
            <p>{ability.ability.name}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 justify-items-center mt-4  text-xs m-0.5 place-content-center">
          {pokemonList.stats.map((stat) => (
            <p className="flex  justify-items-center text-black">
              {stat.stat.name}:<p className="bg-indigo-900 w-8 h-7 rounded-md flex items-center justify-center mx-2 text-center text-white">{stat.base_stat}</p>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
