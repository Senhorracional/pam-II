import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
//npm install firebase@latest

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
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSignup = async () => {
     try {
       const auth = getAuth();
       await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // O usuário foi criado com sucesso
          const user = userCredential.user;
          console.log('Usuário criado com sucesso', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Erro ao criar usuario: ', error);
        });
     }catch (error){
       console.log(error);
     }
   };

   return (
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        /> 
        <Button title="Cadastrar" onPress={handleSignup}/>
      </View>
   );
 };