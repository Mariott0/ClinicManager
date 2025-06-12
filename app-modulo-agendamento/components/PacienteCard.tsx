import { View, Text, TouchableOpacity } from 'react-native';

export default function PacienteCard({ paciente, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} className="p-4 bg-gray-100 rounded mb-2">
      <Text className="text-lg font-bold">{paciente.nome}</Text>
      <Text>{paciente.cpf}</Text>
    </TouchableOpacity>
  );
}