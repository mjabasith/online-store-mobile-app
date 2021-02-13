import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Image, ActivityIndicator  } from 'react-native';
//import ProductListItem from "../Components/ProductListItem";
import { Context } from "../Store";

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
       <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

      <View style={styles.detailContainer}>
          <Text style={styles.textTitle}>{item.title}-${item.price}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.image
            }}
          />
        </View>
        
      </View>
    </SafeAreaView>


    {/* <Text style={styles.title}>{item.title} </Text>
    <Text style={styles.title}>${item.price}</Text>
    <Image style={styles.tinylogo} source={{uri: item.image}}/> */}
  </TouchableOpacity>
);

const PrdoductList = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [state, dispatch] = useContext(Context);
 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
        setData(json); 
        dispatch({type: 'SET_PRODUCTS', payload: json}); 
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#f5f5f5" : "#f4f4f4";

    const listItemClickHandler = () => {
      navigation.navigate('ProductDetail', {productId: item.id});
    }

    return (
      <Item
        item={item}
        onPress={() => listItemClickHandler(item)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   item: {
//     padding: 20,
//     flexDirection: "row",
//   },
//   title: {
//     fontSize: 20,
//   },
//   tinylogo: {
//     width: 100,
//     height: 100,
//   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
  },
  imageContainer: {
    
  },
  detailContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    height: 100,
    width: 100,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
  }
});

export default PrdoductList;