import {StyleSheet, View, Image, FlatList} from 'react-native';
import React from 'react';
import {IconPath, ImagePath} from '../../Assets';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import ViewContainer from '../../components/HOC/ViewContainer';
import Clickable from '../../components/HOC/Clickble';
import Headers from '../../components/comancomponents/Headers';

const Profile = ({navigation}) => {
  const Data = [
    {
      Icon: IconPath.login,
      name: 'Login',
      next: IconPath.next,
      Routs: 'Login',
    },
    {
      Icon: IconPath.user,
      name: 'My Profile',
      next: IconPath.next,
      Routs: 'EditProfile',
    },
    {
      Icon: IconPath.key,
      name: 'Chenge Password',
      next: IconPath.next,
      Routs: 'ChangePassword',
    },
    {
      Icon: IconPath.order,
      name: 'My Order',
      next: IconPath.next,
      Routs: 'MyOrder',
    },
    {
      Icon: IconPath.gift,
      name: 'My Gift',
      next: IconPath.next,
      Routs: 'Gift',
    },

    {
      Icon: IconPath.save,
      name: 'Manage Address',
      next: IconPath.next,
      Routs: 'Address',
    },

    {
      Icon: IconPath.exit,
      name: 'Sign Out',
      next: IconPath.next,
      Routs: 'SignUp',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Clickable
        style={styles.FlatMainContainer}
        onPress={() => navigation.navigate(item.Routs)}>
        <View style={styles.icon}>
          <Image source={item.Icon} style={styles.Icon} />
        </View>
        <View style={styles.name}>
          <Paragraph style={{fontWeight: 'bold'}}>{item.name}</Paragraph>
        </View>
        <View style={styles.icon}>
          <Image source={item.next} style={styles.Icon} />
        </View>
      </Clickable>
    );
  };
  return (
    <ViewContainer style={{backgroundColor: Colors.white, flex: 1}}>
      <Headers  title='Profile'/>
      <View style={styles.AppIconMainContainer}>
        <View style={styles.imgContainer}>
          <Image source={ImagePath.AppIcon} style={styles.AppIcon} />
        </View>
        <View style={styles.txtContainer}>
          <Paragraph size={20} style={styles.txt}>
            Devika
          </Paragraph>
          <Paragraph color={Colors.lightGray} style={styles.txt} size={15}>
          123456789
          </Paragraph>
        </View>
      </View>
      <View style={{top: -15}}>
        <FlatList renderItem={renderItem} data={Data} />
      </View>
     
    </ViewContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  AppIcon: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  AppIconMainContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  txtContainer: {
    marginLeft: 10,
  },
  imgContainer: {
    marginLeft: 20,
  },
  txt: {
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  FlatMainContainer: {
    width: '85%',
    alignSelf: 'center',
    height: 50,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.gray,
    margin: 5,
    flexDirection: 'row',
  },
  icon: {
    width: '20%',
    height: 50,
    // borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    width: '60%',
    height: 50,
    // borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
  },

  Icon: {
    width: 20,
    height: 20,
  },
 
});
