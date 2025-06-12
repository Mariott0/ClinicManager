import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        type IconName = 'home' | 'people' | 'medkit';
        let iconName: IconName = 'home';

        if (route.name === 'index') iconName = 'home';
        else if (route.name === 'pacientes') iconName = 'people';
        else if (route.name === 'profissionais') iconName = 'medkit';

        return {
          headerShown: true,
          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: '#9ca3af',
          tabBarStyle: {
            backgroundColor: '#f8fafc',
            borderTopWidth: 0.5,
            height: 60,
            paddingBottom: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
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
