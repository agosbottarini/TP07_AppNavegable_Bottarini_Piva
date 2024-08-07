"use client";
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
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
                placeholder='Nombre de usuario'
                value={usuario.nombre}
                onChangeText={texto => manejarCambio('nombre', texto)}
                style={styles.input}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Contraseña'
                    secureTextEntry={!mostrarContraseña}
                    value={usuario.contraseña}
                    onChangeText={texto => manejarCambio('contraseña', texto)}
                    style={[styles.input, styles.passwordInput]}
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

            
        </View>
    );
};

export default FormLogin;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: '#fff',
    },
    passwordInput: {
        flex: 1,
    },
    eyeIcon: {
        padding: 10,
    },
});
