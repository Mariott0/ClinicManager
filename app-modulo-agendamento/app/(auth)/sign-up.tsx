import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Text,
    Alert,
} from 'react-native';
import { TextInput, Button, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function SignUp() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        Alert.alert('Cadastro', 'Conta criada com sucesso!');
        router.replace('/(auth)/sign-in');
    };

    return (
        <PaperProvider>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Clinic<Text style={styles.highlight}>Manager</Text>
                    </Text>
                    <Text style={styles.subtitle}>Crie sua conta</Text>

                    <TextInput
                        label="Usuário"
                        mode="outlined"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                        theme={{ colors: { primary: '#2563EB' } }}
                    />
                    <TextInput
                        label="E-mail"
                        mode="outlined"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                        theme={{ colors: { primary: '#2563EB' } }}
                    />
                    <TextInput
                        label="Senha"
                        mode="outlined"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                        theme={{ colors: { primary: '#2563EB' } }}
                    />
                    <TextInput
                        label="Confirmar Senha"
                        mode="outlined"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                        theme={{ colors: { primary: '#2563EB' } }}
                    />
                    <Button
                        mode="contained"
                        onPress={handleRegister}
                        buttonColor="#2563EB"
                        textColor="#fff"
                        contentStyle={styles.buttonContent}
                        labelStyle={styles.buttonLabel}
                        style={styles.button}
                    >
                        Cadastrar
                    </Button>

                    <Button
                        mode="text"
                        onPress={() => router.replace('/(auth)/sign-in')}
                        textColor="#2563EB"
                    >
                        Já tenho conta
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        gap: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: '800',
        color: '#1D4ED8',
        textAlign: 'center',
    },
    highlight: {
        color: '#60A5FA',
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 22,
    },
    input: {
        width: '100%',
        color: '#1D4ED8'
    },
    button: {
        width: '100%',
        borderRadius: 10,
        marginTop: 10,
    },
    buttonContent: {
        paddingVertical: 8,
    },
    buttonLabel: {
        fontSize: 15,
    },
});
