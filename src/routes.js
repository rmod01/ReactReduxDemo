import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TeamMembersPage from './components/team/TeamMembersPage';
import ManageTeamMemberPage from './components/team/ManageTeamMemberPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="teammember" component={ManageTeamMemberPage} />
    <Route path="teammember/:id" component={ManageTeamMemberPage} />
    <Route path="teammembers" component={TeamMembersPage} />
  </Route>
);
