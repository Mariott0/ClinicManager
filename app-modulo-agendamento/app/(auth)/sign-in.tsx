import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Text,
} from 'react-native';
import { TextInput, Button, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function SignIn() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '123') {
            router.replace('/page-manager');
        } else if (username === 'paciente' && password === '123') {
            router.replace('/page-patient');
        }
        else if (username === 'geral' && password === '123') {
            router.replace('/(tabs)');
        } else {
            Alert.alert('Erro', 'Usuário ou senha incorretos');
        }
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
                    <Text style={styles.subtitle}>Acesse sua conta</Text>

                    <TextInput
                        label="Usuário"
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

                    <Button
                        mode="contained"
                        onPress={handleLogin}
                        buttonColor="#2563EB"
                        textColor="#fff"
                        contentStyle={styles.buttonContent}
                        labelStyle={styles.buttonLabel}
                        style={styles.button}
                    >
                        Entrar
                    </Button>

                    <Button
                        mode="text"
                        onPress={() => router.push('/(auth)/sign-up')}
                        textColor="#2563EB"
                    >
                        Criar uma conta
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
