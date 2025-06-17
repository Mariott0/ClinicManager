import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {
  Provider as PaperProvider,
  TextInput,
  Button,
  Text,
} from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { getProfissionais } from '@/lib/profissional';
import { useRouter } from 'expo-router'; // ✅ importar o router

export default function Agendar() {
  const router = useRouter(); // ✅ instanciar router
  const [profissionais, setProfissionais] = useState([]);
  const [profissionalSelecionado, setProfissionalSelecionado] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [motivo, setMotivo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarProfissionais() {
      try {
        const resposta = await getProfissionais();
        setProfissionais(resposta);
      } catch (erro) {
        Alert.alert('Erro', 'Não foi possível carregar os profissionais.');
      } finally {
        setLoading(false);
      }
    }

    carregarProfissionais();
  }, []);

  const handleAgendar = () => {
    if (!profissionalSelecionado || !data || !hora || !motivo) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Consulta Agendada!', 'Você receberá um lembrete em breve.');
    setProfissionalSelecionado('');
    setData('');
    setHora('');
    setMotivo('');
  };

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* ✅ Botão de voltar */}
        <Button
          onPress={() => router.back()}
          textColor="#2563EB"
          labelStyle={{ fontSize: 14 }}
          style={styles.backButton}
        >
          ⬅ Voltar
        </Button>

        <Text style={styles.title}>Agendar Consulta</Text>

        <TextInput
          label="Nome do Paciente"
          mode="outlined"
          value="Nathan Mariotto"
          disabled
          style={styles.input}
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Profissional</Text>
          {loading ? (
            <ActivityIndicator size="small" color="#2563eb" style={{ padding: 10 }} />
          ) : (
            <Picker
              selectedValue={profissionalSelecionado}
              onValueChange={(itemValue) => setProfissionalSelecionado(itemValue)}
              style={Platform.OS === 'ios' ? styles.pickerIOS : styles.pickerAndroid}
            >
              <Picker.Item label="Selecione um profissional" value="" />
              {profissionais.map((prof: any) => (
                <Picker.Item key={prof.id} label={prof.nome} value={prof.id} />
              ))}
            </Picker>
          )}
        </View>

        <TextInput
          label="Data (ex: 20/06/2025)"
          mode="outlined"
          value={data}
          onChangeText={setData}
          style={styles.input}
        />
        <TextInput
          label="Hora (ex: 14:30)"
          mode="outlined"
          value={hora}
          onChangeText={setHora}
          style={styles.input}
        />
        <TextInput
          label="Motivo da Consulta"
          mode="outlined"
          value={motivo}
          onChangeText={setMotivo}
          multiline
          numberOfLines={4}
          style={[styles.input, { height: 120 }]}
        />

        <Button
          mode="contained"
          onPress={handleAgendar}
          buttonColor="#2563EB"
          textColor="#fff"
          contentStyle={{ paddingVertical: 10 }}
          labelStyle={{ fontSize: 16 }}
          style={styles.button}
        >
          Confirmar Agendamento
        </Button>
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1d4ed8',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  pickerContainer: {
    marginBottom: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    overflow: 'hidden',
  },
  pickerLabel: {
    fontSize: 14,
    color: '#475569',
    padding: 8,
    backgroundColor: '#f1f5f9',
  },
  pickerAndroid: {
    height: 50,
    width: '100%',
  },
  pickerIOS: {
    height: 200,
    width: '100%',
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
  },
});
