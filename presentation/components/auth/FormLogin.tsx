import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { LoginInput } from '../../../utils/types/InputLogin';
import LinkRegister from './LinkRegister';


const FormLogin = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginInput>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO</Text>
      <View>
        <Controller
          control={control}
          name="email"
          rules={{ required: true, pattern: /^\S+@\S+$/i }}
          render={({ field: { value, onBlur, onChange } }) => (
            <View
              style={styles.containerInput}
            >
              <Text style={styles.textLabel}>Email</Text>
              <TextInput
                style={styles.input}
                autoComplete='email'
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        {errors.email && <Text style={styles.errorText}>El correo es requerido y debe ser valido</Text>}
        <Controller
          control={control}
          name="password"
          rules={{ required: true, minLength: 6 }}
          render={({ field: { value, onBlur, onChange } }) => (
            <View
              style={styles.containerInput}
            >
              <Text style={styles.textLabel}>Contraseña</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={value}
                autoComplete='password'
                onBlur={onBlur}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        {errors.password && <Text style={styles.errorText}>La contraseña es requerida y debe tener al menos 6 caracteres</Text>}
      </View>
      <View>
        <Pressable onPress={handleSubmit(onSubmit)}
          style={({ pressed }) => [{
            backgroundColor: pressed ? "#016ee2" : "#007bff"
          },
          styles.button
          ]}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </Pressable>
        <LinkRegister />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 19,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 500,
    textAlign: 'center',
  },
  input: {
    height: 55,
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#666",
    marginVertical: 4
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    textAlign: "center",
    color: "#fff",
  },
  container: {
    width: "90%",
    marginTop: 10,
    flex: 1,
    justifyContent: "space-around",
    zIndex: 20
  },
  containerInput: {
    marginVertical: 15
  },
  textLabel: {
    fontSize: 16,
    fontWeight: 500,
    color: "#666"
  },
  errorText: {
    fontSize: 13,
    color: "#c00",
    fontWeight: 500
  },
});

export default FormLogin
