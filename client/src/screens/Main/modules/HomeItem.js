import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { vh, vw } from "react-native-expo-viewport-units";
import styles from '../Styles/Item';


const HomeItem = ({ promoimg, model, button, price, image, id, containerInfo, containerText, containerImage, containerModel }) => {

    //console.log(promoimg)
    //const {promoOne} = promoimg
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Details', { itemId: id })
                }

            >

                <View style={styles.container}>

                    <Image
                        style={{
                            width: vw(90),
                            height: vh(45),
                            borderRadius: 50,
                            borderWidth: 1,
                            position: 'absolute',

                        }}
                        resizeMode='contain'
                        source={promoimg}
                    >
                    </Image>
                    <View style={containerInfo}>
                        <View style={containerModel}>
                            <Text style={styles.price}>{model}</Text>
                        </View>
                        <View style={containerText}>
                            <Text style={styles.price}>${price}</Text>
                        </View>
                        <View style={containerImage}>
                            <Image
                                style={{
                                    width: vw(45),
                                    height: vh(30),

                                }}
                                resizeMode="contain"
                                source={{ uri: image }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.absoluteTouchable}>
                <View style={styles.secondText}>
                    <Text style={styles.Text}>{button}</Text>
                    <AntDesign name="right" size={24} color="#DD8643" />
                </View>
            </TouchableOpacity>

        </View>

    )
}

export default HomeItem
