import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Logo fictícia - substitua o caminho caso não tenha */}
          {/* <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          /> */}

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
              textColor="#047857"
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    gap: 24,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1D4ED8', // blue-700
    textAlign: 'center',
  },
  highlight: {
    color: '#60A5FA', // blue-400
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280', // gray-500
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
    borderColor: '#047857',
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 15,
  },
});
