import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfV87_h8KXyeqRn0lefoJNE4YOEkzeUIc",
  authDomain: "meuprimeirofirebase-30336.firebaseapp.com",
  projectId: "meuprimeirofirebase-30336",
  storageBucket: "meuprimeirofirebase-30336.appspot.com",
  messagingSenderId: "935394570408",
  appId: "1:935394570408:web:8c6f1522a96204c440d29d",
  measurementId: "G-PT7T2ZK4K1"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
