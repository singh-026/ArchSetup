import {StyleSheet, Text, View} from 'react-native';
import {API_KEY} from "@env"

const Dashboard = () => {
  console.log("-----API_KEY_RESPONSE-----", API_KEY)
  return (
    <View>
      <Text>Dashboard,{API_KEY}</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
