import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Paragraph from '../UI/Paragraph';
import {IconPath} from '../../Assets';
import Colors from '../../constents/Colors';
import Clickable from '../HOC/Clickble';
import {useIsFocused} from '@react-navigation/native';

const Card = ({data = [], horizontal = true, onPress = () => {}}) => {
  const [LikeCHenge, setLikeCHenge] = useState(IconPath.unlike);
  // const [CartData, setCartData] = useState(data);

  // console.log('====data===>',data);

  const ImageChengeFUnction = index => {
    let chenge =
      LikeCHenge == IconPath.unlike ? IconPath.like : IconPath.unlike;
    setLikeCHenge(chenge);
  };
  const renderItem1 = ({item, index}) => {
    // console.log('====Card-Item====>',item);
    return (
      <Clickable style={styles.fltcontainer1} onPress={onPress}>
        <View
          style={{
            borderWidth: 0,
            backgroundColor: Colors.gray + 50,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 220,
          }}>
          <Image
            source={{uri:item?.Image[0]}}
            style={styles.img1}
            resizeMode="contain"
          />
        </View>
        <Clickable
          style={styles.heartcontainer}
          onPress={() => ImageChengeFUnction(item, index)}>
          <Image source={LikeCHenge} style={styles.heart} />
        </Clickable>
        <View style={styles.persentcontainer}>
          <Paragraph
            size={13}
            color={Colors.purple}
            style={{fontWeight: 'bold'}}>
            {item.disPrsent}
          </Paragraph>
        </View>

        <View style={{marginVertical: 5, marginHorizontal: 15}}>
          <View style={{width: '100%', height: 18}}>
            <Paragraph color={Colors.darkgray} size={13}>
              {item.title}
            </Paragraph>
          </View>
          <Paragraph color="green" style={{fontWeight: 'bold'}}>
            {item.disPrice}
            {'  '}
            <Paragraph
              style={{textDecorationLine: 'line-through'}}
              color={Colors.darkgray}>
              {item.sellingPrice}
            </Paragraph>
          </Paragraph>
       
        </View>
      
      </Clickable>
    );
  };
  return (
    <View>
      <FlatList renderItem={renderItem1} data={data} horizontal={horizontal} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  fltcontainer1: {
    width: 200,
    height: 290,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    margin: 10,
    // backgroundColor: Colors.gray + 50,
    borderRadius: 10,
  },
  img1: {
    width: '100%',
    height: '100%',
  },
  persentcontainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    // borderWidth: 1,
    backgroundColor: Colors.white,
    width: 40,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartcontainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    // borderWidth: 1,
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  heart: {
    width: '65%',
    height: '65%',
  },
});