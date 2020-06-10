import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  RouteComponentProps,
  Switch,
  useLocation,
} from 'react-router-dom';
import AppBackground from './components/AppBackground/AppBackground';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

export enum APP_ROUTES {
  HOME = '/',
}

export let RouteContext = React.createContext(APP_ROUTES.HOME);

export default function App() {
  const RouteContextUpdater = () => {
    const { pathname } = useLocation();
    const [, path] =
      Object.entries(APP_ROUTES).find(
        ([key, route]) => route.indexOf(pathname) !== -1
      ) || [];

    return <RouteContext.Provider value={path || APP_ROUTES.HOME} />;
  };

  return (
    <AppBackground>
      <Router>
        <NavBar />
        <RouteContextUpdater />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </AppBackground>
  );
}

const NoMatch = ({ location }: RouteComponentProps) => (
  <div>
    <h3>
      No match for route <code>{location.pathname}</code>
      <br />
      Go back <Link to="/">Home</Link>
    </h3>
  </div>
);
