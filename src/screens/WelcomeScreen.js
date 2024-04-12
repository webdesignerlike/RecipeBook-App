import { View, Text, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function WelcomeScreen() {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const navigation = useNavigation();
  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(() => (ring1padding.value = ring1padding.value + hp(5)), 100);
    setTimeout(() => (ring2padding.value = ring2padding.value + hp(5.5)), 300);
    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring2padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full p-8"
          style={{ padding: ring1padding }}
        >
          <Text className=" text-white" style={{ fontSize: hp(4) }}>
            Welcome
          </Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
