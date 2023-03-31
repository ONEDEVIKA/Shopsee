
// import { StyleSheet, View, Image, Share, Alert, FlatList } from 'react-native';
// import React, { useState } from 'react';
// import ScrollContainer from '../../components/HOC/ScrollContainer';
// import Colors from '../../constents/Colors';
// import { IconPath } from '../../Assets';
// import Clickable from '../../components/HOC/Clickble';
// import ViewContainer from '../../components/HOC/ViewContainer';
// import UiButton from '../../components/UI/UiButton';
// import Paragraph from '../../components/UI/Paragraph';
// import Input from '../../components/UI/Input';
// import Swiper from 'react-native-swiper';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const CardDetails = ({ route, navigation }) => {
//   // const CardList = route?.params?.data;
//   const [LikeChenge, setLikeChenge] = useState(IconPath.unlike);
//   const [colorss, setcolorss] = useState(Colors.gray);
//   const [count, setcount] = useState(1);

//   const CardListData = route?.params?.data

//   // console.log('---------CardList===>', CardListData);

//   const onShare = async () => {
//     try {
//       const result = await Share.share({
//         message: CardListData.title,
//       });
//     } catch (error) {
//       Alert.alert(error.message);
//     }
//   };



//   const AddtoWishList = async() => {
//     let token = await AsyncStorage.getItem('Token');
//     token = await JSON.parse(token);


//     let chenge =
//       LikeChenge == IconPath.unlike ? IconPath.like : IconPath.unlike;

//     setLikeChenge(chenge);

//     let body = {
//       title: CardListData.title,
//       dis: CardListData.disPrice,
//       price: CardListData.sellingPrice,
//       img: CardListData.Image[0],
//       disPrsent:CardListData.disPrsent
//     };

//     let Data = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(body),
//     };

//     let result = await fetch(
//       'https://awsnodejs.onrender.com/DreamCoder/api/addWishListProduct',
//       Data,
//     );
//     let res = await result.json();
//     let resdata = await res;
//     if(resdata){
//       alert("Product Added Wishlist...")
//     }
//     console.log('==Wishlist-resdata====>', resdata);
//   };






//   const Add = () => {
//     if (count < 20) {
//       Ad = count + 1;
//       setcount(Ad);
//     }
//   };
//   const Sub = () => {
//     if (count > 1) {
//       Sb = count - 1;
//       setcount(Sb);
//     }
//   };

//   // const AddtoCart = async () => {
//   //   let token = await AsyncStorage.getItem('Token')
//   //   token = await JSON.parse(token)
//   //   console.log('====>toke', token);

//   //   try {
//   //     let body = {
//   //       title: CardListData.title,
//   //       Image: CardListData.Image[0],
//   //       disPrice: CardListData.disPrice,
//   //       sellingPrice: CardListData.sellingPrice,
//   //       COD: CardListData.COD,
//   //       Status: CardListData.Status,
//   //       size: CardListData.size,
//   //       quentity: CardListData.quentity,
//   //       color: CardListData.color,
//   //       disPrsent: CardListData.disPrsent,

//   //     };
//   //     let Data = {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         Authorization: `Bearer ${token}`
//   //       },
//   //       body: JSON.stringify(body)
//   //     };
//   //     let results = await fetch('https://awsnodejs.onrender.com/DreamCoder/api/addCartProduct',
//   //       Data)
//   //     let res = await results.json()
//   //     let resdata = await res
//   //     if (resdata) {
//   //       alert("Product Added...")
//   //     }
//   //     console.log('ressssData=======>', resdata);

//   //   } catch (error) {
//   //     console.log('========AD TOCARD============erre', error);
//   //   }

//   // }


//   // const AddtoWishlist = async () => {
//   //   let token = await AsyncStorage.getItem('Token')
//   //   token = await JSON.parse(token)

//   //   let chenge = LikeChenge == IconPath.unlike ? IconPath.like : IconPath.unlike;
//   //   setLikeChenge(chenge);

//   //   let body = {
//   //     title: CardListData.title,
//   //     dis: CardListData.disPrice,
//   //     price: CardListData.sellingPrice,
//   //     img: CardListData.Image[0],
//   //     disPrsent: CardListData.disPrsent
//   //   };
//   //   let Data = {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       Authorization: `Bearer ${token}`
//   //     },
//   //     body: JSON.stringify(body)
//   //   }
//   //   let results = await fetch('https://awsnodejs.onrender.com/DreamCoder/api/DeleteWishListProduct',
//   //     Data);
//   //   let res = await results.json()
//   //   let resdata = await res

