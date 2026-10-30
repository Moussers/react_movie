import "./Main.css";
import React from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search.js";

class Main extends React.Component
{
    state =
    {
        movies:[]
    }
    componentDidMount()
    {
        
        fetch('http://www.omdbapi.com/?s=Terminator&apikey=4ed5c14e')
            .then(response => response.json())
            .then(data => this.setState({movies:data.Search}));
    }
    searchMovie = (str) =>
    {
        fetch(`http://www.omdbapi.com/?s=${str}&apikey=4ed5c14e`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }));
    }
    render()
    {
        return (
            <div className="main">
                <Search searchMovie={this.searchMovie} />
                {
                //Благодаря фигурным скобочкам ({) - мы можем писать функции 
                    //сравения прямо в разметке
                    this.state.movies.length == 0 ? <Preloader /> : 
                        <MovieList movies={this.state.movies} />
                }
            </div>
        )
    }
}
export default Main;