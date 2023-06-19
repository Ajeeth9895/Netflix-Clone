import React from 'react'
import Banner from '../Banner/Banner'
import Nav from '../Navbar/Nav'
import Row from '../Row/Row'
import requests from '../../helpers/request'


function Home() {


    return (
        <div className='home'>
            <Banner />
            <Nav />

            {/* to display hte movie title and movie data */}
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default Home