//   //   if (resdata) {
//   //     alert('Product Add Wishlist')
//   //   }


//   // }



//   const ColorsChenge = ({ index }) => {
//     let color = colorss == Colors.purple ? Colors.darkyellow + 50 : Colors.purple;
//     setcolorss(color);
//   };
//   const renderItem = ({ item, index }) => {
//     // console.log("=============>", item);
//     return (
//       <Clickable
//         style={{
//           width: 40,
//           height: 40,
//           borderRadius: 20,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: colorss,
//           margin: 7,

//         }}
//         onPress={() => ColorsChenge(index)}>
//         <Paragraph>{item[0]}</Paragraph>
//       </Clickable>
//     );
//   };

//   return (
//     <ViewContainer>
//       <ScrollContainer>
//         <View style={styles.ImhMainContainer}>
//           <View style={{ width: '100%', height: 400, borderWidth: 0 }}>
//             <Swiper autoplay={true} showsPagination={false}>
//               <Image
//                 source={{ uri: CardListData.Image[0] }}
//                 style={{ width: '100%', height: '100%' }}
//                 resizeMode="contain"
//               />
//               <Image
//                 source={{ uri: CardListData.Image[1] }}
//                 style={{ width: '100%', height: '100%' }}
//                 resizeMode="contain"
//               />
//               <Image
//                 source={{ uri: CardListData.Image[2] }}
//                 style={{ width: '100%', height: '100%' }}
//                 resizeMode="contain"
//               />
//             </Swiper>
//           </View>
//           <View style={{ position: 'absolute', top: 15, right: 2 }}>
//             <Clickable style={styles.IconContainer} onPress={() => AddtoWishList()}>
//               <Image source={LikeChenge} style={styles.HeartIcon} />
//             </Clickable>
//             <Clickable style={styles.IconContainer} onPress={() => onShare()}>
//               <Image source={IconPath.share} style={styles.HeartIcon} />
//             </Clickable>
//           </View>
//           <Clickable
//             style={styles.BackContainer}
//             onPress={() => navigation.goBack()}>
//             <Image source={IconPath.back} style={styles.BackIcon} />
//           </Clickable>
//         </View>








//         <View style={styles.TextMainCOntainer}>
//           <View style={styles.TextMainWhiteCOntainer}>
//             <Paragraph size={20} style={styles.txt}>
//               {CardListData.title}
//             </Paragraph>



//             <View style={styles.persentPriceMainContainer}>
//               <Paragraph color={Colors.purple} style={styles.txt}>
//                 {CardListData.disPrice}
//                 {'  '}
//                 <Paragraph
//                   style={{ textDecorationLine: 'line-through' }}
//                   color={Colors.darkgray}>
//                   {CardListData.sellingPrice}
//                 </Paragraph>{' '}
//               </Paragraph>

//               <View style={styles.persentContainer}>
//                 <Paragraph size={13} color={Colors.purple} style={styles.txt}>
//                   {CardListData.disPrsent}
//                 </Paragraph>
//               </View>
//             </View>




//             <View style={styles.persentPriceMainContainer}>
//               <Paragraph size={14} color={Colors.darkgray}>
//                 Sold By:{' '}
//                 <Paragraph color={Colors.purple} style={styles.txt}>
//                   {CardListData.soldBy}
//                 </Paragraph>
//               </Paragraph>
//               <Paragraph size={14} color={Colors.darkgray}>
//                 Status:{' '}
//                 <Paragraph color={Colors.green} style={styles.txt}>
//                   {CardListData.Status}
//                 </Paragraph>{' '}
//               </Paragraph>
//             </View>
//             <View style={styles.persentPriceMainContainer}>
//               <Paragraph size={14} color={Colors.darkgray}>
//                 COD:{' '}
//                 <Paragraph color={Colors.green} style={styles.txt}>
//                   {CardListData.COD}
//                 </Paragraph>
//               </Paragraph>
//               <Paragraph size={14} color={Colors.darkgray}>
//                 Shipping:{' '}
//                 <Paragraph color={Colors.purple} style={styles.txt}>
//                   Free
//                 </Paragraph>{' '}
//               </Paragraph>
//             </View>

