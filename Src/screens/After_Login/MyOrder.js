import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../components/comancomponents/Headers'

const MyOrder = ({navigation}) => {
  return (
    <View>
      <Headers title='My Order' type='Icon' onPress={() =>navigation.goBack()}/>
    </View>
  )
}

export default MyOrder

const styles = StyleSheet.create({})