import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';

import './style/Mainpage.scss';
import './style/Header.scss';
import './style/MainPageBody.scss';
import './style/MainPageContents.scss';
import './style/MainPageAd.scss';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/mainpage" render={() => <MainPage />} />
        <Route exact path="/" render={() => <Redirect to="/mainpage" />} />
      </Switch>
    </>
  );
};

export default withRouter(App);
