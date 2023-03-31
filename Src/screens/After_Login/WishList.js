// import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Headers from '../../components/comancomponents/Headers'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import SimpleToast from 'react-native-simple-toast'
// import Colors from '../../constents/Colors'
// import Loader from '../../components/UI/Loader'
// import ViewContainer from '../../components/HOC/ViewContainer'
// import Clickable from '../../components/HOC/Clickble'
// import Paragraph from '../../components/UI/Paragraph'
// import {IconPath, ImagePath} from '../../Assets';
// import { useIsFocused } from '@react-navigation/native'

// const WishList = () => {
// const [ WishList, setWishList] =  useState([])
// const [ loaded, setloaded] =  useState(true)



// const GetDeleteApi =async ({item}) =>{
//   console.log('==-Delete-Api-item===>', item);

//   let token = await AsyncStorage.getItem('Token')
//   token = await JSON.parse(token)

//   let Data = {
//     method:'DELETE',
//     headers:{
//       'Content-Type': 'application/json',
//       Authorization: `Bearer${token}`,
//     } 
//   }
//   try{
//   let results= await fetch(
//     `https://awsnodejs.onrender.com/DreamCoder/api/DeleteWishListProduct/${item._id}`,
//      Data)
//   let res = await results.json()
//   let resdata=  await res
//   if(resdata){
//     SimpleToast.show(`Delete Product ${item.title} ID ${item._id}`,
//     SimpleToast.SHORT)
//     GetWishList();
//   }

//   console.log("---Wishlist-Delete-Api-resdata---",resdata);
//   }catch(error){
//     console.log('deleteApi---error',error);
//   }
//   }



//   const GetWishList = async() =>{
//  let token = await AsyncStorage.getItem('Token')
//  token =await JSON.parse(token)

//  let objct = {
//   method:'GET',
//   headers :{
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   }
//  }

//  try{
//   let data = await fetch('https://awsnodejs.onrender.com/DreamCoder/api/getWishListProduct',
//   objct)
//   let res =  await data.json();
//   let resdata = await res
//   setWishList(resdata.data|| [])
//   if(resdata.massage){
// SimpleToast.show(resdata.massage,SimpleToast.SHORT)
//   }
//   // console.log('-Wishlist---->',resdata);
//  }catch(error){
//   alert(' Wishlist Api Internal Server Error')
// console.log('---Wishlist Api error',error);
//  }
//  setloaded(false)
//   }

//   useEffect(()=>{
//     GetWishList();
//   },[useIsFocused()])


//   const renderItem = ({item}) => {
//     return (
//       <Clickable style={styles.FlatMainContainer}>
//         <View style={styles.ImageMainContainer}>
//           <Image
//             source={{uri: item.img}}
//             style={styles.img}
//             resizeMode="cover"
//           />
//         </View>

//         <Clickable
//           style={styles.heartcontainer}
//           onPress={() => GetDeleteApi(item)}
//           >
//           <Image source={IconPath.delete} style={styles.heart} />
//         </Clickable>
//         <View style={styles.persentcontainer}>
//           <Paragraph
//             size={13}
//             color={Colors.purple}
//             style={{fontWeight: 'bold'}}>
//             {item.disPrsent}
//           </Paragraph>
//         </View>


//         <View style={{marginVertical: 5, marginHorizontal: 15}}>
//           <Paragraph color={Colors.darkgray} size={13}>
//             {item.title}
//           </Paragraph>
//           {/* <Paragraph color="green" style={{fontWeight: 'bold'}}>
//             {item.dis}
//             {'  '}
//             <Paragraph
//               style={{textDecorationLine: 'line-through'}}
//               color={Colors.darkgray}>
//               {item.price}
//             </Paragraph>
//           </Paragraph> */}
         
//         </View>
//       </Clickable>
//     );
//   };

//   return (
//     <ViewContainer>
//       <Headers title="Wishlist" />
//       <Loader loading={loaded} />
//       {WishList?.length == 0 ? (
//         <View style={styles.WishListContainer}>
//           <Image source={ImagePath.EmptyWishlist} style={styles.WishListImg} />
//           <Paragraph size={22} color={Colors.darkgray} top={10}>
//             WishList is Empty
//           </Paragraph>
//         </View>
//       ) : (
//         ''
//       )}

//       <FlatList renderItem={renderItem} data={WishList} numColumns={2} />
//     </ViewContainer>
//   );
// };

// export default WishList;

// const styles = StyleSheet.create({
//   WishListContainer: {
//     width: '100%',
//     height: 400,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   WishListImg: {
//     width: '50%',
//     height: '50%',
//   },
//   FlatMainContainer: {
//     width: '45%',
//     height: 330,
//     borderWidth: 0.5,
//     borderColor: Colors.gray,
//     borderRadius: 10,
//     margin: 5,
//     left: 7,
//     backgroundColor: Colors.white,
//     elevation: 10,
//   },
//   heartcontainer: {
//     position: 'absolute',
//     right: 10,
//     top: 10,
//     // borderWidth: 1,
//     width: 30,
//     height: 30,
//     backgroundColor: Colors.white,
//     borderRadius: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.white,
//   },
//   heart: {
//     width: '60%',
//     height: '60%',
//     tintColor: Colors.black,
//   },
//   persentcontainer: {
//     position: 'absolute',
//     left: 10,
//     top: 10,
//     // borderWidth: 1,
//     backgroundColor: Colors.white,
//     width: 40,
//     height: 20,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   ratting: {
//     width: 13,
//     height: 13,
//     tintColor: Colors.orrenge,
//   },
//   ImageMainContainer: {
//     borderWidth: 0,
//     backgroundColor: Colors.gray + 50,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     height: 220,
//   },
//   rattingMainContainer: {
//     flexDirection: 'row',
//     marginVertical: 3,
//     borderWidth: 0,
//     width: '55%',
//     justifyContent: 'space-between',
//     left: 5,
//   },
//   img: {
//     width: '100%',
//     height: '100%',
//     borderTopRightRadius: 10,
//     borderTopLeftRadius: 10,
//   },
// });

