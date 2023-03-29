import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage, OrderTypePage, WelcomePage} from '../screen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const routes = [
    {route: 'WelcomePage', component: WelcomePage},
    {route: 'OrderTypePage', component: OrderTypePage},
    {route: 'HomePage', component: HomePage},
  ];

  return (
    <Stack.Navigator>
      {routes.map((item, index) => {
        return (
          <Stack.Screen
            key={`idx-${index}`}
            name={item.route}
            component={item.component}
            options={{headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigation;
