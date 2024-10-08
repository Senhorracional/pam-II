import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
    apiKey: "AIzaSyBfV87_h8KXyeqRn0lefoJNE4YOEkzeUIc",
    authDomain: "meuprimeirofirebase-30336.firebaseapp.com",
    projectId: "meuprimeirofirebase-30336",
    storageBucket: "meuprimeirofirebase-30336.appspot.com",
    messagingSenderId: "935394570408",
    appId: "1:935394570408:web:8c6f1522a96204c440d29d"
};

// Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');

    const sendData = async () => {
        const nomesCollection = firebase
            .firestore()
            .collection('Nomes');
        try {
            await nomesCollection.add({Nome: nome, Sobrenome: sobrenome});
            Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
            setNome('');
            setSobrenome('');
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
        }
    };
    const deleteData = 
    return (
        <View>
            <TextInput placeholder="Nome" value={nome} onChangeText={setNome}/>
            <TextInput
                placeholder="Sobrenome"
                value={sobrenome}
                onChangeText={setSobrenome}/>
            <Button title="Cadastrar" onPress={sendData}/>
        </View>
    );
};

export default App;