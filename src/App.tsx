import { useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';

import { HomeView } from './views';

function App() {

  const { toggleColorMode } = useColorMode();

  useEffect(() => {
    toggleColorMode();
  }, []);

  return (
    <HomeView />
  );
}

export default App;
