import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ConfiguracaoManager() {
    const router = useRouter();
    const [notificacoesAtivas, setNotificacoesAtivas] = React.useState(true);
    const [isDarkMode, setIsDarkMode] = React.useState(false); // Tema escuro

    const handleLogout = () => {
        router.replace('/(auth)/sign-in');
    };

    return (
        <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}>
            <IconButton
                icon="arrow-left"
                size={24}
                onPress={() => router.back()}
                style={styles.backButton}
                iconColor={isDarkMode ? '#fff' : '#000'}
            />

            <Text style={[styles.title, isDarkMode && { color: '#fff' }]}>Configurações</Text>

            <View style={[styles.card, isDarkMode && styles.darkCard]}>
                <Text style={[styles.sectionTitle, isDarkMode && { color: '#fff' }]}>Geral</Text>

                <TouchableOpacity style={styles.item}>
                    <MaterialIcons name="business" size={24} color="#1976d2" />
                    <Text style={[styles.itemText, isDarkMode && { color: '#fff' }]}>Nome da clínica</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <MaterialIcons name="language" size={24} color="#1976d2" />
                    <Text style={[styles.itemText, isDarkMode && { color: '#fff' }]}>Idioma (em breve)</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, isDarkMode && styles.darkCard]}>
                <Text style={[styles.sectionTitle, isDarkMode && { color: '#fff' }]}>Preferências</Text>

                <View style={styles.item}>
                    <MaterialIcons name="notifications" size={24} color="#1976d2" />
                    <Text style={[styles.itemText, isDarkMode && { color: '#fff' }]}>Notificações</Text>
                    <Switch
                        value={notificacoesAtivas}
                        onValueChange={setNotificacoesAtivas}
                        style={{ marginLeft: 'auto' }}
                    />
                </View>

                <View style={styles.item}>
                    <MaterialIcons name="dark-mode" size={24} color="#1976d2" />
                    <Text style={[styles.itemText, isDarkMode && { color: '#fff' }]}>Tema escuro</Text>
                    <Switch
                        value={isDarkMode}
                        onValueChange={setIsDarkMode}
                        style={{ marginLeft: 'auto' }}
                    />
                </View>
            </View>

            <View style={[styles.card, isDarkMode && styles.darkCard]}>
                <TouchableOpacity style={[styles.item, { justifyContent: 'flex-start' }]} onPress={handleLogout}>
                    <MaterialIcons name="logout" size={24} color="#dc2626" />
                    <Text style={[styles.itemText, { color: '#dc2626' }]}>Sair da conta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 32,
        paddingHorizontal: 24,
        backgroundColor: '#f9f9fb',
        flexGrow: 1,
    },
    darkContainer: {
        backgroundColor: '#121212',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 16,
        zIndex: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1976d2',
        textAlign: 'center',
        marginBottom: 32,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        elevation: 4,
    },
    darkCard: {
        backgroundColor: '#1e1e1e',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1976d2',
        marginBottom: 12,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        gap: 12,
    },
    itemText: {
        fontSize: 16,
        color: '#3333',
        fontWeight: '500',
    },
});
