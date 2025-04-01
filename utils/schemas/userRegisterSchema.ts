import { z } from 'zod';

export const userRegisterSchema = z.object({
  first_name: z.string({ required_error: "Requerido" }).min(3, "El nombre debe tener al menos 3 caracteres"),
  last_name: z.string({ required_error: "Requerido" }).min(3, "El apellido debe tener al menos 3 caracteres"),
  email: z.string({ required_error: "Requerido" }).email("El correo electrónico no es válido"),
  password: z.string({ required_error: "Requerido" }).min(8, "La contraseña debe tener al menos 8 caracteres"),
  repet_password: z.string({ required_error: "Requerido" }),
  username: z.string({ required_error: "Requerido" }).min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
}).refine((data) => data.password === data.repet_password, {
  message: "Las contraseñas no coinciden",
  path: ["repet_password"],
});
