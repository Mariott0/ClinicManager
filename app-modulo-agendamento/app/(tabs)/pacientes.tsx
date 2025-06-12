import { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { getPacientes } from '@/lib/paciente';
import { useRouter } from 'expo-router';
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
    <View className="flex-1 bg-white px-4 py-2">
      <FlatList
        data={pacientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PacienteCard
            paciente={item}
            onPress={() => router.push(`/paciente/${item.id}`)}
          />
        )}
        ItemSeparatorComponent={() => <View className="h-2" />}
      />
      <TouchableOpacity
        className="mt-6 bg-blue-600 rounded-xl py-4 shadow-lg"
        onPress={() => router.push('/paciente/novo')}
      >
        <Text className="text-white text-center text-base font-semibold">
          Novo Paciente
        </Text>
      </TouchableOpacity>
    </View>
  );
}
