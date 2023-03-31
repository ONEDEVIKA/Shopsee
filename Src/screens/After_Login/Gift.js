import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../components/comancomponents/Headers'

const Gift = ({navigation}) => {
  return (
    <View>
       <Headers
        title="Gift"
        type="Icon"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Gift

const styles = StyleSheet.create({})