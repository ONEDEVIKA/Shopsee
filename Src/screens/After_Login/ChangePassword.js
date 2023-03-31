import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Headers from '../../components/comancomponents/Headers';

const ChangePassword = ({navigation}) => {
  return (
    <View>
      <Headers
        title="Change Password"
        type="Icon"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
