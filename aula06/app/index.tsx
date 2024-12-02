import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyBfV87_h8KXyeqRn0lefoJNE4YOEkzeUIc",
  authDomain: "meuprimeirofirebase-30336.firebaseapp.com",
  projectId: "meuprimeirofirebase-30336",
  storageBucket: "meuprimeirofirebase-30336.firebasestorage.app",
  messagingSenderId: "935394570408",
  appId: "1:935394570408:web:8c6f1522a96204c440d29d",
  measurementId: "G-PT7T2ZK4K1"
};

// Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      const snapshot = await nomesCollection.get();
      const nomesData = snapshot.docs.map(doc => ({
        id: doc.id,
        nomeCompleto: `${doc.data().Nome} ${doc.data().Sobrenome}`,
      }));
      setNomes(nomesData);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao buscar os dados.');
    }
  };

  const sendData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.add({
        Nome: nome,
        Sobrenome: sobrenome
      });
      Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
      setNome('');
      setSobrenome('');
      fetchData();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
    }
  };

  const updateData = async (id) => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.doc(id).update({
        Nome: nome,
        Sobrenome: sobrenome
      });
      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      setDocumentId('');
      setNome('');
      setSobrenome('');
      fetchData();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao atualizar os dados.');
    }
  };

  const deleteData = async (id) => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.doc(id).delete();
      Alert.alert('Sucesso', 'Dados excluídos com sucesso!');
      fetchData();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao excluir os dados.');
    }
  };

  const handleEdit = (item) => {
    const fullName = item.nomeCompleto.split(' ');
    const firstName = fullName.shift(); // Pega o primeiro nome
    const lastName = fullName.join(' '); // Junta o restante como sobrenome
  
    setNome(firstName);
    setSobrenome(lastName);
    setDocumentId(item.id); // Define o ID do documento para alternar o botão
  };
  
  const handleSaveOrUpdate = () => {
    if (documentId) {
      updateData(documentId);
    } else {
      sendData();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveOrUpdate}>
        <Text style={styles.buttonText}>{documentId ? 'Atualizar' : 'Cadastrar'}</Text>
      </TouchableOpacity>

      <FlatList
        data={nomes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.nomeCompleto}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item)}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteData(item.id)}>
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  input: {
    height: 50,
    borderColor: '#d1d1d6',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#ffc107',
    borderRadius: 5,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: '#dc3545',
    borderRadius: 5,
  },
});

export default App;
