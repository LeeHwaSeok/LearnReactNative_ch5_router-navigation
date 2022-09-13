import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/Detailscreen';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

/**
 * stack = Last in - First out 방식
 * main화면에서 새로운 항목(라우터)를 쌓아서 표현하는 방식
 */
const Stack = createNativeStackNavigator();

function App() {
  return (
    /**
     * Navigation은 N...Container안에서 사용이 가능하다.
     */
    <NavigationContainer>
      {/**
       * 메인 화면을 정의할 수 있다.
       * name => title(in flutter)
       * component => route(in flutter)
       * options => container option(decoration, colors. etc...)
       */}
      <Stack.Navigator initialrouteName="Home">
        {/**
         * Screen 단위로 app화면이 전환된다고 보면 됨
         */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        {/*const createObject = (a,b) => ({a,b})
         * 객체타입은 소괄호로 감싸줘야함 아니면 인식을 못해서 오류 발생
         */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerBackVisible: false,
            /**children은 부모 component에서 자식 data를 받아올 때
             * 사용하는 함수로 현재 이어진 곳 DetailScreen의 데이터를 받아옴 */
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>left</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
