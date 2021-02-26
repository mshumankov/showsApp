import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/styles.scss";
import Background from "./background/background";
import Container from "./container/container";
import ShowDetails from "./showDetails/showDetailsPage";
import ActorDetails from "./actorDetailsPage/actorDetailsPage";
import Favourites from "./favourites/favouritesPage";

const Shows = React.lazy((): any => import("./shows/showsPage"));
const SignIn = React.lazy((): any => import("./signIn/signInPage"));

const App = (): JSX.Element => {
  return (
    <Container>
      <Router>
        <Switch>
          <Suspense fallback={<Background />}>
            <Route path="/showsApp/" exact component={Shows} />
            <Route path="/showsApp/signIn" exact component={SignIn} />
            <Route path="/showsApp/show/:id" exact component={ShowDetails} />
            <Route path="/showsApp/actor/:id" exact component={ActorDetails} />
            <Route path="/showsApp/favourites" exact component={Favourites} />
          </Suspense>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app-root"));
