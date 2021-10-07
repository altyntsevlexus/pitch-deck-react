import { createContext } from 'react';
import propTypes from 'prop-types';

const INIT_STATE = {
  userId: 9238674,
  firstName: 'Alexey',
  lastName: 'Altyntsev',
};

const UserStateContext = createContext();

const UserProvider = ({ children }) => {
  return (
    <UserStateContext.Provider value={INIT_STATE}>
      {children}
    </UserStateContext.Provider>
  );
};

UserProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { UserStateContext, UserProvider };
