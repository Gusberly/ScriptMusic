import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Modal, FlatList, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/Modal'
import { useState } from 'react';
import ModalButtons from './modules/ModalButtons';
import { useDispatch } from "react-redux";
import { getAllFilterProducts } from '../../redux/slices/products';


const ModalFilter = ({ modal, setModal }) => {

    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        category: '',
        price: '',
    })
    //console.log(filters)
    return (
        <Modal
            animationType='slide'
            visible={modal}>
            <View style={styles.background} >


                <View style={styles.containerNav}>

                    <Text style={styles.textNav}>FILTRAJE</Text>
                    <TouchableOpacity
                        onPress={() =>
                            setModal(!modal)
                        }>
                        <Ionicons name="filter-sharp" size={34} color="white" />
                    </TouchableOpacity>

                </View>



                <ModalButtons
                    setFilters={setFilters}
                    filters={filters}
                    category={filters.category}
                />




                <View style={styles.containerPrice}>

                    <Text style={styles.textPrice}>Ordenar por precio</Text>
                    <View style={styles.containerLowerHigher}>

                        <TouchableOpacity onPress={() => setFilters({ ...filters, price: 'lower' })} style={styles.button}>
                            <Text style={styles.textButton}>Menor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilters({ ...filters, price: 'higher' })} style={styles.button}>
                            <Text style={styles.textButton}>Mayor</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.buttonFilter}>
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(getAllFilterProducts(filters))
                            setModal(!modal)
                        }}

                        style={styles.button}>
                        <Text style={styles.textButton}>Filtrar</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </Modal>

    )
}

export default ModalFilter