import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity,
    ScrollView,
    Pressable,
    Platform,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ConfiguracaoManager() {
    const router = useRouter();
    const [notificacoesAtivas, setNotificacoesAtivas] = React.useState(true);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const handleLogout = () => {
        router.replace('/(auth)/sign-in');
    };

    return (
        <ScrollView
            contentContainerStyle={[
                styles.container,
                isDarkMode && styles.darkContainer,
            ]}
            keyboardShouldPersistTaps="handled"
        >
            {/* Cabeçalho com botão de voltar */}
            <View style={styles.header}>
                <IconButton
                    icon="arrow-left"
                    size={28}
                    onPress={() => router.back()}
                    iconColor={isDarkMode ? '#fff' : '#000'}
                    accessibilityLabel="Voltar"
                />
                <Text style={[styles.title, isDarkMode && styles.darkTitle]}>
                    Configurações
                </Text>
            </View>

            {/* Geral */}
            <View style={[styles.card, isDarkMode && styles.darkCard]}>
                <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>
                    Geral
                </Text>

                <TouchableOpacity
                    style={styles.item}
                    activeOpacity={0.7}
                    accessibilityRole="button"
                    accessibilityLabel="Nome da clínica"
                >
                    <MaterialIcons name="business" size={26} color="#1976d2" />
                    <Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>
                        Nome da clínica
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.item}
                    activeOpacity={0.7}
                    accessibilityRole="button"
                    accessibilityLabel="Idioma (em breve)"
                >
                    <MaterialIcons name="language" size={26} color="#1976d2" />
                    <Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>
                        Idioma (em breve)
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Próxima consulta */}
            <View style={[styles.card, isDarkMode && styles.darkCard]}>
                <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>
                    Registro da próxima consulta
                </Text>
                <Text style={[styles.itemText, isDarkMode ? styles.darkSubText : styles.subText]}>
                    Você não possui uma próxima consulta agendada.
                </Text>
            </View>

            {/* Preferências */}
            <View style={[styles.card, isDarkMode && styles.darkCard]}>
                <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>
                    Preferências
                </Text>

                <View style={styles.item}>
                    <MaterialIcons name="notifications" size={26} color="#1976d2" />
                    <Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>
                        Notificações
                    </Text>
                    <Switch
                        value={notificacoesAtivas}
                        onValueChange={setNotificacoesAtivas}
                        thumbColor={Platform.OS === 'android' ? (notificacoesAtivas ? '#2563EB' : '#ccc') : undefined}
                        trackColor={{ false: '#767577', true: '#a5c8ff' }}
                        style={{ marginLeft: 'auto' }}
                        accessibilityLabel="Ativar ou desativar notificações"
                    />
                </View>

                <View style={styles.item}>
                    <MaterialIcons name="dark-mode" size={26} color="#1976d2" />
                    <Text style={[styles.itemText, isDarkMode && styles.darkItemText]}>
                        Tema escuro
                    </Text>
                    <Switch
                        value={isDarkMode}
                        onValueChange={setIsDarkMode}
                        thumbColor={Platform.OS === 'android' ? (isDarkMode ? '#2563EB' : '#ccc') : undefined}
                        trackColor={{ false: '#767577', true: '#a5c8ff' }}
                        style={{ marginLeft: 'auto' }}
                        accessibilityLabel="Ativar ou desativar tema escuro"
                    />
                </View>
            </View>

            {/* Logout */}
            <View style={[styles.card, isDarkMode && styles.darkCard]}>
                <Pressable
                    onPress={handleLogout}
                    android_ripple={{ color: '#fcdcdc' }}
                    style={({ pressed }) => [
                        styles.item,
                        { justifyContent: 'flex-start' },
                        pressed && { backgroundColor: isDarkMode ? '#330000' : '#fcdcdc' },
                    ]}
                    accessibilityRole="button"
                    accessibilityLabel="Sair da conta"
                >
                    <MaterialIcons name="logout" size={26} color="#dc2626" />
                    <Text style={[styles.itemText, { color: '#dc2626' }]}>Sair da conta</Text>
                </Pressable>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1976d2',
        marginLeft: 12,
    },
    darkTitle: {
        color: '#bbdefb',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
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
    darkSectionTitle: {
        color: '#90caf9',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        gap: 14,
    },
    itemText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    darkItemText: {
        color: '#eee',
    },
    subText: {
        color: '#555',
        fontSize: 16,
    },
    darkSubText: {
        color: '#bbb',
        fontSize: 16,
    },
});
