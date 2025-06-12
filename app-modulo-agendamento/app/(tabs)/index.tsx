import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, IconButton, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/(auth)/sign-in');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Botão de sair */}
        <IconButton
          icon="logout"
          size={20}
          iconColor="#DC2626" // vermelho
          onPress={handleLogout}
          style={styles.logoutButton}
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Clinic<Text style={styles.highlight}>Manager</Text>
          </Text>

          <Text style={styles.subtitle}>
            Gerencie pacientes e profissionais com praticidade, segurança e eficiência.
          </Text>

          <View style={styles.buttons}>
            <Button
              mode="contained"
              onPress={() => router.push('/pacientes')}
              buttonColor="#2563EB"
              textColor="#fff"
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonLabel}
              style={styles.button}
            >
              Ver Pacientes
            </Button>

            <Button
              mode="outlined"
              onPress={() => router.push('/profissionais')}
              textColor="#2563EB"
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonLabel}
              style={[styles.button, styles.outlinedButton]}
            >
              Ver Profissionais
            </Button>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1D4ED8',
    textAlign: 'center',
  },
  highlight: {
    color: '#60A5FA',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    paddingHorizontal: 12,
    lineHeight: 22,
  },
  buttons: {
    width: '75%',
    gap: 12,
    marginTop: 8,
  },
  button: {
    borderRadius: 10,
  },
  outlinedButton: {
    borderWidth: 1.5,
    borderColor: '#2563EB',
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 15,
  },
});
