import {StyleSheet, Text, View, Image} from 'react-native';
import React,{useState} from 'react';
import ViewContainer from '../../components/HOC/ViewContainer';
import {ImagePath} from '../../Assets';
import Input from '../../components/UI/Input';
import UiButton from '../../components/UI/UiButton';
import Headers from '../../components/comancomponents/Headers';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Colors from '../../constents/Colors';

const EditProfile = ({navigation}) => {
  const items = [
    {label: 'Male', value: 0},
    {label: 'Female', value: 1},
    {label: 'Other', value: 2}

  ];
  const [value, setvalue] = useState(0);

  return (
    <ViewContainer>
      <Headers
        title="Edit Profile"
        type="Icon"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.imgContainer}>
        <Image source={ImagePath.AppIcon} style={styles.img} />
      </View>
      <Input placeholder={'Please Enter YOur First Name'} />
      <Input placeholder={'Please Enter YOur Last Name'} />
      {/* <View
        style={{
          alignItems: 'center',
          marginVertical: 8,
          right: '5%',
        }}>
        <RadioForm formHorizontal={true}>
          {items.map((obj, index) => (
            <RadioButton labelHorizontal={true} key={index} style={{}}>
              <RadioButtonInput
                obj={obj}
                index={index}
                isSelected={index === value}
                onPress={(value) => setvalue(value)}
                borderWidth={2}
                buttonInnerColor={Colors.purple}
                buttonOuterColor={
                  index === value ? Colors.purple : Colors.smokegrey
                }
                buttonSize={8}
                // buttonOuterSize={19}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 30}}
              />
              <RadioButtonLabel
                obj={obj}
                index={index}
                labelHorizontal={true}
                labelStyle={{color: Colors.smokegrey}}
                labelWrapStyle={{}}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View> */}
     
     
     <View style={{alignItems: 'center',left: '5%'}}>
              <RadioForm
                radio_props={items}
                initial={value}
                onPress={value => setvalue(value)}
                selectedButtonColor={Colors.purple}
                buttonColor={Colors.smokegrey}
                formHorizontal
                buttonSize={9}
                buttonOuterSize={19}
                labelStyle={{
                  color: Colors.smokegrey,
                  marginLeft: 0,
                  paddingRight: 35,
                }}
              />
            </View>
      <UiButton text="Update Profile" />
    </ViewContainer>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    height: 160,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
