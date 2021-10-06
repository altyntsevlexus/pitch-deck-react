import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Bg from '../pages/Bg';
import Competition from '../pages/Competition';
import Cover from '../pages/Cover';
import Difference from '../pages/Difference';
import Marketing from '../pages/Marketing';
import Mission from '../pages/Mission';
import Target from '../pages/Target';
import Team from '../pages/Team';

const ROUTE_CONFIG = [
  { path: '/cover', component: Cover },
  { path: '/cover-alt', component: Cover, theme: 'alt' },
  { path: '/cover-primary', component: Cover, theme: 'primary' },
  { path: '/team', component: Team },
  { path: '/mission', component: Mission },
  { path: '/bg', component: Bg },
  { path: '/target', component: Target },
  { path: '/competition', component: Competition },
  { path: '/marketing', component: Marketing },
  { path: '/difference', component: Difference },
  { path: '/difference-alt', component: Difference, theme: 'alt' },
  { path: '/difference-primary', component: Difference, theme: 'primary' },
];

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {ROUTE_CONFIG.map((route, i) => {
          return (
            <Route key={i} path={route.path}>
              <route.component theme={route.theme} />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default AppRouter;
