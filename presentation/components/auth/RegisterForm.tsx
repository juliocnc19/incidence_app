import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { InputRegister } from '../../../utils/types/InputRegister';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },
  scrollContainer: {
    height: "40%"
  },
  button: {
    marginBottom:10,
    padding: 19,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
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
    fontSize: 36,
    fontWeight: 500,
    textAlign: "center",
    color: "#555",
  },
  containerInput: {
    marginVertical: 12
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
})


const RegisterForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<InputRegister>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Controller
          control={control}
          name="first_name"
          rules={{ required: true }}
          render={({ field: { value, onBlur, onChange } }) => (
            <View style={styles.containerInput}>
              <Text style={styles.textLabel}>Nombre</Text>
              <TextInput
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        {errors.first_name && <Text style={styles.errorText}>Nombre is required.</Text>}
        <Controller
          control={control}
          name="last_name"
          rules={{ required: true }}
          render={({ field: { value, onBlur, onChange } }) => (
            <View style={styles.containerInput}>
              <Text style={styles.textLabel}>Apellido</Text>
              <TextInput
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        {errors.last_name && <Text>Apellidos is required.</Text>}
        <Controller
          control={control}
          name="username"
          rules={{ required: true }}
          render={({ field: { value, onBlur, onChange } }) => (
            <View style={styles.containerInput}>
              <Text style={styles.textLabel}>Nombre de usuario</Text>
              <TextInput
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />

            </View>
          )}
        />
        {errors.username && <Text style={styles.errorText}>Usuario is required.</Text>}
        <Controller
          control={control}
          name="email"
          rules={{ required: true, pattern: /^\S+@\S+$/i }}
          render={({ field: { value, onBlur, onChange } }) => (
            <View style={styles.containerInput}>
              <Text style={styles.textLabel}>Correo Electronico</Text>
              <TextInput
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        {errors.email && <Text style={styles.errorText}>Email is required and must be valid.</Text>}
        <Controller
          control={control}
          name="password"
          rules={{ required: true, minLength: 6 }}
          render={({ field: { value, onBlur, onChange } }) => (
            <View style={styles.containerInput}>
              <Text style={styles.textLabel}>Contraseña</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        {errors.password && <Text style={styles.errorText}>Password is required and must be at least 6 characters.</Text>}
        <Controller
          control={control}
          name="repet_password"
          rules={{ required: true, minLength: 6 }}
          render={({ field: { value, onBlur, onChange } }) => (
            <View style={styles.containerInput}>
              <Text style={styles.textLabel}>Repetir contraseña</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        {errors.repet_password && <Text style={styles.errorText}>{errors.repet_password.message}</Text>}
      </ScrollView>
      <Pressable onPress={handleSubmit(onSubmit)}
          style={({ pressed }) => [{
            backgroundColor: pressed ? "#016ee2" : "#007bff"
          },
          styles.button
          ]}
      >
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
    </View>
  );
};

export default RegisterForm
