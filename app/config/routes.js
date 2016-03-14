var React = require('react'),

    Main = require('../components/Main'),
    Home = require('../components/Home'),
    Profile = require('../components/Profile'),

    Router = require('react-router'),
    Route = Router.Route,
    IndexRoute = Router.IndexRoute;

module.exports = (
    <Route path="/" component={Main}>
        <Route path="profile/:username" component={Profile} />
        <IndexRoute component={Home} />
    </Route>
);