import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { createProfissional } from '@/lib/profissional';

export default function NovoProfissional() {
  const [profissional, setProfissional] = useState({ nome: '', idade: '', crm_cro: '', especialidade: '', telefone: '', email: '', endereco: '', clinica: '' });
  const router = useRouter();

  const handleCriar = () => {
    createProfissional({ ...profissional, idade: Number(profissional.idade) }).then(() => {
      Alert.alert('Criado', 'Profissional cadastrado com sucesso');
      router.replace('/(tabs)/profissionais');
    });
  };

  return (
    <View className="flex-1 p-4">
      <TextInput placeholder="Nome" className="border p-2 mb-2" onChangeText={(v) => setProfissional({ ...profissional, nome: v })} />
      <TextInput placeholder="Idade" keyboardType="numeric" className="border p-2 mb-2" onChangeText={(v) => setProfissional({ ...profissional, idade: v })} />
      <TextInput placeholder="CRM/CRO" className="border p-2 mb-2" onChangeText={(v) => setProfissional({ ...profissional, crm_cro: v })} />
      <TextInput placeholder="Especialidade" className="border p-2 mb-2" onChangeText={(v) => setProfissional({ ...profissional, especialidade: v })} />
      <TextInput placeholder="Telefone" className="border p-2 mb-2" onChangeText={(v) => setProfissional({ ...profissional, telefone: v })} />
      <TextInput placeholder="Email" className="border p-2 mb-2" onChangeText={(v) => setProfissional({ ...profissional, email: v })} />
      <TextInput placeholder="Endereço" className="border p-2 mb-2" onChangeText={(v) => setProfissional({ ...profissional, endereco: v })} />
      <TextInput placeholder="Clínica" className="border p-2 mb-2" onChangeText={(v) => setProfissional({ ...profissional, clinica: v })} />
      <Button title="Cadastrar" onPress={handleCriar} />
    </View>
  );
}