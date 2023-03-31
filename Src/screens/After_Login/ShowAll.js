import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import Headers from '../../components/comancomponents/Headers'
import { FlatList } from 'react-native-gesture-handler'
import Paragraph from '../../components/UI/Paragraph'
import Clickable from '../../components/HOC/Clickble'
import Colors from '../../constents/Colors'
import { IconPath } from '../../Assets'
import { color } from 'react-native-reanimated'


const ShowAll = ({route,navigation}) => {
  let Data = route?.params?.data
  const [ LikeChange,setLikeChange] = useState(IconPath.unlike)
  const ImageFunc = (index) =>{
    let change = LikeChange == IconPath.unlike ? IconPath.like:IconPath.unlike
    setLikeChange(change)
  }
  console.log('Data-----',Data);

  const renderItem =({item,index})=>{
    return(
<Clickable style={styles.BoxMainView}>
  <View>
    <Image style={styles.ImaProduct} source={{uri : item?.Image[0]}} resizeMode='contain'/>
  </View>
  <View style={{ position: 'absolute', left: 8, top: 6,width:40,height:25,backgroundColor:Colors.white,justifyContent:'center',alignItems:'center' ,borderRadius:20}}>
                    <Paragraph size={12}>{item?.disPrsent}</Paragraph>
                </View>
                <Clickable  onPress={() => ImageFunc(item, index)} style={{ position: 'absolute', right: 8, top: 6,width:35,height:35,backgroundColor:Colors.white,justifyContent:'center',alignItems:'center' ,borderRadius:50 }}>
                    <Image style={{ width: 20, height: 20 }} source={LikeChange} />
                </Clickable>
           <View style={styles.TitleViewTxt}>
   <Paragraph color={Colors.darkgray}>{item?.title}</Paragraph>
                </View>
   <View style={styles.PriceViewTxt}>
    <Paragraph>
    <Paragraph color={Colors.darkgreen}>{item?.sellingPrice}</Paragraph>{'  '}
    <Paragraph style={{textDecorationLine:'line-through'}}>{item?.disPrice}</Paragraph>
    </Paragraph>
   
   
   </View>
 

</Clickable>
    )
  }
  return (
    <View style={{flex:1}}>
      <Headers type='Icon' title='ShowAll' onPress={()=>navigation.goBack()} />
      <FlatList data={Data}
      renderItem={renderItem}
      numColumns={2}/>
    </View>
  )
}

export default ShowAll

const styles = StyleSheet.create({
  BoxMainView:{
    width:'45%',
    height:330,
    margin:5,
    left:8,
    left: 7, 
    borderRadius: 10,
    color: Colors.gray,
    top: 5,
     elevation: 10, 
    backgroundColor: Colors.white, 
    borderColor: Colors.gray ,
  },
  ImaProduct:{
    width:'100%',
    height:200,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  PriceViewTxt:{
    flexDirection:'row',
    top:10
  },
  TitleViewTxt:{
    paddingHorizontal:7
  }
})