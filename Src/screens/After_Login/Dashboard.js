import {StatusBar, StyleSheet, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import ScrollContainer from '../../components/HOC/ScrollContainer';
import Colors from '../../constents/Colors';
import {IconPath, ImagePath} from '../../Assets';
import CtegoiresList from '../../components/comancomponents/CtegoiresList';
import Headers from '../../components/comancomponents/Headers';
import Swipers from '../../components/comancomponents/Swipers';
import Card from '../../components/comancomponents/Card';
import Collection from '../../components/comancomponents/Collection';
import ViewContainer from '../../components/HOC/ViewContainer';
import { useIsFocused } from '@react-navigation/native';
import Loader from '../../components/UI/Loader';

const Dashboard = ({navigation}) => {
  const [ loaded,setloaded] = useState(true)
const [ WesternApiData,setWesternApiData] = useState([])
const [ StylesKurtuApiDAta,setStylesKurtuApiDAta] = useState([])
const [StylessareeApiDAta ,setStylessareeApiDAta] = useState([])
const [TrandingKurtiCollection ,setTrandingKurtiCollection] = useState([])
const [FashionsareeCollection ,setFashionsareeCollection] = useState([])
const [ TopSellingCollection,setTopSellingCollection] = useState([])
const [ LongKurtiCollection,setLongKurtiCollection] = useState([])
const [ TopSareeCollecton,setTopSareeCollecton] = useState([])
const [ DressesForYou,setDressesForYou] = useState([])
const [ WomenSareeCollection,setWomenSareeCollection] = useState([])
const [ WesternDressesForYou,setWesternDressesForYou] = useState([])
const [ BridelWeddingCollection,setBridelWeddingCollection] = useState([])
const [ SellerStyleForH,setSellerStyleForH] = useState([])
const [ NewArrivalsTro,setNewArrivalsTro] = useState([])
const [ Swiper1Api,setSwiper1Api] = useState([])
const [ Swiper2Api,setSwiper2Api] = useState([])
const [ Swiper3Api,setSwiper3Api] = useState([])
const [ Swiper4Api,setSwiper4Api] = useState([])
const [ Swiper5Api,setSwiper5Api] = useState([])
const [ Swiper6Api,setSwiper6Api] = useState([])


useEffect(() => {

  DashboardApi()
  GetSwiperApi()

}, []);
 

const Data2 = [
  {
    img: require('../../Assets/images/secf1.jpg'),
    p: '-57%',
    Icon: IconPath.unlike,
  },
  {
    img: require('../../Assets/images/secf2.jpg'),
    p: '-51%',
    Icon: IconPath.unlike,
  },
  {
    img: require('../../Assets/images/secf3.jpg'),
    p: '-51%',
    Icon: IconPath.unlike,
  },

  {
    img: require('../../Assets/images/secf4.jpg'),
    p: '-43%',
    Icon: IconPath.unlike,
  },

  {
    img: require('../../Assets/images/secf5.jpg'),
    p: '-52%',
    Icon: IconPath.unlike,
  },
  {
    img: require('../../Assets/images/secf6.jpg'),
    p: '-60%',
    Icon: IconPath.unlike,
  },

  {
    img: require('../../Assets/images/secf7.jpg'),
    p: '-64%',
    Icon: IconPath.unlike,
  },

  {
    img: require('../../Assets/images/secf8.jpg'),
    p: '-44%',
    Icon: IconPath.unlike,
  },

  {
    img: require('../../Assets/images/secf9.jpg'),
    p: '-53%',
    Icon: IconPath.unlike,
  },

  {
    img: require('../../Assets/images/secf10.jpg'),
    p: '-58%',
    Icon: IconPath.unlike,
  },
];
const Data1 = [
  {
    img: require('../../Assets/images/f7.jpg'),
    p: '-63%',
    Icon: IconPath.unlike,
  
  },
  {
    img: require('../../Assets/images/f8.jpg'),
    p: '-67%',
    Icon: IconPath.unlike,
  },
  {
    img: require('../../Assets/images/f9.jpg'),
    p: '-61%',
    Icon: IconPath.unlike,
  },
  {
    img: require('../../Assets/images/f4.jpg'),
    p: '-66%',
    Icon: IconPath.unlike,
  },

  {
    img: require('../../Assets/images/f3.jpg'),
    p: '-60%',
    Icon: IconPath.unlike,
  },

  {
    img: require('../../Assets/images/f5.jpg'),
    p: '-65%',
    Icon: IconPath.unlike,
  },
  {
    img: require('../../Assets/images/f2.jpg'),
    p: '-67%',
    Icon: IconPath.unlike,
  },
  {
    img: require('../../Assets/images/f6.jpg'),
    p: '-55%',
    Icon: IconPath.unlike,
  },
];

const SwipersImages1 = [
  {
    img: ImagePath.s1,
  },
  {
    img: ImagePath.s2,
  },
];
const SwipersImages2 = [
  {
    img: ImagePath.secs1,
  },
  {
    img: ImagePath.secs2,
  },
  {
    img: ImagePath.secs3,
  },
];

const DashboardApi = async () => {
  try {
    let result = await fetch(
      'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/Deshbord',
    );

    let res = await result.json();
    let resdata = await res;

    let ApiData = resdata.Deshbord;
    setWesternApiData(ApiData[0].Productlist)
    setStylesKurtuApiDAta(ApiData[1].Productlist)
    setTrandingKurtiCollection(ApiData[2].Productlist)
    setStylessareeApiDAta(ApiData[3].Productlist)
    setFashionsareeCollection(ApiData[4].Productlist)
    setTopSellingCollection(ApiData[5].Productlist)
    setLongKurtiCollection(ApiData[6].Productlist)
    setLongKurtiCollection(ApiData[7].Productlist)
    setTopSareeCollecton(ApiData[8].Productlist)
    setWomenSareeCollection(ApiData[9].Productlist)
    setDressesForYou(ApiData[10].Productlist)
    setWesternDressesForYou(ApiData[11].Productlist)
    setBridelWeddingCollection(ApiData[12].Productlist)
    setSellerStyleForH(ApiData[13].Productlist)
    setNewArrivalsTro(ApiData[14].Productlist)
    
    // console.log('====DashboardApi=====>', ApiData);
  } catch (error) {
    console.log('====-DashboardApi--API-Error====>', error);
  }
  setloaded(false);
};








  const GetSwiperApi = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/allSwaiper',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.allSwaiper;
      setSwiper1Api(ApiData[0].Swaiper1)
      setSwiper2Api(ApiData[1].Swaiper2)
      setSwiper3Api(ApiData[2].Swaiper3)
      setSwiper4Api(ApiData[3].Swaiper4)
      setSwiper5Api(ApiData[4].Swaiper5)
      setSwiper6Api(ApiData[5].Swaiper6)
      // console.log('====DashboardApi=====>', ApiData);
    } catch (error) {
      console.log('====GetSwiperApi-API-Error====>', error);
    }
    setloaded(false);
  };

  return (
    <ViewContainer>
      <StatusBar backgroundColor={Colors.purpledark} />
      <Loader loading={loaded} />
      <Headers title="DashBord" />
    <ScrollContainer style={{flex: 1}}>
      <View>
        <CtegoiresList />
      </View>

      <Swipers SwipersImages={Swiper1Api} />

      <Collection
          title="Western dress collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: WesternApiData})
          }
        />      
      <View>
        <Card
          data={WesternApiData}
        />
      </View>

      <Swipers SwipersImages={Swiper2Api} />

      <Collection title="Stylish Kurti Collection" onPress={()=>navigation.navigate('ShowAll',{data:StylesKurtuApiDAta})} />
      <Card data={StylesKurtuApiDAta} />

      <Collection title="Trending Kurti Collection"    
      onPress={() =>
          navigation.navigate('ShowAll', {data: TrandingKurtiCollection})
          }/>
      <Card data={TrandingKurtiCollection} />
      <Swipers SwipersImages={Swiper3Api} />

      <Collection title="Special Saree Collection" 
       onPress={() =>
        navigation.navigate('ShowAll', {data: StylessareeApiDAta})
        }/>
      <Card data={StylessareeApiDAta} />

      <Collection title="Fashion Saree Collection" 
       onPress={() =>
        navigation.navigate('ShowAll', {data: FashionsareeCollection})
        }/>

      <Card data={FashionsareeCollection} />
      <Swipers SwipersImages={Swiper4Api} />

      <Collection title="Top Selling Kurti" 
       onPress={() =>
        navigation.navigate('ShowAll', {data: TopSellingCollection})
        }/>
      <Card data={TopSellingCollection} />

      <Collection title="Long Kurti Collection"
       onPress={() =>
        navigation.navigate('ShowAll', {data: LongKurtiCollection})
        } />
      <Card data={LongKurtiCollection} />

      <Swipers SwipersImages={Swiper5Api} />

      <Collection title="Top Saree Collection"
       onPress={() =>
        navigation.navigate('ShowAll', {data: TopSareeCollecton})
        } />

      <Card data={TopSareeCollecton} />

      <Collection title=" Womens Saree Collection" 
       onPress={() =>
        navigation.navigate('ShowAll', {data: WomenSareeCollection})
        }/>
      <Card data={WomenSareeCollection} />
      <Swipers SwipersImages={Swiper6Api} />

      <Collection title="Dresses for you" 
       onPress={() =>
        navigation.navigate('ShowAll', {data: DressesForYou})
        }/>
      <Card data={DressesForYou} />

      <Collection title="Western Dresses For Women"
       onPress={() =>
        navigation.navigate('ShowAll', {data: WesternDressesForYou})
        } />
      <Card data={WesternDressesForYou} />

      <Collection title="Bridal Wedding Collections"
       onPress={() =>
        navigation.navigate('ShowAll', {data: BridelWeddingCollection})
        } />
      <Card data={BridelWeddingCollection} />

      <Collection title="Branded Jeans Collections" />
      <Collection title="Steller Styles For Him" 
       onPress={() =>
        navigation.navigate('ShowAll', {data: SellerStyleForH})
        }/>
      <Card data={SellerStyleForH} />

      <Collection title="New Arrivals Trousers" />
      <Card data={NewArrivalsTro} />

    </ScrollContainer>
    </ViewContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  ShowAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    // padding: 5,
    marginVertical: 15,
  },
  fltcontainer1: {
    width: 200,
    height: 250,
    // borderWidth:1,
    margin: 10,
    backgroundColor: Colors.gray + 50,
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
    width: '80%',
    height: '80%',
  },
});
