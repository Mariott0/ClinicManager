import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { createPaciente } from '@/lib/paciente';

export default function NovoPaciente() {
  const [paciente, setPaciente] = useState({
    nome: '',
    idade: '',
    cpf: '',
    telefone: '',
    endereco: '',
    convenio: '',
  });

  const router = useRouter();

  const handleCriar = () => {
    createPaciente({ ...paciente, idade: Number(paciente.idade) }).then(() => {
      Alert.alert('Criado', 'Paciente cadastrado com sucesso');
      router.replace('/(tabs)/pacientes');
    });
  };

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Novo Paciente</Text>

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
          value={paciente.idade}
          keyboardType="numeric"
          onChangeText={(v) => setPaciente({ ...paciente, idade: v })}
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
          onPress={handleCriar}
          buttonColor="#2563EB"
          textColor="#fff"
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Cadastrar
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
    marginTop: 12,
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});
