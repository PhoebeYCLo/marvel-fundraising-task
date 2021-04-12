import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DonatePage from './components/DonatePage/DonatePage';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/donate" component={DonatePage} />
        </Switch>
    </div>
  );
}

export default App;
