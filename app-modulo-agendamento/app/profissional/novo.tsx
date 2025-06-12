import { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { createProfissional } from '@/lib/profissional';

export default function NovoProfissional() {
  const [profissional, setProfissional] = useState({
    nome: '',
    idade: '',
    crm_cro: '',
    especialidade: '',
    telefone: '',
    email: '',
    endereco: '',
    clinica: '',
  });

  const router = useRouter();

  const handleCriar = () => {
    createProfissional({ ...profissional, idade: Number(profissional.idade) }).then(() => {
      Alert.alert('Criado', 'Profissional cadastrado com sucesso');
      router.replace('/(tabs)/profissionais');
    });
  };

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Novo Profissional</Text>

        <TextInput
          label="Nome"
          value={profissional.nome}
          onChangeText={(v) => setProfissional({ ...profissional, nome: v })}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Idade"
          value={profissional.idade}
          keyboardType="numeric"
          onChangeText={(v) => setProfissional({ ...profissional, idade: v })}
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
          keyboardType="email-address"
          autoCapitalize="none"
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
