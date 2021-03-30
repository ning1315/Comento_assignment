import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ViewPage from './pages/ViewPage';
import './style/Mainpage.scss';
import './style/Header.scss';
import './style/MainPageBody.scss';
import './style/MainPageContents.scss';
import './style/MainPageAd.scss';
import './style/FilterModal.scss';
import './style/ViewPage.scss';
import './style/ViewPageBody.scss';
import './style/ViewContent.scss';
import './style/ViewComments.scss';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/mainpage" render={() => <MainPage />} />
        <Route exact path="/" render={() => <Redirect to="/mainpage" />} />
        <Route path="/view/:id" render={() => <ViewPage />} />
      </Switch>
    </>
  );
};

export default withRouter(App);
