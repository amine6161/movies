import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import classes from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>

      </div>
    );
  }
}

export default App;