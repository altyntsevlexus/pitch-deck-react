import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Bg from '../pages/bg';
import Competition from '../pages/competition';
import Cover from '../pages/cover';
import Difference from '../pages/difference';
import Marketing from '../pages/marketing';
import Mission from '../pages/mission';
import Navigation from '../pages/navigation';
import NoMatch from '../pages/no-match';
import Target from '../pages/target';
import Team from '../pages/team';

const ROUTE_CONFIG = [
  { path: '/', component: Navigation, exact: true },
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
  { path: '/difference-bg', component: Difference, theme: 'bg' },
  { path: '/difference-primary', component: Difference, theme: 'primary' },
  { path: '*', component: NoMatch },
];

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {ROUTE_CONFIG.map((route, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Route key={i} path={route.path} exact={route.exact || false}>
              <route.component theme={route.theme} />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default AppRouter;
