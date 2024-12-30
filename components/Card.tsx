import { useCustomContext } from '@/contexts/Context';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface CardProps {
  item: any;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { increment } = useCustomContext();

  return (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={styles.image}
      />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.street_address}, {item.city}, {item.state} - {item.zip_code}</Text>
      <Text style={styles.status}>Bed Count: {item.hospital_bed_count}</Text>
      <Text style={styles.status}>County: {item.county}</Text>
      <Text style={styles.status}>Updated: {item.updated_dt}</Text>

      <TouchableOpacity 
        style={{
          flexDirection: 'row', 
          alignItems: 'center', 
          marginTop: 10, 
          backgroundColor: '#000000', 
          padding: 10, borderRadius: 10,}}  
        onPress={increment}
      >
        <FontAwesome name="heart" size={15} color={"white"}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    fontSize: 14,
    color: '#757575',
    marginVertical: 8,
    textAlign: 'center',
  },
  status: {
    fontSize: 12,
    color: '#757575',
  },
});

export default Card;
