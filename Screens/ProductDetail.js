import React, { useContext } from 'react'
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Context } from '../Store'
import AppButton from "../Components/Button";
import SecondaryButton from "../Components/SecondaryButton";

const ProductDetail = ({ route }) => {
    const [state, dispatch] = useContext(Context);
    const {productId} = route.params;

    const products = state.products;
    const product = products.find((product)=> { return product.id == productId });

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: product.image,
              }}
            />
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.textTitle}>{product.title}</Text>
          </View>
          <View style={styles.detailContainer}>
            <ScrollView>
            <Text style={styles.textDescription}> {product.description}</Text>
            </ScrollView>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>${product.price}</Text>
          </View>
          <AppButton title={'Buy It Now'}/>
          <SecondaryButton title={'Add To Cart'} style={styles.cartButton}/>    
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    imageContainer: {
      flex: 1,
    },
    image: {
      flex: 1,
      
    },
    detailContainer: {
      flex: 1,
      padding: 10,
    },
    priceContainer: {
      alignItems: 'center',
      flex: 1,
    },
    priceText: {
      flex: 1,
      fontSize: 40,
      fontWeight: 'bold', 
      paddingTop: 20,
    },
    
    textTitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    textDescription: {
      fontSize: 17,
    },
});

export default ProductDetail
