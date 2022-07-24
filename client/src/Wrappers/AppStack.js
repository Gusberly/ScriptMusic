import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import WrapperNotifications from "./WrapperNotifications";
import WrapperFavorites from "./WrapperFavorites";
import WrapperCart from "./WrapperCart";
import { useSelector } from "react-redux";
import UserDrawer from "./UserDrawer";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFavorites from "../customHooks/useFavorites";
import useCountCart from "../customHooks/useCountCart";

const Tab = createBottomTabNavigator();
const AppStack = () => {
  const [countProducts] = useCountCart();

  return (
    <Tab.Navigator
      initialRouteName="UserDrawer"
      screenOptions={{
        tabBarLabel: "",
        headerShown: false,
        tabBarStyle: {
          height: 55,
          paddingTop: 12,
          backgroundColor: "#ffffff",
          shadowColor: "#000000",
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.29,
          shadowRadius: 1.65,
          elevation: 10
        },
      }}
    >
      <Tab.Screen
        name="UserDrawer"
        component={UserDrawer}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                name="home"
                type="material-community"
                size={30}
                color="#DD8643"
              />
            ) : (
              <Icon
                name="home-outline"
                type="material-community"
                size={30}
                color="#DD8643"
              />
            ),
        }}
      />

      <Tab.Screen
        name="WrapperFavorites"
        component={WrapperFavorites}
        options={{
          // tabBarBadge: favorite.length > 0 ? favorite.length : null,
          // tabBarBadgeStyle: {
          //   backgroundColor: "#fff6e8",
          //   color: "#DD8643",
          //   marginTop: -4,
          // },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                name="cards-heart"
                type="material-community"
                size={30}
                color="#DD8643"
              />
            ) : (
              <Icon
                name="cards-heart-outline"
                type="material-community"
                size={30}
                color="#DD8643"
              />
            ),
        }}
      />
      <Tab.Screen
        name="WrapperNotifications"
        component={WrapperNotifications}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                name="bell"
                type="material-community"
                size={30}
                color="#DD8643"
              />
            ) : (
              <Icon
                name="bell-outline"
                type="material-community"
                size={30}
                color="#DD8643"
              />
            ),
        }}
      />
      <Tab.Screen
        name="WrapperCart"
        component={WrapperCart}
        options={{
          tabBarBadge: countProducts ? countProducts : null,
          tabBarBadgeStyle: {
            backgroundColor: "#DD8643",
            color: "#ffffff",
            marginTop: -7,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                name="cart"
                type="material-community"
                size={30}
                color="#DD8643"
              />
            ) : (
              <Icon
                name="cart-outline"
                type="material-community"
                size={30}
                color="#DD8643"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;

