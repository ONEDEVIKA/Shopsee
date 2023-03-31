// import React, { useState } from "react";
// import { Text, View, Button, ActivityIndicator, Modal, StyleSheet } from "react-native";
// const Practice = () => {
//     const [show, setshow] = useState(true)
//     const [showig, setshowig] = useState(true)
//     const [Modall, setModall] = useState(false)
//     // const display =()=>{
//     //     setshowig(false)
//     //     // setTimeout(() => {
//     //     //     setshowig(false)
//     //     // }, 1000);
//     // }

//     return (
//         <View style={{ flex: 1 }}>
//             <Button title="Hide Component" onPress={() => setshow(!show)} />
//             {/* <Button title="Hide Component" onPress={()=> setshow(false)}/> */}
//             {/* <Button title="Hide Component" onPress={()=> setshow(true)}/> */}
//             {show ? <User /> : null}

//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <ActivityIndicator size={100} color={"blue"} animating={showig} />
//                 <Button title="Indicator" onPress={() => setshowig(false)} />
//             </View>

//             <Modal
//                 transparent={true}
//                 visible={Modall}
//                 animationType="slide">
//                 <View style={styles.ModalViw}>
//                     <View style={styles.modalinview}>
//                         <Text style={styles.ModalTxt}>Pari is good girl</Text>
//                         <Button title="Clik me" onPress={() => setModall(false)} />
//                     </View>
//                 </View>
//             </Modal>

//             <View style={styles.Modlvie}>
//                 <Button title="Open Modal" onPress={() => setModall(true)} />
//             </View>


//         </View>
//     )
// }
// const User = () => {
//     return (
//         <View>
//             <Text>athis is best work</Text>
//         </View>
//     )
// }
// export default Practice
// const styles = StyleSheet.create({
//     ModalViw: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: "center",
//     },
//     modalinview: {
//         backgroundColor: '#fff',
//         padding: 30,
//         borderRadius: 15,
//         elevation: 30,
//         shadowColor: 'blue'
//     },
//     ModalTxt: {
//         fontSize: 30,
//         marginBottom: 10
//     }
// })

import React, { useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const { width } = Dimensions.get('window');
const headerHeight = 300;
const headerFinalHeight = 70;
const imageSize = (headerHeight / 3) * 2;

export default function ScrollViewAnimatedHeader() {
    const scrollY = useRef(new Animated.Value(0)).current;
    const [textWidth, setTextWidth] = useState(0);
    const offset = headerHeight - headerFinalHeight;
    const translateHeader = scrollY.interpolate({
        inputRange: [0, offset],
        outputRange: [0, -offset],
        extrapolate: 'clamp',
    });
    const translateImageY = scrollY.interpolate({
        inputRange: [0, offset],
        outputRange: [0, -(headerFinalHeight - headerHeight) / 2],
        extrapolate: 'clamp',
    });
    const translateImageX = scrollY.interpolate({
        inputRange: [0, offset],
        outputRange: [
            0,
            -(width / 2) + (imageSize * headerFinalHeight) / headerHeight,
        ],
        extrapolate: 'clamp',
    });
    const scaleImage = scrollY.interpolate({
        inputRange: [0, offset],
        outputRange: [1, headerFinalHeight / headerHeight],
        extrapolate: 'clamp',
    });
    const translateName = scrollY.interpolate({
        inputRange: [0, offset / 2, offset],
        outputRange: [0, 10, -width / 2 + textWidth / 2 + headerFinalHeight],
        extrapolate: 'clamp',
    });
    const scaleName = scrollY.interpolate({
        inputRange: [0, offset],
        outputRange: [1, 0.8],
        extrapolate: 'clamp',
    });
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false },
                )}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12].map(x => (
                    <>
                    <View style={styles.item} key={x} >
                    <Text style={{color:'blue',fontSize:50}}>debik</Text>
                    </View>
                  

                    </>
                ))}
            </ScrollView>
            <Animated.View
                pointerEvents='none'
                style={[styles.header, { transform: [{ translateY: translateHeader }] }]}>
                <Animated.View
                    style={[
                        styles.image,
                        {
                            transform: [
                                { translateY: translateImageY },
                                { translateX: translateImageX },
                                { scale: scaleImage },
                            ],
                        },
                    ]}>
                    <Image
                        source={{
                            uri: 'https://i.ibb.co/YySxPQC/pro.jpeg',
                        }}
                        style={styles.img}
                        resizeMode="cover"
                    />
                </Animated.View>
                
                <Animated.Text
                    onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
                    style={[
                        styles.name,
                        { transform: [{ translateX: translateName }, { scale: scaleName }] },
                    ]}>
                    ASWIN
                </Animated.Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        height: 100,
        marginBottom: 5,
        backgroundColor: 'red',
        marginHorizontal: 10,
    },
    header: {
        height: headerHeight,
        backgroundColor: '#f2f2f2',
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        paddingTop: headerHeight + 5,
    },
    image: {
        height: imageSize,
        width: imageSize,
        borderRadius: headerHeight,

        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    img: {
        height: '100%',
        width: '100%',
    },
    name: {
        fontSize: 30,
        color: '#000',
        position: 'absolute',
        bottom: 0,
        height: headerFinalHeight,
        textAlignVertical: 'center',
        letterSpacing: 2,
    },
});