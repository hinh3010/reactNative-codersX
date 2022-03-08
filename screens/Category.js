import {
    StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity
} from 'react-native';
import { useEffect,useState } from 'react';
import axios from 'axios';

import ProductListItem from '../components/ProductListItem'


export default function Category(props) {
    // console.log(props.navigation)
    // console.log(props.navigation.getParam("categoryName"))
    // console.log(props.navigation.state.params.categoryName)
    
    const productList = [
        // {
        //     id : 1 ,
        //     images : [
        //         {
        //             url : 'https://img.favpng.com/16/16/3/clip-art-portable-network-graphics-image-transparency-png-favpng-CkmNXKDztkWkwFYw02NTqJVRt.jpg'
        //         }
        //     ],
        //     name : 'sản phẩm 1',
        //     price : '500000'
        // },
        // {
        //     id : 2 ,
        //     images : [
        //         {
        //             url : 'https://img.favpng.com/16/16/3/clip-art-portable-network-graphics-image-transparency-png-favpng-CkmNXKDztkWkwFYw02NTqJVRt.jpg'
        //         }
        //     ],
        //     name : 'sản phẩm 2',
        //     price : '500000'
        // },
    ]

    const id = props.navigation.getParam("categoryId")
    console.log(id)

    const [products,setProducts] = useState(productList)
    useEffect(()=>{
        // axios.get(`http://localhost:3000/products?category=${id}`)
        axios.get(`products?category=${id}`)
            .then( res => {
                // console.log(res)
                setProducts(res.data)
            })
            .catch( err => {
                console.log("lỗi",err)
            })
    },[])
    return (
        // <View>
        //     <Text>
        //         {props.navigation.getParam("categoryName")}
        //     </Text>
        // </View>
        <FlatList
            data={products}
            contentContainerStyle={styles.container}
            numColumns={2}
            renderItem={ ({item}) => (
                <View style={styles.wraper}>
                    <ProductListItem product={item} />
                </View>
            ) }
            keyExtractor={item => item.id}
        />
    );
} 

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 8 , // padding trái phải 
        paddingVertical : 16    // padding treen dưới
    } ,
    wraper : {
        flex : 1 ,
        paddingHorizontal : 8 , // padding trái phải 
    }
})