import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { getPacientes } from '@/lib/paciente';
import PacienteCard from '@/components/PacienteCard';

interface Paciente {
  id: string;
  nome: string;
  idade: number;
  cpf: string;
  telefone: string;
  endereco: string;
  convenio: string;
}

export default function Pacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const router = useRouter();

  useEffect(() => {
    getPacientes().then(setPacientes);
  }, []);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Pacientes</Text>

        <FlatList
          data={pacientes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PacienteCard
              paciente={item}
              onPress={() => router.push(`/paciente/${item.id}`)}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
        />

        <Button
          mode="contained"
          onPress={() => router.push('/paciente/novo')}
          buttonColor="#2563EB"
          textColor="#fff"
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          style={styles.button}
        >
          Novo Paciente
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1D4ED8',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 16,
  },
  separator: {
    height: 12,
  },
  button: {
    borderRadius: 10,
    marginTop: 24,
  },
  buttonContent: {
    paddingVertical: 10,
  },
  buttonLabel: {
    fontSize: 16,
  },
});
