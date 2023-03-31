import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import {IconPath, ImagePath} from '../../Assets';
import Paragraph from '../UI/Paragraph';
import { useIsFocused } from '@react-navigation/native';
import Clickable from '../HOC/Clickble';


const CtegoiresList = () => {
   
  const [ApiData ,setApiData] = useState([])
  useEffect(()=>{
    GetApi()
  },[useIsFocused])
     const GetApi =async () =>{
      try{
        let Result = await fetch('https://charming-calf-pea-coat.cyclic.app/api/AllCategories')
        let Res = await Result.json();
        let Resdata = await Res
        let Data = Resdata?.Categories
        setApiData(Data)
        // console.log("Api Dataa",Data); 
        
      }
     
      catch(error){
console.log("error====>",error);
      }

  }
      const renderItem = ({item}) => {
        return (
      
          <Clickable style={styles.fltcontainer}>
            <Image source={{uri:item?.Image}} style={styles.img} resizeMode="contain" />
            <Paragraph size={11} style={{fontWeight: 'bold'}}>
              {item.title}
            </Paragraph>
          </Clickable>
        );
      };
  return (
    <View>
      <FlatList renderItem={renderItem} data = {ApiData} horizontal/>
    </View>
  )
}

export default CtegoiresList

const styles = StyleSheet.create({
    fltcontainer: {
        width: 80,
        height: 80,
        // borderWidth: 1,
        // margin: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 13,
       
      },
      img: {
        width: '70%',
        height: '70%',
        borderRadius: 50,
      },
})