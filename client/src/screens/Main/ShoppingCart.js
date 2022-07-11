import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import emptyCart from "../../../assets/carrito1.png";
import styles from "./Styles/ShoppingCart.jsx";

export default function EmptyCart() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <StatusBar />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>CARRITO</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={emptyCart} style={styles.image} />
        </View>
        <View style={{ alignItems: "center" }}>
          {/* <Text style={styles.text}>Tu carrito está vacío.</Text> */}
          <Text style={styles.text}>Proximamente ....</Text>
        </View>
        {/* <View style={styles.containerText}>
          <Text style={styles.text}>¡Explora nuestros</Text>
          <View style={styles.containerTextLinked}>
            <Text style={styles.text}>productos</Text>
            <Text style={styles.textLinked}> aquí</Text>
            <Text style={styles.text}>!</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}
