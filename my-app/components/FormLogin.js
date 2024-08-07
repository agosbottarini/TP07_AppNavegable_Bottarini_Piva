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

            <View>
            <TextInput
                style={styles.input}
                placeholder='Nombre de usuario'
                value={usuario.nombre}
                onChangeText={texto => manejarCambio('nombre', texto)}
            />
            </View>
            

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
            <TouchableOpacity>
                <Text style={styles.textoBoton}>LogIn</Text>
            </TouchableOpacity>

            
        </View>
    );
};

export default FormLogin;

const styles = StyleSheet.create({
    textoBoton: { 
        borderWidth: 1,
        borderColor: '#000', 
        borderRadius: 5, 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        backgroundColor: '#fff', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontSize: 16, 
        color: '#000', 
        width: 100,
        height: 40,
        width: '50%'
      },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: '15em',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10,
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
        marginBottom: 20,
        height: 45
    },
    passwordInput: {
        flex: 1,
    },
    eyeIcon: {
        padding: 10,
    },

});
