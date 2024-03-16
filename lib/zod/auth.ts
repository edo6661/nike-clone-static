import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  code: z.optional(z.string()),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
export const resolverLoginSchema = zodResolver(loginSchema);

export const registerSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address",
    }),
    name: z.string().min(2, {
      message: "Name is too short",
    }),
    password: z.string().min(6, {
      message: "Password is too short",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password is too short",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const resolverRegisterSchema = zodResolver(registerSchema);

export type RegisterSchemaType = z.infer<typeof registerSchema>;
