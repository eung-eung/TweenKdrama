import React, { Component } from 'react'
import { Movies } from "../share/movieList";
import MoviePresentation from "../components/movies/moviePresentation"

import "./movies/tweenMovies"
export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            movies: Movies
        }
    }
    render() {
        return (
            <MoviePresentation movies={this.state.movies}></MoviePresentation>

        )
    }
}