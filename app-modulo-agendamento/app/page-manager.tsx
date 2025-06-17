import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { IconButton, Provider as PaperProvider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/(auth)/sign-in');
  };

  return (
    <PaperProvider>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.managerName}>Nathan Mariotto</Text>
            <Text style={styles.clinicName}>FB Odontologia</Text>
          </View>
          <MaterialIcons name="business" size={56} color="#60A5FA" />
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <MaterialIcons name="event-available" size={36} color="#4caf50" />
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Consultas hoje</Text>
          </View>
          <View style={styles.statCard}>
            <MaterialIcons name="assignment-late" size={36} color="#fbc02d" />
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Pendentes</Text>
          </View>
          <View style={styles.statCard}>
            <MaterialIcons name="people" size={36} color="#2563EB" />
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Funcionários ativos</Text>
          </View>
        </View>

        {/* Próximas consultas */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Próximas consultas</Text>
          <View style={styles.appointmentItem}>
            <MaterialIcons name="event-note" size={28} color="#2563EB" />
            <View style={styles.appointmentInfo}>
              <Text style={styles.patientName}>Paciente A</Text>
              <Text style={styles.appointmentDetails}>10:30 com Dr(a). Nome</Text>
            </View>
          </View>
          <View style={styles.appointmentItem}>
            <MaterialIcons name="event-note" size={28} color="#2563EB" />
            <View style={styles.appointmentInfo}>
              <Text style={styles.patientName}>Paciente B</Text>
              <Text style={styles.appointmentDetails}>11:00 com Dr(a). Nome</Text>
            </View>
          </View>
        </View>

        {/* Ações rápidas */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Ações rápidas</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.push('/paciente/pacientes')}
            >
              <MaterialIcons name="manage-accounts" size={36} color="#2563EB" />
              <Text style={styles.actionText}>Pacientes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.push('/profissional/profissionais')}>
              <MaterialIcons name="group" size={36} color="#2563EB" />
              <Text style={styles.actionText}>Profissionais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.push('/configuracao-manager')}
            >
              <MaterialIcons name="settings" size={36} color="#2563EB" />
              <Text style={styles.actionText}>Configurações</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#f9f9fb',
    paddingBottom: 100,
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 16,
    zIndex: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 20,
  },
  managerName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
  },
  clinicName: {
    fontSize: 16,
    color: '#444',
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    gap: 12,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2563EB',
    marginTop: 12,
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
    textAlign: 'center',
  },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#2563EB',
  },
  appointmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  appointmentInfo: {
    marginLeft: 16,
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 2,
  },
  appointmentDetails: {
    fontSize: 14,
    color: '#5555',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    backgroundColor: '#e3f2fd',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  actionText: {
    marginTop: 8,
    fontSize: 16,
    color: '#2563EB',
    fontWeight: '600',
    textAlign: 'center',
  },
});
