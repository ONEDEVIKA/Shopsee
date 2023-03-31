import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headers from '../../components/comancomponents/Headers'
import ViewContainer from '../../components/HOC/ViewContainer'
import { FlatList } from 'react-native-gesture-handler'
import Colors from '../../constents/Colors'
import Loader from '../../components/UI/Loader'
import Clickable from '../../components/HOC/Clickble'
import Paragraph from '../../components/UI/Paragraph'
import { IconPath, ImagePath } from '../../Assets'


const Categoires = ({navigation}) => {
  const [ApiData , setApiData] = useState([])
  const [ Loaded, setLoaded] = useState(false)
  const [ Dataa,setDataa] = useState()
  useEffect(()=>{
    Apidata();
  },[])

    const Apidata= async()=>{
      // setLoaded(true)
    try{
  let Resuls = await fetch('https://charming-calf-pea-coat.cyclic.app/api/AllCategories');
  let Res = await Resuls.json();
  let ResData = await Res;
  let Data = ResData.Categories 
  setLoaded(false)
  // console.log("ApiData==>",Data)
  setApiData(Data)
    }
    catch(error){
      console.log("error==>",error);
    }
  }
 

  const renderItemTitle =({item}) =>{
    // console.log("item===>",item.title);
    return(
    <Clickable  onPress={()=>navigation.navigate('ProductList',{data:item})}>
        <Paragraph style={styles.SecondListTxt}>{item.title}</Paragraph>
    </Clickable>
    )
  }

  const renderItem=({item})=>{
    return(

    <View style={styles.FlatLstContainer}>
      <View style={styles.ImgMainContainer}>
        <View style={styles.TxtCotainer}>
          <Text style={styles.TxtHeadCnt}>{item?.title}</Text>
          <Image style={{width:30,height:30}} source={IconPath.next}/>
        </View>
        <View style={styles.ImgContaiersb}>
          <Image style={styles.ImgContaiersb
          } source={{uri:item?.Image}} resizeMode="contain"/>
        </View>
      </View>
      <View style={styles.ScndViewContainer}>
<FlatList   renderItem={renderItemTitle} data={item.data}/>
      </View>
    </View>
    )
  }
  return (
    <ViewContainer>
      <Headers title='Categories'/>
      <Loader loading={Loaded}/>
      <FlatList renderItem={renderItem} data={ApiData}/>
    </ViewContainer>
  )
}

export default Categoires
const styles = StyleSheet.create({
  FlatLstContainer:{
width:'100%',
margin:10,

// height:400,
// borderWidth:3,
  },
  ImgMainContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:"95%",
    height:110,
    // borderWidth:2
    backgroundColor:Colors.purple +20,
    borderRadius:20
  },
  ImgContaiersb:{
    width:'50%' ,
    height:100,
    width:100,
    borderRadius:50
  },
  TxtCotainer:{
width:'50%'  
},

TxtHeadCnt:{
  fontSize:20,
  color:'black'
},
ScndViewContainer:{

width:'95%',
// height:250,
// borderWidth:1,
// borderColor:'red',
borderRadius:30,
padding:15,
Top:5,
elevation:-50


},
SecondListTxt:{
  fontSize:18,
  paddingVertical:10
}
})