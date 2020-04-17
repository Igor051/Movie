import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./Redux/store";
import MoviesList from "./components/MoviesList";
import {BrowserRouter, Route} from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Header from "./components/Header/Header";


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <Route exact path={'/'} render={() => <MoviesList/>}/>
                <Route path={'/film/:id'} render={() => <Movie/>}/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
