// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stackNavigation';

function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
