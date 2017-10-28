import React from 'react';
import { StatusBar, View } from 'react-native';
import styles from './styles';

const StatusBarCustom = () => (
  <View style={styles.statusBar}>
    <StatusBar
      backgroundColor="black"
      barStyle="light-content"
      translucent={false}
      hidden={false}
    />
  </View>
);

export default StatusBarCustom;
