import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Accommodations from '../pages/Accommodations';
import Registry from '../pages/Registry';
import RSVP from '../pages/RSVP';
import Wedding from '../pages/Wedding';

const Routes = (props) => {
  return (
    <main className="container">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/rsvp' component={RSVP} />
        <Route path='/accommodations' component={Accommodations} />
        <Route path='/registry' component={Registry} />
        <Route path='/wedding' component={Wedding} />
      </Switch>
    </main>
  );
}

export default Routes;