import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Headers from '../../components/comancomponents/Headers';
import {IconPath, ImagePath} from '../../Assets';
import Colors from '../../constents/Colors';
import Paragraph from '../../components/UI/Paragraph';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Clickable from '../../components/HOC/Clickble';
import ViewContainer from '../../components/HOC/ViewContainer';
import SimpleToast from 'react-native-simple-toast';
import Loader from '../../components/UI/Loader';

const WishList = ({navigation}) => {
  const [WishList, setWishListt] = useState([]);
  const [loaded, setloaded] = useState(true);

  const DeleteWishlist = async item => {
    console.log('==WishList-Delete-Api-item===>', item);
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
        `https://awsnodejs.onrender.com/DreamCoder/api/DeleteWishListProduct/${item._id}`,
        Data,
      );
      let res = await result.json();
      let resdata = await res;
      if (resdata) {
        SimpleToast.show(
          `Delete Products ${item.title} ID ${item._id}`,
          SimpleToast.SHORT,
        );
        GetWishList();
      }
      console.log('==WishList-Delete-Api-resdata===>', resdata);
    } catch (error) {
      console.log('==WishList-Delete-Api-Error===>', error);
    }
  };

  useEffect(() => {
    GetWishList();
  }, [useIsFocused()]);

  const GetWishList = async () => {
    let token = await AsyncStorage.getItem('Token');
    token = await JSON.parse(token);
    let obj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      let data = await fetch(
        'https://awsnodejs.onrender.com/DreamCoder/api/getWishListProduct',
        obj,
      );
      let res = await data.json();
      let response = await res;
      setWishListt(response.data || []);
      if (response.massage) {
        SimpleToast.show(response.massage, SimpleToast.SHORT);
      }
      console.log('====WishList====>', response);
    } catch (err) {
      alert('Sorry! Wishlist Api Internal Server Error')
      console.log('====WishList-Api-Error====>', err);
    }

    setloaded(false);
  };

  const renderItem = ({item}) => {
    return (
      <Clickable style={styles.FlatMainContainer}>
        <View style={styles.ImageMainContainer}>
          <Image
            source={{uri: item.img}}
            style={styles.img}
            resizeMode="cover"
          />
        </View>
        <Clickable
          style={styles.heartcontainer}
          onPress={() => DeleteWishlist(item)}>
          <Image source={IconPath.delete} style={styles.heart} />
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
          <Paragraph color={Colors.darkgray} size={13}>
            {item.title}
          </Paragraph>
          <Paragraph color="green" style={{fontWeight: 'bold'}}>
            {item.dis}
            {'  '}
            <Paragraph
              style={{textDecorationLine: 'line-through'}}
              color={Colors.darkgray}>
              {item.price}
            </Paragraph>
          </Paragraph>
          {/* <View style={styles.rattingMainContainer}>
            <Image source={IconPath.rating} style={styles.ratting} />
            <Image source={IconPath.rating} style={styles.ratting} />
            <Image source={IconPath.rating} style={styles.ratting} />
            <Image source={IconPath.rating} style={styles.ratting} />
            <Image source={IconPath.rating} style={styles.ratting} />
          </View> */}
        </View>
      </Clickable>
    );
  };

  return (
    <ViewContainer>
      <Headers title="Wishlist" />
      <Loader loading={loaded} />
      {WishList?.length == 0 ? (
        <View style={styles.WishListContainer}>
          <Image source={ImagePath.EmptyWishlist} style={styles.WishListImg} />
          <Paragraph size={22} color={Colors.darkgray} top={10}>
            WishList is Empty
          </Paragraph>
        </View>
      ) : (
        ''
      )}

      <FlatList renderItem={renderItem} data={WishList} numColumns={2} />
    </ViewContainer>
  );
};

export default WishList;

const styles = StyleSheet.create({
  WishListContainer: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  WishListImg: {
    width: '50%',
    height: '50%',
  },
  FlatMainContainer: {
    width: '45%',
    height: 330,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    borderRadius: 10,
    margin: 5,
    left: 7,
    backgroundColor: Colors.white,
    elevation: 10,
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
    width: '60%',
    height: '60%',
    tintColor: Colors.red,
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
  ratting: {
    width: 13,
    height: 13,
    tintColor: Colors.orrenge,
  },
  ImageMainContainer: {
    borderWidth: 0,
    backgroundColor: Colors.gray + 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 220,
  },
  rattingMainContainer: {
    flexDirection: 'row',
    marginVertical: 3,
    borderWidth: 0,
    width: '55%',
    justifyContent: 'space-between',
    left: 5,
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
