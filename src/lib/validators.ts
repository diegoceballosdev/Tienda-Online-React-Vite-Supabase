import { z } from 'zod';

// Schema de validación para el formulario de registro:
export const userRegisterSchema = z.object({
    email: z.string().email('El correo electrónico no es válido'),
    password: z
        .string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    fullName: z.string().min(1, 'El nombre completo es requerido'),
    phone: z.string().optional(),
});

// Schema de validación para el formulario de dirección:
export const addressSchema = z.object({
    addressLine1: z
        .string()
        .min(1, 'La dirección es requerida')
        .max(100, 'La dirección no debe exceder los 100 carácteres'),
    addressLine2: z
        .string()
        .max(100, 'La dirección no debe exceder los 100 carácteres')
        .optional(),
    city: z
        .string()
        .min(1, 'La ciudad es requerida')
        .max(50, 'La ciudad no debe exceder los 50 carácteres'),
    state: z
        .string()
        .min(1, 'El estado es requerido')
        .max(50, 'El estado no debe exceder los 50 carácteres'),
    postalCode: z
        .string()
        .min(1, 'El codigo postal es requerido')
        .max(10, 'El código postal no debe exceder los 10 carácteres'),
    country: z.string().min(1, 'El país es requerido'),
});

// Tipo inferido del formulario de registro de usuario:
export type UserRegisterFormValues = z.infer<typeof userRegisterSchema>;

// Tipo inferido del formulario de dirección:
export type AddressFormValues = z.infer<typeof addressSchema>;