import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {doc, deleteDoc} from "firebase/firestore";

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
const nomesCollection = firebase
    .firestore()
    .collection('Nomes');

export function App() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');

    const deletarDados = async (id) => {
        try {
          await deleteDoc(doc(nomesCollection, 'Nomes', documentId));  // Usando o ID gerado pelo Firestore
          Alert.alert('Sucesso', 'O documento foi deletado com sucesso.');
        } catch (error) {
          console.error(error);
          Alert.alert('Erro', 'Ocorreu um erro ao deletar os dados.');
        }
      };
      
}
export default App;