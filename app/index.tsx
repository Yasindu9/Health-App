import { Link, router } from "expo-router";
import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, View } from "react-native";


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'column',  alignItems: "center"}}>
          <Text style={styles.textMain}>
            HealFinder
          </Text>
        </View>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
        <TouchableOpacity style={styles.button}
          onPress={() => router.push("/signin")}
        >
          <Text style={styles.buttonText}>Start you journey</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f9f4f4",
    justifyContent: "center",
    alignItems: 'center',
    padding: 16,
  },
  textMain:{
    fontSize: 40,
    color: "#000000",
    fontWeight: "bold",
  },
  logo: {
    height: 250,
    width: 250,
    margin:20,
    borderRadius: 20,
  },
  button: {
    marginTop: 25,
    backgroundColor: "#000000",
    paddingHorizontal: 30,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
