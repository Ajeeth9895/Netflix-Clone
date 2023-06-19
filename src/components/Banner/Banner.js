import React, { useEffect, useState } from "react";
import requests from "../../helpers/request";
import axios from "../../helpers/axios";
import './Banner.css'
import movieTrailer from "movie-trailer";

function Banner() {
    const [movie, setMovie] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");

    //to pre populate data before page render
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            //to get random movie data
            let movieData =
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ];

            setMovie(movieData);//updating state
            return request;
        }

        fetchData();//calling fetch data function
    }, []);


    //to shorten the description
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }



    //function to play trailer 
    const handleClick = (movies) => {

        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movies?.name || movies?.title || movies?.original_name || movies?.original_title)
                .then((url) => {

                    //open the trailer in new window
                    window.open(url, '_blank')
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };



    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center",
            }}
        >

            <div className="banner_contents">

                {/* to check the movie name  */}
                <h1 className="banne_title">{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className="banner_buttons">
                    <button className="banner_button" onClick={() => handleClick(movie)}>Play</button>
                </div>

                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>

            </div>

            <div className="banner_fadeBottom" />

        </header>
    );
}

export default Banner;