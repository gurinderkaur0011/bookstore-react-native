import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookListScreen from './screens/BookListScreen';
import lang from './i18n/lang';
import BookDetailsHeader from './components/headers/BookDetailsHeader';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName={lang.BOOKLIST}>
      <Stack.Screen
        name={lang.BOOKLIST}
        component={BookListScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={BookDetailsScreen}
        options={{
          animation: 'slide_from_right',
          header: BookDetailsHeader,
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
