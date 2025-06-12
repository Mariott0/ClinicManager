import React from 'react';
import { StatusBar } from 'react-native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Stack
        initialRouteName="(auth)/sign-in"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2563EB',
          },
          headerShown: false,
          headerTintColor: '#fff',
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
