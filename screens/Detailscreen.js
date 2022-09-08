import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
function DetailScreen({route, navigation}) {
  return (
    <View style={styles.block}>
      {/**
       * route 내장함수
       * key : 고유값 자동할당
       * name : 'Detail' (route명)
       * params : {"id" : 1}
       */}
      <Text style={styles.text}>id: {route.params.id}</Text>
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
