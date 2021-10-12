import '../styles/index.scss';

import { AppRouter } from '../route/AppRouter';
import { BlocksProvider } from '../store/blocksContext';

const App = () => {
  return (
    <BlocksProvider>
      <AppRouter />
    </BlocksProvider>
  );
};

export default App;
