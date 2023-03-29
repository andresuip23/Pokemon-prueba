import { useEffect, useState } from "react";
import CardsList from "../components/CardsList";
import Cards from "../components/Cards";
import Header from "../components/Header";
import useFetchPokemons from "../hooks/useFetchPokemons";
import "./App.css";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function App() {
  const { pokemonList, loading, error } = useFetchPokemons();

  return (
    <>
    <Header/>
    <div className="slider-wrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".pagination",
          clickable: true,
        }}
        slidesPerView={4}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          "@0.50": {
            slidesPerView: 1.25,
            spaceBetween: 25,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          "@1.25": {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {pokemonList.map((pokemonList) => (
          <SwiperSlide key={pokemonList?.url}>
            <Cards pokemonList={pokemonList} key={pokemonList.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
}

export default App;
