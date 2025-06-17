import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Provider as PaperProvider,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

export default function Contato() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  // Simulação do envio só para fins visuais (emailjs removido)
  const handleEnviar = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert('Sucesso', 'Mensagem enviada com sucesso!');
      setNome('');
      setEmail('');
      setMensagem('');
    }, 1500);
  };

  const handleWhatsApp = () => {
    const url = 'https://wa.me/554591025721';
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(() => Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.'));
  };

  const handleInstagram = () => {
    const url = 'https://www.instagram.com/fbodontologiaaa/';
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert('Erro', 'Não foi possível abrir o Instagram.');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(() => Alert.alert('Erro', 'Não foi possível abrir o Instagram.'));
  };

  return (
    <PaperProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Button
            onPress={() => router.back()}
            textColor="#2563EB"
            labelStyle={{ fontSize: 14 }}
            style={styles.backButton}
          >
            ⬅ Voltar
          </Button>

          <Text style={styles.header}>Fale com a gente</Text>
          <Text style={styles.subtitle}>
            Envie dúvidas, sugestões ou feedbacks.
          </Text>

          <TextInput
            label="Nome"
            mode="outlined"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
            left={<TextInput.Icon icon="account" />}
          />
          <TextInput
            label="E-mail"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            left={<TextInput.Icon icon="email" />}
          />
          <TextInput
            label="Mensagem"
            mode="outlined"
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            numberOfLines={4}
            style={[styles.input, { height: 120 }]}
            left={<TextInput.Icon icon="message-text" />}
          />

          <Button
            mode="contained"
            onPress={handleEnviar}
            buttonColor="#2563EB"
            textColor="#fff"
            contentStyle={{ paddingVertical: 10 }}
            labelStyle={{ fontSize: 16, fontWeight: '600' }}
            style={styles.button}
            loading={loading}
            disabled={loading}
          >
            Enviar Mensagem
          </Button>

          <Text style={styles.orText}>ou entre em contato por:</Text>

          <View style={styles.socialContainer}>
            <Button
              mode="contained"
              onPress={handleWhatsApp}
              buttonColor="#25D366"
              contentStyle={styles.socialButtonContent}
              style={[styles.socialButton, { marginRight: 12 }]}
              icon={() => (
                <MaterialCommunityIcons
                  name="whatsapp"
                  size={24}
                  color="#fff"
                />
              )}
              labelStyle={{ fontWeight: '700', fontSize: 16 }}
            >
              WhatsApp
            </Button>

            <Button
              mode="contained"
              onPress={handleInstagram}
              buttonColor="#C13584"
              contentStyle={styles.socialButtonContent}
              style={styles.socialButton}
              icon={() => (
                <MaterialCommunityIcons
                  name="instagram"
                  size={24}
                  color="#fff"
                />
              )}
              labelStyle={{ fontWeight: '700', fontSize: 16 }}
            >
              Instagram
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    padding: 20,
  },
  backButton: {
    marginBottom: 14,
    alignSelf: 'flex-start',
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 6,
    color: '#1d4ed8',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: 24,
  },
  input: {
    marginBottom: 18,
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 12,
    marginBottom: 20,
  },
  orText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    flex: 1,
    borderRadius: 12,
    justifyContent: 'center',
  },
  socialButtonContent: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
