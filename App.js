import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Judul from './Component/Judul';

export default class App extends React.Component {
   state = {
    number: 0
  }
  Click(Yourname){
    this.setState({
      number: this.state.number - 1
    })
  }

  handleClick(Myname){
    this.setState({
      number: this.state.number + 1
    })
  }
  
  render(){
    const Myname = "DwikyDanov Iswardanu";
    const Yourname ="UUD"
    return (
      <View >
         <Judul title= "BIODATA"/>
         <Judul title= "LOGiN"/>
         <Judul title= "NAMBAH"/>
         <Text>DwikyDanov Iswardanu!</Text>
          <Text>XI RPL 3</Text>
          <Text>Absen</Text>
           <TouchableOpacity onPress={()=> this.Click(Yourname)}>
           <Text>-</Text>
           </TouchableOpacity>
           <Text>{this.state.number}</Text>
           <TouchableOpacity onPress={()=> this.handleClick(Myname)}>
           <Text>+</Text>
           </TouchableOpacity>

          <Image source={require( './Gampang.jpg')}/>
      </View>
    );
  }
}



