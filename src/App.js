import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bg from "./pages/Bg";
import Competition from "./pages/Competition";
import Cover from "./pages/Cover";

import Difference from "./pages/Difference";
import Marketing from "./pages/Marketing";
import Mission from "./pages/Mission";
import Target from "./pages/Target";
import Team from "./pages/Team";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cover">
          <Cover />
        </Route>
        <Route path="/coverAlt">
          <Cover type="alt" />
        </Route>
        <Route path="/coverPrimary">
          <Cover type="primary" />
        </Route>
        <Route path="/team" component={Team} />
        <Route path="/mission" component={Mission} />
        <Route path="/bg" component={Bg} />
        <Route path="/target" component={Target} />
        <Route path="/competition" component={Competition} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/differenceLight">
          <Difference linkTo="differencePrimary" />
        </Route>
        <Route path="/differencePrimary">
          <Difference type="primary" linkTo="differenceBg" />
        </Route>
        <Route path="/differenceBg">
          <Difference type="bg" linkTo="cover" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