//             <Paragraph style={[styles.txt, { paddingVertical: 15 }]}>
//               Select Your Size
//             </Paragraph>

//             <View>
//               <FlatList renderItem={renderItem} data={CardListData.Size} horizontal />
//             </View>
//             <Paragraph style={[styles.txt, { paddingVertical: 15 }]}>
//               Select Colors
//             </Paragraph>
//             <View style={styles.ColorSelectImages}>
//               <Image
//                 source={{ uri: CardListData.Image[0] }}
//                 style={{ width: '100%', height: '100%' }}
//                 resizeMode="cover"
//               />
//             </View>
//             <Paragraph style={[styles.txt, { paddingVertical: 15 }]}>
//               Quantity
//             </Paragraph>
//             <View style={styles.IncMainContainer}>
//               <Clickable style={styles.IncContainer} onPress={() => Sub()}>
//                 <Paragraph size={48} bottom={15}>
//                   -
//                 </Paragraph>
//               </Clickable>
//               <Paragraph size={20} style={styles.txt} color={Colors.darkgray}>
//                 {count}
//               </Paragraph>
//               <Clickable style={styles.IncContainer} onPress={() => Add()}>
//                 <Paragraph size={40} bottom={7} color={Colors.darkgray}>
//                   +
//                 </Paragraph>
//               </Clickable>
//             </View>
//             <View>
//               <Paragraph style={styles.txt}>Check Delivery</Paragraph>
//               <Input placeholder={'Enter Pincode'} style={styles.inp} />
//             </View>


//             <View>
//               <Paragraph style={styles.txt}>Delivery & Services</Paragraph>
//               <View style={styles.DelSerView}>
//                 <View style={styles.DelSerImg}>
//                   <Image style={styles.DelSerImage} source={IconPath.delevered} />
//                 </View>
//                 <Paragraph size={13}>{'   '}delevered in 7-9 days</Paragraph>
//               </View>
//               <View style={styles.DelSerView}>
//                 <View style={styles.DelSerImg}>
//                   <Image style={styles.DelSerImage} source={IconPath.delevered} />
//                 </View>
//                 <Paragraph size={13}>{'   '}Return & Replacement</Paragraph>
//               </View>
//               <View style={styles.DelSerView}>
//                 <View style={styles.DelSerImg}>
//                   <Image style={styles.DelSerImage} source={IconPath.delevered} />
//                 </View>
//                 <Paragraph size={13}>{'   '}4 hrs express delivery </Paragraph>
//               </View>
//               <View style={styles.DelSerView}>
//                 <View style={styles.DelSerImg}>

//                   <Image style={styles.DelSerImage} source={IconPath.delevered} />
//                 </View>
//                 <Paragraph size={13}>{'   '}Pay online or UPI id</Paragraph>
//               </View>
//             </View>


//             <Paragraph style={[styles.txt, { top: 20 }]}>Highlights</Paragraph>
//             <View style={{ marginVertical: 20, top: 10 }}>
//               <Paragraph>
//                 {' '}
//                 <Paragraph>{CardListData.ProductDetails.fabric}</Paragraph>
//               </Paragraph>
//             </View>


//             <Paragraph style={styles.txt}>Product Details</Paragraph>

//             <View style={styles.ProductDetailsViewCnt}>
//               <Paragraph style={styles.DetailTxtClr} size={13} >
//                 Product Code
//               </Paragraph>
//               <Paragraph style={styles.txt}>{CardListData.ProductDetails.productCode}</Paragraph>
//             </View>

//             <View style={styles.ProductDetailsViewCnt}>
//               <Paragraph style={styles.DetailTxtClr} size={13}>
//                 Idea For
//               </Paragraph>
//               <Paragraph style={styles.txt}>{CardListData.ProductDetails.idealFor}</Paragraph>
//             </View>

