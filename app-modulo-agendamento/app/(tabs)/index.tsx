import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <Text className="text-3xl font-bold text-blue-600 text-center mb-2">
        Bem-vindo à Clínica
      </Text>
      <Text className="text-base text-gray-600 text-center">
        Gerencie pacientes e profissionais com facilidade.
      </Text>
    </View>
  );
}
