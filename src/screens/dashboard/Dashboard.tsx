import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Config from 'react-native-config';

const Dashboard: () => JSX.Element = () => {
  console.log('the baes urel is', Config.BASE_URL);
  return (
    <View style={styles.container}>
      <Text style={{color:'red'}}>
        Dashboard {Config.BASE_URL}
      </Text>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {backgroundColor: 'red', flex: 1, paddingTop: '30%'},
});