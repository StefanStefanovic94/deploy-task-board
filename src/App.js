import './App.css';
import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Board from './components/pages/board';
import Create from './components/pages/create';
import EditIssue from './components/pages/editIssue';
import CreateColumn from './components/pages/createColumn';
import CreateUser from './components/pages/createUser';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Board} />

          <Route exact path="/create_task" component={Create} />

          <Route exact path="/editIssue/:id" component={EditIssue} />

          <Route exact path="/create_column" component={CreateColumn} />

          <Route exact path="/create_user" component={CreateUser} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
