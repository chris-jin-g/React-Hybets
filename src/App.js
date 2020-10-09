import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChannelListPage from 'containers/pages/ChannelListPage';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/" component={ChannelListPage} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
