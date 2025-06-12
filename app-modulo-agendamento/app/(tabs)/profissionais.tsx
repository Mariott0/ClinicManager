import { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { getProfissionais } from '@/lib/profissional';
import { useRouter } from 'expo-router';
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
    <View className="flex-1 bg-white px-4 py-2">
      <FlatList
        data={profissionais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfissionalCard
            profissional={item}
            onPress={() => router.push(`/profissional/${item.id}`)}
          />
        )}
        ItemSeparatorComponent={() => <View className="h-2" />}
      />
      <TouchableOpacity
        className="mt-6 bg-green-600 rounded-xl py-4 shadow-lg"
        onPress={() => router.push('/profissional/novo')}
      >
        <Text className="text-white text-center text-base font-semibold">
          Novo Profissional
        </Text>
      </TouchableOpacity>
    </View>
  );
}
