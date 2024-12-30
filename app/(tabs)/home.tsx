import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import Card from '../../components/Card'; 
import { useRoute } from '@react-navigation/native';
import { useCustomContext } from '@/contexts/Context';
import { FontAwesome } from '@expo/vector-icons';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  type RouteParams = {
    username?: string;
  };

  const route = useRoute();
  const { username } = route.params as RouteParams;

  const { count } = useCustomContext();


  const localImages = [
    require('../../assets/images/01.jpeg'),
    require('../../assets/images/02.jpeg'),
    require('../../assets/images/03.jpeg'),
    require('../../assets/images/04.jpg'),
    require('../../assets/images/05.jpg'),
  ];


  const API_URL = `https://www.communitybenefitinsight.org/api/get_hospitals.php?state=NC`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        const dataWithImages = json.slice(0, 5).map((item, index) => ({
          ...item,
          image: localImages[index % localImages.length], 
        }));
        setData(dataWithImages); 
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />

        <View style={{}}>
          <Text style={styles.textMain}>Hello, {username}</Text>
          <Text style={styles.textSec}>Welcome to the HealFinder</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} />} 
        keyExtractor={(item, index) => index.toString()}
      />
      <View 
        style={{ 
          position: 'absolute', 
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          bottom: 10, right: 10, 
          backgroundColor: '#000000', 
          padding: 4, borderRadius: 10, 
          paddingHorizontal: 20}}
      >
        <FontAwesome name="heart" size={20} color={"white"}/>
        <Text style={styles.floating}>
          {count}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 60,
    width: 60,
    margin:20,
    borderRadius: 10,
  },
  textMain: {
    fontSize: 30,
    marginBottom: 5,
    fontWeight: "bold",
  },
  textSec: {
    fontSize: 20,
  },
  floating: {
    fontSize: 30,
    marginBottom: 5,
    fontWeight: "bold",
    color: '#ffffff',
  },
});

export default HomePage;
