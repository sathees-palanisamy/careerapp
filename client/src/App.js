import React, { Component } from 'react';
import Home from './Component/Home';
import './App.css';
import Department from './Component/Department/Department';
import Sharepath from './Component/Sharepath/Sharepath';
import SuggestList from './Component/Suggestion/SuggestList';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact render={(props) =>
            <Home
            />
          }
          />
          <Route path="/paths" render={(props) =>
            <Department
            />
          }
          />
          <Route path="/sharepath" render={(props) =>
            <Sharepath
              {...props}
            />
          }
          />
          <Route path="/suggestion" render={(props) =>
            <SuggestList
              {...props}
            />
          }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
