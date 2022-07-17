import React from 'react'
import {
    View,
    TextInput,
    Image,
    Button,
    TouchableHighlight,
    TouchableNativeFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Styles/Home.jsx";
import user from "../../../../assets/user.png";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

const HomeNav = ({ search, setSearch, setModal, modal, submitHandle }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.containerNav}>
<TouchableNativeFeedback  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
            style={{
                width: 45,
                height: 45,
                borderRadius: 100
            }}
            source={user}
            />
            </TouchableNativeFeedback>
            <TextInput
                style={styles.input}
                placeholder=" Buscar"
                value={search}
                onChangeText={setSearch}
                onSubmitEditing={() => submitHandle(search)}
            />

            <Ionicons
                name="filter-sharp"
                size={34}
                color="#DD8643"
                onPress={() => setModal(!modal)}
            />
        </View>
    )
}

export default HomeNav