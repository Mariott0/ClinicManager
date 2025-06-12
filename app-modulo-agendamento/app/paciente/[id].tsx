import { useEffect, useState } from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getPaciente, updatePaciente, deletePaciente } from '@/lib/paciente';

export default function PacienteDetalhes() {
  const { id } = useLocalSearchParams();
  const [paciente, setPaciente] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (id) getPaciente(id as string).then(setPaciente);
  }, [id]);

  const handleSalvar = () => {
    if (!paciente) return;
    updatePaciente(id as string, paciente).then(() => {
      Alert.alert('Sucesso', 'Paciente atualizado!');
    });
  };

  const handleExcluir = () => {
    deletePaciente(id as string).then(() => {
      Alert.alert('Removido', 'Paciente excluído');
      router.replace('/(tabs)/pacientes');
    });
  };

  if (!paciente) return null;

  return (
    <View className="flex-1 p-4">
      <TextInput className="border p-2 mb-2" value={paciente.nome} onChangeText={(v) => setPaciente({ ...paciente, nome: v })} />
      <TextInput className="border p-2 mb-2" value={paciente.cpf} onChangeText={(v) => setPaciente({ ...paciente, cpf: v })} />
      <TextInput className="border p-2 mb-2" value={String(paciente.idade)} keyboardType="numeric" onChangeText={(v) => setPaciente({ ...paciente, idade: parseInt(v) })} />
      <TextInput className="border p-2 mb-2" value={paciente.telefone} onChangeText={(v) => setPaciente({ ...paciente, telefone: v })} />
      <TextInput className="border p-2 mb-2" value={paciente.endereco} onChangeText={(v) => setPaciente({ ...paciente, endereco: v })} />
      <TextInput className="border p-2 mb-2" value={paciente.convenio} onChangeText={(v) => setPaciente({ ...paciente, convenio: v })} />
      <Button title="Salvar" onPress={handleSalvar} />
      <Button title="Excluir" color="red" onPress={handleExcluir} />
    </View>
  );
}