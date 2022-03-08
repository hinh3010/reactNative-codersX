import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import axios from 'axios'

// import CategoryListItem from './components/CategoryListItem'
import AppNavigator from './AppNavigator'

export default function App() {

    axios.defaults.baseURL = 'http://localhost:3000/'

    // const categories = [
    //     { id: 1, name: "ván trượt tuyết" },
    //     { id: 2, name: "xe trượt tuyết" },
    //     { id: 3, name: "gậy trượt tuyết" },
    // ]

    return (
        <>
            {/* 
                <ScrollView style={{ padding: 16 }} contentContainerStyle={{ backgroundColor: '#333', }}>
                    {
                        categories.map((category, i) => (
                            <CategoryListItem key={category.id} title={styles.title} category={category} />
                        ))
                    }
                </ScrollView>
            */}
            <AppNavigator/>
            
        </>
    );
}