//             <View style={styles.ProductDetailsViewCnt}>
//               <Paragraph style={styles.DetailTxtClr} size={13}>
//                 Pack Of
//               </Paragraph>
//               <Paragraph style={styles.txt}>{CardListData.ProductDetails.packOf}</Paragraph>
//             </View>
//             <View style={styles.ProductDetailsViewCnt}>
//               <Paragraph style={styles.DetailTxtClr} size={13}>
//                 occasion
//               </Paragraph>
//               <Paragraph style={styles.txt}>{CardListData.ProductDetails.occasion}</Paragraph>
//             </View>
//             <View style={styles.ProductDetailsViewCnt}>
//               <Paragraph style={styles.DetailTxtClr} size={13}>
//                 fabric
//               </Paragraph>
//               <Paragraph style={styles.txt}>{CardListData.ProductDetails.fabric}</Paragraph>
//             </View>




//           </View>
//         </View>

//       </ScrollContainer>
//       <View style={styles.btnMainContainer}>
//         <View style={[styles.btnContainer, { left: 5 }]}>
//           <UiButton text="Buy now" style={{ width: '86%' }} />
//         </View>
//         <View style={[styles.btnContainer, { right: 5 }]}>
//           <UiButton
//             text="Add to Cart"
//             style={styles.btn}
//             textColor={Colors.purple}
//             onPress={() => AddtoCart()} />
//         </View>
//       </View>
//     </ViewContainer>
//   );
// };

// export default CardDetails;

// const styles = StyleSheet.create({
//   ImhMainContainer: {
//     width: '85%',
//     height: 400,
//     // borderWidth:1,
//     alignSelf: 'center',
//     backgroundColor: Colors.lightGray + 50,
//   },
//   HeartIcon: {
//     width: '60%',
//     height: '60%',
//     tintColor: Colors.purple,
//   },
//   IconContainer: {
//     backgroundColor: Colors.white,
//     width: 35,
//     height: 35,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 50,
//     marginVertical: 5,
//   },
//   BackContainer: {
//     position: 'absolute',
//     top: 30,
//     left: 0,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   BackIcon: {
//     width: '60%',
//     height: '60%',
//   },
//   TextMainCOntainer: {
//     //2nd main container
//     // borderWidth: 1,
//     width: '100%',
//     height: 1100,
//     backgroundColor: Colors.gray + 40,
//   },
//   TextMainWhiteCOntainer: {
//     // borderWidth: 5,
//     width: '100%',
//     height: 1100,
//     borderTopRightRadius: 30,
//     borderTopLeftRadius: 30,
//     backgroundColor: Colors.white,
//     marginVertical: 10,
//     // padding:20
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
//   btn: {
//     width: '87%',
//     backgroundColor: Colors.white,
//     borderWidth: 2,
//     borderColor: Colors.purple,
//   },
//   btnMainContainer: {
//     borderWidth: 0.5,
//     borderColor: Colors.gray,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     width: '100%',
//     height: 110,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   btnContainer: {
//     width: '50%',
//     borderWidth: 0,
//     height: 100,
//   },
//   persentPriceMainContainer: {
//     // borderWidth: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 4,
//   },
//   persentContainer: {
//     borderWidth: 1,
//     width: '15%',
//     height: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//     borderColor: Colors.gray,
//   },
//   txt: {
//     fontWeight: 'bold',
//     top: 5,
//   },
//   ColorSelectImages: {
//     borderWidth: 2,
//     borderColor: Colors.purple,
//     width: '30%',
//     height: 100,
//     backgroundColor: Colors.gray + 60,
//     marginVertical: 7,
//     left: 10,
//   },
//   IncContainer: {
//     // borderWidth: 1,
//     width: 35,
//     height: 35,
//     borderRadius: 17.5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.gray + 70,
//   },
//   IncMainContainer: {
//     height: 50,
//     width: 110,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     bottom: 10,
//   },
//   inp: {
//     width: '100%',
//     marginVertical: 10,
//   },

//   DelSerImg: {
//     width: 30, height: 30, backgroundColor: Colors.purple, justifyContent: 'center', alignItems: 'center', borderRadius: 50
//   },
//   DelSerView: {
//     flexDirection: 'row',
//     paddingVertical: 5,
//     top: 10,
//   },
//   DelSerImage: {
//     width: 22, height: 22,
//     tintColor: 'white'
//   },
//   ProductDetailsViewCnt: {
//     top: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   DetailTxtClr: {
//     color: Colors.darkgray
//   }
// });



