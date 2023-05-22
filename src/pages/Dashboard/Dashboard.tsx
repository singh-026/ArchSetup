import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../config/theme/Text';

const Dashboard: () => JSX.Element = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {backgroundColor: 'grey', flex: 1, paddingTop: '30%'},
});
