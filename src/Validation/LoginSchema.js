import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Invalid email")
    .required("Required"),
  password: yup
    .string("Enter your password")
    .min(6, "Min 6 char")
    .required("Required"),
});
