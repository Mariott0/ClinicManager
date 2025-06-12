import { useEffect, useState } from 'react';
import { View, Alert, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider } from 'react-native-paper';
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
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Editar Paciente</Text>

        <TextInput
          label="Nome"
          value={paciente.nome}
          onChangeText={(v) => setPaciente({ ...paciente, nome: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="CPF"
          value={paciente.cpf}
          onChangeText={(v) => setPaciente({ ...paciente, cpf: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Idade"
          value={String(paciente.idade)}
          keyboardType="numeric"
          onChangeText={(v) => setPaciente({ ...paciente, idade: parseInt(v) || 0 })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Telefone"
          value={paciente.telefone}
          onChangeText={(v) => setPaciente({ ...paciente, telefone: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Endereço"
          value={paciente.endereco}
          onChangeText={(v) => setPaciente({ ...paciente, endereco: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Convênio"
          value={paciente.convenio}
          onChangeText={(v) => setPaciente({ ...paciente, convenio: v })}
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
          textColor="#DC2626" // red-600
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
