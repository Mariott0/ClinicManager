// PatientHomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface PatientHomeScreenProps {
  patientName: string;
  nextAppointment: {
    date: string;
    dentistName: string;
    clinicLocation: string;
  } | null;
}

const PatientHomeScreen: React.FC<PatientHomeScreenProps> = ({
  patientName,
  nextAppointment,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.patientName}>Nathan Mariotto</Text>
        </View>
        <Image
          source={{ uri: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6565025b-409e-4809-80ba-92b62aeb0683.png' }}
          accessible
          accessibilityLabel="Imagem do perfil do paciente"
          style={styles.avatar}
          onError={() => { }}
        />
      </View>

      {/* Next Appointment */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Próxima consulta</Text>
        {nextAppointment ? (
          <View style={styles.appointmentCard}>
            <MaterialIcons name="event" size={32} color="#4caf50" />
            <View style={styles.appointmentInfo}>
              <Text style={styles.appointmentDate}>
                {new Date(nextAppointment.date).toLocaleDateString('pt-BR', {
                  weekday: 'long',
                  day: '2-digit',
                  month: 'long',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
              <Text style={styles.appointmentDetails}>Odontologista: {nextAppointment.dentistName}</Text>
              <Text style={styles.appointmentDetails}>Local: {nextAppointment.clinicLocation}</Text>
            </View>
          </View>
        ) : (
          <Text style={styles.noAppointment}>Nenhuma consulta agendada</Text>
        )}
      </View>

      {/* Quick Actions */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Ações rápidas</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionButton} accessible accessibilityRole="button" accessibilityLabel="Agendar uma nova consulta">
            <MaterialIcons name="add-circle-outline" size={36} color="#2563EB" />
            <Text style={styles.actionText}>Agendar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} accessible accessibilityRole="button" accessibilityLabel="Ver seus prontuários e histórico">
            <MaterialIcons name="folder-open" size={36} color="#2563EB" />
            <Text style={styles.actionText}>Prontuários</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} accessible accessibilityRole="button" accessibilityLabel="Ver dicas de saúde bucal">
            <MaterialIcons name="lightbulb-outline" size={36} color="#2563EB" />
            <Text style={styles.actionText}>Dicas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} accessible accessibilityRole="button" accessibilityLabel="Entrar em contato com seu dentista">
            <MaterialIcons name="chat-bubble-outline" size={36} color="#2563EB" />
            <Text style={styles.actionText}>Contato</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dental Tips Preview */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Dicas para um sorriso saudável</Text>
        <Text style={styles.tipText}>
          Escove os dentes pelo menos 2 vezes ao dia, use fio dental diariamente, e visite seu dentista regularmente para manter um sorriso saudável e bonito.
        </Text>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#f9f9fb',
    minHeight: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  greeting: {
    fontSize: 18,
    color: '#555',
    fontFamily: 'System',
  },
  patientName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    fontFamily: 'System',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ddd',
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
    fontFamily: 'System',
  },
  appointmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  appointmentInfo: {
    marginLeft: 16,
    flex: 1,
  },
  appointmentDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4caf50',
    marginBottom: 8,
    fontFamily: 'System',
  },
  appointmentDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    fontFamily: 'System',
  },
  noAppointment: {
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic',
    fontFamily: 'System',
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
    fontFamily: 'System',
    textAlign: 'center',
  },
  tipText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    fontFamily: 'System',
  },
});

export default PatientHomeScreen;

