import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { createPaciente } from '@/lib/paciente';

export default function NovoPaciente() {
  const [paciente, setPaciente] = useState({ nome: '', idade: '', cpf: '', telefone: '', endereco: '', convenio: '' });
  const router = useRouter();

  const handleCriar = () => {
    createPaciente({ ...paciente, idade: Number(paciente.idade) }).then(() => {
      Alert.alert('Criado', 'Paciente cadastrado com sucesso');
      router.replace('/(tabs)/pacientes');
    });
  };

  return (
    <View className="flex-1 p-4">
      <TextInput placeholder="Nome" className="border p-2 mb-2" onChangeText={(v) => setPaciente({ ...paciente, nome: v })} />
      <TextInput placeholder="CPF" className="border p-2 mb-2" onChangeText={(v) => setPaciente({ ...paciente, cpf: v })} />
      <TextInput placeholder="Idade" keyboardType="numeric" className="border p-2 mb-2" onChangeText={(v) => setPaciente({ ...paciente, idade: v })} />
      <TextInput placeholder="Telefone" className="border p-2 mb-2" onChangeText={(v) => setPaciente({ ...paciente, telefone: v })} />
      <TextInput placeholder="Endereço" className="border p-2 mb-2" onChangeText={(v) => setPaciente({ ...paciente, endereco: v })} />
      <TextInput placeholder="Convênio" className="border p-2 mb-2" onChangeText={(v) => setPaciente({ ...paciente, convenio: v })} />
      <Button title="Cadastrar" onPress={handleCriar} />
    </View>
  );
}