import React from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity} from 'react-native'
import api from './services/api'
import { useEffect, useState } from 'react'

export default function App(){
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('projects').then( response =>{
            setProjects(response.data)
            console.log(response.data)
        })
    }, [])

    async function handleAddProject(){
        const response = await api.post('projects', {
            tittle : `Novo Projeto Criado ${Date.now()}`,
            owner : 'Junior Trojilio'
        })

        setProjects([...projects, response.data])
    }

    return (
        <>
        <StatusBar barStyle="light-content"/>
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item:project }) => (
                        <Text style={styles.project}>{project.tittle}</Text>
                    )}
                />

            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.button} 
                onPress={handleAddProject}
            >
                <Text style={styles.buttonText}>Adicionar Projeto</Text>
            </TouchableOpacity>   
            </SafeAreaView>
        </>

    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#7159c1',
    },
    project : {
        color : '#fff',
        fontSize : 30,
    },
    button : {
        alignSelf : 'stretch',
        backgroundColor : '#fff',
        margin : 20,
        height : 50,
        borderRadius : 4,
        justifyContent : 'center',
        alignItems :'center',
    },
    buttonText : {
        fontWeight : 'bold',
        fontSize : 16,
    }
})