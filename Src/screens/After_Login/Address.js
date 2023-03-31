import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ViewContainer from '../../components/HOC/ViewContainer';
import UiButton from '../../components/UI/UiButton';
import Headers from '../../components/comancomponents/Headers';

const Address = ({navigation}) => {
  return (
    <ViewContainer>
      <Headers
        title="Address"
        type="Icon"
        onPress={() => navigation.goBack()}
      />
      <UiButton
        text="Add New Address"
        style={{width: '100%'}}
        onPress={() => navigation.navigate('AddAddress')}
      />
    </ViewContainer>
  );
};

export default Address;

const styles = StyleSheet.create({});
