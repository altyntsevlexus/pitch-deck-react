import '../styles/index.scss';

import AppRouter from '../route/AppRouter';
import { BlocksProvider } from '../store/blocksContext';
import { NetworkProvider } from '../store/networkContext';

const App = () => {
  return (
    <NetworkProvider>
      <BlocksProvider>
        <AppRouter />
      </BlocksProvider>
    </NetworkProvider>
  );
};

export default App;
