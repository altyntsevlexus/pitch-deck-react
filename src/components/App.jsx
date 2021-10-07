import '../styles/index.scss';

import AppRouter from '../route/AppRouter';
import { UserProvider } from '../store/userContext';

const App = () => {
  return (
    <UserProvider>
      <AppRouter />;
    </UserProvider>
  );
};

export default App;
