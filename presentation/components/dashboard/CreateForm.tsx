import { View, TextInput, Text, StyleSheet, ScrollView, Pressable } from "react-native"
import { incidentSchema } from "../../../utils/schemas/incidentCreate";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputIncident } from "../../../utils/types/InputIncident";
import { useForm, Controller } from "react-hook-form";
import { backgroundColors, fontColors } from "../../theme/colors";


const CreateForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<InputIncident>({
    resolver: zodResolver(incidentSchema)
  });

  const onSubmit = async (data: InputIncident) => {
    console.log(data)
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Controller
          control={control}
          name="title"
          render={({ field: { value, onBlur, onChange } }) => (
            <View style={styles.containerInput}>
              <Text style={styles.textLabel}>Tipo</Text>
              <TextInput
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
              {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}
            </View>
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { value, onBlur, onChange } }) => (
            <View style={styles.containerInput}>
              <Text style={styles.textLabel}>Descripcion</Text>
              <TextInput
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
              {errors.description && <Text style={styles.errorText}>{errors.description.message}</Text>}
            </View>
          )}
        />
      </ScrollView>
      <Pressable onPress={handleSubmit(onSubmit)}
        style={({ pressed }) => [{
          backgroundColor: pressed ? backgroundColors.ternary : backgroundColors.secondary
        },
        styles.button
        ]}
      >
        <Text style={styles.buttonText}>Crear Incidencia</Text>
      </Pressable>
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },
  scrollContainer: {
    height: "40%"
  },
  button: {
    marginBottom: 10,
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
    marginTop: 2
  },
  title: {
    fontSize: 36,
    fontWeight: 500,
    textAlign: "center",
    color: fontColors.secondary,
  },
  containerInput: {
    marginVertical: 10
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
})


export default CreateForm
