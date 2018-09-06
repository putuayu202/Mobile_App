import React, {Component} from 'react';
import {Text } from 'react-native';

class Judul extends React.Component{
  render(){
    return (
      <Text style= {salon.Judul}>{this.props.title}</Text>
      )
  }
}
const salon = {
  Judul: {
    color: "red",
    fontSize: 40,
    fontWeight : 'Bold'
  }
}

export default Judul