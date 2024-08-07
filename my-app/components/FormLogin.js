"use client";
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const FormLogin = () => {
    const [usuario, setUsuario] = useState({ nombre: '', contraseña: '' });
    const [mostrarContraseña, setMostrarContraseña] = useState(false);

    const manejarCambio = (campo, valor) => {
        setUsuario(prevUsuario => ({
            ...prevUsuario,
            [campo]: valor
        }));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Nombre de usuario'
                value={usuario.nombre}
                onChangeText={texto => manejarCambio('nombre', texto)}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Contraseña'
                    secureTextEntry={!mostrarContraseña}
                    value={usuario.contraseña}
                    onChangeText={texto => manejarCambio('contraseña', texto)}
                    style={styles.passwordInput}
                />
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setMostrarContraseña(!mostrarContraseña)}
                >
                    <Ionicons
                        name={mostrarContraseña ? 'eye-off' : 'eye'}
                        size={24}
                        color="grey"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.boton}>
                <Text style={styles.textoBoton}>LogIn</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
                <Text style={styles.dividerText}>o</Text>
            </View>

            <TouchableOpacity style={styles.linkContainer}>
                <Text style={styles.linkText}>No tenes cuenta? Registrate</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FormLogin;

const styles = StyleSheet.create({
    textoBoton: { 
        borderRadius: 5, 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        fontSize: 16, 
        color: '#fff', 
        textAlign: 'center',
        width: '100%'
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 20,
        height: 45,
        width: '100%',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 20,
        height: 45,
        width: '100%',
    },
    passwordInput: {
        flex: 1,
        padding: 10,
    },
    eyeIcon: {
        padding: 10,
    },
    boton: {
        backgroundColor: '#28a745',
        borderRadius: 5,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    linkText: {
        color: '#0366d6',
        textAlign: 'center',
    },
    dividerContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dividerText: {
        color: '#666',
        fontSize: 16,
        textAlign: 'center',
    },
});
