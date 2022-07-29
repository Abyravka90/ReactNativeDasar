import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Operan extends Component {
  render() {
    const { sekolah } =this.props
    return (
      <View>
        <Text>Ini adalah props: {sekolah}</Text>
      </View>
    )
  }
}