import {StyleSheet, View, Image, Share, Alert, FlatList} from 'react-native';
import React, {useState} from 'react';
import ScrollContainer from '../../components/HOC/ScrollContainer';
import Colors from '../../constents/Colors';
import {IconPath} from '../../Assets';
import Clickable from '../../components/HOC/Clickble';
import ViewContainer from '../../components/HOC/ViewContainer';
import UiButton from '../../components/UI/UiButton';
import Paragraph from '../../components/UI/Paragraph';
import Input from '../../components/UI/Input';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CardDetails = ({route, navigation}) => {
  const [LikeChenge, setLikeChenge] = useState(IconPath.unlike);
  const [colorss, setcolorss] = useState(Colors.gray);
  const [count, setcount] = useState(1);

  const CardListData = route?.params?.data;
  console.log('====CardList===>', CardListData);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: CardListData.title,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const AddtoWishList = async() => {
    let token = await AsyncStorage.getItem('Token');
    token = await JSON.parse(token);


    let chenge =
      LikeChenge == IconPath.unlike ? IconPath.like : IconPath.unlike;

    setLikeChenge(chenge);

    let body = {
      title: CardListData.title,
      dis: CardListData.disPrice,
      price: CardListData.sellingPrice,
      img: CardListData.Image[0],
      disPrsent:CardListData.disPrsent
    };

    let Data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };

    let result = await fetch(
      'https://awsnodejs.onrender.com/DreamCoder/api/addWishListProduct',
      Data,
    );
    let res = await result.json();
    let resdata = await res;
    if(resdata){
      alert("Product Added Wishlist...")
    }
    console.log('==Wishlist-resdata====>', resdata);
  };
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
  
  const ColorsChenge = index => {
    // let arr = [...data];
    // arr[index].color =
    //   arr[index].color == Colors.gray + 50 ? Colors.purple : Colors.gray + 50;
    //   setcolorss(arr)

    let color = colorss == Colors.purple ? Colors.gray + 50 : Colors.purple;
    setcolorss(color);
  };

  const AddtoCart = async () => {
    let token = await AsyncStorage.getItem('Token');
    token = await JSON.parse(token)
    console.log("=====token",token)
    try {
      let body = {
        title: CardListData.title,
        Image: CardListData.Image[0],
        disPrice: CardListData.disPrice,
        sellingPrice: CardListData.sellingPrice,
        COD: CardListData.COD,
        Status: CardListData.Status,
        size: CardListData.size,
        quentity: CardListData.quentity,
        color:CardListData.color,
        disPrsent:CardListData.disPrsent
      

      };
      let Data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      };
      let results = await fetch(
        'https://awsnodejs.onrender.com/DreamCoder/api/addCartProduct',
        Data,
      );
      let res = await results.json();
      let resdata = await res;
      if(resdata){
        alert("Product Added...")
      }
      // await AsyncStorage.setItem('Cart', JSON.stringify(resdata));
      console.log('=====AddtoCart-resdata=====>', resdata);
    } catch (error) {
      console.log('==AddtoCart-Api-Error====', error);
    }
  };
  const renderItem = ({item, index}) => {
    // console.log('==SizeArray====>',item);
    return (
      <Clickable
        style={{
          width: 40,
          height: 40,
          // borderWidth: 1,
          margin: 7,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colorss,
        }}
        onPress={() => ColorsChenge(index)}>
        <Paragraph>{item[0]}</Paragraph>
      </Clickable>
    );
  };

  return (
    <ViewContainer>
      <ScrollContainer>
        <View style={styles.ImhMainContainer}>
          <View style={{width: '100%', height: 400, borderWidth: 0}}>
            <Swiper autoplay={true} showsPagination={false}>
              <Image
                source={{uri: CardListData.Image[0]}}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
              <Image
                source={{uri: CardListData.Image[1]}}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
              <Image
                source={{uri: CardListData.Image[2]}}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </Swiper>
          </View>
          <View style={{position: 'absolute', top: 15, right: 2}}>
            <Clickable style={styles.IconContainer} onPress={() => AddtoWishList()}>
              <Image source={LikeChenge} style={styles.HeartIcon} />
            </Clickable>
            <Clickable style={styles.IconContainer} onPress={() => onShare()}>
              <Image source={IconPath.share} style={styles.HeartIcon} />
            </Clickable>
          </View>
          <Clickable
            style={styles.BackContainer}
            onPress={() => navigation.goBack()}>
            <Image source={IconPath.back} style={styles.BackIcon} />
          </Clickable>
        </View>
        <View style={styles.TextMainCOntainer}>
          <View style={styles.TextMainWhiteCOntainer}>
            <Paragraph size={20} style={styles.txt}>
              {CardListData.title}
            </Paragraph>

            <View style={styles.persentPriceMainContainer}>
              <Paragraph color={Colors.purple} style={styles.txt}>
                {CardListData.disPrice}
                {'  '}
                <Paragraph
                  style={{textDecorationLine: 'line-through'}}
                  color={Colors.darkgray}>
                  {CardListData.sellingPrice}
                </Paragraph>{' '}
              </Paragraph>

              <View style={styles.persentContainer}>
                <Paragraph size={13} color={Colors.purple} style={styles.txt}>
                  {CardListData.disPrsent}
                </Paragraph>
              </View>
            </View>

            <View style={styles.persentPriceMainContainer}>
              <Paragraph size={14} color={Colors.darkgray}>
                Sold By:{' '}
                <Paragraph color={Colors.purple} style={styles.txt}>
                  {CardListData.soldBy}
                </Paragraph>
              </Paragraph>
              <Paragraph size={14} color={Colors.darkgray}>
                Status:{' '}
                <Paragraph color={Colors.green} style={styles.txt}>
                  {CardListData.Status}
                </Paragraph>{' '}
              </Paragraph>
            </View>
            <View style={styles.persentPriceMainContainer}>
              <Paragraph size={14} color={Colors.darkgray}>
                COD:{' '}
                <Paragraph color={Colors.green} style={styles.txt}>
                  {CardListData.COD}
                </Paragraph>
              </Paragraph>
              <Paragraph size={14} color={Colors.darkgray}>
                Shipping:{' '}
                <Paragraph color={Colors.purple} style={styles.txt}>
                  Free
                </Paragraph>{' '}
              </Paragraph>
            </View>

            <Paragraph style={[styles.txt, {paddingVertical: 15}]}>
              Select Your Size
            </Paragraph>

            <View>
              <FlatList
                renderItem={renderItem}
                data={CardListData.Size}
                horizontal
              />
            </View>
            <Paragraph style={[styles.txt, {paddingVertical: 15}]}>
              Select Colors
            </Paragraph>
            <View style={styles.ColorSelectImages}>
              <Image
                source={{uri: CardListData.Image[0]}}
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <Paragraph style={[styles.txt, {paddingVertical: 15}]}>
              Quantity
            </Paragraph>
            <View style={styles.IncMainContainer}>
              <Clickable style={styles.IncContainer} onPress={() => Sub()}>
                <Paragraph size={48} bottom={15}>
                  -
                </Paragraph>
              </Clickable>
              <Paragraph size={20} style={styles.txt} color={Colors.darkgray}>
                {count}
              </Paragraph>
              <Clickable style={styles.IncContainer} onPress={() => Add()}>
                <Paragraph size={40} bottom={7} color={Colors.darkgray}>
                  +
                </Paragraph>
              </Clickable>
            </View>
            <Paragraph style={styles.txt}>Check Delivery</Paragraph>
            <Input placeholder={'Enter Pincode'} style={styles.inp} />

            <Paragraph style={styles.txt}>Delivery & Services</Paragraph>
            <View style={styles.DeliveryMainContainer}>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <View style={styles.IconContainer2}>
                  {/* <Image
                    source={IconPath.delivery}
                    style={styles.DeliveryIMG}
                  /> */}
                </View>
                <Paragraph left={10}>Delivery in 7-9 Days</Paragraph>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <View style={styles.IconContainer2}>
                  {/* <Image source={IconPath.return} style={styles.DeliveryIMG} /> */}
                </View>
                <Paragraph left={10}>Return & Replacement</Paragraph>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <View style={styles.IconContainer2}>
                  {/* <Image source={IconPath.express} style={styles.DeliveryIMG} /> */}
                </View>
                <Paragraph left={10}>4 hrs express delivery</Paragraph>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                {/* <View style={styles.IconContainer2}>
                  <Image
                    source={IconPath.craditcard}
                    style={styles.DeliveryIMG}
                  />
                </View> */}
                <Paragraph left={10}>Pay online or UPI id</Paragraph>
              </View>
            </View>

            <Paragraph style={styles.txt}>Highlights</Paragraph>
            <View style={{marginVertical: 10}}>
              <Paragraph>
                .{'  '}
                <Paragraph>{CardListData.ProductDetails.fabric}</Paragraph>
              </Paragraph>
              <Paragraph>
                .{'  '}
                <Paragraph>{CardListData.ProductDetails.occasion}</Paragraph>
              </Paragraph>
            </View>
            <Paragraph style={styles.txt}>Product Details</Paragraph>
            <View style={styles.ProductsDetailsContainer}>
              <Paragraph color={Colors.darkgray} size={13}>
                Product Code
              </Paragraph>
              <Paragraph style={styles.txt}>
                {CardListData.ProductDetails.productCode}
              </Paragraph>
            </View>
            <View style={styles.ProductsDetailsContainer}>
              <Paragraph color={Colors.darkgray} size={13}>
                ideal For
              </Paragraph>
              <Paragraph style={styles.txt}>
                {CardListData.ProductDetails.idealFor}
              </Paragraph>
            </View>
            <View style={styles.ProductsDetailsContainer}>
              <Paragraph color={Colors.darkgray} size={13}>
                Pack Of
              </Paragraph>
              <Paragraph style={styles.txt}>
                {CardListData.ProductDetails.packOf}
              </Paragraph>
            </View>
            <View style={styles.ProductsDetailsContainer}>
              <Paragraph color={Colors.darkgray} size={13}>
                occasion
              </Paragraph>
              <Paragraph style={styles.txt}>
                {CardListData.ProductDetails.occasion}
              </Paragraph>
            </View>
            <View style={styles.ProductsDetailsContainer}>
              <Paragraph color={Colors.darkgray} size={13}>
                fabric
              </Paragraph>
              <Paragraph style={styles.txt}>
                {CardListData.ProductDetails.fabric}
              </Paragraph>
            </View>
          </View>
        </View>
      </ScrollContainer>
      <View style={styles.btnMainContainer}>
        <View style={[styles.btnContainer, {left: 5}]}>
          <UiButton text="Buy now" style={{width: '87%'}} />
        </View>
        <View style={[styles.btnContainer, {right: 5}]}>
          <UiButton
            text="Add to Cart"
            style={styles.btn}
            textColor={Colors.purple}
            onPress={() => AddtoCart()}
          />
        </View>
      </View>
    </ViewContainer>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  ImhMainContainer: {
    width: '85%',
    height: 400,
    // borderWidth:1,
    alignSelf: 'center',
    backgroundColor: Colors.lightGray + 50,
  },
  HeartIcon: {
    width: '60%',
    height: '60%',
    tintColor: Colors.purple,
  },
  IconContainer: {
    backgroundColor: Colors.white,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 5,
  },
  BackContainer: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackIcon: {
    width: '60%',
    height: '60%',
  },
  TextMainCOntainer: {
    // borderWidth: 1,
    width: '100%',
    height: 1100,
    backgroundColor: Colors.gray + 40,
  },
  TextMainWhiteCOntainer: {
    // borderWidth:1,
    width: '100%',
    height: 1100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: Colors.white,
    marginVertical: 10,
    // padding:20
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  btn: {
    width: '87%',
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.purple,
  },
  btnMainContainer: {
    borderWidth: 0.5,
    borderColor: Colors.gray,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer: {
    width: '50%',
    borderWidth: 0,
    height: 100,
  },
  persentPriceMainContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  persentContainer: {
    borderWidth: 1,
    width: '15%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: Colors.gray,
  },
  txt: {
    fontWeight: 'bold',
  },
  ColorSelectImages: {
    borderWidth: 2,
    borderColor: Colors.purple,
    width: '30%',
    height: 100,
    backgroundColor: Colors.gray + 60,
    marginVertical: 7,
    left: 10,
  },
  IncContainer: {
    // borderWidth: 1,
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray + 70,
  },
  IncMainContainer: {
    height: 50,
    width: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 10,
  },
  inp: {
    width: '100%',
    marginVertical: 10,
  },
  IconContainer2: {
    // borderWidth: 1,
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.purple,
  },
  DeliveryMainContainer: {
    width: '95%',
    alignSelf: 'center',
    // borderWidth: 1,
    // height: 100,
    marginVertical: 15,
  },
  DeliveryIMG: {
    width: '60%',
    height: '60%',
    tintColor: Colors.white,
  },
  ProductsDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
