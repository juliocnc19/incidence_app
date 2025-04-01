import { z } from 'zod';

export const userLoginSchema = z.object({
  email: z.string({ required_error: "Requerido" }).email('Correo inválido'),
  password: z.string({ required_error: "Requerido" }).min(8, 'La contraseña debe tener al menos 8 caracteres'),
});
