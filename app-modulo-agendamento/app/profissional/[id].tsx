import { useEffect, useState } from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getProfissional, updateProfissional, deleteProfissional } from '@/lib/profissional';

export default function ProfissionalDetalhes() {
  const { id } = useLocalSearchParams();
  const [profissional, setProfissional] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (id) getProfissional(id as string).then(setProfissional);
  }, [id]);

  const handleSalvar = () => {
    if (!profissional) return;
    updateProfissional(id as string, profissional).then(() => {
      Alert.alert('Sucesso', 'Profissional atualizado!');
    });
  };

  const handleExcluir = () => {
    deleteProfissional(id as string).then(() => {
      Alert.alert('Removido', 'Profissional excluído');
      router.replace('/(tabs)/profissionais');
    });
  };

  if (!profissional) return null;

  return (
    <View className="flex-1 p-4">
      <TextInput className="border p-2 mb-2" value={profissional.nome} onChangeText={(v) => setProfissional({ ...profissional, nome: v })} />
      <TextInput className="border p-2 mb-2" value={String(profissional.idade)} keyboardType="numeric" onChangeText={(v) => setProfissional({ ...profissional, idade: parseInt(v) })} />
      <TextInput className="border p-2 mb-2" value={profissional.crm_cro} onChangeText={(v) => setProfissional({ ...profissional, crm_cro: v })} />
      <TextInput className="border p-2 mb-2" value={profissional.especialidade} onChangeText={(v) => setProfissional({ ...profissional, especialidade: v })} />
      <TextInput className="border p-2 mb-2" value={profissional.telefone} onChangeText={(v) => setProfissional({ ...profissional, telefone: v })} />
      <TextInput className="border p-2 mb-2" value={profissional.email} onChangeText={(v) => setProfissional({ ...profissional, email: v })} />
      <TextInput className="border p-2 mb-2" value={profissional.endereco} onChangeText={(v) => setProfissional({ ...profissional, endereco: v })} />
      <TextInput className="border p-2 mb-2" value={profissional.clinica} onChangeText={(v) => setProfissional({ ...profissional, clinica: v })} />
      <Button title="Salvar" onPress={handleSalvar} />
      <Button title="Excluir" color="red" onPress={handleExcluir} />
    </View>
  );
}