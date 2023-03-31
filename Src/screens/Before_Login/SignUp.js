import { StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react';
import FormContainer from '../../components/HOC/FormContainer';
import { ImagePath } from '../../Assets';
import ViewContainer from '../../components/HOC/ViewContainer';
import Input from '../../components/UI/Input';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import UiButton from '../../components/UI/UiButton';
import { isValidForm, validators } from '../../constents/Validation';
import RadioForm, {
  RadioButton, RadioButtonInput, RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Headers from '../../components/comancomponents/Headers';

const SignUp = ({ navigation }) => {
  const items = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 },
    { label: 'Other', value: 2 }
  ];
  const [value, setvalue] = useState(0);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [gender, setgender] = useState('');
  const [error, seterror] = useState({});

  const SignUpApiWithValidation = async () => {
    const Form = {
      FirstName: validators.checkRequire('First Name', firstname),
      LastName: validators.checkRequire('Last Name', lastname),
      Email: validators.checkEmail('Email', email),
      Password: validators.checkPassword('Password', password),
      Gender: validators.checkPhoneNumber('Gender', number),
    };
    seterror(Form);
    if (isValidForm(Form)) {
      try {
        let body = {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          gender: gender,
        };
        let Data = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        };
        let results = await fetch('https://awsnodejs.onrender.com/DreamCoder/api/userAuth/signup',
          Data,);
        let res = await results.json()
        let resdata = await res
        if (resdata.status == true) {
          navigation.navigate('ButtomTab')
        }
        console.log('===Signup-resdata===>', resdata);

      } catch (error) {
        console.log('==SignUp-Api-Error', error);

      }

    };

  };
  return (
    <ViewContainer>
      <Headers
        title="Sign Up"
        type="Icon"
        onPress={() => navigation.goBack()}
      />
      <FormContainer>
        <View style={styles.imgCnt}>
          <Image source={ImagePath.AppIcon} style={styles.img} />
        </View>
        <Input
          placeholder={'First Name'}
          onChange={setfirstname}
          error={error?.FirstName}
        />

        <Input
          placeholder={'Last Name'}
          onChange={setlastname}
          error={error?.LastName}
        />

        <Input
          placeholder={'Enter Phone Number or Email'}
          onChange={setemail}
          error={error?.Email}
        />
        <Input
          placeholder={'Password'}
          onChange={setpassword}
          error={error?.Password}
        />
        {/* <View style={{ alignItems: 'center', left: '5%' }}>
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
        </View> */}
         <Input
          placeholder={'Gender'}
          onChange={setgender}
          error={error?.Gender}
        />

        <UiButton text="Sign Up" onPress={() => SignUpApiWithValidation()} />
        <Paragraph textAlign="center">
          I have Alrdy Account?{' '}
          <Paragraph
            color={Colors.purple}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Paragraph>
        </Paragraph>
      </FormContainer>
    </ViewContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  imgCnt: {
    width: '100%',
    height: 160,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    borderRadius: 100,
    height: 100,

  },
});
