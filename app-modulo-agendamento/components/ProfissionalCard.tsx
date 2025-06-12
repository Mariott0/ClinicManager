import { View, Text, TouchableOpacity } from 'react-native';

export default function ProfissionalCard({ profissional, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} className="p-4 bg-gray-100 rounded mb-2">
      <Text className="text-lg font-bold">{profissional.nome}</Text>
      <Text>{profissional.especialidade}</Text>
    </TouchableOpacity>
  );
}