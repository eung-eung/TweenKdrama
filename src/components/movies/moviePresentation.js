import React, { useContext, useState } from "react"
import { ThemeContext } from "../ThemeContext"
import "./movies.css"
import "./tweenMovies"

export default function MoviePresentation({ movies }) {
    const { dark, toggle, theme } = useContext(ThemeContext)
    const [movie, setMovie] = useState({})
    // console.log(movies)
    return (
        <div>
            <div className='slideshow'>
                <ul id="container">
                    {
                        movies.map(movie => {
                            return (
                                <li className="navigation-item" key={movie.id}>
                                    <span className="background-holder" style={{ backgroundImage: "url(" + movie.img + ")" }}></span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="detail">
                    {
                        movies.map(movie => {
                            return (
                                <div className="detail-item" key={movie.id}>
                                    <div className="headline">{movie.name}
                                        <span className="rating">{movie.rating}%</span>
                                        <button onClick={() => { setMovie(movie) }}>
                                            <a href='#modal' id='openPopUp'>Detail</a>
                                        </button>
                                    </div>

                                    <div className={`background ${dark ? theme.className : theme.className}`} style={{ backgroundImage: "url(" + movie.img + ")" }}></div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>
            <a className="switch-mode" href="#" onClick={toggle} >
                switch to {!dark ? 'Dark' : 'Light'} mode
            </a>
            <div id='modal' className='overlay'>
                <div className='popup'>
                    <img src={movie.img}></img>
                    <h2>{movie.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {movie.description}
                    </div>
                </div>
            </div>
        </div>
    )
}


