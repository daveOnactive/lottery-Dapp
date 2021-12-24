import { useColorMode, Box, Spinner } from '@chakra-ui/react';
import { useEffect, useContext } from 'react';

import { HomeView } from './views';
import { AppContext } from './providers';

function App() {

  const { toggleColorMode } = useColorMode();

  const { state } = useContext(AppContext);

  const isLoading = state?.isLoading;

  useEffect(() => {
    toggleColorMode();
  }, [toggleColorMode]);


  if (isLoading) return (
    <Box display='flex' justifyContent="center" alignItems="center" height="100vh" width="100%">
      <Spinner size='xl' />
    </Box>
  )

  return (
    <HomeView />
  );
}

export default App;
