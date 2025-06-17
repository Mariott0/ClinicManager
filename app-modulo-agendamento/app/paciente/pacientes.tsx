import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { getPacientes } from '@/lib/paciente';
import PacienteCard from '@/components/PacienteCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        {/* Botão de voltar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/page-manager')}
        >
          <MaterialIcons name="arrow-back" size={24} color="#2563EB" />
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>

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
          contentContainerStyle={[
            styles.listContent,
            pacientes.length === 0 && styles.emptyListContainer,
          ]}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Nenhum paciente cadastrado.
            </Text>
          }
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
    paddingBottom: 24,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  backButtonText: {
    marginLeft: 4,
    fontSize: 16,
    color: '#2563EB',
    fontWeight: '500',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1D4ED8',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 24,
  },
  separator: {
    height: 12,
  },
  emptyListContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 40,
  },
  button: {
    borderRadius: 10,
    marginTop: 'auto',
  },
  buttonContent: {
    paddingVertical: 10,
  },
  buttonLabel: {
    fontSize: 16,
  },
});
