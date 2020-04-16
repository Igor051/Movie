import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./Redux/store";
import MoviesList from "./components/MoviesList";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
        <Provider store={store}>
            <MoviesList/>
        </Provider>
        </BrowserRouter>
    );
}



export default App;
