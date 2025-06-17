import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {
  Provider as PaperProvider,
  Card,
  Title,
  Paragraph,
  Button,
} from 'react-native-paper';
import { useRouter } from 'expo-router';

const dicas = [
  {
    titulo: '🦷 Cuide bem dos seus dentes',
    descricao:
      'Escove os dentes pelo menos 3 vezes ao dia com creme dental com flúor e use fio dental diariamente para prevenir cáries e doenças gengivais.',
  },
  {
    titulo: '🍎 Mantenha uma alimentação saudável',
    descricao:
      'Evite excesso de açúcar e alimentos ultraprocessados. Consuma frutas, verduras e beba bastante água para fortalecer o organismo e a saúde bucal.',
  },
  {
    titulo: '🩺 Faça check-ups regulares',
    descricao:
      'Visite seu médico e dentista periodicamente para avaliação preventiva e tratamento precoce de problemas de saúde.',
  },
  {
    titulo: '💤 Priorize um sono de qualidade',
    descricao:
      'Dormir bem ajuda na recuperação do corpo e fortalece o sistema imunológico, prevenindo diversas doenças.',
  },
  {
    titulo: '🏃‍♂️ Pratique atividades físicas',
    descricao:
      'Exercícios regulares ajudam a controlar o peso, melhorar a circulação e reduzir o risco de doenças crônicas.',
  },
  {
    titulo: '🚭 Evite o tabaco e o álcool em excesso',
    descricao:
      'Eles aumentam o risco de câncer bucal, problemas cardiovasculares e outras doenças graves.',
  },
];

export default function Dicas() {
  const router = useRouter();

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Botão de voltar */}
        <Button
          onPress={() => router.back()}
          textColor="#2563EB"
          labelStyle={{ fontSize: 14 }}
          style={styles.backButton}
        >
          ⬅ Voltar
        </Button>

        <Text style={styles.header}>
          Dicas para uma <Text style={styles.highlight}>vida saudável</Text>
        </Text>

        {dicas.map((dica, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>{dica.titulo}</Title>
              <Paragraph style={styles.cardText}>{dica.descricao}</Paragraph>
            </Card.Content>
          </Card>
        ))}
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
    marginBottom: 20,
    textAlign: 'center',
    color: '#1d4ed8',
  },
  highlight: {
    color: '#60a5fa',
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e3a8a',
  },
  cardText: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 6,
  },
});
