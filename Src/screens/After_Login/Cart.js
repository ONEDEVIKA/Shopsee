// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Headers from '../../components/comancomponents/Headers'

// const Cart = () => {
 
//   const AddtoCart = async () => {
//     let token = await AsyncStorage.getItem('Token');
//     token = await JSON.parse(token)
//     console.log("=====token",token)
//     try {
//       let body = {
//         title: CardListData.title,
//         Image: CardListData.Image[0],
//         disPrice: CardListData.disPrice,
//         sellingPrice: CardListData.sellingPrice,
//         COD: CardListData.COD,
//         Status: CardListData.Status,
//         size: CardListData.size,
//         quentity: CardListData.quentity,
//         color:CardListData.color,
//         disPrsent:CardListData.disPrsent
      

//       };
//       let Data = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       let results = await fetch(
//         'https://awsnodejs.onrender.com/DreamCoder/api/addCartProduct',
//         Data,
//       );
//       let res = await results.json();
//       let resdata = await res;
//       if(resdata){
//         alert("Product Added...")
//       }
//       // await AsyncStorage.setItem('Cart', JSON.stringify(resdata));
//       console.log('=====AddtoCart-resdata=====>', resdata);
//     } catch (error) {
//       console.log('==AddtoCart-Api-Error====', error);
//     }
//   };
//   return (
//     <View>
//       <Headers title="Cart" />

    
    
//     </View>
//   )
// }

// export default Cart

// const styles = StyleSheet.create({})




import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Headers from '../../components/comancomponents/Headers';
import {ImagePath} from '../../Assets';
import Paragraph from '../../components/UI/Paragraph';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../constents/Colors';
import {useIsFocused} from '@react-navigation/native';
import ViewContainer from '../../components/HOC/ViewContainer';
import Clickable from '../../components/HOC/Clickble';
import SimpleToast from 'react-native-simple-toast';
import Loader from '../../components/UI/Loader';

const Cart = () => {
  const [cartList, setcartList] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [count, setcount] = useState(1);
  const Add = () => {
    if (count < 20) {
      a = count + 1;
      setcount(a);
    }
  };
  const Sub = () => {
    if (count > 1) {
      a = count - 1;
      setcount(a);
    }
  };
  const DeleteAPI = async item => {
    let token = await AsyncStorage.getItem('Token');
    token = await JSON.parse(token);
    let Data = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      let result = await fetch(
        `https://awsnodejs.onrender.com/DreamCoder/api/DeleteProduct/${item._id}`,
        Data,
      );
      let res = await result.json();
      let resdata = await res;
      console.log('===Delete-API-resdata===>', resdata);
      if (resdata) {
        SimpleToast.show(
          `Delete Products ${item.title} ID ${item._id}`,
          SimpleToast.SHORT,
        );
        getCartData();
      }
    } catch (error) {
      console.log('===Delete-API-Error====>', error);
    }
  };
  useEffect(() => {
    getCartData();
  }, [useIsFocused()]);
  const getCartData = async () => {
    setloaded(true)
    let token = await AsyncStorage.getItem('Token');
    token = await JSON.parse(token);
    // console.log('===Token====>',token);
    let obj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try{
      let data = await fetch(
        'https://awsnodejs.onrender.com/DreamCoder/api/getCartProduct',
        obj,
      );
      let res = await data.json();
      let response = await res;
      // console.log('response', response);
  
      setcartList(response.data || []);
      if (response.massage) {
        SimpleToast.show(response.massage, SimpleToast.SHORT);
      }
      console.log('====CartList====>', cartList);
    }
    catch(err){
      alert('Sorry! Cart Api Internal Server Error')
      console.log('===AddToCart-Get-Api-Error',err);
    }
    setloaded(false);
  
  };
  const renderItem = ({item}) => {
    // console.log('====Cart===Item===>', item);
    return (
      <View style={styles.FlatList_MainContainer}>
        <View style={styles.ImgMainContainer}>
          <Image
            source={{uri: item.Image}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.txtMainCOntainer}>
          <View style={{borderWidth: 0, width: '100%', height: 20,}}>
            <Paragraph style={styles.txt}>{item.title}...</Paragraph>
          </View>
          <Paragraph style={styles.txt1}>Color:{item.color}</Paragraph>
          <Paragraph style={styles.txt1}>Size:</Paragraph>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Paragraph style={styles.txt} size={15}>
              ₹{item.disPrice}{' '}
              <Paragraph
                size={15}
                style={{textDecorationLine: 'line-through'}}
                color={Colors.darkgray}>
                {item.sellingPrice}
              </Paragraph>
            </Paragraph>

            <View style={styles.persentContainer}>
              <Paragraph size={13} color={Colors.purple} style={styles.txt}>
                -{item.disPrsent}Off
              </Paragraph>
            </View>
          </View>
          <View
            style={{
              // borderWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Paragraph style={styles.txt} color={Colors.green} size={14}>
              {item.COD}
            </Paragraph>
            <View style={styles.IncMainContainer}>
              <Clickable style={styles.IncContainer} onPress={() => Sub()}>
                <Paragraph size={31.5} bottom={10}>
                  -
                </Paragraph>
              </Clickable>
              <Paragraph size={20} style={styles.txt} color={Colors.darkgray}>
                {count}
              </Paragraph>
              <Clickable style={styles.IncContainer} onPress={() => Add()}>
                <Paragraph size={20} bottom={0} color={Colors.darkgray}>
                  +
                </Paragraph>
              </Clickable>
            </View>
          </View>
          <Clickable style={{width: 55}} onPress={() => DeleteAPI(item)}>
            <Paragraph color={Colors.red} style={styles.txt} size={15}>
              Remove
            </Paragraph>
          </Clickable>
        </View>
      </View>
    );
  };
  return (
    <ViewContainer>
      <Headers title="Cart" />
      <Loader loading={loaded} />
      {cartList?.length == 0 ? (
        <View style={styles.CartListContainer}>
          <Image source={ImagePath.EmptyCart} style={styles.CartListImg} />
          <Paragraph size={22} color={Colors.darkgray} top={20}>
            Cart is Empty
          </Paragraph>
        </View>
      ) : (
        ''
      )}
      <FlatList renderItem={renderItem} data={cartList} />
    </ViewContainer>
  );
};

export default Cart;

const styles = StyleSheet.create({
  CartListContainer: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CartListImg: {
    width: '50%',
    height: '50%',
  },
  FlatList_MainContainer: {
    width: '95%',
    height: 190,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.gray + 10,
  },
  ImgMainContainer: {
    width: '40%',
    height: 130,
    borderWidth: 0.5,
    borderColor: Colors.gray + 50,
    backgroundColor: Colors.gray + 50,
    borderRadius: 10,
  },
  txtMainCOntainer: {
    width: '55%',
    height: 180,
    // borderWidth: 1,
    padding: 5,
  },
  txt: {
    fontWeight: 'bold',
  },
  txt1: {
    color: Colors.darkgray,
    fontSize: 13,
    paddingVertical: 4,
    fontWeight: 'bold',
  },
  persentContainer: {
    borderWidth: 0.5,
    width: '40%',
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
  },
  IncContainer: {
    // borderWidth: 1,
    width: 22,
    height: 22,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray + 70,
  },
  IncMainContainer: {
    height: 30,
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth:1,
    // marginVertical:5
    right: 10,
  },
});
