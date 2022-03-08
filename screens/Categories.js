import { StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { useEffect,useState } from 'react';

import CategoryListItem from '../components/CategoryListItem'

export default function Categories(props) {
    Categories.navigationOptions = {
        title: 'Hello!',
    };
    // console.log(props)
    // console.log(props.navigation)
    // console.log(props.navigation.navigate)
    const categoriesList = [
        // { id: 1, name: "ván trượt tuyết" },
        // { id: 2, name: "xe trượt tuyết" },
        // { id: 3, name: "gậy trượt tuyết" },
    ]
    const [categories,setCategories] = useState(categoriesList)
    useEffect(()=>{
        // axios.get('http://localhost:3000/categories')
        axios.get('categories')
            .then( res => {
                // console.log(res)
                setCategories(res.data)
            })
            .catch( err => {
                console.log("lỗi",err)
            })
    },[])
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={categories}
            renderItem={({ item }) => // item === categories (value của data)
                <CategoryListItem
                    keyExtractor={item => item.id}
                    title={styles.title}
                    category={item}
                    onPress = { 
                        () => props.navigation.navigate('Category' , {
                            categoryName : item.name ,
                            categoryId : item.id
                        }) 
                    }
                />
            }
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        // alignItems: 'stretch',
        // justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 8,
        paddingTop: 16
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});
