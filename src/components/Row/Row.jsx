import Card from '../Card/Card.jsx'
import './Row.scss'
import axios from "axios"
import React, { useEffect, useState } from 'react'
const apikey = "1c6ceea1557e0ebe448c1f965f5cc09d"
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming"
const top_rated = "top_rated"
const popular = "popular"
const now_playing = "now_playing"
const trending = "trending"

export default function Row({ Title, img }) {

  const [upcomingmovies, setUpcoming] = useState([])
  const [topratedmovies, setTopRated] = useState([])
  const [popularmovies, setPopular] = useState([])
  const [nowplayingmovies, setNowPlaying] = useState([])

  useEffect(() => {
    const fetupcoming = async () => {
      const { data } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}&language=en-US&page=1`);
      setUpcoming(data.results);
    };
    const fettopRated = async () => {
      const { data } = await axios.get(`${url}/movie/${top_rated}?api_key=${apikey}&language=en-US&page=1`);
      setTopRated(data.results);
    };
    const fetpopular = async () => {
      const { data } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}&language=en-US&page=1`);
      setPopular(data.results);
    };
    const fetnowplaying = async () => {
      const { data } = await axios.get(`${url}/movie/${now_playing}?api_key=${apikey}&language=en-US&page=1`);
      setNowPlaying(data.results);
    };

    fetupcoming();
    fetpopular();
    fetnowplaying()
    fettopRated();

  }, [])

  return (
    <div className='Row'>

      <h2>Upcoming </h2>
      <div>
        {upcomingmovies.map((movie) => (
          <Card img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        ))}
      </div>

      <h2>Top Rated </h2>
      <div>
        {topratedmovies.map((movie) => (
          <Card img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        ))}
      </div>

      <h2>Popular </h2>
      <div>
        {popularmovies.map((movie) => (
          <Card img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        ))}
      </div>

      <h2>Now Playing </h2>
      <div>
        {nowplayingmovies.map((movie) => (
          <Card img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        ))}
      </div>
    </div>
  )
}