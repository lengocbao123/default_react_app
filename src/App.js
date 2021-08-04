import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./pages";
import routes from "./routes";

class App extends React.Component {
  render() {
    const { admin, noAuth } = routes;
    return (
      <Router>
        <Switch>
          {admin.children.map((route) => {
            return (
              <Route
                key={route.path}
                path={`${admin.path}${route.path}`}
                component={route.element}
              />
            );
          })}
          {noAuth.children.map((route) => {
            return (
              <Route
                key={route.path}
                path={`${noAuth.path}${route.path}`}
                component={route.element}
              />
            );
          })}
          <Route exact path="/" component={IndexPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
