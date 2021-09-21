import * as yup from "yup";

export const ProjectSchema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  sdm: yup.string().required("Required"),
  manager: yup.string().required("Required"),
});
