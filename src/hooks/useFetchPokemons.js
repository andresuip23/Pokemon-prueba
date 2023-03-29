import { useState, useEffect } from 'react';

function useFetchPokemons() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // Obtener los primeros 30 pokemones
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15');
        const data = await response.json();

        // Hacer una nueva petición fetch para cada URL de los pokemones obtenidos
        const pokemonPromises = data.results.map(async pokemon => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
          return pokemonData;
        });

        // Esperar a que se completen todas las promesas y actualizar el estado
        const allPokemonData = await Promise.all(pokemonPromises);
        setPokemonList(allPokemonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return {  pokemonList, loading, error };
}

export default useFetchPokemons;