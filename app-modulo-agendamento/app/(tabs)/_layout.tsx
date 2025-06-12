import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        let iconName: keyof typeof Ionicons.glyphMap = 'home';

        if (route.name === 'index') iconName = 'home';
        else if (route.name === 'pacientes') iconName = 'people';
        else if (route.name === 'profissionais') iconName = 'medkit';

        return {
          headerShown: route.name !== 'index',

          tabBarActiveTintColor: '#2563EB', // blue-600
          tabBarInactiveTintColor: '#9CA3AF', // gray-400
          tabBarStyle: {
            backgroundColor: '#F8FAFC', // slate-50
            borderTopWidth: 0.5,
            borderTopColor: '#E5E7EB', // gray-200
            height: 64,
            paddingBottom: 10,
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
        };
      }}
    />
  );
}
