import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(8, {
        message: "8 characters minimum",
    }),
    // passwordConfirm: z.string().min(1, {
    //     message: "Confirm your password",
    // }),
    name: z.string().min(1, {
        message: "Name is required",
    }),
})