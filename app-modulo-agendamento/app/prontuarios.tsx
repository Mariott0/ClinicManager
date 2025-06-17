import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Provider as PaperProvider,
  Text,
  Card,
  Divider,
  Button,
} from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Prontuario() {
  const router = useRouter();

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Botão de Voltar */}
        <Button
          onPress={() => router.back()}
          textColor="#2563EB"
          labelStyle={{ fontSize: 14 }}
          style={styles.backButton}
        >
          ⬅ Voltar
        </Button>

        <Text style={styles.header}>Prontuário do Paciente</Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>Nathan Mariotto</Text>

            <Divider style={styles.divider} />

            <Text style={styles.label}>Data da Consulta:</Text>
            <Text style={styles.value}>17/06/2025</Text>

            <Divider style={styles.divider} />

            <Text style={styles.label}>Profissional Responsável:</Text>
            <Text style={styles.value}>
              Dra. Fernanda Boscarioli (Odontologista)
            </Text>

            <Divider style={styles.divider} />

            <Text style={styles.label}>Observações Clínicas:</Text>
            <Text style={styles.value}>
              Paciente relatou dores constantes no dente 26. Realizado exame clínico com indicação para tratamento de canal.
            </Text>

            <Divider style={styles.divider} />

            <Text style={styles.label}>Prescrição:</Text>
            <Text style={styles.value}>
              Amoxicilina 500mg - Tomar 1 cápsula a cada 8h durante 7 dias.
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  backButton: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1d4ed8',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    padding: 10,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    marginTop: 12,
    color: '#374151',
  },
  value: {
    fontSize: 15,
    color: '#4b5563',
    marginTop: 4,
  },
  divider: {
    marginTop: 10,
  },
});
