import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { LoginInput } from '../../../utils/types/InputLogin';
import LinkRegister from './LinkRegister';
import { zodResolver } from '@hookform/resolvers/zod';
import { userLoginSchema } from '../../../utils/schemas/userLoginSchema';
import { backgroundColors, fontColors } from '../../theme/colors';
import { useLoginUser } from '../../hooks/useLoginUser';
import MessageError from './MessageError';

const FormLogin = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginInput>({
    resolver: zodResolver(userLoginSchema),
  });

  const { data, isPending, isError, mutate, error } = useLoginUser()

  const onSubmit = (input: LoginInput) => {
    mutate(input)
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO</Text>
      <View>
        <Controller
          control={control}
          name="email"
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
              {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            </View>
          )}
        />
        <Controller
          control={control}
          name="password"
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
              {errors.password && <Text style={styles.errorText}>{errors.email?.message}</Text>}
            </View>
          )}
        />
      </View>
      <View>
        {isError && <MessageError message={(error as any)?.response?.status == 401 ? "Credenciales invalidas" : error.message}/>}
        <Pressable onPress={handleSubmit(onSubmit)}
          style={({ pressed }) => [{
            backgroundColor: pressed ? backgroundColors.ternary : backgroundColors.secondary
          },
          styles.button
          ]}
        >
          {isPending ?
            <ActivityIndicator size={"small"} color={backgroundColors.primary} /> :
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          }
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
    color: fontColors.ternary,
    fontWeight: 500,
    textAlign: 'center',
  },
  input: {
    height: 55,
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: fontColors.secondary,
    marginVertical: 4
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    textAlign: "center",
    color: fontColors.secondary,
  },
  container: {
    width: "90%",
    marginTop: 10,
    flex: 1,
    justifyContent: "space-around",
    zIndex: 20
  },
  containerInput: {
    marginVertical: 17
  },
  textLabel: {
    fontSize: 16,
    fontWeight: 500,
    color: fontColors.secondary
  },
  errorText: {
    fontSize: 13,
    color: fontColors.error,
    fontWeight: 500
  },
});

export default FormLogin
