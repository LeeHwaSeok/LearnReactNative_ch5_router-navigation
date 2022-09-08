import React, {useEffect} from 'react';
import {View, Button} from 'react-native';

function HmoewScreen({navigation}) {
  /**DEPS(2번째 인자)가 바뀌는 일은 없지만 eslINT 규칙상 [navigation]을 추가함
   * 순서는 app.js를 useEffect.setOptions이 덮어쓰게됨
   */
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);
  return (
    <View>
      <Button
        title="Detail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="Detail 2 열기"
        onPress={() => navigation.push('Detail', {id: 2})}
      />
      <Button
        title="Detail 3 열기"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
    </View>
  );
}

export default HmoewScreen;
