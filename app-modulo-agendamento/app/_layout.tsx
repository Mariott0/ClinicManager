import React from 'react';
import { StatusBar } from 'react-native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2563EB', // azul consistente
          },
          headerShown: false,
          headerTintColor: '#fff', // cor do texto/botões no header
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 18,
          },
          contentStyle: {
            backgroundColor: '#ffffff',
          },
        }}
      />
    </>
  );
}
