import React from "react"
import "./movies.css"
import "./tweenMovies"

export default function MoviePresentation({ movies }) {
    console.log(movies)
    return (
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
                                </div>

                                <div className="background" style={{ backgroundImage: "url(" + movie.img + ")" }}></div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}


