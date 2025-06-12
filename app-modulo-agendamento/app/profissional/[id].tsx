import { useEffect, useState } from 'react';
import { View, Alert, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider } from 'react-native-paper';
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
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Editar Profissional</Text>

        <TextInput
          label="Nome"
          value={profissional.nome}
          onChangeText={(v) => setProfissional({ ...profissional, nome: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Idade"
          value={String(profissional.idade)}
          keyboardType="numeric"
          onChangeText={(v) => setProfissional({ ...profissional, idade: parseInt(v) || 0 })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="CRM/CRO"
          value={profissional.crm_cro}
          onChangeText={(v) => setProfissional({ ...profissional, crm_cro: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Especialidade"
          value={profissional.especialidade}
          onChangeText={(v) => setProfissional({ ...profissional, especialidade: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Telefone"
          value={profissional.telefone}
          onChangeText={(v) => setProfissional({ ...profissional, telefone: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Email"
          value={profissional.email}
          onChangeText={(v) => setProfissional({ ...profissional, email: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Endereço"
          value={profissional.endereco}
          onChangeText={(v) => setProfissional({ ...profissional, endereco: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Clínica"
          value={profissional.clinica}
          onChangeText={(v) => setProfissional({ ...profissional, clinica: v })}
          style={styles.input}
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleSalvar}
          buttonColor="#2563EB"
          textColor="#fff"
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Salvar
        </Button>

        <Button
          mode="outlined"
          onPress={handleExcluir}
          textColor="#DC2626"
          style={[styles.button, styles.deleteButton]}
          contentStyle={styles.buttonContent}
        >
          Excluir
        </Button>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2563EB',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    borderRadius: 8,
    marginTop: 8,
  },
  deleteButton: {
    borderWidth: 1.5,
    borderColor: '#DC2626',
    marginTop: 12,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});
