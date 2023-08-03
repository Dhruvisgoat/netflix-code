import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Trailer.scss";
import axios from "axios"

function Trailer({ movieId, apiKey }) {
    const playerConfig = {
        playerVars: {
            controls: 0,
            autoplay: 1,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            iv_load_policy: 3,
            disablekb: 1,
            loop: 1,
            mute: 0,
        },
    };

    const [trailerUrl, setTrailerUrl] = useState(null);
    const [overview, setOverview] = useState(null);

    useEffect(() => {
        const videosEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
        const overviewEndpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
        fetch(videosEndpoint)
            .then(response => response.json())
            .then(data => {
                const trailer = data.results.find(video => video.type === "Trailer");
                if (trailer) {
                    const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}&autoplay=1`;
                    setTrailerUrl(trailerUrl);
                }
            })
            .catch(error => {
                console.error(error);
            });
        const fetchOverview = async () => {
            const { data } = await axios.get(overviewEndpoint);
            setOverview(data.overview);
        };
        fetchOverview();

    }, [apiKey, movieId]);

    return (
        <div className="trailer" >
            <ReactPlayer
                url={trailerUrl}
                autoplay={true}
                config={playerConfig}
                width="100%"

            />
            <div className="overview">
                <h1>"THE MATRIX"</h1>
                <p>{overview}</p>
                <div className="trailer__buttons">
                    <button className="trailer__button">Play</button>
                    <button className="trailer__button">My List</button>
                </div>
            </div>

        </div>

    );
}

export default Trailer;
