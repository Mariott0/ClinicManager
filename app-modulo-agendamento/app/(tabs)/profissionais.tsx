import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { getProfissionais } from '@/lib/profissional';
import ProfissionalCard from '@/components/ProfissionalCard';

interface Profissional {
  id: string;
  nome: string;
  telefone: string;
  idade: number;
  endereco: string;
  especialidade: string;
  crm_cro: string;
  email: string;
  clinica: string;
}

export default function Profissionais() {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const router = useRouter();

  useEffect(() => {
    getProfissionais().then(setProfissionais);
  }, []);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Profissionais</Text>

        <FlatList
          data={profissionais}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProfissionalCard
              profissional={item}
              onPress={() => router.push(`/profissional/${item.id}`)}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
        />

        <Button
          mode="contained"
          onPress={() => router.push('/profissional/novo')}
          buttonColor="#2563EB" // Tailwind green-600
          textColor="#fff"
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          style={styles.button}
        >
          Novo Profissional
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
    color: '#2563EB', // Tailwind green-700
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
