import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DwikyDanov Iswardanu!</Text>
        <Text>XI RPL 3</Text>
        <Text>Absen 16</Text>
         <Image 
       style={{width: 100, height: 100}}
       resizeMode="contain"
       source={{ uri: 'https://lh3.googleusercontent.com/a_bWBGAdpuqz_FrquOE5G-5c6wta0extumhooLdq0hU_ZIA-7xiIznvmPhMAsEeTOMfSRw=s132' }}
    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
