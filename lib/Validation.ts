import z from "zod";

export const UserFormValidation = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50, {
      message: "Username must be at most 50 characters.",
    }),

  email: z.string().email("Please enter a valid email address."),

  phone: z.string().refine((phone) => /^\+?[1-9]\d{1,14}$/.test(phone), {
    message: "Please enter a valid phone number.",
  }),
});
