import React, { useState } from "react";
import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import { IconPath, ImagePath } from "../../Assets";
import Headers from "../../components/comancomponents/Headers";
import Clickable from "../../components/HOC/Clickble";
import ViewContainer from "../../components/HOC/ViewContainer";
import Paragraph from "../../components/UI/Paragraph";
import Colors from "../../constents/Colors";

const ProductList = ({ navigation, route }) => {
    let ProductsData = route?.params?.data
    const [LikeChange, setLikeChange] = useState(IconPath.unlike)
    const ImgChangeFc = (index) => {
        let change = LikeChange == IconPath.unlike ? IconPath.like : IconPath.unlike
        setLikeChange(change)
    }
    // console.log("====>data===>", ProductsData);
    const renderItem = ({ item, index }) => {
        // console.log("item=====>", item);
        return (

            <Clickable style={{ width: '45%', height: 330, borderWidth: 0.5, margin: 5, left: 7, borderRadius: 10, color: Colors.gray, top: 5, elevation: 10, backgroundColor: Colors.white, borderColor: Colors.gray }} onPress={() => navigation.navigate('CardDetails', { data: item })}>

                <View>
                    <Image style={{ width: "100%", height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item?.Image[0] }} resizeMode='cover' />
                </View>

                <View style={{ position: 'absolute', left: 8, top: 6,width:40,height:25,backgroundColor:Colors.white,justifyContent:'center',alignItems:'center' ,borderRadius:20}}>
                    <Paragraph size={12}>{item?.disPrsent}</Paragraph>
                </View>
                <Clickable onPress={() => ImgChangeFc(item, index)} style={{ position: 'absolute', right: 8, top: 6,width:35,height:35,backgroundColor:Colors.white,justifyContent:'center',alignItems:'center' ,borderRadius:50 }}>
                    <Image style={{ width: 20, height: 20 }} source={LikeChange} />
                </Clickable>
                <View>

                </View>

                <View style={{ paddingHorizontal: 7, }}>
                    <Paragraph color={Colors.darkgray} size={14}>{item?.title}</Paragraph>



                    <Paragraph color="green">
                        {item?.disPrice}
                        {'  '}
                        <Paragraph style={{ textDecorationLine: 'line-through',color:Colors.darkgray }}>
                            {item?.sellingPrice}
                        </Paragraph>
                    </Paragraph>
                </View>
                <Clickable style={{paddingHorizontal:10,top:5,flexDirection:'row',justifyContent:'space-evenly',width:'80%'}}>
                            <Image source={IconPath.star} style={{width:20,height:20 ,tintColor:Colors.darkyellow+60}}/>
                            <Image source={IconPath.star} style={{width:20,height:20 ,tintColor:Colors.darkyellow+60}}/>
                            <Image source={IconPath.star} style={{width:20,height:20 ,tintColor:Colors.darkyellow+60}}/>
                            <Image source={IconPath.star} style={{width:20,height:20 ,tintColor:Colors.darkyellow+60}}/>
                            <Image source={IconPath.star} style={{width:20,height:20 ,tintColor:Colors.darkyellow+60}}/>

                        </Clickable>


            </Clickable>
        )
    }

    return (
        <ViewContainer>
            <Headers title={ProductsData.title} type='Icon' onPress={()=>navigation.goBack()} />
            <View style={{ flex: 1 }}>
                <FlatList data={ProductsData.Productlist} renderItem={renderItem} numColumns={2} />
            </View>
        </ViewContainer>
    )
}
export default ProductList

const styles = StyleSheet.create({});