import React from 'react';
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react';
import Chat from './app/pages/chat';
import { useSelector } from 'react-redux';
import { selectAuthState, selectUserName } from './app/pages/auth/slice/selectors';
import Auth from './app/pages/auth';

const App: React.FC = () => {
  const isUserAuthenticated = useSelector(selectAuthState);
  const userName = useSelector(selectUserName);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {isUserAuthenticated ? <Chat userName={userName} /> : <Auth />}
    </ChakraProvider>
  );
};

export default App;
