import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import SingleCocktailPage from './pages/SingleCocktailPage'
export default function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/cocktail/:id" component={SingleCocktailPage} />
                <Route path="*" component={ErrorPage} />
            </Switch>
        </Router>
    )
}
